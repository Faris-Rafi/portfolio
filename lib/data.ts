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
  isAvailable: boolean;
  type: string;
  images: string[];
};

export const mySkills: Skill[] = [
  { name: "TypeScript", type: "Front-End" },
  { name: "JavaScript", type: "Front-End" },
  { name: "React", type: "Front-End" },
  { name: "Next.js", type: "Front-End" },
  { name: "Tailwind CSS", type: "Front-End" },
  { name: "Framer Motion", type: "Front-End" },
  { name: "Laravel", type: "Back-End" },
  { name: "PHP", type: "Back-End" },
  { name: "MySQL", type: "Databases" },
  { name: "Firebase", type: "Databases" },
  { name: "MongoDB", type: "Databases" },
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
    id: Date.now() + Math.floor(Math.random() * 100000),
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
    isAvailable: false,
    type: "company",
    images: ['/projects/samuji/image-1.png', '/projects/samuji/image-2.png', '/projects/samuji/image-3.png', '/projects/samuji/image-4.png', '/projects/samuji/image-5.png', '/projects/samuji/image-6.jpg'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
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
    isAvailable: true,
    type: "company",
    images: ['/projects/belajarpppk/image-1.png', '/projects/belajarpppk/image-2.png', '/projects/belajarpppk/image-3.png', '/projects/belajarpppk/image-4.png', '/projects/belajarpppk/image-5.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
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
    isAvailable: true,
    type: "company",
    images: ['/projects/idcpns/image-1.png', '/projects/idcpns/image-2.png', '/projects/idcpns/image-3.png', '/projects/idcpns/image-4.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
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
    isAvailable: true,
    type: "company",
    images: ['/projects/cms-belajarpppk/image-1.png', '/projects/cms-belajarpppk/image-2.png', '/projects/cms-belajarpppk/image-3.png', '/projects/cms-belajarpppk/image-4.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
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
    isAvailable: false,
    type: "company",
    images: ['/projects/cms-idcpns/image-1.png', '/projects/cms-idcpns/image-2.png', '/projects/cms-idcpns/image-3.png', '/projects/cms-idcpns/image-4.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
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
    isAvailable: false,
    type: "company",
    images: ['/projects/cms-eksam/image-1.png', '/projects/cms-eksam/image-2.png', '/projects/cms-eksam/image-3.png', '/projects/cms-eksam/image-4.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
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
    isAvailable: true,
    type: "company",
    images: ['/projects/jurham/image-1.png', '/projects/jurham/image-2.png', '/projects/jurham/image-3.png', '/projects/jurham/image-4.png', '/projects/jurham/image-5.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
    title: "Meetup Platform - First Next.js Application",
    short_description:
      "A foundational project I built to master the core features of Next.js, including server-side rendering (SSR), file-based routing, and deployment on Vercel.",
    description:
      "This Meetup application was my first hands-on project with the Next.js framework. The primary goal was to move beyond tutorials and gain practical, real-world experience in building a full, albeit simple, server-rendered React application from scratch.",
    role: "Sole Developer",
    role_description:
      "I was responsible for the entire development process, from setting up the Next.js environment to building the UI components and deploying the final product.",
    site_url: "https://nextjs-course-rosy-xi.vercel.app/",
    repo_url: "https://github.com/Faris-Rafi/meetup-app-next-js",
    tech_stacks: ["JavaScript", "Next.js", "MongoDB"],
    isAvailable: true,
    type: "personal",
    images: ['/projects/meetup/image-1.png', '/projects/meetup/image-2.png', '/projects/meetup/image-3.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
    title: "Vanilla JS E-commerce Cart",
    short_description:
      "A classic e-commerce product page and cart functionality built with pure JavaScript, completed as a challenge from Frontend Mentor.",
    description:
      "This project is a solution to a popular challenge from Frontend Mentor, a platform that provides professional design specs for developers to build. The goal was to create a responsive and interactive product page with a fully functional shopping cart, using only fundamental web technologies: HTML, CSS, and pure JavaScript.",
    role: "Sole Developer",
    role_description:
      "As a Frontend Mentor challenge, I was responsible for the entire implementation, from writing the semantic HTML structure to styling with CSS and programming all the interactive logic with JavaScript.",
    site_url: "https://faris-rafi.github.io/product-list-with-cart-main_frontend-mentor/",
    repo_url: "https://github.com/Faris-Rafi/product-list-with-cart-main_frontend-mentor",
    tech_stacks: ["JavaScript"],
    isAvailable: true,
    type: "personal",
    images: ['/projects/e-commerce-cart/image-1.png', '/projects/e-commerce-cart/image-2.png'],
  },
  {
    id: Date.now() + Math.floor(Math.random() * 100000),
    title: "Hotel Booking - Content Management System",
    short_description:
      "The full-stack administrative dashboard I developed for a team-based hotel booking platform, enabling staff to manage all site content and operations.",
    description:
      "As my first major project in web development, building a complete hotel booking and management solution. The system consists of a public-facing website for guest bookings and a comprehensive Content Management System (CMS) that I developed for hotel staff.",
    role: "Sole Developer",
    role_description:
      "I was reponsible for entire application from the ground up using PHP and Vanilla JavaScript, this involved creating the entire front-end with Vanilla JavaScript, HTML, and CSS to provide an intuitive interface for staff, designing database schema and Building back-end logic with PHP to handle all functions.",
    site_url: "",
    repo_url: "https://github.com/Faris-Rafi/Hotel-Booking-System-Website",
    tech_stacks: ["JavaScript", "PHP", "MySQL"],
    isAvailable: false,
    type: "personal",
    images: ['/projects/hotelbooking/image-1.png', '/projects/hotelbooking/image-2.png', '/projects/hotelbooking/image-3.png', '/projects/hotelbooking/image-4.png', '/projects/hotelbooking/image-5.png', '/projects/hotelbooking/image-6.png'],
  },
];
