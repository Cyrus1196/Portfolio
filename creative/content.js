/**
 * CREATIVE PORTFOLIO CONTENT
 * ─────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW PROJECT (EPISODE)
 * A) Fill a blank slot: find { blank: true } and replace with a full project object
 * B) Or paste a new object into the projects array
 * C) Save + refresh — EP numbers auto-count
 *
 * image paths use ../assets/ (shared with professional site)
 * ─────────────────────────────────────────────────────────────
 */

const CREATIVE = {
  fullName: "Cyrus V. Tadoy",
  shortName: "Cyrus Tadoy",
  brand: "CYRUS",
  network: "CYRUS NETWORK",
  role: "NOW PLAYING",
  tagline: "Portals! Apps! Games! Coming at you from Cagayan de Oro!",
  email: "cyrustadoy@gmail.com",
  photo: "../assets/profile.png",
  proSite: "../index.html",
  resumeLink: "#",
  social: [
    { label: "GitHub", url: "https://github.com/cyrus1196" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  ],
  about:
    "Hey hey! I’m a 4th-year IT student who builds full-stack portals, Flutter apps, and Unity games. Loud ideas, clean code, local flavor — that’s the show.",
  facts: [
    { label: "Studio", value: "CDO, PH" },
    { label: "Season", value: "BS IT · Year 4" },
    { label: "Status", value: "Casting interns!" },
  ],
  skills: [
    "React",
    "Laravel",
    "Flutter",
    "Unity",
    "MySQL",
    "JavaScript",
    "C#",
    "Python",
  ],

  projects: [
    {
      title: "Academic Evaluation",
      kind: "Capstone Special",
      blurb:
        "Curriculum, evaluation, and credit-transfer for Phinma COC — students, faculty, admins.",
      tools: ["React", "Laravel", "MySQL"],
      image: "../assets/project-academic-evaluation.png",
      links: { live: "#", repo: "#" },
    },
    {
      title: "Kakanin Consignment",
      kind: "Mobile Adventure",
      blurb:
        "Stall owners track consigned kakanin, add products, and watch daily activity.",
      tools: ["Flutter", "Dart"],
      image: "../assets/project-consignment-app.png",
      links: { live: "#", repo: "#" },
    },
    {
      title: "Kagay-an Survivor",
      kind: "Game Night",
      blurb:
        "Campus survival horror on Phinma COC grounds — bat, zombies, local mythos.",
      tools: ["Unity", "C#"],
      image: "../assets/project-kagay-an-survivor.png",
      links: { live: "#", repo: "#" },
    },
    {
      blank: true,
    },
  ],
};
