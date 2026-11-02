const fs = require("node:fs");
const path = require("node:path");

const layoutPath = path.join(__dirname, "src", "index.html");
const sectionsFolder = path.join(__dirname, "src", "sections");

const source = fs.readFileSync(layoutPath, "utf8");

const expectedIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "certificates",
  "contact"
];

const sections = [];
const layout = source.replace(
  /<section\b[^>]*>[\s\S]*?<\/section>/gi,
  (html) => {
    const openingTag = html.slice(0, html.indexOf(">") + 1);
    const id = openingTag.match(/\bid="([^"]+)"/)?.[1];

    if (!expectedIds.includes(id)) {
      throw new Error(`Unexpected section: ${id}`);
    }

    sections.push({ id, html });

    return `<!-- include:sections/${id}.html -->`;
  }
);

// Check everything before writing any files.
for (const id of expectedIds) {
  if (sections.filter((section) => section.id === id).length !== 1) {
    throw new Error(`Expected exactly one section named: ${id}`);
  }

  const destination = path.join(sectionsFolder, `${id}.html`);

  if (fs.existsSync(destination)) {
    throw new Error(`File already exists: ${destination}`);
  }
}

for (const section of sections) {
  const destination = path.join(
    sectionsFolder,
    `${section.id}.html`
  );

  fs.writeFileSync(destination, section.html + "\n", "utf8");
}

fs.writeFileSync(layoutPath, layout, "utf8");

console.log("Created seven section files and updated src/index.html.");
console.log("Your root index.html is unchanged.");