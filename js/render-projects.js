// Builds project cards using the information in projects-data.js.
function renderProjects() {
  const projectsGrid = document.querySelector(".projects-grid");

  if (!projectsGrid || typeof projects === "undefined") {
    return;
  }

  // Keeps text safe to display inside HTML.
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
      const replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return replacements[character];
    });
  }

  function createLink(url, label, icon, buttonClass) {
    if (!url) return "";

    return `
      <a
        href="${escapeHTML(url)}"
        class="button ${buttonClass}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="${icon}" aria-hidden="true"></i>
        ${label}
      </a>
    `;
  }

  const cards = projects.map((project) => {
    const heading = `
      <p class="project-type">${escapeHTML(project.type)}</p>
      <h3 class="project-title">${escapeHTML(project.title)}</h3>
    `;

    const status = project.status
      ? `
        <div class="project-status">
          <span class="project-status-dot"></span>
          ${escapeHTML(project.status)}
        </div>
      `
      : "";

    const features = project.features.map((feature) => `
      <li>
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        ${escapeHTML(feature)}
      </li>
    `).join("");

    const technologies = project.technologies.map((technology) => `
      <span>${escapeHTML(technology)}</span>
    `).join("");

    return `
      <article class="project-card glass-card ${
        project.featured ? "project-card-featured" : ""
      }">
        <div class="project-image-wrapper">
          <img
            src="${escapeHTML(project.image)}"
            alt="${escapeHTML(project.imageAlt)}"
            class="project-image"
          >
          ${project.featured
            ? '<span class="project-badge">⭐ Featured Project</span>'
            : ""}
        </div>

        <div class="project-content">
          ${project.featured || project.status
            ? `
              <div class="project-heading">
                <div>${heading}</div>
                ${status}
              </div>
            `
            : heading}

          <p class="project-description">
            ${escapeHTML(project.description)}
          </p>

          <ul class="project-features">${features}</ul>

          <div class="project-technologies">
            ${technologies}
          </div>

          <div class="project-actions">
            ${createLink(
              project.demoUrl,
              "Live Demo",
              "fa-solid fa-arrow-up-right-from-square",
              "button-primary"
            )}
            ${createLink(
              project.codeUrl,
              "View Code",
              "fa-brands fa-github",
              "button-secondary"
            )}
          </div>
        </div>
      </article>
    `;
  }).join("");

  projectsGrid.innerHTML = cards;
}

renderProjects();