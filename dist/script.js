// Add new projects here. Keep each description grounded in work you have actually done.
const projects = [
  {
    number: "01",
    title: "Fantasy Pulse",
    status: "FPL ASSISTANT",
    description: "A Fantasy Premier League assistant for planning squads, transfers, captain picks, and chips with multi-week projections.",
    tags: ["Fantasy Premier League", "Squad planning"],
    visual: "visual-padel"
  },
  {
    number: "02",
    title: "Rally",
    status: "PERSONAL PROJECT",
    description: "Project description coming soon.",
    tags: [],
    visual: "visual-lines"
  }
];

const grid = document.querySelector("#project-grid");
grid.innerHTML = projects.map((project) => `
  <article class="project-card">
    <div class="card-top"><span class="card-number">${project.number} / PROJECT</span><span class="card-status">${project.status}</span></div>
    <div class="project-visual ${project.visual}" aria-hidden="true"></div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
  </article>
`).join("");

