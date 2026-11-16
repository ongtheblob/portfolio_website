const grid = document.querySelector("#project-grid");
const filters = document.querySelectorAll(".filter");
const modal = document.querySelector("#project-modal");
const modalClose = document.querySelector(".modal-close");
const modalContent = document.querySelector("#modal-content");

function renderProjects(filter = "all") {
  const visible = projects.filter(project => filter === "all" || project.category === filter);
  grid.innerHTML = visible.map(project => `
    <article class="project-card">
      <a class="project-visual project-image-link" href="${project.link}" target="_blank" rel="noreferrer" aria-label="Open live ${project.title}">
        <img src="${project.image}" alt="${project.title} screenshot" loading="lazy">
        <span class="visual-tag">${project.label}</span>
        <span class="visual-count">PROJECT / ${project.number}</span>
        <span class="image-open">↗</span>
      </a>
      <div class="project-content">
        <div class="project-meta"><span>${project.category === "sport" ? "SPORT & PERFORMANCE" : "WEB DEVELOPMENT"}</span><span class="status">● COMPLETED</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-bottom">
          <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
          <button class="case-study-button" type="button" data-project="${project.number}">Case study ↗</button>
        </div>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".case-study-button").forEach(button => {
    button.addEventListener("click", () => openCaseStudy(button.dataset.project));
  });
}

function openCaseStudy(number) {
  const project = projects.find(item => item.number === number);
  if (!project) return;
  modalContent.innerHTML = `
    <p class="eyebrow">PROJECT ${project.number} / CASE STUDY</p>
    <h2>${project.title}</h2>
    <img class="modal-image" src="${project.image}" alt="${project.title} screenshot">
    <div class="case-study-copy">
      <section><span class="case-label">THE CHALLENGE</span><h3>Problem statement</h3><p>${project.problem}</p></section>
      <section><span class="case-label">THE BUILD</span><h3>Approach</h3><p>${project.approach}</p></section>
      <section><span class="case-label">THE VALUE</span><h3>Outcome</h3><p>${project.impact}</p></section>
    </div>
    <div class="modal-footer">
      <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <a class="button button-primary" href="${project.link}" target="_blank" rel="noreferrer">Visit live project ↗</a>
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}
function closeCaseStudy() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
modalClose.addEventListener("click", closeCaseStudy);
modal.addEventListener("click", event => { if (event.target === modal) closeCaseStudy(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("open")) closeCaseStudy(); });

filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderProjects(button.dataset.filter);
}));
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
