
/* =========================================================
   RACHAEL ONG — PORTFOLIO
   PROJECT DISPLAY & INTERACTIONS
   ========================================================= */


/* =========================================================
   01. HTML ELEMENTS
   ========================================================= */

const grid = document.querySelector("#project-grid");
const filters = document.querySelectorAll(".filter");

const modal = document.querySelector("#project-modal");
const modalClose = document.querySelector(".modal-close");
const modalContent = document.querySelector("#modal-content");

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


/* =========================================================
   02. PROJECT CARD GENERATOR
   ========================================================= */

function renderProjects(filter = "all") {

    if (!grid) return;

    const visible = projects.filter(project =>
        filter === "all" || project.category === filter
    );

    grid.innerHTML = visible.map(project => {

        const hasLink = Boolean(project.link);

        const projectVisual = `
            <div class="project-visual project-image-link"
                 ${hasLink ? `role="link" tabindex="0" aria-label="Open live ${project.title}"` : ""}
            >
                <img
                    src="${project.image}"
                    alt="${project.title} screenshot"
                    loading="lazy"
                >

                <span class="visual-tag">${project.label}</span>

                <span class="visual-count">
                    PROJECT / ${project.number}
                </span>

                ${hasLink ? `
                    <span class="image-open">↗</span>
                ` : ""}
            </div>
        `;

        return `
            <article class="project-card">

                ${hasLink ? `
                    <a
                        class="project-visual-link"
                        href="${project.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open live ${project.title}"
                    >
                        ${projectVisual}
                    </a>
                ` : projectVisual}

                <div class="project-content">

                    <div class="project-meta">

                        <span>
                            ${project.category === "sport"
                                ? "SPORT & PERFORMANCE"
                                : "WEB DEVELOPMENT"}
                        </span>

                        <span class="status">
                            ● COMPLETED
                        </span>

                    </div>

                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <div class="project-bottom">

                        <div class="project-tags">
                            ${project.tags.map(tag => `
                                <span>${tag}</span>
                            `).join("")}
                        </div>

                        <button
                            class="case-study-button"
                            type="button"
                            data-project="${project.number}"
                        >
                            Case study ↗
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");


    /* Attach case study buttons */

    grid.querySelectorAll(".case-study-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                openCaseStudy(button.dataset.project);

            });

        });

}


/* =========================================================
   03. OPEN PROJECT CASE STUDY
   ========================================================= */

function openCaseStudy(number) {

    if (!modal || !modalContent) return;

    const project = projects.find(item =>
        item.number === number
    );

    if (!project) return;

    const hasLink = Boolean(project.link);

    modalContent.innerHTML = `

        <p class="eyebrow">
            PROJECT ${project.number} / CASE STUDY
        </p>

        <h2>${project.title}</h2>

        <img
            class="modal-image"
            src="${project.image}"
            alt="${project.title} screenshot"
        >

        <div class="case-study-copy">

            <section>

                <span class="case-label">
                    THE CHALLENGE
                </span>

                <h3>Problem statement</h3>

                <p>${project.problem}</p>

            </section>


            <section>

                <span class="case-label">
                    THE BUILD
                </span>

                <h3>Approach</h3>

                <p>${project.approach}</p>

            </section>


            <section>

                <span class="case-label">
                    THE VALUE
                </span>

                <h3>Outcome</h3>

                <p>${project.impact}</p>

            </section>

        </div>


        <div class="modal-footer">

            <div class="project-tags">

                ${project.tags.map(tag => `
                    <span>${tag}</span>
                `).join("")}

            </div>

            ${hasLink ? `
                <a
                    class="button button-primary"
                    href="${project.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit live project ↗
                </a>
            ` : `
                <span class="case-study-button">
                    Project case study
                </span>
            `}

        </div>

    `;


    /* Display modal */

    modal.classList.add("open");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    if (modalClose) {
        modalClose.focus();
    }

}


/* =========================================================
   04. CLOSE PROJECT CASE STUDY
   ========================================================= */

function closeCaseStudy() {

    if (!modal) return;

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


/* Close button */

if (modalClose) {

    modalClose.addEventListener("click", closeCaseStudy);

}


/* Close when clicking outside the modal */

if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeCaseStudy();

        }

    });

}


/* Close with Escape key */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("open")
    ) {

        closeCaseStudy();

    }

});


/* =========================================================
   05. PROJECT CATEGORY FILTERS
   ========================================================= */

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");

        renderProjects(button.dataset.filter);

    });

});


/* =========================================================
   06. MOBILE NAVIGATION
   ========================================================= */

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    /* Close navigation after selecting a section */

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   07. AUTOMATIC FOOTER YEAR
   ========================================================= */

const yearElement = document.querySelector("#year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================================
   08. INITIALISE PORTFOLIO
   ========================================================= */

renderProjects();

