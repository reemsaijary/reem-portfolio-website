# Reem Saijary Portfolio Website

## 1. Project Overview

A modern, responsive, and maintainable personal portfolio website designed to present my software development projects, technical skills, education, professional experience, and certifications.

The portfolio serves as my professional online presence and will continue to evolve as I complete new projects, strengthen my technical skills, and gain additional experience.

---

## 2. Project Goals

- Build a professional online presence.
- Showcase my strongest software development projects.
- Present my technical skills clearly.
- Highlight my education, training, and internship experience.
- Provide direct access to my GitHub, LinkedIn, CV, and email.
- Create a website that is easy to update and maintain.
- Ensure the website works correctly on desktop, tablet, and mobile devices.
- Apply semantic HTML, reusable CSS, accessibility practices, and clean code organization.

---

## 3. Target Audience

- Recruiters
- Hiring managers
- Internship coordinators
- Potential clients
- Software developers
- Professional connections

---

## 4. Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Git
- GitHub
- Visual Studio Code
- GitHub Pages or another static hosting platform

---

## 5. Final Design Direction

The final portfolio uses a dark, modern, space-inspired visual theme.

### Design Characteristics

- Dark navy and blue color palette
- Starry background
- Glassmorphism-style cards
- Blue gradient accents
- Clear visual hierarchy
- Responsive layouts
- Professional typography
- Consistent buttons and card components
- Subtle hover effects and glow effects
- Recruiter-friendly content presentation
- Minimal motion that does not distract from the content

Reusable design values are stored as CSS custom properties inside `variables.css`.

---

## 6. Website Sections

- Navigation Bar
- Hero Section
- About Me
- Skills and Technologies
- Featured Projects
- Professional Experience
- Education and Certifications
- Contact Section
- Footer
- Certificate Preview Modal

---

## 7. Implemented Features

- Responsive navigation menu
- Sticky navigation header
- Smooth scrolling between sections
- Professional introduction and developer title
- Downloadable CV
- GitHub, LinkedIn, and email links
- Responsive project cards
- Responsive skill categories
- Experience timeline and cards
- Education and certification cards
- Certificate preview modal
- Keyboard support for closing the modal
- Escape-key modal closing
- Dynamic footer year
- Mobile-friendly layout
- Visible keyboard focus styles
- Descriptive image alternative text
- Reduced-motion support
- Custom portfolio favicon
- Reusable CSS components
- Organized CSS architecture
- Responsive desktop, tablet, and mobile layouts

---

## 8. Content Management Approach

The current portfolio content is written directly in `index.html`.

This includes:

- Projects
- Technical skills
- Experience
- Education
- Certifications
- Contact information

The `js/data.js` file is reserved for future use if the portfolio is later converted to dynamically render repeated content using JavaScript.

Website interactions and behavior are handled in `js/main.js`.

These interactions include:

- Mobile navigation behavior
- Header styling while scrolling
- Certificate modal controls
- Dynamic footer year

---

## 9. CSS Architecture

The CSS is separated by responsibility to make the project easier to maintain.

- `variables.css` — colors, typography, spacing, shadows, transitions, and other design tokens
- `reset.css` — browser reset and global base styles
- `layout.css` — reusable containers, grids, sections, and layout utilities
- `components.css` — buttons, navigation, cards, and reusable interface components
- `style.css` — section-specific styles
- `responsive.css` — media queries and responsive adjustments

---

## 10. Project Structure

```text
01-Portfolio-Website/
│
├── assets/
│   ├── certificates/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   │   ├── background/
│   │   ├── certificates/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── favicon.png
│   │   └── portfolio-preview.png
│   └── resume/
│       └── Reem-Saijary-CV.pdf
│
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── data.js
│   └── main.js
│
├── index.html
├── README.md
└── development-plan.md