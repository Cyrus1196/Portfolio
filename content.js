/**
 * PORTFOLIO CONTENT
 * ─────────────────
 * Edit this file to add your personal information.
 * All placeholder values are marked with comments.
 */

const PORTFOLIO = {
  // ── Identity ──────────────────────────────────────────────
    fullName: "Cyrus V. Tadoy",
    initials: "CVT",
    status: "Open for Internship · 4th Year IT Student",
    specialization: "Full-Stack Development", // e.g. Web Dev, Mobile, Data, Cybersecurity

    // ── Summary (2–3 sentences for hero + about) ───────────────
    summary:
    "Aspiring IT professional specializing in software development and system design. Seeking an internship to apply classroom knowledge to real-world projects.",

  about:
    "Fourth-year BS Information Technology student with hands-on experience in web development, database management, and collaborative software projects. Motivated to contribute to a development team while continuing to grow technical and professional skills.",

  // ── Quick facts (shown in About section) ───────────────────
  details: [
    { label: "Location", value: "Cagayan De Oro City, Philippines" },
    { label: "Program", value: "BS Information Technology" },
    { label: "Year Level", value: "4th Year" },
    { label: "Availability", value: "Internship · Full-time / Part-time" },
    { label: "Career Goal", value: "" },
  ],

  // ── Photo (replace with your image path) ───────────────────
  photo: "assets/profile.png",

  // ── Links ──────────────────────────────────────────────────
  resumeLink: "#", // PDF download URL
  email: "cyrustadoy@gmail.com",
  creativeSite: "creative/index.html",
  social: [
    { label: "GitHub", url: "https://github.com/cyrus1196" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    // { label: "Portfolio", url: "https://yoursite.com" },
  ],

  // ── Skills (grouped by category) ───────────────────────────
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "Java", "SQL", "HTML/CSS", "C#", "Flutter"],
    },
    {
      category: "Frameworks & Tools",
      items: ["React", "Node.js", "Laravel", "Git", "VS Code"],
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLite"],
    },
    {
      category: "Other",
      items: ["Agile/Scrum", "Figma"],
    },
  ],

  // ── Projects (most relevant first) ─────────────────────────
  projects: [
    {
      title: "Academic Evaluation System",
      objective:
        "Capstone web portal for Phinma Cagayan de Oro College — curriculum management, academic evaluation, and credit-transfer simulation for students, faculty, and administrators.",
      role: "Lead Developer",
      tools: ["React", "Laravel", "MySQL"],
      outcome:
        "Full-stack system with role-based sign-in, guest access for public tools, and a centralized curriculum catalog to streamline academic evaluation workflows.",
      image: "assets/project-academic-evaluation.png",
      links: {
        live: "#",
        repo: "#",
      },
      featured: true,
    },
    {
      title: "Kakanin Consignment App",
      objective:
        "Mobile app for kakanin stall owners to manage consigned products — track inventory, add items to the stall, and monitor daily activity.",
      role: "Solo Developer",
      tools: ["Flutter", "Dart"],
      outcome:
        "Cross-platform mobile solution that simplifies product monitoring and stall activity tracking for small food vendors.",
      image: "assets/project-consignment-app.png",
      links: {
        live: "#",
        repo: "#",
      },
      featured: false,
    },
    {
      title: "Kagay-an Survivor",
      objective:
        "Unity survival horror game set at Phinma Cagayan de Oro College — fight through a zombie outbreak on campus while facing supernatural threats.",
      role: "Game Developer",
      tools: ["Unity", "C#"],
      outcome:
        "3D action-survival game combining melee combat, horror atmosphere, and a locally inspired setting for a school game development project.",
      image: "assets/project-kagay-an-survivor.png",
      links: {
        live: "#",
        repo: "#",
      },
      featured: false,
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Phinma Cagayan de Oro College",
      period: "2022 — Present", // or "Expected 2026"
      details: [
        "Relevant coursework: Web Development, Database Systems, and Game Development",
        "Thesis/Capstone: Academic Evaluation for Phinma COC (2026)",
      ],
    },
    // Add more if needed (e.g. senior high, bootcamp)
  ],

  // ── Certificates & Training ────────────────────────────────
  certificates: [
    {
      name: "Certificate Name",
      issuer: "Issuing Organization",
      date: "2025",
      url: "#", // optional verification link
    },
    {
      name: "Online Course / Training",
      issuer: "Platform (e.g. Coursera, Udemy)",
      date: "2024",
      url: "#",
    },
  ],
};
