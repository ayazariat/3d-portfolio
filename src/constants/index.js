const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];


const words = [
  { text: "Full-Stack", imgPath: "/images/code.svg" },
  { text: "AI", imgPath: "/images/ideas.svg" },
  { text: "SOA", imgPath: "/images/concepts.svg" },
  { text: "Web Apps", imgPath: "/images/designs.svg" },
  { text: "Full-Stack", imgPath: "/images/code.svg" },
  { text: "AI", imgPath: "/images/ideas.svg" },
  { text: "SOA", imgPath: "/images/concepts.svg" },
  { text: "Web Apps", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Key Projects" },
  { value: 4, suffix: "", label: "Certifications" },
  { value: 2, suffix: "+", label: "Internships" },
  { value: 6, suffix: "", label: "Languages" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "End-to-end development of modern web applications with React/Angular front-ends, secure Node.js/Spring Boot back-ends, and microservices architecture.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI & Machine Learning",
    desc: "NLP, smart complaint classification, urgency prediction, and analytics dashboards integrated into production-grade systems.",
  },
  {
    imgPath: "/images/time.png",
    title: "SOA & Agile Collaboration",
    desc: "Service-oriented architectures, REST & SOAP microservices, Dockerised deployments, and agile team workflows.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React / Angular",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python / AI",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js / Express",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Spring Boot / Java",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker / DevOps",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Aya excelled in developing an innovative Smart City platform with AI-powered features during her PFE internship at DEV SYNC.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Stagiaire PFE – Développement Logiciel",
    date: "Février 2026 – Mai 2026 · Nabeul, Tunisie",
    responsibilities: [
      "Conception et développement d'une plateforme Smart City de gestion des réclamations citoyennes.",
      "Implémentation d'un workflow complet : dépôt, validation, assignation, résolution.",
      "Mise en place d'un système d'authentification sécurisé et gestion des rôles (JWT, RBAC).",
      "Développement de fonctionnalités IA : classification automatique des réclamations, prédiction du niveau d'urgence, détection de doublons, analyse de tendances urbaines.",
      "Développement de tableaux de bord analytiques pour le suivi et l'aide à la décision.",
    ],
  },
  {
    review: "Aya contributed to the JOCL web application development with strong technical skills in full-stack technologies at CNI.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Stagiaire en Développement Logiciel",
    date: "Juillet 2025 – Août 2025 · Tunis, Tunisie",
    responsibilities: [
      "Développement de l'application web JOCL (Journal Officiel des Collectivités Locales) avec Angular / Spring Boot (Java 23).",
      "Définition du modèle de données et conception du schéma sous PostgreSQL.",
      "Collaboration sur GitHub et participation aux réunions techniques dans une approche agile.",
    ],
  },

];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// Testimonials intentionally removed to keep the portfolio authentic and engineering-focused.
// Use the sections below (Projects, Experience, Skills) to communicate impact instead.

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/git.svg",
    href: "https://github.com/ayazariat",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    href: "https://www.linkedin.com/in/aya-zariat/",
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
