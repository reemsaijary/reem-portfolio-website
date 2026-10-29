// Displays personal information from data.js.
function renderProfile() {
  if (typeof profile === "undefined") {
    return;
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  setText(".hero-title", profile.name);
  setText(".hero-role", profile.role);
  setText(".hero-description", profile.introduction);

    // Displays profile information in the labeled elements.
  document.querySelectorAll("[data-profile-text]").forEach((element) => {
    const field = element.dataset.profileText;

    if (typeof profile[field] === "string") {
      element.textContent = profile[field];
    }
  });
  
  const photo = document.querySelector(".hero-image");

  if (photo) {
    photo.src = profile.photo;
    photo.alt = profile.photoAlt;
  }

    // Updates personal links in Home, Contact, and Footer.
  document.querySelectorAll("[data-profile-link]").forEach((link) => {
    const field = link.dataset.profileLink;
    const value = profile[field];

    if (!value) return;

    link.href = field === "email" ? `mailto:${value}` : value;
  });

  // Updates all three existing Download CV links.
  document.querySelectorAll("a[download]").forEach((link) => {
    link.href = profile.resumeUrl;
  });
}

renderProfile();