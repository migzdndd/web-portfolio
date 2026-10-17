const skills = [
  // --- CYBERSECURITY & INFORMATION SECURITY (Image 1 from first set) ---
  {
    name: "Cybersecurity",
    symbol: "SEC",
    categories: ["cybersecurity"],
    status: "Aspiring SecDevOps",
    note: "Core threat landscape analysis, defense-in-depth principles, secure system design, and vulnerability prevention."
  },
  {
    name: "Systems Development Life Cycle",
    symbol: "SDLC",
    categories: ["cybersecurity", "tools"],
    status: "Academic & Practice",
    note: "Embedding security requirements, architectural reviews, risk assessments, and testing through every software phase."
  },
  {
    name: "Cyber Risk",
    symbol: "RSK",
    categories: ["cybersecurity"],
    status: "Developing Knowledge",
    note: "Evaluating threat surfaces, operational impact, risk mitigation strategies, and security posture assessments."
  },
  {
    name: "Cyber Attacks",
    symbol: "ATK",
    categories: ["cybersecurity"],
    status: "Developing Knowledge",
    note: "Studying common attack vectors including SQL injection, XSS, brute-force, MITM, and denial-of-service defense."
  },
  {
    name: "Cryptography",
    symbol: "CRY",
    categories: ["cybersecurity"],
    status: "Coursework & Practice",
    note: "Symmetric and asymmetric encryption, cryptographic hashing (SHA-256), digital signatures, and key exchange."
  },
  {
    name: "Security Controls",
    symbol: "CTL",
    categories: ["cybersecurity"],
    status: "Using in Projects",
    note: "Implementing practical safeguards: Row Level Security (RLS), TOTP multi-factor auth, rate limiting, and RBAC."
  },
  {
    name: "Encryption",
    symbol: "ENC",
    categories: ["cybersecurity"],
    status: "Using in Projects",
    note: "Protecting data-at-rest and data-in-transit with TLS/HTTPS, tokenization, password hashing, and encrypted payloads."
  },
  {
    name: "Security Awareness",
    symbol: "SA",
    categories: ["cybersecurity"],
    status: "Core Discipline",
    note: "Understanding human-factor vulnerabilities, phishing indicators, credential hygiene, and operational security."
  },
  {
    name: "Information Systems Security",
    symbol: "ISS",
    categories: ["cybersecurity"],
    status: "Academic Focus",
    note: "Upholding the CIA triad (Confidentiality, Integrity, Availability) across infrastructure, networks, and applications."
  },
  {
    name: "Cyber Security Policies",
    symbol: "POL",
    categories: ["cybersecurity"],
    status: "Academic Focus",
    note: "Formulating access governance, password criteria, acceptable use guidelines, and incident response procedures."
  },
  {
    name: "Network Security",
    symbol: "NET",
    categories: ["cybersecurity"],
    status: "Coursework & Practice",
    note: "Firewalls, packet inspection, port management, subnetting, VPN protocols, and secure network segmentation."
  },
  {
    name: "Computer Security Awareness Training",
    symbol: "TRN",
    categories: ["cybersecurity"],
    status: "Knowledge Base",
    note: "Best-practice principles for training users on endpoint protection, credential safety, and social engineering red flags."
  },

  // --- PROGRAMMING LANGUAGES & CORE COMPUTING (New images 4 & 5 + stack) ---
  {
    name: "Computer Programming",
    symbol: "PRG",
    categories: ["programming"],
    status: "Core Discipline",
    note: "Computational thinking, problem decomposition, modular software architecture, and algorithmic implementation."
  },
  {
    name: "Programming Principles",
    symbol: "PRN",
    categories: ["programming", "tools"],
    status: "Core Discipline",
    note: "Core software engineering guidelines including DRY, SOLID, separation of concerns, and clean maintainable code practices."
  },
  {
    name: "Program Development",
    symbol: "PDV",
    categories: ["programming", "tools"],
    status: "Using in Projects",
    note: "End-to-end software construction from design and logic implementation to compiling, debugging, and lifecycle maintenance."
  },
  {
    name: "Python Programming",
    symbol: "PY",
    categories: ["programming", "ai-ml", "tools"],
    status: "Academic & Practice",
    note: "Writing clean Python scripts for data manipulation, algorithmic problem solving, automation, and data processing."
  },
  {
    name: "Java Programming",
    symbol: "JAVA",
    categories: ["programming"],
    status: "Academic Coursework",
    note: "Object-Oriented Programming (OOP), encapsulation, inheritance, polymorphism, and Java SE core foundations."
  },
  {
    name: "C++ (Programming Language)",
    symbol: "C++",
    categories: ["programming"],
    status: "Academic Coursework",
    note: "High-performance systems programming, memory management, pointers, references, and structured syntax."
  },
  {
    name: "C# & Windows Forms",
    symbol: "C#",
    categories: ["programming", "tools"],
    status: "Project Experience",
    note: "Desktop UI development, event handling, and local SQLite database integration for the MFC Youth AMS desktop app."
  },
  {
    name: "TypeScript",
    symbol: "TS",
    categories: ["web", "programming", "tools"],
    status: "Using in Projects",
    note: "Static typing, robust interfaces, and maintainable type-safe application code in React 19."
  },
  {
    name: "Javascript",
    symbol: "JS",
    categories: ["web", "programming", "tools"],
    status: "Currently Improving",
    note: "Modern ES6+, DOM manipulation, asynchronous programming, fetch API, and practical interactive web application behavior."
  },
  {
    name: "Data Structures",
    symbol: "DS",
    categories: ["programming", "tools"],
    status: "Academic Focus",
    note: "Arrays, linked lists, stacks, queues, hash tables, and binary trees with performance-conscious design."
  },
  {
    name: "Algorithms",
    symbol: "ALG",
    categories: ["programming", "ai-ml", "tools"],
    status: "Academic Focus",
    note: "Time/space Big-O complexity, sorting, searching, recursion, graph traversal, and algorithmic problem-solving."
  },
  {
    name: "File I/O",
    symbol: "FIO",
    categories: ["programming", "tools"],
    status: "Using in Projects",
    note: "Reading, writing, parsing, and streaming data files (JSON, CSV, text, and binary streams) reliably."
  },

  // --- DATABASES & DATA MANAGEMENT (Image 1 from first & second set) ---
  {
    name: "SQL",
    symbol: "SQL",
    categories: ["database", "programming", "tools"],
    status: "Using in Projects",
    note: "Complex queries, multi-table joins, subqueries, aggregations, transactions, and indexing for optimal retrieval."
  },
  {
    name: "PostgreSQL",
    symbol: "PG",
    categories: ["database", "tools"],
    status: "Using in Projects",
    note: "Cloud production database engine in Supabase for MFC Youth AMS, managing 13 relational tables and 22 SQL migrations."
  },
  {
    name: "Oracle Databases",
    symbol: "ORA",
    categories: ["database"],
    status: "Academic Coursework",
    note: "Enterprise database architecture, PL/SQL stored procedures, triggers, sequences, and administrative concepts."
  },
  {
    name: "Relational Databases",
    symbol: "RDB",
    categories: ["database"],
    status: "Using in Projects",
    note: "Relational constraints, foreign keys, cascading actions, and structured table linkages across SQLite and PostgreSQL."
  },
  {
    name: "Databases",
    symbol: "DB",
    categories: ["database"],
    status: "Core Competency",
    note: "Foundational structured data persistence, ACID transactions, data normalization, and connection pooling."
  },
  {
    name: "Database Management Systems",
    symbol: "DBMS",
    categories: ["database"],
    status: "Academic & Practice",
    note: "Architectural comparison of relational and embedded database engines, concurrency control, and system catalogs."
  },
  {
    name: "Database Management",
    symbol: "MGT",
    categories: ["database"],
    status: "Using in Projects",
    note: "Migration orchestration, database backup and restoration, access privileges, and live health monitoring."
  },
  {
    name: "Database Design",
    symbol: "DDS",
    categories: ["database"],
    status: "Using in Projects",
    note: "Designing normalized database schemas (1NF through 3NF/BCNF) tailored for data integrity and high performance."
  },
  {
    name: "Database Development",
    symbol: "DEV",
    categories: ["database"],
    status: "Using in Projects",
    note: "Authoring declarative schema migrations, SQL triggers, views, stored functions, and RLS security policies."
  },
  {
    name: "Data Modeling",
    symbol: "MOD",
    categories: ["database"],
    status: "Coursework & Practice",
    note: "Translating complex operational workflows and business requirements into clear conceptual, logical, and physical models."
  },
  {
    name: "Diagram Design",
    symbol: "ERD",
    categories: ["database", "tools"],
    status: "Using in Projects",
    note: "Creating comprehensive Entity-Relationship Diagrams (ERDs), schema blueprints, and data-flow flowcharts."
  },
  {
    name: "Data Integrity",
    symbol: "INT",
    categories: ["database"],
    status: "Using in Projects",
    note: "Enforcing entity, domain, and referential constraints, check validations, and idempotent data updates."
  },
  {
    name: "Data Storage",
    symbol: "STR",
    categories: ["database", "tools"],
    status: "Using in Projects",
    note: "Structured persistence, local SQLite file storage, relational database stores, and serialized data formats."
  },

  // --- ARTIFICIAL INTELLIGENCE, DATA SCIENCE & PROCESSING (Images from first set + new image 5) ---
  {
    name: "Artificial Intelligence",
    symbol: "AI",
    categories: ["ai-ml"],
    status: "Academic & Exploring",
    note: "Core concepts of intelligent systems, heuristic search algorithms, decision trees, and problem-solving agents."
  },
  {
    name: "Artificial Intelligence and Machine Learning (AI/ML)",
    symbol: "ML",
    categories: ["ai-ml"],
    status: "Active Learning",
    note: "Machine learning paradigms (supervised, unsupervised, reinforcement), predictive pipelines, and automated inference."
  },
  {
    name: "Machine Learning",
    symbol: "LRN",
    categories: ["ai-ml"],
    status: "Coursework & Projects",
    note: "Classification, regression, clustering algorithms, feature engineering, and model training/testing splits."
  },
  {
    name: "Deep Learning",
    symbol: "DL",
    categories: ["ai-ml"],
    status: "Exploring",
    note: "Multi-layer neural network concepts, activation functions, loss calculation, backpropagation, and optimization algorithms."
  },
  {
    name: "Artificial Neural Networks",
    symbol: "ANN",
    categories: ["ai-ml"],
    status: "Coursework & Study",
    note: "Perceptrons, feedforward architectures, matrix weight adjustments, gradient descent, and layer configurations."
  },
  {
    name: "Data Science",
    symbol: "DSC",
    categories: ["ai-ml"],
    status: "Coursework & Practice",
    note: "Exploratory data analysis (EDA), data cleaning, statistical distributions, correlation analysis, and data visualization."
  },
  {
    name: "Data Analysis",
    symbol: "ANL",
    categories: ["ai-ml"],
    status: "Coursework & Practice",
    note: "Extracting meaningful trends, interpreting structured datasets, identifying patterns, and quantitative evaluation."
  },
  {
    name: "Data Processing",
    symbol: "PRC",
    categories: ["ai-ml", "programming"],
    status: "Coursework & Practice",
    note: "Ingestion pipelines, cleaning raw data, handling edge values, and transforming datasets for analysis."
  },
  {
    name: "Data Manipulation",
    symbol: "MAN",
    categories: ["ai-ml", "programming"],
    status: "Coursework & Practice",
    note: "Filtering, transforming, sorting, merging, and reshaping data collections to prepare them for downstream use."
  },
  {
    name: "Model Evaluation",
    symbol: "EVL",
    categories: ["ai-ml"],
    status: "Academic & Practice",
    note: "Measuring model quality via accuracy, precision, recall, F1-score, confusion matrices, and cross-validation."
  },
  {
    name: "Business Modeling",
    symbol: "BIZ",
    categories: ["ai-ml"],
    status: "Academic Coursework",
    note: "Mapping technical and predictive models to real-world business objectives, feasibility assessments, and user value."
  },
  {
    name: "AI Personalization",
    symbol: "PER",
    categories: ["ai-ml"],
    status: "Developing Knowledge",
    note: "User preference modeling, dynamic content tailoring, adaptive user experiences, and recommendation logic."
  },
  {
    name: "AI literacy",
    symbol: "LIT",
    categories: ["ai-ml"],
    status: "Core Awareness",
    note: "In-depth understanding of generative AI capabilities, prompt engineering, tooling integration, and safe adoption."
  },
  {
    name: "Responsible AI",
    symbol: "ETH",
    categories: ["ai-ml"],
    status: "Core Discipline",
    note: "Ethical AI principles: mitigating algorithmic bias, ensuring transparency, user privacy, and responsible automation."
  },

  // --- WEB DEVELOPMENT & UI/UX (Images from first set + new image 3) ---
  {
    name: "Web Development",
    symbol: "WEB",
    categories: ["web"],
    status: "Using in Projects",
    note: "End-to-end development of responsive web applications, single-page architectures, and client-server integrations."
  },
  {
    name: "Web Design",
    symbol: "DES",
    categories: ["web"],
    status: "Currently Improving",
    note: "Visual hierarchy, layout typography, balanced contrast, whitespace design, and aesthetic user interface presentation."
  },
  {
    name: "Hypertext Markup Language (HTML)",
    symbol: "<>",
    categories: ["web"],
    status: "Using in Projects",
    note: "Semantic HTML5 structure, ARIA accessibility landmarks, SEO metadata, and clean document hierarchy."
  },
  {
    name: "Cascading Style Sheets (CSS)",
    symbol: "CSS",
    categories: ["web"],
    status: "Currently Improving",
    note: "CSS Grid, Flexbox, custom properties, responsive breakpoints, transitions, and keyframe animations."
  },
  {
    name: "Bootstrap (Front-End Framework)",
    symbol: "BS",
    categories: ["web"],
    status: "Using in Projects",
    note: "Rapid responsive prototyping, utility classes, mobile-first grid system, and modular UI components."
  },
  {
    name: "Tailwind CSS",
    symbol: "TW",
    categories: ["web"],
    status: "Using in Projects",
    note: "Utility-first responsive styling and tailored dark/light aesthetic design systems."
  },
  {
    name: "React",
    symbol: "R",
    categories: ["web", "programming", "tools"],
    status: "Using in Projects",
    note: "Component architecture, single-page progressive web apps (PWAs), state management, and role-based route guards."
  },
  {
    name: "Responsive Web Design",
    symbol: "RWD",
    categories: ["web"],
    status: "Using in Projects",
    note: "Fluid grid systems, media queries, flexible vector assets, and seamless cross-device viewport adaptation."
  },
  {
    name: "Wireframing",
    symbol: "WF",
    categories: ["web"],
    status: "Coursework & Practice",
    note: "Low- and mid-fidelity layout sketches, component hierarchy, user flows, and structural prototyping."
  },
  {
    name: "Usability",
    symbol: "UX",
    categories: ["web"],
    status: "Developing Knowledge",
    note: "User-centered design principles, intuitive navigation patterns, accessibility compliance, and cognitive load reduction."
  },
  {
    name: "Interactive Design",
    symbol: "IXD",
    categories: ["web"],
    status: "Developing Knowledge",
    note: "Micro-interactions, accessible modal dialogs, drawer transitions, focus states, and immediate visual feedback."
  },
  {
    name: "Event-Driven Programming",
    symbol: "EVT",
    categories: ["web", "programming", "tools"],
    status: "Using in Projects",
    note: "Event listeners, delegation patterns, propagation control, custom events, and asynchronous UI interaction flows."
  },
  {
    name: "Debugging",
    symbol: "BUG",
    categories: ["web", "tools"],
    status: "Using in Projects",
    note: "Browser DevTools diagnostics, console profiling, breakpoint debugging, network inspection, and systematic troubleshooting."
  },

  // --- TOOLS, SYSTEMS & ENVIRONMENT (Stack + new image 5) ---
  {
    name: "Git & GitHub",
    symbol: "GIT",
    categories: ["tools"],
    status: "Using in Projects",
    note: "Version control, branching workflows, pull requests, collaborative repo management, and GitHub Pages deployment."
  },
  {
    name: "Development Environment",
    symbol: "ENV",
    categories: ["tools"],
    status: "Active Practice",
    note: "Configuring VS Code, terminals, PowerShell, extensions, CLI toolchains, and environment variables."
  },
  {
    name: "Software Installation",
    symbol: "INS",
    categories: ["tools"],
    status: "Practical Experience",
    note: "Deploying runtime SDKs, database servers, package managers, application bundles, and installer configurations."
  },
  {
    name: "Server Configuration",
    symbol: "SRV",
    categories: ["tools", "cybersecurity"],
    status: "Project Experience",
    note: "Server environments, permission whitelists, config management, and collaborative development in MyTale Asia."
  }
];

const projects = [
  {
    title: "MFC Youth Area Management System (Web)",
    type: "Cloud Platform / Pastoral Operations & Governance PWA",
    status: "Active Full-Stack Architecture",
    description: "A cloud-based pastoral operations and community governance platform engineered for Missionary Families for Christ (MFC) Youth. Built with a React 19 PWA client, Node.js serverless micro-handlers on Vercel, and a Supabase PostgreSQL cloud database hardened with Row Level Security across all 13 tables.",
    technologies: ["React 19", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "TanStack Query", "Node.js", "Vercel Serverless", "Supabase", "PostgreSQL", "RLS", "TOTP MFA"],
    github: "https://github.com/migzdndd/MFC-Youth-Area-Management-System-Web",
    featured: true,
    visual: "cloud-ams",
    detailsTitle: "Architecture & Governance Highlights",
    details: [
      "3-Tier Cloud Stack: React 19 PWA, Vercel Serverless API (/api/router.js), and Supabase PostgreSQL across 22 incremental SQL migrations",
      "4-Tier RBAC: Area Leadership (Tier 1), Domain Moderators (LIT, Campus, High, Kids - Tier 2), Chapter Servants (Tier 3), and Youth Members (Tier 4)",
      "Youth Member Roster & Pastoral Profiles: Ages 13–21 & Heartchamps transition, emergency contacts, youth camps, and academic tracks",
      "Gatherings, Stewardship & Liturgy: Multi-mode event fee collection (Cash/GCash/Bank), GIG offerings ledger, assembly audit reports, and daily mass readings",
      "SecDevOps Hardening: Enforced Row Level Security on all 13 tables, sliding-window IP rate limiting, brute-force lockouts, and TOTP MFA"
    ],
    hasModal: true
  },
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
    details: ["Cloud synchronization", "Reports and analytics", "Backup and restore", "User authentication", "Performance and quality-of-life improvements"],
    hasModal: false
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
    details: ["Configuration management", "Modded server environments", "Permissions and whitelisting", "Structured repository files", "Collaborative development"],
    hasModal: false
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
    details: ["Responsive navigation", "Active section tracking", "Skill filtering", "Keyboard-accessible controls", "Reduced-motion support", "GitHub Pages compatibility"],
    hasModal: false
  }
];

const socialLinks = {
  email: {
    label: "Direct Email",
    username: "miguel7riovaldez@gmail.com",
    url: "mailto:miguel7riovaldez@gmail.com",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    isEmail: true
  },
  github: {
    label: "GitHub",
    username: "migzdndd",
    url: "https://github.com/migzdndd",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  },
  facebook: {
    label: "Facebook",
    username: "Miguel Riovaldez",
    url: "https://www.facebook.com/migzdndd/",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
  },
  linkedin: {
    label: "LinkedIn",
    username: "Miguel Riovaldez",
    url: "https://www.linkedin.com/in/miguel-riovaldez-12b9542b4",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/></svg>`
  }
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
    <article class="skill-card reveal" data-skill-categories="${skill.categories.join(" ")}" data-skill-name="${skill.name}" data-skill-note="${skill.note}">
      <div class="skill-top">
        <span class="skill-symbol" aria-hidden="true">${skill.symbol}</span>
        <span class="skill-status">${skill.status}</span>
      </div>
      <div>
        <h3>${skill.name}</h3>
        <p>${skill.note}</p>
      </div>
    </article>
  `).join("") + `
    <div class="skills-empty-state is-hidden" id="skillsEmptyCards">
      <p>No skills found matching your search or filter.</p>
    </div>
  `;

  const badgesView = document.querySelector("#skillsBadgesView");
  if (badgesView) {
    badgesView.innerHTML = skills.map(skill => `
      <button class="skill-pill reveal" type="button" data-skill-categories="${skill.categories.join(" ")}" data-skill-name="${skill.name}" title="${skill.status}: ${skill.note}">
        <span class="pill-sym" aria-hidden="true">${skill.symbol}</span>
        <span class="pill-name">${skill.name}</span>
      </button>
    `).join("") + `
      <div class="skills-empty-state is-hidden" id="skillsEmptyBadges">
        <p>No skills found matching your search or filter.</p>
      </div>
    `;
  }
}

function projectVisual(type) {
  if (type === "cloud-ams") {
    return `
      <div class="cloud-ams-visual" aria-hidden="true">
        <div class="ams-terminal-bar">
          <span class="ams-terminal-dots"><i></i><i></i><i></i></span>
          <span class="ams-terminal-title">mfc-ams-cloud // v2.0-pwa</span>
          <span class="ams-badge-live"><span class="pulse-dot"></span> SUPABASE PROD</span>
        </div>
        <div class="ams-visual-content">
          <div class="ams-stack-flow">
            <div class="ams-tier-card tier-pwa">
              <span class="tier-label">CLIENT PWA</span>
              <strong>React 19 + Vite</strong>
              <p>TypeScript · Zustand · Tailwind</p>
            </div>
            <div class="ams-flow-indicator">
              <span class="flow-line animated-flow"></span>
              <span class="flow-pill">REST / JSON</span>
            </div>
            <div class="ams-tier-card tier-api">
              <span class="tier-label">VERCEL API</span>
              <strong>Node.js Router</strong>
              <p>Micro-handlers · Rate-Limit</p>
            </div>
            <div class="ams-flow-indicator">
              <span class="flow-line animated-flow"></span>
              <span class="flow-pill">PostgreSQL Wire</span>
            </div>
            <div class="ams-tier-card tier-db">
              <span class="tier-label">SUPABASE CLOUD</span>
              <strong>PostgreSQL DB</strong>
              <p>13 Tables RLS · 22 Migrations</p>
            </div>
          </div>
          <div class="ams-stats-grid">
            <div class="ams-stat">
              <span class="stat-name">ACCESS CONTROL</span>
              <span class="stat-value">4-Tier Scoped RBAC</span>
            </div>
            <div class="stat-divider"></div>
            <div class="ams-stat">
              <span class="stat-name">SECURITY</span>
              <span class="stat-value">TOTP MFA + Lockout</span>
            </div>
            <div class="stat-divider"></div>
            <div class="ams-stat">
              <span class="stat-name">DATA AUDIT</span>
              <span class="stat-value">Liturgical &amp; Pastoral</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  if (type === "desktop") {
    return `
      <div class="visual-window desktop-pos-window" aria-hidden="true">
        <div class="visual-window-bar">
          <div class="window-controls"><i></i><i></i><i></i></div>
          <span class="window-title">ims-desktop.exe // C# .NET Forms</span>
          <span class="window-badge-offline">OFFLINE READY</span>
        </div>
        <div class="desktop-preview-body">
          <div class="desktop-kpi-grid">
            <div class="desktop-kpi"><span class="kpi-label">INVENTORY</span><strong>1,420 SKUs</strong></div>
            <div class="desktop-kpi"><span class="kpi-label">SALES ORDERS</span><strong>384 Logged</strong></div>
            <div class="desktop-kpi"><span class="kpi-label">DATABASE</span><strong>Local SQLite</strong></div>
          </div>
          <div class="desktop-table-preview">
            <div class="tbl-head"><span>ID</span><span>ITEM DESCRIPTION</span><span>QTY</span><span>STATUS</span></div>
            <div class="tbl-row"><span>#1044</span><span>HARDWARE-RAM-16G</span><span>×2</span><span class="tag-ok">LOGGED</span></div>
            <div class="tbl-row"><span>#1045</span><span>STORAGE-NVME-1TB</span><span>×1</span><span class="tag-ok">LOGGED</span></div>
            <div class="tbl-row"><span>#1046</span><span>CABLE-CAT6-10M</span><span>×10</span><span class="tag-ok">LOGGED</span></div>
          </div>
        </div>
      </div>
    `;
  }
  if (type === "server") {
    return `
      <div class="server-visual-enhanced" aria-hidden="true">
        <div class="server-head">
          <span class="server-status-dot"><i></i> srv-collab-01.local</span>
          <span class="server-uptime">UPTIME: 99.9%</span>
        </div>
        <div class="server-metrics-row">
          <div class="server-metric-item">
            <div class="metric-head"><span>MEMORY</span><strong>6.2 / 16 GB</strong></div>
            <div class="metric-bar"><span style="width: 38%;"></span></div>
          </div>
          <div class="server-metric-item">
            <div class="metric-head"><span>CPU LOAD</span><strong>18%</strong></div>
            <div class="metric-bar"><span style="width: 18%;"></span></div>
          </div>
        </div>
        <div class="server-log-box">
          <p class="log-line"><span class="log-t">[systemd]</span> service active (port 25565)</p>
          <p class="log-line"><span class="log-t">[ufw]</span> firewall strict rules enforced</p>
          <p class="log-line ok"><span class="log-t">[git]</span> tracked repository in sync with origin/main</p>
        </div>
      </div>
    `;
  }
  return `
    <div class="portfolio-visual-enhanced" aria-hidden="true">
      <div class="portfolio-head">
        <span class="portfolio-badge-pill">LIGHTHOUSE AUDIT: 100/100</span>
        <span class="portfolio-tech-tag">VANILLA ES6+</span>
      </div>
      <div class="lighthouse-scores-grid">
        <div class="lh-metric"><span class="lh-score">100</span><span class="lh-name">PERF</span></div>
        <div class="lh-metric"><span class="lh-score">100</span><span class="lh-name">A11Y</span></div>
        <div class="lh-metric"><span class="lh-score">100</span><span class="lh-name">BEST PRACTICES</span></div>
        <div class="lh-metric"><span class="lh-score">100</span><span class="lh-name">SEO</span></div>
      </div>
      <div class="portfolio-vitals-row">
        <span>Zero Dependencies</span>
        <span>&lt; 50 KB Transfer</span>
        <span>Semantic HTML5</span>
      </div>
    </div>
  `;
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
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} repository on GitHub">View Repository <svg class="icon-external" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
          ${project.hasModal ? `<button class="button-project-detail" id="openAmsModalBtn" type="button" aria-haspopup="dialog" aria-controls="projectModal">System Architecture &amp; Specs <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderSocialLinks() {
  socialLinksContainer.innerHTML = Object.values(socialLinks).map(social => `
    <div class="social-card ${social.isEmail ? "social-card-email" : ""}">
      <a class="social-main-link" href="${social.url}" ${social.isEmail ? "" : 'target="_blank" rel="noopener noreferrer"'} aria-label="Open ${social.label} for ${social.username}">
        <span class="social-icon" aria-hidden="true">${social.icon}</span>
        <span><strong>${social.label}</strong><span>${social.username}</span></span>
      </a>
      <div class="social-card-actions">
        ${social.isEmail ? `
          <button class="social-copy-btn" type="button" data-copy-email="${social.username}" title="Copy email address" aria-label="Copy email address">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy</span>
          </button>
        ` : `
          <a class="social-arrow" href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${social.label} link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        `}
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-copy-email]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = btn.dataset.copyEmail;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`, "success");
      }).catch(() => {
        showToast(`Email: ${email}`, "info");
      });
    });
  });
}

let activeSkillFilter = "all";
let skillSearchQuery = "";

function applySkillFiltering() {
  const query = skillSearchQuery.trim().toLowerCase();
  let visibleCards = 0;
  let visibleBadges = 0;

  document.querySelectorAll(".skill-card").forEach(card => {
    const categories = (card.dataset.skillCategories || "").split(" ");
    const name = (card.dataset.skillName || "").toLowerCase();
    const note = (card.dataset.skillNote || "").toLowerCase();

    const matchesCategory = activeSkillFilter === "all" || categories.includes(activeSkillFilter);
    const matchesQuery = !query || name.includes(query) || note.includes(query);
    const isVisible = matchesCategory && matchesQuery;

    card.classList.toggle("is-hidden", !isVisible);
    if (isVisible) visibleCards++;
  });

  document.querySelectorAll(".skill-pill").forEach(pill => {
    const categories = (pill.dataset.skillCategories || "").split(" ");
    const name = (pill.dataset.skillName || "").toLowerCase();

    const matchesCategory = activeSkillFilter === "all" || categories.includes(activeSkillFilter);
    const matchesQuery = !query || name.includes(query);
    const isVisible = matchesCategory && matchesQuery;

    pill.classList.toggle("is-hidden", !isVisible);
    if (isVisible) visibleBadges++;
  });

  const countDisplay = document.querySelector("#skillsCountDisplay");
  if (countDisplay) {
    countDisplay.textContent = visibleCards;
  }

  const emptyCards = document.querySelector("#skillsEmptyCards");
  const emptyBadges = document.querySelector("#skillsEmptyBadges");
  if (emptyCards) emptyCards.classList.toggle("is-hidden", visibleCards > 0);
  if (emptyBadges) emptyBadges.classList.toggle("is-hidden", visibleBadges > 0);
}

function setSkillView(view) {
  const cardsBtn = document.querySelector("#viewCardsBtn");
  const badgesBtn = document.querySelector("#viewBadgesBtn");
  const skillsGrid = document.querySelector("#skillsGrid");
  const badgesView = document.querySelector("#skillsBadgesView");

  const isCards = view === "cards";
  if (cardsBtn) {
    cardsBtn.classList.toggle("is-active", isCards);
    cardsBtn.setAttribute("aria-pressed", String(isCards));
  }
  if (badgesBtn) {
    badgesBtn.classList.toggle("is-active", !isCards);
    badgesBtn.setAttribute("aria-pressed", String(!isCards));
  }
  if (skillsGrid) skillsGrid.classList.toggle("is-hidden", !isCards);
  if (badgesView) badgesView.classList.toggle("is-hidden", isCards);
}

function setupSkillFilters() {
  const filterButtons = [...document.querySelectorAll("[data-skill-filter]")];
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeSkillFilter = button.dataset.skillFilter;
      filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      applySkillFiltering();
    });
  });

  // Calculate and display category counts on filter buttons
  const catCounts = { all: skills.length };
  skills.forEach(skill => {
    skill.categories.forEach(cat => {
      catCounts[cat] = (catCounts[cat] || 0) + 1;
    });
  });

  filterButtons.forEach(btn => {
    const filter = btn.dataset.skillFilter;
    const count = catCounts[filter] || 0;
    let badge = btn.querySelector(".filter-count");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "filter-count";
      btn.appendChild(badge);
    }
    badge.textContent = count;
  });

  const searchInput = document.querySelector("#skillSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      skillSearchQuery = e.target.value;
      applySkillFiltering();
    });
  }

  const cardsBtn = document.querySelector("#viewCardsBtn");
  const badgesBtn = document.querySelector("#viewBadgesBtn");
  if (cardsBtn) cardsBtn.addEventListener("click", () => setSkillView("cards"));
  if (badgesBtn) badgesBtn.addEventListener("click", () => setSkillView("badges"));

  document.querySelectorAll(".skill-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const name = pill.dataset.skillName;
      setSkillView("cards");
      const targetCard = [...document.querySelectorAll(".skill-card")].find(c => c.dataset.skillName === name);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        targetCard.classList.add("card-highlight");
        setTimeout(() => targetCard.classList.remove("card-highlight"), 1600);
      }
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
function setupProjectModal() {
  const modal = document.querySelector("#projectModal");
  if (!modal) return;

  const openBtn = document.querySelector("#openAmsModalBtn");
  const closeBtn = document.querySelector("#modalCloseBtn");
  const bottomCloseBtn = document.querySelector("#modalBottomCloseBtn");

  const openModal = () => {
    modal.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.close();
    document.body.style.overflow = "";
  };

  if (openBtn) {
    openBtn.addEventListener("click", openModal);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
  if (bottomCloseBtn) {
    bottomCloseBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("close", () => {
    document.body.style.overflow = "";
  });

  // Light dismiss on backdrop click
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
  });
}

function showToast(message, type = "info") {
  const container = document.querySelector("#toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "success" ? "✓" : "ℹ"}</span>
    <span class="toast-message">${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

function setupConsoleTabs() {
  const tabs = [
    { btn: document.querySelector("#tabProfile"), panel: document.querySelector("#panelProfile") },
    { btn: document.querySelector("#tabTerminal"), panel: document.querySelector("#panelTerminal") },
    { btn: document.querySelector("#tabContact"), panel: document.querySelector("#panelContact") }
  ];

  tabs.forEach(({ btn, panel }) => {
    if (!btn || !panel) return;
    btn.addEventListener("click", () => {
      tabs.forEach(t => {
        const isCurrent = t.btn === btn;
        t.btn.classList.toggle("is-active", isCurrent);
        t.btn.setAttribute("aria-selected", String(isCurrent));
        if (t.panel) {
          t.panel.classList.toggle("is-active", isCurrent);
          t.panel.hidden = !isCurrent;
        }
      });
    });
  });

  const pingBtn = document.querySelector("#runDiagBtn");
  const pingRes = document.querySelector("#terminalPingRes");
  if (pingBtn && pingRes) {
    pingBtn.addEventListener("click", () => {
      pingRes.textContent = "probing edge gateways...";
      pingRes.classList.add("is-pinging");
      setTimeout(() => {
        const rtt = Math.floor(Math.random() * 8) + 11;
        pingRes.textContent = `latency: ${rtt}ms (optimal) · 0% loss`;
        pingRes.classList.remove("is-pinging");
        showToast(`System ping complete: ${rtt}ms round-trip`, "success");
      }, 550);
    });
  }

  const copyEmailBtn = document.querySelector("#quickCopyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("miguel7riovaldez@gmail.com").then(() => {
        showToast("Copied miguel7riovaldez@gmail.com to clipboard!", "success");
      }).catch(() => {
        showToast("Email: miguel7riovaldez@gmail.com", "info");
      });
    });
  }
}

function setupInteractiveHobbies() {
  document.querySelectorAll(".swatch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.color;
      if (color) {
        navigator.clipboard.writeText(color).then(() => {
          showToast(`Copied color ${color} to clipboard!`, "success");
        }).catch(() => {
          showToast(`Color: ${color}`, "info");
        });
      }
    });
  });
}

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

renderSkills();
renderProjects();
renderSocialLinks();
setupSkillFilters();
setupRevealAnimations();
setupProjectModal();
setupConsoleTabs();
setupInteractiveHobbies();
updateScrollUI();
document.querySelector("#currentYear").textContent = new Date().getFullYear();
