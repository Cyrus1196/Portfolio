(function () {
  const data = CREATIVE;
  const isTouch = matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
  if (isTouch) document.body.classList.add("is-touch");

  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.dataset.field;
    if (!data[key]) return;
    if (el.dataset.src !== undefined) {
      el.src = data[key];
      el.alt = `${data.fullName}`;
    } else if (el.dataset.link !== undefined) {
      el.href = data[key];
    } else if (el.dataset.mailto !== undefined) {
      el.href = `mailto:${data.email}`;
      el.textContent = data.email;
    } else {
      el.textContent = data[key];
    }
  });

  // Ticker
  const ticker = document.getElementById("ticker");
  if (ticker) {
    const bits = [
      ...data.skills,
      "Cagayan de Oro",
      "Internship open",
      data.network,
      "Toon energy",
      ...data.skills,
      "Cagayan de Oro",
      "Internship open",
      data.network,
      "Toon energy",
    ];
    ticker.innerHTML = bits.map((b) => `<span>${b}</span>`).join("");
  }

  // Episodes row — multi-card strip, click › / ‹, true infinite loop
  const track = document.getElementById("reel-track");
  const prevBtn = document.querySelector(".ep-nav--prev");
  const nextBtn = document.querySelector(".ep-nav--next");

  if (track && data.projects.length) {
    const makeCard = (p, i) => {
      const ep = `EP ${String(i + 1).padStart(2, "0")}`;
      const card = document.createElement("article");

      if (p.blank) {
        card.className = "reel-card reel-card--blank";
        card.innerHTML = `
          <div class="reel-card-media reel-card-media--blank">
            <span class="reel-num">${ep}</span>
            <div class="blank-plus" aria-hidden="true">+</div>
          </div>
          <div class="reel-card-body">
            <p class="reel-kind reel-kind--blank">Coming soon</p>
            <h3>Empty slot</h3>
            <p class="reel-blurb">Add this episode in <code>content.js</code> — replace the blank entry with your project.</p>
          </div>
        `;
      } else {
        const links = [];
        if (p.links?.live && p.links.live !== "#") {
          links.push(`<a href="${p.links.live}" target="_blank" rel="noopener noreferrer">Live</a>`);
        }
        if (p.links?.repo && p.links.repo !== "#") {
          links.push(`<a href="${p.links.repo}" target="_blank" rel="noopener noreferrer">Code</a>`);
        }

        card.className = "reel-card";
        card.innerHTML = `
          <div class="reel-card-media">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <span class="reel-num">${ep}</span>
          </div>
          <div class="reel-card-body">
            <p class="reel-kind">${p.kind}</p>
            <h3>${p.title}</h3>
            <p class="reel-blurb">${p.blurb}</p>
            <ul class="reel-tools">${(p.tools || []).map((t) => `<li>${t}</li>`).join("")}</ul>
            ${links.length ? `<div class="reel-links">${links.join("")}</div>` : ""}
          </div>
        `;
      }

      return card;
    };

    // Triple the list so left/right can loop forever without empty gaps
    const total = data.projects.length;
    for (let round = 0; round < 3; round += 1) {
      data.projects.forEach((p, i) => track.appendChild(makeCard(p, i)));
    }

    // Start on the middle copy so we can go left into EP 01's previous cycle
    let index = total;
    let locked = false;

    const stepPx = () => {
      const card = track.querySelector(".reel-card");
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const setX = (i, animate) => {
      track.style.transition = animate ? "" : "none";
      track.style.transform = `translateX(-${i * stepPx()}px)`;
      if (!animate) {
        // force reflow so next animated move works
        void track.offsetWidth;
        track.style.transition = "";
      }
    };

    const normalize = () => {
      if (index < total) {
        index += total;
        setX(index, false);
      } else if (index >= total * 2) {
        index -= total;
        setX(index, false);
      }
    };

    const go = (delta) => {
      if (locked || !total) return;
      locked = true;
      index += delta;
      setX(index, true);

      const onEnd = (e) => {
        if (e.propertyName !== "transform") return;
        track.removeEventListener("transitionend", onEnd);
        normalize();
        locked = false;
      };
      track.addEventListener("transitionend", onEnd);
      // fallback if transitionend doesn't fire
      setTimeout(() => {
        if (!locked) return;
        normalize();
        locked = false;
      }, 500);
    };

    prevBtn?.addEventListener("click", () => go(-1));
    nextBtn?.addEventListener("click", () => go(1));

    window.addEventListener("resize", () => setX(index, false));

    document.addEventListener("keydown", (e) => {
      const section = document.getElementById("episodes");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    });

    setX(index, false);
  }

  const facts = document.getElementById("facts");
  data.facts.forEach(({ label, value }) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    facts.appendChild(li);
  });

  const skills = document.getElementById("skill-cloud");
  data.skills.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    skills.appendChild(li);
  });

  const social = document.getElementById("social");
  data.social.forEach(({ label, url }) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    social.appendChild(li);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const burger = document.querySelector(".burger");
  const panel = document.getElementById("panel");
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
    document.body.style.overflow = open ? "" : "hidden";
  });
  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      panel.hidden = true;
      document.body.style.overflow = "";
    });
  });

  // Cursor
  const cursor = document.querySelector(".cursor");
  if (!isTouch && cursor && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
    }, { passive: true });
    const loop = () => {
      cx += (x - cx) * 0.25;
      cy += (y - cy) * 0.25;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll("a, button, .reel-card").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hot"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hot"));
    });
  }
})();
