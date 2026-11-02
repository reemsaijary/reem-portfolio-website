// Displays the information from about-data.js.
function renderAbout() {
  if (typeof about === "undefined") {
    return;
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  const summary = document.querySelector(
    "#about .about-header .section-description"
  );
  const subtitle = document.querySelector("#about .about-subtitle");

  if (summary) summary.textContent = about.summary;
  if (subtitle) subtitle.textContent = about.subtitle;

  const paragraphsContainer = document.getElementById("about-paragraphs");

  if (paragraphsContainer) {
    const paragraphs = about.paragraphs.map((text) => {
      return createElement("p", "", text);
    });

    paragraphsContainer.replaceChildren(...paragraphs);
  }

  const highlightsContainer = document.querySelector(
    "#about .about-highlights"
  );

  if (highlightsContainer) {
    const cards = about.highlights.map((highlight) => {
      const card = createElement("article", "about-card glass-card");
      const iconWrapper = createElement("div", "about-card-icon");
      const icon = createElement("i", highlight.icon);

      icon.setAttribute("aria-hidden", "true");
      iconWrapper.append(icon);

      const content = createElement("div");
      const title = createElement("h3", "", highlight.title);
      const description = createElement("p", "", highlight.description);

      content.append(title, description);
      card.append(iconWrapper, content);

      return card;
    });

    highlightsContainer.replaceChildren(...cards);
  }
}

renderAbout();