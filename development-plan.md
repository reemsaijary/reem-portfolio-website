# Reem Saijary Portfolio Website

## 1. Project Overview

A modern, responsive, and maintainable personal portfolio website that presents my software development projects, technical skills, education, experience, and certificates.

This portfolio will be updated over time as I complete new projects, gain experience, and develop new skills.

---

## 2. Project Goals

- Build a professional online presence.
- Showcase my strongest software development projects.
- Present my technical skills clearly.
- Highlight my education, training, and internship experience.
- Provide easy access to my GitHub, LinkedIn, CV, and contact information.
- Create a structure that is easy to update and maintain.
- Ensure the website works well on desktop, tablet, and mobile devices.

---

## 3. Target Audience

- Recruiters
- Hiring managers
- Internship coordinators
- Potential clients
- Software developers
- Professional connections

---

## 4. Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

Additional tools or libraries may be added later only when they provide clear value to the project.

---

## 5. Design Direction

The portfolio should have a clean, modern, professional, and welcoming appearance.

### Initial Design Preferences

- Light theme
- Clear visual hierarchy
- Comfortable spacing
- Simple and professional typography
- Minimal and purposeful animations
- Consistent buttons, cards, and section layouts
- Recruiter-friendly content presentation

The color palette, typography, spacing, and other visual details may change during development as the design is tested and refined.

All reusable design values will be stored as CSS custom properties inside `variables.css` so the visual theme can be changed easily later.

---

## 6. Planned Website Sections

-  Navigation Bar
-  Hero Section
-  About Me
-  Technical Skills
-  Featured Projects
-  Experience
-  Education
-  Training and Certificates
-  Contact Section
-  Footer

---

## 7. Planned Features

- Responsive navigation menu
- Smooth scrolling between sections
- Professional introduction and developer title
- Downloadable CV
- GitHub and LinkedIn links
- Dynamically generated project cards
- Dynamically generated skills
- Dynamically generated experience entries
- Dynamically generated certificate cards
- GitHub repository links for projects
- Live demo links where available
- Mobile-friendly layout
- Accessible buttons, links, headings, and images
- Simple animations that do not affect usability

---

## 8. Content Management Approach

Content that may need regular updates will be stored in `js/data.js`.

This may include:

- Projects
- Technical skills
- Experience
- Education
- Certificates

The purpose of this approach is to make future updates easier without changing the main page structure.

Website behavior and dynamic content rendering will be handled in `js/main.js`.

---

## 9. Project Structure

```text
01-Portfolio-Website/
│
├── assets/
│   ├── icons/
│   ├── images/
│   │   ├── certificates/
│   │   ├── profile/
│   │   └── projects/
│   └── resume/
│
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   ├── responsive.css
│   └── style.css
│
├── js/
│   ├── data.js
│   └── main.js
│
├── index.html
├── README.md
└── development-plan.md