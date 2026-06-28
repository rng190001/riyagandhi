export const site = {
  name: 'Riya Gandhi',
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
    title: 'Project One',
    description:
      'A full-stack web app that solves a real problem. Replace this with your project summary, stack, and impact.',
    tags: ['React', 'TypeScript', 'Node.js'],
    href: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description:
      'Another highlight from your portfolio. Mention what you built, why it matters, and what you learned.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    href: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description:
      'A third project card ready for your work — open source, freelance, hackathon, or side project.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    href: '#',
    github: '#',
  },
] as const

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Company Name',
    period: '2024 — Present',
    summary:
      'Brief description of your role, team, and the kind of work you do. Focus on outcomes and technologies.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Previous Company',
    period: '2023 — 2024',
    summary:
      'Another role entry. Mention projects shipped, systems you improved, or metrics when possible.',
  },
] as const
