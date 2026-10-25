// Builds education and certificate cards using certificates-data.js.
function renderCertificates() {
  const certificatesGrid = document.querySelector(".certificates-grid");

  if (!certificatesGrid || typeof certificates === "undefined") {
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

  const cards = certificates.map((certificate) => {
    const details = certificate.details.map((detail) => `
      <span>
        <i class="${escapeHTML(detail.icon)}" aria-hidden="true"></i>
        ${escapeHTML(detail.text)}
      </span>
    `).join("");

    const status = certificate.status
      ? `
        <div class="certificate-status">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          <span>${escapeHTML(certificate.status)}</span>
        </div>
      `
      : "";

    const actions = certificate.image
      ? `
        <div class="certificate-actions">
          <button
            type="button"
            class="button button-secondary certificate-view-button"
            data-certificate-image="${escapeHTML(certificate.image)}"
            data-certificate-title="${escapeHTML(certificate.previewTitle)}"
            aria-haspopup="dialog"
          >
            <i
              class="${escapeHTML(certificate.buttonIcon)}"
              aria-hidden="true"
            ></i>
            ${escapeHTML(certificate.buttonLabel)}
          </button>
        </div>
      `
      : "";

    return `
      <article class="certificate-card glass-card ${
        certificate.featured ? "certificate-card-featured" : ""
      }">
        <div class="certificate-icon">
          <i
            class="${escapeHTML(certificate.icon)}"
            aria-hidden="true"
          ></i>
        </div>

        <div class="certificate-content">
          <span class="certificate-type">
            ${escapeHTML(certificate.type)}
          </span>

          <h3 class="certificate-title">
            ${escapeHTML(certificate.title)}
          </h3>

          <p class="certificate-issuer">
            ${escapeHTML(certificate.issuer)}
          </p>

          <p class="certificate-description">
            ${escapeHTML(certificate.description)}
          </p>

          <div class="certificate-details">${details}</div>

          ${status}

          ${certificate.featured ? "" : actions}
        </div>

        ${certificate.featured ? actions : ""}
      </article>
    `;
  }).join("");

  certificatesGrid.innerHTML = cards;
}

renderCertificates();