export const site = {
  name: 'RIYA GANDHI',
  role: 'Software Engineer',
  tagline: 'Software engineer building production-ready web applications that solve real-world problems.',
  email: 'hello@example.com',
  location: 'San Francisco, CA',
  social: {
    github: 'https://github.com/riyagandhi',
    linkedin: 'https://linkedin.com/in/riyagandhi',
  },
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Tailwind CSS',
  'System Design',
  'UI/UX',
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
    tech: ['React','Firebase', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Figma', 'JIRA', 'Agile Methodology'],
    href: '#',
    github: '#',
  },
] as const

export const experience = [
  {
    role: "Software Engineer I",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX",
    period: "July 2025 – Present",
    description:
      "Built internal developer tools used across multiple engineering teams, improving deployment workflows and reducing build times.",
    stack: ["React", "TypeScript", "Go", "GCP"],
    highlight: "30% faster deployments",
  },
  {
    role: "MS, Computer Science - Intelligent Systems Track Graduate",
    company: "University of Texas at Dallas",
    location: "Richardson, TX",
    period: "August 2023 – May 2025",
    description:
      "Built internal developer tools used across multiple engineering teams, improving deployment workflows and reducing build times.",
    highlight: "",
  },
  {
    role: "Software Engineer Intern",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX",
    period: "June 2024 – August 2024",
    description:
      "Built internal developer tools used across multiple engineering teams, improving deployment workflows and reducing build times.",
    stack: ["React", "TypeScript", "Go", "GCP"],
    highlight: "30% faster deployments",
  },
  {
    role: "BS, Computer Science Graduate",
    company: "University of Texas at Dallas",
    location: "Richardson, TX",
    period: "August 2020 – May 2024",
    description:
      "Built internal developer tools used across multiple engineering teams, improving deployment workflows and reducing build times.",
    highlight: "Magna Cum Laude Latin Honors",
  },
  {
    role: "Software Engineer Intern",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX",
    period: "June 2023 – August 2023",
    description:
      "Built internal developer tools used across multiple engineering teams, improving deployment workflows and reducing build times.",
    stack: ["React", "TypeScript", "Go", "GCP"],
    highlight: "30% faster deployments",
  },
  {
    role: "IBM Accelerate Program Participant - Software Track",
    company: "IBM",
    location: "Remote",
    period: "June 2022 – August 2022",
    description:
      "Built internal developer tools used across multiple engineering teams, improving deployment workflows and reducing build times.",
    stack: ["React", "TypeScript", "Go", "GCP"],
    highlight: "30% faster deployments",
  },
] as const
