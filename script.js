const skills = [
  { name: "HTML", symbol: "<>", categories: ["frontend"], status: "Using in projects", note: "Semantic structure, accessibility, forms, and maintainable page markup." },
  { name: "CSS", symbol: "#{}", categories: ["frontend"], status: "Currently improving", note: "Responsive layouts, Grid, Flexbox, custom properties, transitions, and animations." },
  { name: "JavaScript", symbol: "JS", categories: ["frontend", "programming"], status: "Currently improving", note: "DOM interaction, event handling, browser APIs, and practical frontend behavior." },
  { name: "Responsive Design", symbol: "RWD", categories: ["frontend"], status: "Using in projects", note: "Layouts that reorganize for mobile, tablet, and desktop rather than simply shrinking." },
  { name: "Tailwind CSS", symbol: "TW", categories: ["frontend", "learning"], status: "Currently learning", note: "Exploring utility-first styling while keeping this portfolio intentionally framework-free." },
  { name: "React", symbol: "R", categories: ["frontend", "learning", "programming"], status: "Currently learning", note: "Developing familiarity with component-based frontend development." },
  { name: "Next.js", symbol: "N", categories: ["frontend", "learning"], status: "Exploring", note: "Learning how React applications can be structured with a production-focused framework." },
  { name: "UI/UX Basics", symbol: "UI", categories: ["frontend"], status: "Developing knowledge", note: "Hierarchy, spacing, feedback, readability, usability, and interaction clarity." },
  { name: "Forms", symbol: "F", categories: ["frontend"], status: "Practicing", note: "Labels, validation patterns, keyboard usability, and clear error feedback." },
  { name: "Animations", symbol: "→", categories: ["frontend"], status: "Currently improving", note: "Purposeful CSS motion, transitions, and reduced-motion support." },
  { name: "Mobile Optimization", symbol: "M", categories: ["frontend"], status: "Using in projects", note: "Touch targets, mobile navigation, stacking behavior, and overflow prevention." },
  { name: "C#", symbol: "C#", categories: ["programming"], status: "Project experience", note: "Used in the MFC Youth Area Management System desktop application." },
  { name: "Windows Forms", symbol: "WF", categories: ["programming"], status: "Project experience", note: "Desktop UI development for the MFC Youth management application." },
  { name: "SQLite", symbol: "DB", categories: ["programming", "tools"], status: "Project experience", note: "Local offline data storage and structured application data management." },
  { name: "Git", symbol: "git", categories: ["tools"], status: "Using in projects", note: "Version control for personal and collaborative development workflows." },
  { name: "GitHub", symbol: "GH", categories: ["tools"], status: "Using in projects", note: "Repository hosting, collaboration, version history, and GitHub Pages deployment." },
  { name: "Server Configuration", symbol: "srv", categories: ["tools"], status: "Project experience", note: "Configuration, permissions, mods, and structured server project files." }
];

const projects = [
  {
    title: "MFC Youth Area Management System",
    type: "Desktop Application / Management System",
    status: "Public Beta v1.0.0 · Actively Improving",
    description: "An offline desktop application for managing MFC Youth members, chapters, services, and member assignments through a centralized local SQLite database.",
    technologies: ["C#", "Windows Forms", "SQLite", "Inno Setup"],
    github: "https://github.com/migzdndd/MFC-Youth-Area-Management-System",
    featured: true,
    visual: "desktop",
    detailsTitle: "Planned next steps",
    details: ["Cloud synchronization", "Reports and analytics", "Backup and restore", "User authentication", "Performance and quality-of-life improvements"]
  },
  {
    title: "MyTale Asia Development",
    type: "Game Server Development / Collaborative Project",
    status: "Ongoing · Collaborative",
    description: "Contributing to and working with the development and configuration of the MyTale Asia server environment, including structured server files and Git-based collaboration.",
    technologies: ["Server Configuration", "Mods", "Permissions", "Git", "GitHub"],
    github: "https://github.com/Xerain556/MyTale-Asia-Development",
    featured: false,
    visual: "server",
    detailsTitle: "Areas involved",
    details: ["Configuration management", "Modded server environments", "Permissions and whitelisting", "Structured repository files", "Collaborative development"]
  },
  {
    title: "Personal Portfolio Website",
    type: "Frontend Web Development / Personal Branding",
    status: "In Development",
    description: "My personal developer portfolio, built to present my projects, frontend learning, SecDevOps direction, and creative interests through a responsive and accessible interface.",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Design", "Accessibility", "GitHub Pages"],
    github: "https://github.com/migzdndd/web-portfolio",
    featured: false,
    visual: "portfolio",
    detailsTitle: "What this project demonstrates",
    details: ["Responsive navigation", "Active section tracking", "Skill filtering", "Keyboard-accessible controls", "Reduced-motion support", "GitHub Pages compatibility"]
  },
  {
    title: "MFC Youth Area Management System (Web)",
    type: "Web Application / Management System",
    status: "In Development",
    description: "The web-based counterpart to the MFC Youth Area Management System, transitioning the desktop architecture into a modern, accessible web platform.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/migzdndd/MFC-Youth-Area-Management-System-Web",
    featured: false,
    visual: "portfolio",
    detailsTitle: "Project focus",
    details: ["Platform independence", "Responsive UI", "Modern web standards", "Preparing for backend integration"]
  }
];

const socialLinks = {
  github: { label: "GitHub", username: "migzdndd", url: "https://github.com/migzdndd", symbol: "GH" },
  facebook: { label: "Facebook", username: "Miguel Riovaldez", url: "https://www.facebook.com/migzdndd/", symbol: "FB" },
  instagram: { label: "Instagram", username: "@migzdnd", url: "https://www.instagram.com/migzdnd/", symbol: "IG" }
};

const skillsGrid = document.querySelector("#skillsGrid");
const projectsGrid = document.querySelector("#projectsGrid");
const socialLinksContainer = document.querySelector("#socialLinks");
const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const sections = [...document.querySelectorAll("[data-section]")];
const backToTop = document.querySelector("#backToTop");
const scrollProgressBar = document.querySelector("#scrollProgressBar");

function renderSkills() {
  skillsGrid.innerHTML = skills.map(skill => `
    <article class="skill-card reveal" data-skill-categories="${skill.categories.join(" ")}">
      <div class="skill-top">
        <span class="skill-symbol" aria-hidden="true">${skill.symbol}</span>
        <span class="skill-status">${skill.status}</span>
      </div>
      <div>
        <h3>${skill.name}</h3>
        <p>${skill.note}</p>
      </div>
    </article>
  `).join("");
}

function projectVisual(type) {
  if (type === "desktop") {
    return `<div class="visual-window" aria-hidden="true"><div class="visual-window-bar"><i></i><i></i><i></i></div><div class="visual-window-body"><span class="accent-line"></span><span></span><span class="short-line"></span><div class="metric-row"><b></b><b></b><b></b></div><span></span></div></div>`;
  }
  if (type === "server") {
    return `<div class="server-visual" aria-hidden="true"><p>$ server.status</p><p class="ok">✓ collaborative environment active</p><p>mods/ permissions/ config/ whitelist/</p><p>git: structured repository workflow</p></div>`;
  }
  return `<div class="portfolio-visual" aria-hidden="true">MR<span>.</span>WEB</div>`;
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map(project => `
    <article class="project-card ${project.featured ? "featured" : ""} reveal">
      <div class="project-visual">${projectVisual(project.visual)}</div>
      <div class="project-content">
        <div class="project-meta">
          <span class="project-status">${project.status}</span>
          <span class="project-type">${project.type}</span>
        </div>
        <h3>${project.title}</h3>
        <p class="project-summary">${project.description}</p>
        <div class="project-details">
          <strong>${project.detailsTitle}</strong>
          <ul>${project.details.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <ul class="tech-list" aria-label="Technologies used">${project.technologies.map(tech => `<li>${tech}</li>`).join("")}</ul>
        <div class="project-actions">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} repository on GitHub">View Repository <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderSocialLinks() {
  socialLinksContainer.innerHTML = Object.values(socialLinks).map(social => `
    <a class="social-card" href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${social.label} profile for ${social.username}">
      <span class="social-icon" aria-hidden="true">${social.symbol}</span>
      <span><strong>${social.label}</strong><span>${social.username}</span></span>
      <span class="social-arrow" aria-hidden="true">↗</span>
    </a>
  `).join("");
}

function setupSkillFilters() {
  const filterButtons = [...document.querySelectorAll("[data-skill-filter]")];
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const activeFilter = button.dataset.skillFilter;
      filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      document.querySelectorAll("[data-skill-categories]").forEach(card => {
        const categories = card.dataset.skillCategories.split(" ");
        card.classList.toggle("is-hidden", activeFilter !== "all" && !categories.includes(activeFilter));
      });
    });
  });
}

function setMenuState(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  primaryNav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuToggle.addEventListener("click", () => setMenuState(menuToggle.getAttribute("aria-expanded") !== "true"));
navLinks.forEach(link => link.addEventListener("click", () => setMenuState(false)));
document.addEventListener("keydown", event => { if (event.key === "Escape") setMenuState(false); });

const sectionObserver = new IntersectionObserver(entries => {
  const visibleEntries = entries.filter(entry => entry.isIntersecting);
  if (!visibleEntries.length) return;
  const activeSection = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id;
  navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${activeSection}`));
}, { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.2, 0.45] });
sections.forEach(section => sectionObserver.observe(section));

function setupRevealAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    revealItems.forEach(item => item.classList.add("is-visible"));
    return;
  }
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
}

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgressBar.style.width = `${Math.min(progress, 100)}%`;
  backToTop.classList.toggle("is-visible", window.scrollY > 650);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", () => { if (window.innerWidth > 780) setMenuState(false); });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

renderSkills();
renderProjects();
renderSocialLinks();
setupSkillFilters();
setupRevealAnimations();
updateScrollUI();
document.querySelector("#currentYear").textContent = new Date().getFullYear();
