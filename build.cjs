const fs = require("node:fs");
const path = require("node:path");

const sourceFolder = path.join(__dirname, "src");
const layoutPath = path.join(sourceFolder, "index.html");
const outputPath = path.join(__dirname, "index.html");

const layout = fs.readFileSync(layoutPath, "utf8");

let includedSections = 0;

const page = layout.replace(
  /<!--\s*include:([^\s]+)\s*-->/g,
  (_, relativePath) => {
    const filePath = path.resolve(sourceFolder, relativePath);
    const relative = path.relative(sourceFolder, filePath);

    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      throw new Error(`Include must stay inside src: ${relativePath}`);
    }

    const content = fs.readFileSync(filePath, "utf8");
    includedSections += 1;

    return content.trimEnd();
  }
);

if (includedSections === 0) {
  throw new Error("No section includes found. Build stopped.");
}

if (/<!--\s*include:/.test(page)) {
  throw new Error("An unresolved include remains. Build stopped.");
}

// Write only after all section files have loaded successfully.
fs.writeFileSync(outputPath, page, "utf8");

console.log(`Built index.html with ${includedSections} sections.`);