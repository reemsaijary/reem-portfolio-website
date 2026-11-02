// Builds skill categories using skills-data.js.
function renderSkills() {
  const skillsGrid = document.querySelector(".skills-grid");

  if (!skillsGrid || typeof skillCategories === "undefined") {
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

  const cards = skillCategories.map((category) => {
    const skills = category.skills.map((skill) => `
      <div class="skill-item">
        <i class="${escapeHTML(skill.icon)}" aria-hidden="true"></i>
        <span>${escapeHTML(skill.name)}</span>
      </div>
    `).join("");

    return `
      <article class="skill-category glass-card ${
        category.wide ? "skill-category-wide" : ""
      }">
        <div class="skill-category-header">
          <div class="skill-category-icon">
            <i
              class="${escapeHTML(category.icon)}"
              aria-hidden="true"
            ></i>
          </div>

          <div>
            <h3>${escapeHTML(category.title)}</h3>
            <p>${escapeHTML(category.description)}</p>
          </div>
        </div>

        <div class="skill-list ${
          category.wide ? "skill-list-wide" : ""
        }">
          ${skills}
        </div>
      </article>
    `;
  }).join("");

  skillsGrid.innerHTML = cards;
}

renderSkills();