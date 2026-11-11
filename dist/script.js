// Add new projects here. Keep each description grounded in work you have actually done.
const projects = [
  {
    number: "01",
    title: "Padel Pro",
    status: "COMPLETED",
    description: "A responsive multi-page website about padel, built to bring together player profiles, equipment recommendations, and a clear guide to the rules.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive design"],
    visual: "visual-padel"
  },
  {
    number: "02",
    title: "Padel Video Analysis",
    status: "IN PROGRESS",
    description: "A portfolio project exploring how match footage could be turned into useful insights for padel players. The MVP is being planned and built step by step.",
    tags: ["Computer vision", "Video analysis", "Padel"],
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

// Replace this with your real contact address when you are ready to publish.
const contactEmail = "hello@example.com";
document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.href = `mailto:${contactEmail}`;
});
