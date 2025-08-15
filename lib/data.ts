export type Skill = {
  name: string;
  type: string;
};

export type Project = {
  id: number;
  title: string;
  short_description: string;
  description: string;
  role: string;
  role_description: string;
  site_url: string;
  repo_url: string;
  tech_stacks: string[];
  isMaintenance: boolean;
  type: string;
  images: string[];
};

export const mySkills: Skill[] = [
  { name: "TypeScript", type: "Front-End" },
  { name: "JavaScript (ES6+)", type: "Front-End" },
  { name: "React", type: "Front-End" },
  { name: "Next.js", type: "Front-End" },
  { name: "Tailwind CSS", type: "Front-End" },
  { name: "Framer Motion", type: "Front-End" },
  { name: "Laravel", type: "Back-End" },
  { name: "PHP", type: "Back-End" },
  { name: "MySQL", type: "Databases" },
  { name: "Firebase", type: "Databases" },
  { name: "Git", type: "DevOps & Tooling" },
  { name: "GitHub", type: "DevOps & Tooling" },
  { name: "Vercel", type: "DevOps & Tooling" },
  { name: "VS Code", type: "DevOps & Tooling" },
  { name: "React Native", type: "Familiar With" },
  { name: "Flutter", type: "Familiar With" },
  { name: "Node.js", type: "Familiar With" },
  { name: "Express.js", type: "Familiar With" },
];

export const myProjects: Project[] = [
  {
    id: Date.now() + Math.floor(Math.random() * 100),
    title: "SAMUJI - School Assessment & Exam Management System",
    short_description:
      "A web-based and mobile exam platform designed specifically for the needs of schools in Indonesia.",
    description:
      "SAMUJI is a web-based and mobile exam platform designed specifically for the needs of schools in Indonesia. With SAMUJI, teachers cancreate exam questions, set timings, monitor students, and obtain scores automatically.",
    role: "Front-End Developer",
    role_description:
      "I was responsible for the entire front-end architecture and development of the SAMUJI Platform. I developed all user interfaces and application logic for the five distinct user roles using React and TypeScript. I worked closely with back-end developer to define API requirements and integrate with the Laravel API.",
    site_url: "https://ujian.eksam.id",
    repo_url: "",
    tech_stacks: ["TypeScript", "React", "Laravel", "PHP", "MySQL"],
    isMaintenance: true,
    type: "company",
    images: [],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100),
    title: "BelajarPPPK - E-Learning Platform",
    short_description:
      "Website for learning services, tryouts, and tutoring to prepare for the Indonesian civil service (PPPK) test.",
    description:
      "BELAJARPPPK is a website offering learning services, tryouts, and tutoring to help you prepare for the Indonesian civil service (PPPK) test. BELAJARPPPK also provides information, materials, questions, online tryouts, and free tutoring to help you prepare for the Indonesian civil service (PPPK) selection process.",
    role: "Full-Stack Developer",
    role_description:
      "As the full-stack developer on this project, I was responsible for the entire development lifecycle. This included architecting and building the React front-end, developing the back-end API and database structure, and critically, integrating a third-party payment gateway to handle all transactions.",
    site_url: "https://belajarpppk.com/",
    repo_url: "",
    tech_stacks: ["JavaScript", "React", "Laravel", "PHP", "MySQL"],
    isMaintenance: false,
    type: "company",
    images: [],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100),
    title: "IDCPNS - E-Learning Platform",
    short_description:
      "Website for learning services, tryouts, and tutoring to prepare for the Indonesian civil service (CPNS) test and civil service academy tests.",
    description:
      "IDCPNS is a website offering learning services, tryouts, and tutoring to help you prepare for the Indonesian civil service (CPNS) test and civil service academy tests. IDCPNS also provides information, materials, questions, online tryouts, and free tutoring to help you prepare for the Indonesian civil service (CPNS) selection process and civil service academy tests.",
    role: "Full-Stack Developer",
    role_description:
      "As the full-stack developer on this project, I was responsible for the entire development lifecycle. This included architecting and building the React front-end, developing the back-end API and database structure, and critically, integrating a third-party payment gateway to handle all transactions.",
    site_url: "https://idcpns.com/",
    repo_url: "",
    tech_stacks: ["JavaScript", "React", "Laravel", "PHP", "MySQL"],
    isMaintenance: false,
    type: "company",
    images: [],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100),
    title: "BelajarPPPK - Admin & Content Management System",
    short_description:
      "A content management system built for BelajarPPPK Website.",
    description:
      "A content management system built for BelajarPPPK Websites. BELAJARPPPK is a website offering learning services, tryouts, and tutoring to help you prepare for the Indonesian civil service (PPPK) test.",
    role: "Full-Stack Developer",
    role_description:
      "As the full-stack developer on this project, I was responsible for the entire development lifecycle. My work involved designing the database schema to manage all platform content, building the back-end API with PHP and Laravel to handle all CRUD (Create, Read, Update, Delete) operations, and developing a responsive and intuitive user interface with React for the administrators.",
    site_url: "",
    repo_url: "",
    tech_stacks: ["JavaScript", "React", "Laravel", "PHP", "MySQL"],
    isMaintenance: false,
    type: "company",
    images: [],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100),
    title: "IDCPNS - Admin & Content Management System",
    short_description:
      "A content management system built for IDCPNS Website.",
    description:
      "A content management system built for IDCPNS Websites. IDCPNS is a website offering learning services, tryouts, and tutoring to help you prepare for the Indonesian civil service (CPNS) test and civil service academy tests.",
    role: "Full-Stack Developer",
    role_description:
      "As the full-stack developer on this project, I was responsible for the entire development lifecycle. My work involved designing the database schema to manage all platform content, building the back-end API with PHP and Laravel to handle all CRUD (Create, Read, Update, Delete) operations, and developing a responsive and intuitive user interface with React for the administrators.",
    site_url: "",
    repo_url: "",
    tech_stacks: ["JavaScript", "React", "Laravel", "PHP", "MySQL"],
    isMaintenance: false,
    type: "company",
    images: [],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100),
    title: "EKSAM - Admin & Content Management System",
    short_description:
      "A content management system built for EKSAM Website.",
    description:
      "A content management system built for EKSAM Websites. EKSAM is a learning service platform that aims to be your best learning companion in your chosen field, with a mission to provide high-quality learning materials with accurate relevance.",
    role: "Full-Stack Developer",
    role_description:
      "As the full-stack developer on this project, I was responsible for the entire development lifecycle. My work involved designing the database schema to manage all platform content, building the back-end API with PHP and Laravel to handle all CRUD (Create, Read, Update, Delete) operations, and developing a responsive and intuitive user interface with React for the administrators.",
    site_url: "",
    repo_url: "",
    tech_stacks: ["JavaScript", "React", "Laravel", "PHP", "MySQL"],
    isMaintenance: false,
    type: "company",
    images: [],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100),
    title: "JURHAM - Stock Analysis & Trading Journal",
    short_description:
      "A full-stack FinTech application featuring a custom calculation engine and a personal trading journal to help investors track and analyze their performance.",
    description:
      "JURHAM is a personal FinTech tool designed to empower stock market investors with data-driven insights. It provides a powerful calculator for analyzing potential trades and a detailed journal for tracking historical performance, helping users make more informed investment decisions.",
    role: "Full-Stack Developer",
    role_description:
      "As the sole full-stack developer, I was responsible for the entire JURHAM application. I engineered the complex calculation logic on the back-end, designed the database schema for the trade journal, and developed the entire front-end interface in React to bring the tool to life.",
    site_url: "https://jurham.id",
    repo_url: "",
    tech_stacks: ["JavaScript", "React", "Laravel", "PHP", "MySQL"],
    isMaintenance: false,
    type: "company",
    images: [],
  },
];
