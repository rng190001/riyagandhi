export const site = {
  name: 'RIYA GANDHI',
  role: 'Software Engineer',
  tagline: 'Software engineer building production-ready web applications that solve real-world problems.',
  email: 'griya2001@gmail.com',
  location: 'Based in Plano, TX',
  social: {
    github: 'https://github.com/rng190001',
    linkedin: 'https://www.linkedin.com/in/riyangandhi/',
  },
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const

export const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'Tailwind CSS',
  'UI/UX',
  'Figma',
  'Github',
  'Jira',
  'Agile Methodology',
  'Firebase',
  'Frontend Development',
  'Backend Development',
  'Full Stack Development',
  'Artificial Intelligence',
  'Machine Learning',
  'Natural Language Processing',
] as const

export const projects = [
  {
    id: "01",
    year: 2025,
    title: 'Spotify Spaces',
    description:
      'Who wants to wait for a spotify wrapped at the end of the year? This platform is a solution to get your user stats all day everyday!.',
    tech: ['React', 'JavaScript', 'HTML', 'Spotify API', 'Figma', 'Next.js', 'Tailwind CSS', 'Vercel'],
    href: '#',
    github: '#',
  },
  {
    id: "02",
    year: 2025,
    title: 'Machine Learning Research Project',
    description:
      'Visual Language Model focusing on testing different parsing techniques from generated responses',
    tech: ['LLaVa Visual Language Model', 'Machine Learning', 'Natural Language Processing', 'HuggingFace', 'Bart', 'Cosine Similarity', 'Bert-Embeddings', 'TF-IDF Vectorization', 'NLTK', 'SpaCy', 'Python'],
    href: '#',
    github: '#',
  },
   {
    id: "03",
    year: 2024,
    title: 'Sorcerers Sprouts ',
    description:
      '2nd Place WeHack 2024 Winner - The ultimate freshman support program designed to empower students to network, learn, and find support; ensuring a successful and fulfilling college experience.',
    tech: ['React', 'JavaScript', 'Node.js', 'HTML', 'Tailwind CSS', 'Firebase', 'Figma', 'K-Means Clustering', 'Data Visualization'],
    href: '#',
    github: 'https://github.com/rng190001/Sorcerers-Sprouts',
  },
  {
    id: "04",
    title: 'Surprise Me',
    year: 2024,
    description:
      'Welcome to SurpriseMe, a chatbot-driven platform designed to help users find the perfect gifts for anniversaries and Christmas! ',
    tech: ['Natural Language Processing','Cosine Similarity', 'Bert-Model', 'TF-IDF Vectorization', 'NLTK', 'SpaCy', 'Python', 'Flask'],
    href: '#',
    github: '#',
  },
  {
    id: "05",
    title: 'AppliTalent',
    year: 2021,
    description:
      '1st place ACM Project UTD 2021 Winner - Manage and track your job or internship prospects with an intuitive web app.',
    tech: ['React','Firebase', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Figma', 'Jira', 'Agile Methodology'],
    href: '#',
    github: '#',
  },
] as const

export const experience = [
  {
    role: "Software Engineer I",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX (Onsite)",
    period: "July 2025 – Present",
    description:
      "Working on a consumer-facing web application from its initial launch through multiple production releases. I build performant React features, architect reusable frontend components, integrate AWS cloud-backed APIs, and partner with cross-functional teams to create intuitive user experiences at scale.",
    stack: ["React", "TypeScript", "AWS", "Jest", "Figma", "JIRA", "Agile Methodology", "Frontend Development"],
    highlight: [
      "Day 1 Team",
      "3+ Production Releases",
      "500+ Users",
      "Consumer-Facing Product",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX (Hybrid)",
    period: "June 2024 – August 2024",
    description:
      "Developed production-ready features for a consumer-facing application using React and Spring Boot while collaborating with cross-functional teams throughout the software development lifecycle. The impact of my work led to a return offer to continue building the product as a full-time Software Engineer.",
    stack: ["React", "TypeScript", "Spring Boot", "AWS", "Frontend Development", "Backend Development"],
    highlight: [
      "Return Offer",
      "2nd Place Global Hackathon",
      "Consumer Product",
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "CharaChorder",
    location: "Richardson, TX (Hybrid)",
    period: "August 2023 – December 2023",
    description:
      "Designed and developed an interactive analytics dashboard that transformed complex training data into actionable insights. Built responsive data visualizations with React and modern charting libraries while collaborating with cross-functional teams to improve personalized feedback and user experience.",
    stack: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Figma",
      "ApexCharts",
      "Chart.js",
      "JavaScript",
    ],
    highlight: [
      "Analytics Dashboard",
      "Data Visualization",
      "UX-Focused",
      "Personalized Feedback",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX (Hybrid)",
    period: "June 2023 – August 2023",
    description:
      "Collaborated with software engineers and project managers to design, develop, and test enterprise applications using Java, Spring Boot, React, and TypeScript. Integrated web and mobile functionality for a production solution and presented the final product to more than 40 engineers and business leaders across the firm.",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Git",
      "Jira",
      "Web Development",
      "Mobile Development",
    ],
    highlight: [
      "40+ Person Demo",
      "Enterprise Software",
      "Cross-Platform Development",
    ],
  },
  {
    role: "IBM Accelerate Program Participant – Software Track",
    company: "IBM",
    location: "Remote",
    period: "June 2022 – August 2022",
    description:
      "Completed IBM's competitive Accelerate Program, strengthening full-stack software engineering fundamentals through hands-on projects and mentorship from IBM engineers. Built frontend and backend applications, developed REST APIs, implemented unit testing, and gained experience with cloud technologies and Agile development.",
    stack: [
      "React",
      "Express",
      "REST APIs",
      "HTML",
      "CSS",
      "Material UI",
      "Unit Testing",
      "Agile",
    ],
    highlight: [
      "IBM Accelerate",
      "Full-Stack Development",
      "REST APIs",
      "Cloud Foundations",
    ],
  },
] as const

export const education = [
  {
    degree: "MS, Computer Science - Intelligent Systems Track",
    school: "University of Texas at Dallas",
    location: "Richardson, TX",
    period: "August 2023 – May 2025",
    track: "Intelligent Systems",
    description:
      "Specialized in Intelligent Systems with coursework spanning machine learning, natural language processing, and artificial intelligence. The program deepened my understanding of building intelligent systems while complementing my passion for creating scalable, user-centered software.",
    coursework: ["Machine Learning", "Natural Language Processing", "Artificial Intelligence", "Statistical Learning", "Human Computer Interaction", "Project Management"],
    achievements: ["WeHack 2024 2nd Place Winner"],
  },
   {
    degree: "BS, Computer Science",
    school: "University of Texas at Dallas",
    location: "Richardson, TX",
    period: "August 2020 – May 2024",
    track: "",
    description:
      "Graduated Magna Cum Laude while building a strong foundation in software engineering, algorithms, and systems. Outside the classroom, I led student organizations, mentored aspiring engineers, won hackathons, and built full-stack applications through competitive and collaborative projects.",
    coursework: ["Data Structures and Algorithms", "Database Systems", "Operating Systems", "Software Engineering", "Digital Logic", "Psychology", "Advanced Algorithm Design & Analysis", "Intro to Artificial Intelligence", "Intro to Machine Learning"],
    achievements: [
      "Magna Cum Laude",
      "SWE CLI 2023-2024",
      "Women Mentoring Women in Engineering Leadership",
      "ACM Projects 1st Place",
    ],
  },
] as const;
