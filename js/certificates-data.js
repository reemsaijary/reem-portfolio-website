// Education and certificates displayed on your portfolio.

const certificates = [
  {
    type: "Education",
    title: "Bachelor of Science in Computer Science",
    issuer: "Lebanese International University",
    description:
      "Graduated with distinction after completing a comprehensive Computer Science program focused on software development, databases, algorithms, networking, and information systems.",
    icon: "fa-solid fa-graduation-cap",
    featured: true,
    details: [
      { text: "2026", icon: "fa-solid fa-calendar" },
      {
        text: "Graduated with Distinction",
        icon: "fa-solid fa-award"
      },
      { text: "GPA 3.97 / 4.00", icon: "fa-solid fa-chart-line" }
    ],
    status: "Degree completed",
    image: "assets/certificates/university-gpa-summary.png",
    previewTitle: "University GPA Summary",
    buttonLabel: "View GPA Summary",
    buttonIcon: "fa-solid fa-chart-line"
  },

  {
    type: "Internship",
    title: "Operations & Technical Internship",
    issuer: "EVA Ops",
    description:
      "Completed a practical internship focused on backend development, business systems, deployment, technical operations, and real-world project delivery.",
    icon: "fa-solid fa-briefcase",
    featured: false,
    details: [
      { text: "June 2026", icon: "fa-solid fa-calendar" },
      { text: "Remote", icon: "fa-solid fa-globe" }
    ],
    status: "",
    image: "assets/certificates/eva-ops-internship-certificate.png",
    previewTitle: "EVA Ops Internship Certificate",
    buttonLabel: "View Certificate",
    buttonIcon: "fa-solid fa-image"
  },

  {
    type: "Professional Training",
    title: "Accelerated Vocational Course in Web Development",
    issuer: "Anera · Supported by UNICEF",
    description:
      "Completed approximately 150 hours of intensive web development training together with additional employability and career-readiness training.",
    icon: "fa-solid fa-laptop-code",
    featured: false,
    details: [
      { text: "February 2026", icon: "fa-solid fa-calendar" },
      { text: "150+ Training Hours", icon: "fa-solid fa-clock" }
    ],
    status: "",
    image: "assets/certificates/anera-web-development-certificate.png",
    previewTitle: "Anera Web Development Certificate",
    buttonLabel: "View Certificate",
    buttonIcon: "fa-solid fa-image"
  },

  {
  type: "Internship",
  title: "TechTalks Internship — Python Track",
  issuer: "TechTalks",
  description:
    "Completed a team-based internship, contributing to Ordira, a Django platform for small online shops.",
  icon: "fa-solid fa-briefcase",
  featured: false,
  details: [
    { text: "October 2026", icon: "fa-solid fa-calendar" },
    { text: "Remote", icon: "fa-solid fa-globe" }
  ],
  status: "Completed",
  image: "assets/certificates/techtalks-internship-certificate.png",
  previewTitle: "TechTalks Internship Certificate",
  buttonLabel: "View Certificate",
  buttonIcon: "fa-solid fa-image"
}

];