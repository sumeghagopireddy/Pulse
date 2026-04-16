import type { Candidate } from './types';

export const mockCandidates: Candidate[] = [
  // Group 1: High pulse scores, React/Node experts (c-101 to c-105)
  {
    id: 'c-101', headline: 'Senior Full Stack Engineer | React & Node', pulseScore: 94, experienceYears: 6, noticePeriod: '<30 days',
    skills: ['React', 'Node.js', 'TypeScript', 'System Design', 'PostgreSQL'],
    isGithubVerified: true, isLeetcodeVerified: true, hasVideoPitch: true, currentRole: 'Senior Software Engineer',
    location: 'Bangalore, India (Remote)', about: 'Building scalable web applications and distributed backends for 6 years.',
    matchReasons: ['94% overlap with Senior Role', 'Strong React/Node alignment', 'Exceeds 4+ years requirement'],
    mockProjects: [
      { name: 'distributed-queue-ts', description: 'Lightweight job queue built with Redis.', techStack: ['TypeScript', 'Redis'], stars: 342 }
    ], previousCompanies: ['Fintech Unicorn', 'Mid-size SaaS'],
  },
  {
    id: 'c-102', headline: 'Lead Frontend Engineer | React Specialist', pulseScore: 94, experienceYears: 7, noticePeriod: '<60 days',
    skills: ['React', 'Next.js', 'TypeScript', 'System Design', 'GraphQL'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: true, currentRole: 'Lead UI Engineer',
    location: 'Pune, India', about: 'Focusing on heavily optimized front-end architectures and design systems.',
    matchReasons: ['94% overlap with Senior Role', 'Outstanding UI/UX sense', 'Leader experience'],
    mockProjects: [
      { name: 'next-seo-optimizer', description: 'CI/CD tool for SEO regressions.', techStack: ['Next.js', 'GitHub Actions'], stars: 89 }
    ], previousCompanies: ['E-Commerce Giant'],
  },
  {
    id: 'c-103', headline: 'Full Stack Architect | Serverless', pulseScore: 92, experienceYears: 8, noticePeriod: 'Immediate',
    skills: ['React', 'Node.js', 'AWS', 'System Design', 'Serverless'],
    isGithubVerified: true, isLeetcodeVerified: true, hasVideoPitch: false, currentRole: 'Staff Engineer',
    location: 'Delhi, India', about: 'Architecting serverless solutions to handle millions of requests.',
    matchReasons: ['Immediate joiner', 'Highly competent in system design'],
    mockProjects: [{ name: 'aws-lambda-router', description: 'Lightweight router for lambdas.', techStack: ['Node.js', 'AWS'], stars: 156 }],
  },
  {
    id: 'c-104', headline: 'Senior Software Engineer | Performance', pulseScore: 91, experienceYears: 5, noticePeriod: '<15 days',
    skills: ['React', 'TypeScript', 'Framer Motion', 'Web Vitals'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: true, currentRole: 'Frontend Dev',
    location: 'Remote', about: 'Passionate about Web Vitals, accessible UI, and micro-interactions.',
    matchReasons: ['Strong React match', 'Fast joiner'], mockProjects: [],
  },
  {
    id: 'c-105', headline: 'Software Development Engineer II', pulseScore: 90, experienceYears: 4, noticePeriod: '<30 days',
    skills: ['Node.js', 'TypeScript', 'PostgreSQL', 'Express', 'Redis'],
    isGithubVerified: false, isLeetcodeVerified: true, hasVideoPitch: true, currentRole: 'SDE II',
    location: 'Hyderabad, India', about: 'Product-focused SDE with strong algorithmic foundations.',
    matchReasons: ['Exact skill overlap for Backend', 'Good Leetcode standing'], mockProjects: [],
  },

  // Group 2: Mid-level React/Python devs with mixed verification (c-106 to c-110)
  {
    id: 'c-106', headline: 'Fullstack Dev | Python & React', pulseScore: 78, experienceYears: 3, noticePeriod: '<60 days',
    skills: ['Python', 'Django', 'React', 'JavaScript'],
    isGithubVerified: false, isLeetcodeVerified: true, hasVideoPitch: false, currentRole: 'SDE II',
    location: 'Pune, India', about: 'Solid backend developer transitioning into fullstack roles.',
    matchReasons: ['Matches React requirement', 'Lower TypeScript proficiency'], mockProjects: [],
  },
  {
    id: 'c-107', headline: 'Backend Engineer | Python Enthusiast', pulseScore: 76, experienceYears: 4, noticePeriod: '<30 days',
    skills: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: true, currentRole: 'Backend Engineer',
    location: 'Gurgaon, India', about: 'Building scalable data pipelines and robust backend APIs.',
    matchReasons: ['Strong Python fit', 'Requires frontend upskilling'], mockProjects: [],
  },
  {
    id: 'c-108', headline: 'React Native & Web Developer', pulseScore: 82, experienceYears: 3, noticePeriod: 'Immediate',
    skills: ['React', 'React Native', 'JavaScript', 'CSS'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: false, currentRole: 'Mobile Engineer',
    location: 'Mumbai, India', about: 'Cross platform mobile and web development is my forte.',
    matchReasons: ['Immediate joiner', 'Good React fundamentals'], mockProjects: [],
  },
  {
    id: 'c-109', headline: 'Software Engineer | Javascript Generalist', pulseScore: 65, experienceYears: 2, noticePeriod: '<30 days',
    skills: ['JavaScript', 'Vue', 'Express'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: false, currentRole: 'Frontend Developer',
    location: 'Mumbai, India', about: 'Developing responsive web apps and continuing to learn new frameworks.',
    matchReasons: ['Partial match on JD'], mockProjects: [],
  },
  {
    id: 'c-110', headline: 'Data Engineer | Python & SQL', pulseScore: 68, experienceYears: 3, noticePeriod: '<15 days',
    skills: ['Python', 'SQL', 'Airflow', 'AWS'],
    isGithubVerified: false, isLeetcodeVerified: true, hasVideoPitch: false, currentRole: 'Data Engineer I',
    location: 'Chennai, India', about: 'ETL pipelines and warehouse optimization routines are my daily bread.',
    matchReasons: ['Python match, but completely different domain'], mockProjects: [],
  },

  // Group 3: System Design / Senior Backend pure (c-111 to c-115)
  {
    id: 'c-111', headline: 'Principal Backend Engineer', pulseScore: 96, experienceYears: 12, noticePeriod: '90+ days',
    skills: ['Node.js', 'System Design', 'Golang', 'Kubernetes', 'Microservices'],
    isGithubVerified: true, isLeetcodeVerified: true, hasVideoPitch: false, currentRole: 'Principal SDE',
    location: 'Bangalore, India', about: 'Designing fault tolerant systems at immense scale.',
    matchReasons: ['Phenomenal System Design skills', 'Lacking React entirely'],
    mockProjects: [{ name: 'k8s-mesh-demo', description: 'Service mesh configurations.', techStack: ['Kubernetes', 'Go'], stars: 212 }],
  },
  {
    id: 'c-112', headline: 'Backend Tech Lead', pulseScore: 92, experienceYears: 9, noticePeriod: '<60 days',
    skills: ['TypeScript', 'Node.js', 'System Design', 'PostgreSQL'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: true, currentRole: 'Tech Lead',
    location: 'Pune, India', about: 'Leading teams of 10+ devs in building complex B2B systems.',
    matchReasons: ['Strong leader', 'Great node ecosystem knowledge'], mockProjects: [],
  },
  {
    id: 'c-113', headline: 'SDE III | Core Services', pulseScore: 89, experienceYears: 6, noticePeriod: '<30 days',
    skills: ['Node.js', 'Java', 'System Design', 'AWS'],
    isGithubVerified: false, isLeetcodeVerified: true, hasVideoPitch: true, currentRole: 'SDE III',
    location: 'Hyderabad, India', about: 'High throughput, low latency distributed backend engineering.',
    matchReasons: ['Strong algorithmic and system design foundation'], mockProjects: [],
  },
  {
    id: 'c-114', headline: 'Senior Platform Engineer', pulseScore: 88, experienceYears: 7, noticePeriod: '<30 days',
    skills: ['Python', 'System Design', 'Docker', 'AWS'],
    isGithubVerified: true, isLeetcodeVerified: true, hasVideoPitch: false, currentRole: 'Platform Eng',
    location: 'Remote', about: 'Building developer platforms and infrastructure automation natively in Python.',
    matchReasons: ['Strong infrastructure skills'], mockProjects: [],
  },
  {
    id: 'c-115', headline: 'Backend Engineer | Node', pulseScore: 85, experienceYears: 4, noticePeriod: 'Immediate',
    skills: ['Node.js', 'Express', 'MongoDB'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: false, currentRole: 'SDE II',
    location: 'Indore, India', about: 'MERN stack backend specialist. Immediate joiner.',
    matchReasons: ['Immediate availability', 'Core node match'], mockProjects: [],
  },

  // Group 4: Mid-level React Developers with very similar stats to stress the Compare UI (c-116 to c-120)
  {
    id: 'c-116', headline: 'UI Developer | React', pulseScore: 74, experienceYears: 2, noticePeriod: '<15 days',
    skills: ['React', 'CSS', 'JavaScript'],
    isGithubVerified: false, isLeetcodeVerified: false, hasVideoPitch: true, currentRole: 'UI Developer',
    location: 'Bangalore, India', about: 'Eager UI developer who loves creating beautiful pixel perfect screens.',
    matchReasons: ['React fundamentals'], mockProjects: [],
  },
  {
    id: 'c-117', headline: 'React Developer | Redux', pulseScore: 74, experienceYears: 2, noticePeriod: '<15 days',
    skills: ['React', 'Redux', 'JavaScript'],
    isGithubVerified: false, isLeetcodeVerified: false, hasVideoPitch: false, currentRole: 'Frontend Dev',
    location: 'Pune, India', about: 'Specialist in state management using Redux and React Context.',
    matchReasons: ['React fundamentals'], mockProjects: [],
  },
  {
    id: 'c-118', headline: 'Frontend Engineer | React Hook Form', pulseScore: 75, experienceYears: 2, noticePeriod: '<30 days',
    skills: ['React', 'TypeScript', 'CSS', 'HTML'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: true, currentRole: 'SDE I',
    location: 'Delhi, India', about: 'Building complex forms and validation logics.',
    matchReasons: ['Slightly better TS skills than peers'], mockProjects: [],
  },
  {
    id: 'c-119', headline: 'Web Developer | React', pulseScore: 73, experienceYears: 2, noticePeriod: 'Immediate',
    skills: ['React', 'Bootstrap', 'JavaScript'],
    isGithubVerified: false, isLeetcodeVerified: true, hasVideoPitch: false, currentRole: 'Web Dev',
    location: 'Remote', about: 'Quick prototyping and building robust admin panels.',
    matchReasons: ['React fundamentals', 'Available now'], mockProjects: [],
  },
  {
    id: 'c-120', headline: 'Junior React Dev', pulseScore: 72, experienceYears: 1, noticePeriod: '<15 days',
    skills: ['React', 'Tailwind', 'JavaScript'],
    isGithubVerified: true, isLeetcodeVerified: true, hasVideoPitch: true, currentRole: 'Trainee',
    location: 'Kolkata, India', about: 'Just starting my journey and highly motivated to contribute.',
    matchReasons: ['Entry level React skills'], mockProjects: [],
  },

  // Group 5: Eclectic mix, some high experience, diverse stacks (c-121 to c-125)
  {
    id: 'c-121', headline: 'Lead Engineer | Polyglot', pulseScore: 84, experienceYears: 10, noticePeriod: '90+ days',
    skills: ['Python', 'React', 'Ruby', 'System Design'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: true, currentRole: 'Lead',
    location: 'Mumbai, India', about: 'I switch languages depending on the problem domain. A true polyglot.',
    matchReasons: ['Wealth of experience'], mockProjects: [],
  },
  {
    id: 'c-122', headline: 'Fullstack Engineer | MERN', pulseScore: 87, experienceYears: 5, noticePeriod: '<30 days',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    isGithubVerified: true, isLeetcodeVerified: true, hasVideoPitch: true, currentRole: 'Senior SDE',
    location: 'Remote', about: 'Classic MERN stack expert with a knack for query optimization.',
    matchReasons: ['Excellent fullstack alignment'],
    mockProjects: [{ name: 'mern-boilerplate', description: 'Advanced authentication boilerplate.', techStack: ['React', 'Node.js'], stars: 40 }],
  },
  {
    id: 'c-123', headline: 'Python Automation Engineer', pulseScore: 61, experienceYears: 4, noticePeriod: '<60 days',
    skills: ['Python', 'Selenium', 'PyTest'],
    isGithubVerified: false, isLeetcodeVerified: false, hasVideoPitch: false, currentRole: 'QA Automation',
    location: 'Chennai, India', about: 'Ensuring absolute product quality before any release.',
    matchReasons: ['Only basic Python overlap'], mockProjects: [],
  },
  {
    id: 'c-124', headline: 'Senior Dev | Vue & Node', pulseScore: 79, experienceYears: 6, noticePeriod: '<15 days',
    skills: ['Vue', 'Node.js', 'System Design', 'MySQL'],
    isGithubVerified: true, isLeetcodeVerified: false, hasVideoPitch: false, currentRole: 'Senior Frontend',
    location: 'Bangalore, India', about: 'Specializing in Vue ecosystems but looking to move back to React occasionally.',
    matchReasons: ['Great backend, wrong frontend framework'], mockProjects: [],
  },
  {
    id: 'c-125', headline: 'Freelance Fullstack Developer', pulseScore: 81, experienceYears: 4, noticePeriod: 'Immediate',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
    isGithubVerified: true, isLeetcodeVerified: true, hasVideoPitch: true, currentRole: 'Freelancer',
    location: 'Remote', about: 'Having delivered over 15 projects independently, I am now looking for a fast-paced product team.',
    matchReasons: ['Strong tech stack match', 'Immediate joiner'], mockProjects: [],
  }
];
