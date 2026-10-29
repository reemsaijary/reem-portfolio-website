# Portfolio Editing Guide

## Where to update information

| Information | File |
|---|---|
| Name, role, introduction, photo, contact links, CV path | js/data.js |
| About paragraphs and highlight cards | js/about-data.js |
| Projects | js/projects-data.js |
| Experience | js/experience-data.js |
| Skills and categories | js/skills-data.js |
| Education and certificates | js/certificates-data.js |
| Section headings, contact introduction, footer text, navigation | index.html |
| Colors, fonts, spacing variables | css/variables.css |
| Main styling | css/style.css |
| Mobile styling | css/responsive.css |

## Update an existing item

1. Open its data file.
2. Edit the text inside quotation marks.
3. Keep the property names, commas, brackets, and braces.
4. Save and check the local preview.

## Add a project, experience, or certificate

1. Copy one complete object in the corresponding array.
2. Paste it as another entry inside that array.
3. Separate neighboring objects with a comma.
4. Replace its information.
5. Put any new images in the appropriate assets folder.
6. Check the new card and its buttons in the preview.

The order of entries in the array controls their display order.

## Add skills or About content

- Add a skill inside the appropriate category's skills array.
- Add an About paragraph as another string in paragraphs.
- Add an About highlight by copying one object in highlights.

## Add an entirely new section

A new section needs HTML; adding an entry to a data file
only adds an item to an existing section.

1. Add a section inside main in index.html.
2. Give it a unique id and use the existing section/container classes.
3. Add its heading and content.
4. Add a navigation link pointing to its id.
5. Add styling if needed.
6. For repeated cards, follow an existing data/render file pair.
7. Load a new data script before its renderer, before main.js.

