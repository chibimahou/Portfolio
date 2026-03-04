export type ProjectStatus = 'completed' | 'in development' | 'on-hold' | 'retired'

export type Project = {
  id: string
  title: string
  description: string
  status: ProjectStatus
  workedOn: string
  tags?: string[]
  link?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Faith Leap',
    description: 'Faith Leap is a platform for finding and studying the Bible. It allows users to search for verses, books, and chapters, and to study the Bible in a variety of ways.',
    status: 'in development',
    workedOn: 'Nov/1/25 - Current',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'CI/CD', 'bibleapi', 'leaflet maps'],
    link: 'https://bible-study-finder.netlify.app/',
    image: '/projects/faith-leap.jpg',
  },
  {
    id: '2',
    title: 'Marvel Rivals Stats Tracker',
    description: 'A web application for tracking the stats of Marvel Rivals, through rivals api.',
    status: 'in development',
    workedOn: 'Feb/26/26 - Current',
    tags: ['Node.js', 'PostgreSQL', 'Python', 'FastAPI', 'CI/CD', 'React', 'TypeScript', 'marvelrivalsapi'],
    link: 'https://marvel-rivals-stats.netlify.app/',
    image: '/projects/marvel-rivals.jpg',
  },
  {
    id: '3',
    title: 'Recipe Sharing Platform',
    description: 'A platform for sharing recipes with friends and family. It allows users to upload recipes, and to search for recipes by name, ingredients, and tags.',
    status: 'on-hold',
    workedOn: 'Jan/1/25 - Aug/2/25',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Angular', 'TypeScript', 'CI/CD'],
    image: '/projects/recipe-sharing.jpg',
  },
  {
    id: '4',
    title: 'Role Playing Bot',
    description: 'A bot for creating and managing text based role playing games. It allows users to interact with the game and to perform actions through a Discord Bot with slash commands and utilizes AI to provide Natural Language Responses.',
    status: 'retired',
    workedOn: 'May/1/20 - May/15/25',
    tags: ['Python', 'A2a Protocol', 'Discord.py', 'Gemini API', 'Google ADK', 'FastAPI'],
    image: '/projects/role-playing-bot.jpg',
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A portfolio website for showcasing my projects and skills. The current website this is displayed on.',
    status: 'in development',
    workedOn: 'Feb/27/26 - Current',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router', 'Framer Motion'],
    image: '/projects/portfolio-website.jpg',
  },
]
