// Each object represents a skill category.
// Each category contains its own list of skills.

const skillCategories = [
  {
    title: "Backend Development",
    description: "Server-side applications and business logic",
    icon: "fa-solid fa-server",
    wide: false,
    skills: [
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "Django", icon: "fa-solid fa-code" },
      { name: "Laravel", icon: "fa-brands fa-laravel" },
      { name: "REST APIs", icon: "fa-solid fa-plug" },
      { name: "Authentication", icon: "fa-solid fa-user-shield" },
      { name: "MVC Architecture", icon: "fa-solid fa-layer-group" }
    ]
  },

  {
    title: "Frontend Development",
    description: "Responsive and accessible user interfaces",
    icon: "fa-solid fa-laptop-code",
    wide: false,
    skills: [
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      { name: "Responsive Design", icon: "fa-solid fa-mobile-screen" },
      { name: "Accessibility", icon: "fa-solid fa-universal-access" }
    ]
  },

  {
    title: "Databases",
    description: "Structured data design and management",
    icon: "fa-solid fa-database",
    wide: false,
    skills: [
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "SQLite", icon: "fa-solid fa-database" },
      { name: "Database Design", icon: "fa-solid fa-table" },
      {
        name: "Database Relationships",
        icon: "fa-solid fa-diagram-project"
      },
      { name: "SQL Queries", icon: "fa-solid fa-magnifying-glass-chart" }
    ]
  },

  {
    title: "Tools & Deployment",
    description: "Development workflow and application delivery",
    icon: "fa-solid fa-toolbox",
    wide: false,
    skills: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "Render", icon: "fa-solid fa-cloud-arrow-up" },
      { name: "Supabase", icon: "fa-solid fa-bolt" },
      { name: "Command Line", icon: "fa-solid fa-terminal" },
      { name: "Version Control", icon: "fa-solid fa-code-branch" }
    ]
  },

  {
    title: "Software Engineering",
    description:
      "Applying software engineering principles to build reliable and maintainable applications.",
    icon: "fa-solid fa-wand-magic-sparkles",
    wide: true,
    skills: [
      { name: "Object-Oriented Programming", icon: "fa-solid fa-cube" },
      { name: "Data Structures", icon: "fa-solid fa-diagram-project" },
      { name: "Algorithms", icon: "fa-solid fa-code-branch" },
      { name: "Problem Solving", icon: "fa-solid fa-lightbulb" },
      { name: "Debugging", icon: "fa-solid fa-bug" },
      { name: "Software Development", icon: "fa-solid fa-laptop-code" }
    ]
  }
];