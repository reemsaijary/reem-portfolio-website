// Builds experience cards using experience-data.js.
function renderExperience() {
  const experienceList = document.getElementById("experience-list");

  if (!experienceList || typeof experiences === "undefined") {
    return;
  }

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

  const cards = experiences.map((experience) => {
    const highlights = experience.highlights.map((highlight) => `
      <div class="experience-item">
        <i class="fa-solid fa-check" aria-hidden="true"></i>
        ${escapeHTML(highlight)}
      </div>
    `).join("");

    const technologies = experience.technologies.map((technology) => `
      <span>${escapeHTML(technology)}</span>
    `).join("");

    const repositoryLink = experience.repositoryUrl
      ? `
        <div class="experience-actions">
          <a
            href="${escapeHTML(experience.repositoryUrl)}"
            class="button button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            ${escapeHTML(experience.repositoryLabel)}
          </a>
        </div>
      `
      : "";

    return `
      <article class="experience-card">
        <div class="experience-top">
          <div class="experience-company">
            <div class="experience-icon">
              <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
            </div>

            <div>
              <h3>${escapeHTML(experience.company)}</h3>
              <p class="experience-position">
                ${escapeHTML(experience.position)}
              </p>
            </div>
          </div>

          <div class="experience-meta">
            <span>
              <i class="fa-solid fa-calendar" aria-hidden="true"></i>
              ${escapeHTML(experience.period)}
            </span>
            <span>
              <i class="fa-solid fa-globe" aria-hidden="true"></i>
              ${escapeHTML(experience.location)}
            </span>
          </div>
        </div>

        <p class="experience-description">
          ${escapeHTML(experience.description)}
        </p>

        <div class="experience-highlights">${highlights}</div>

        <div class="experience-tech">${technologies}</div>

        ${repositoryLink}
      </article>
    `;
  }).join("");

  experienceList.innerHTML = cards;
}

renderExperience();