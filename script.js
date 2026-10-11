const projects = [
  {
    title: "BookHive",
    repo: "https://github.com/vishak45/bookapp",
    description: "BookHive is a free, open-source platform built for book lovers.",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "Node.js"],
    featured: true,
  },
  {
    title: "Live Streaming Platform",
    repo: "https://github.com/vishak45/live-streaming-platform",
    description: "Real-time streaming platform project.",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "Pub/Sub Architecture",
    repo: "https://github.com/vishak45/pub-sub-architecture",
    description: "Distributed publish/subscribe architecture experiment.",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "TypeGearUp",
    repo: "https://github.com/vishak45/fasttype",
    description: "TypeGearUp is your free, lightning-fast typing arena — where speed meets precision.",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript"],
  },
  {
    title: "Distributed Task System",
    repo: "https://github.com/vishak45/distributed-task-system",
    description:
      "An end-to-end distributed task processing system demonstrating queue-based architecture, real-time monitoring, and multi-service integration using Node.js, Python, Redis, and Docker.",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "Node.js", "Python/ML", "Redis", "Docker"],
    featured: true,
  },
  {
    title: "Online IDE",
    repo: "https://github.com/vishak45/online-IDE",
    description: "Online IDE powered by Docker engine",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "Node.js", "Docker"],
    featured: true,
  },
  {
    title: "Multiplayer Tic-Tac-Toe",
    repo: "https://github.com/vishak45/multiplayer-tic-tac-toe-docker",
    description: "Multiplayer tic-tac-toe powered via Nginx, Socket.IO and Node.Js",
    language: "HTML",
    category: "HTML",
    technologies: ["HTML", "Node.js", "Nginx", "Socket.IO", "Docker"],
  },
  {
    title: "Smart AI Location Tracker",
    repo: "https://github.com/vishak45/smart-ai-location-tracker",
    description: "ML-driven, location-aware app that predicts nearby amenities and shows per-amenity maps.",
    language: "Jupyter Notebook",
    category: "Python/ML",
    technologies: ["Python/ML"],
    featured: true,
  },
  {
    title: "Reverse Proxy Monitor",
    repo: "https://github.com/vishak45/reverse-proxy-monitor",
    description: "A project to demonstrate performance of Apache and Nginx as proxy servers",
    language: "HTML",
    category: "HTML",
    technologies: ["HTML", "Nginx"],
  },
  {
    title: "Request-Based Marketplace",
    repo: "https://github.com/vishak45/Request-Based-Marketplace",
    description: "A php project with multi-container Docker stack",
    language: "PHP",
    category: "PHP",
    technologies: ["PHP", "Docker"],
  },
  {
    title: "Who's That Pokémon",
    repo: "https://github.com/vishak45/who-s-that-pokemon",
    description: "Pokémon image classifier inspired by the classic \"Who's That Pokémon?\" segment!",
    language: "Jupyter Notebook",
    category: "Python/ML",
    technologies: ["Python/ML"],
  },
  {
    title: "Book Image Validator",
    repo: "https://github.com/vishak45/Book-Image-Validator",
    description: "An automated system designed to classify book images as VALID or INVALID.",
    language: "Jupyter Notebook",
    category: "Python/ML",
    technologies: ["Python/ML"],
  },
  {
    title: "Email Spam Detector",
    repo: "https://github.com/vishak45/email-spam-detector",
    description: "Machine-learning workflow for email spam classification.",
    language: "Jupyter Notebook",
    category: "Python/ML",
    technologies: ["Python/ML"],
  },
  {
    title: "Heroverse Native App",
    repo: "https://github.com/vishak45/heroverse-native-app",
    description:
      "Heroverse is your ultimate hub for exploring, discovering, and geeking out over your favorite heroes and villains.",
    language: "TypeScript",
    category: "TypeScript",
    technologies: ["TypeScript", "React Native"],
  },
  {
    title: "Food App",
    repo: "https://github.com/vishak45/native-app",
    description: "A simple foodapp built using React Native(Expo), Node.Js and PostgreSQL",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "HeroDex",
    repo: "https://github.com/vishak45/heroApp",
    description:
      "HeroDex is your ultimate hub for exploring, discovering, and geeking out over your favorite heroes and villains.",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "React Native"],
  },
  {
    title: "Blogit",
    repo: "https://github.com/vishak45/blogapp",
    description: "Blogit is a free, open-source platform where your ideas come to life.",
    language: "JavaScript",
    category: "JavaScript/Node",
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "Mini Project",
    repo: "https://github.com/vishak45/miniproject",
    description: "PHP project implementation.",
    language: "PHP",
    category: "PHP",
    technologies: ["PHP"],
  },
];

const filters = ["All", "JavaScript/Node", "TypeScript", "PHP", "Python/ML", "HTML"];

const projectGrid = document.getElementById("project-grid");
const projectCount = document.getElementById("project-count");
const filterList = document.getElementById("filter-list");
const highlightGrid = document.getElementById("highlight-grid");
const skillList = document.getElementById("skill-list");

function createProjectCard(project) {
  const tags = [project.language, ...project.technologies.filter((tech) => tech !== project.language)];
  return `
    <article class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-list">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <a class="card-link" href="${project.repo}" target="_blank" rel="noreferrer">View Repository ↗</a>
    </article>
  `;
}

function renderProjects(activeFilter = "All") {
  const visibleProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
  projectGrid.innerHTML = visibleProjects.map(createProjectCard).join("");
  projectCount.textContent = `${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"} shown`;
}

function renderFilters() {
  filterList.innerHTML = filters
    .map(
      (filter, index) =>
        `<button class="filter-btn" type="button" data-filter="${filter}" aria-pressed="${index === 0}">
          ${filter}
        </button>`
    )
    .join("");

  const buttons = filterList.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => activateFilter(button.dataset.filter));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateFilter(button.dataset.filter);
      }
    });
  });
}

function activateFilter(filter) {
  const buttons = filterList.querySelectorAll("button");
  buttons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderProjects(filter);
}

function renderHighlights() {
  const featured = projects.filter((project) => project.featured);
  highlightGrid.innerHTML = featured.map(createProjectCard).join("");
}

function renderSkills() {
  const preferredOrder = [
    "JavaScript",
    "Node.js",
    "TypeScript",
    "PHP",
    "Python/ML",
    "React Native",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Nginx",
    "Socket.IO",
  ];
  const available = new Set(projects.flatMap((project) => project.technologies));
  skillList.innerHTML = preferredOrder.filter((item) => available.has(item)).map((skill) => `<li>${skill}</li>`).join("");
}

function setupMobileNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const navLinks = nav.querySelectorAll("a");

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupActiveNavState() {
  const sections = ["projects", "highlights", "skills", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const links = Array.from(document.querySelectorAll("[data-nav-link]"));

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            const active = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("active", active);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

renderFilters();
renderProjects();
renderHighlights();
renderSkills();
setupMobileNav();
setupActiveNavState();
