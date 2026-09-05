(function () {
  const data = PORTFOLIO;

  // Simple text fields
  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.dataset.field;
    if (!data[key]) return;

    if (el.dataset.src !== undefined) {
      el.src = data[key];
      el.alt = `${data.fullName} profile photo`;
    } else if (el.dataset.link !== undefined) {
      el.href = data[key];
      if (data[key] === "#") el.setAttribute("aria-disabled", "true");
    } else if (el.dataset.mailto !== undefined) {
      el.href = `mailto:${data.email}`;
      el.textContent = data.email;
    } else {
      el.textContent = data[key];
    }
  });

  // Typing animation for hero name
  const typedName = document.getElementById("typed-name");
  if (typedName && data.fullName) {
    typedName.setAttribute("aria-label", data.fullName);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      typedName.textContent = data.fullName;
    } else {
      const cursor = document.createElement("span");
      cursor.className = "typing-cursor";
      cursor.setAttribute("aria-hidden", "true");
      typedName.appendChild(cursor);

      let index = 0;
      const typeNext = () => {
        if (index < data.fullName.length) {
          typedName.insertBefore(document.createTextNode(data.fullName[index]), cursor);
          index += 1;
          setTimeout(typeNext, index === 1 ? 400 : 65 + Math.random() * 35);
        } else {
          cursor.classList.add("is-done");
        }
      };

      setTimeout(typeNext, 600);
    }
  }

  // Social links
  const socialList = document.getElementById("social-links");
  data.social.forEach(({ label, url }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    li.appendChild(a);
    socialList.appendChild(li);
  });

  // About details
  const detailsList = document.getElementById("about-details");
  data.details.forEach(({ label, value }) => {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = value;
    detailsList.append(dt, dd);
  });

  // Skills
  const skillsGrid = document.getElementById("skills-grid");
  data.skills.forEach(({ category, items }, index) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    card.style.transitionDelay = `${index * 70 + 150}ms`;
    card.innerHTML = `
      <h3>${category}</h3>
      <ul class="skill-tags">${items.map((s) => `<li>${s}</li>`).join("")}</ul>
    `;
    skillsGrid.appendChild(card);
  });

  // Projects
  const projectsList = document.getElementById("projects-list");
  data.projects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = `project-card${project.featured ? " project-featured" : ""}`;
    article.style.transitionDelay = `${index * 100 + 150}ms`;

    const links = [];
    if (project.links?.live && project.links.live !== "#") {
      links.push(`<a href="${project.links.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>`);
    }
    if (project.links?.repo && project.links.repo !== "#") {
      links.push(`<a href="${project.links.repo}" target="_blank" rel="noopener noreferrer">Source Code</a>`);
    }

    article.innerHTML = `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title} preview" loading="lazy">
        <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="project-body">
        <header class="project-header">
          <h3>${project.title}</h3>
          <span class="project-role">${project.role}</span>
        </header>
        <p class="project-objective">${project.objective}</p>
        <ul class="project-tools">${project.tools.map((t) => `<li>${t}</li>`).join("")}</ul>
        <p class="project-outcome"><strong>Outcome:</strong> ${project.outcome}</p>
        ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
      </div>
    `;
    projectsList.appendChild(article);
  });

  // Education
  const educationList = document.getElementById("education-list");
  data.education.forEach((entry, index) => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.style.transitionDelay = `${index * 100 + 150}ms`;
    article.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <time>${entry.period}</time>
        <h3>${entry.degree}</h3>
        <p class="timeline-school">${entry.school}</p>
        <ul>${entry.details.map((d) => `<li>${d}</li>`).join("")}</ul>
      </div>
    `;
    educationList.appendChild(article);
  });

  // Certificates
  const certList = document.getElementById("certificates-list");
  data.certificates.forEach((cert, index) => {
    const article = document.createElement("article");
    article.className = "cert-card";
    article.style.transitionDelay = `${index * 80 + 150}ms`;
    const link =
      cert.url && cert.url !== "#"
        ? `<a href="${cert.url}" target="_blank" rel="noopener noreferrer">Verify</a>`
        : "";
    article.innerHTML = `
      <span class="cert-date">${cert.date}</span>
      <h3>${cert.name}</h3>
      <p>${cert.issuer}</p>
      ${link}
    `;
    certList.appendChild(article);
  });

  // Contact
  const contactList = document.getElementById("contact-list");
  [
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    ...data.social.map((s) => ({ label: s.label, value: s.url.replace(/^https?:\/\//, ""), href: s.url })),
  ].forEach(({ label, value, href }) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${label}</span><a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${value}</a>`;
    contactList.appendChild(li);
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const root = document.documentElement;

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });

  // Header scroll state
  const header = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => header.classList.toggle("is-scrolled", window.scrollY > 24),
    { passive: true }
  );

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Active nav link on scroll
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-menu a[href^='#']")];

  const setActiveNav = () => {
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href").slice(1);
      link.classList.toggle("is-active", href === current && !link.classList.contains("nav-cta"));
    });
  };

  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();
})();
