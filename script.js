const projects = [
  {
    title: "Forme",
    page: "forme.html",
    art: "forme",
    description: "A bilingual web design atlas with 40 styles, each with a working interactive demo, plus 240 prompts for creating, redesigning, or refining a website.",
    tags: ["JavaScript", "HTML", "CSS", "Node.js", "Playwright"]
  },
  {
    title: "Codex Judge",
    page: "codex-judge.html",
    art: "judge",
    description: "A local programming judge that runs C++ and Python submissions against public and private test cases, returning verdicts and partial scores.",
    tags: ["Python", "C++17", "Docker", "SQLite"]
  },
  {
    title: "Alegerea Ta",
    page: "university-comparator.html",
    art: "university",
    description: "An interactive catalogue for comparing university programmes in Bucharest by admissions criteria, places, tuition, and Erasmus opportunities.",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Fantasy Pulse",
    page: "fantasy-pulse.html",
    art: "fantasy",
    description: "A Fantasy Premier League assistant for planning squads, transfers, captain picks, and chips with projections across several gameweeks.",
    tags: ["Fantasy Premier League", "Squad planning"]
  },
  {
    title: "Rally",
    page: "rally.html",
    art: "rally",
    description: "A web platform for live padel scores, match statistics, and broadcast graphics through OBS.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "OBS"]
  }
];

const grid = document.querySelector("#project-grid");
grid.innerHTML = projects.map((project) => `
  <article class="project-card">
    <h3><a class="project-title-link" href="${project.page}">${project.title}</a></h3>
    <p>${project.description}</p>
    <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <a class="card-link" href="${project.page}" aria-label="Explore ${project.title}">
      <span class="project-print print-${project.art}" aria-hidden="true"></span>
      <span class="link-label">Explore project <span class="link-arrow" aria-hidden="true">↗</span></span>
    </a>
  </article>
`).join("");
