const projects = [
  {
    title: "Codex Judge",
    page: "codex-judge.html",
    description: "A local programming judge that runs C++ and Python submissions against public and private test cases, returning verdicts and partial scores.",
    tags: ["Python", "C++17", "Docker", "SQLite"]
  },
  {
    title: "Alegerea Ta",
    page: "university-comparator.html",
    description: "An interactive catalogue for comparing university programmes in Bucharest by admissions criteria, places, tuition, and Erasmus opportunities.",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Fantasy Pulse",
    page: "fantasy-pulse.html",
    description: "A Fantasy Premier League assistant for planning squads, transfers, captain picks, and chips with projections across several gameweeks.",
    tags: ["Fantasy Premier League", "Squad planning"]
  },
  {
    title: "Rally",
    page: "rally.html",
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
    <a class="card-link" href="${project.page}" aria-label="Explore ${project.title}">Explore project <span aria-hidden="true">↗</span></a>
  </article>
`).join("");
