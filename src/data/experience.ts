export type ExperienceEntry = {
  id: string
  title: string
  organization: string
  period: string
  description?: string
  accomplishments?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: '1',
    title: 'Software Development Engineer',
    organization: 'UPS',
    period: 'Jan 2020 - Current',
    description: 'Full Stack Developer focusing on modernizing legacy enterprise applications and managing the full lifecycle of user stories and feature development within an Agile environment.',
    accomplishments: [
      'Architected distributed microservices for high-throughput order processing, improving processing speed by 40%.',
      'Designed and deployed AI-enhanced automation workflows and CI/CD pipelines, reducing manual developer tasks by 30%.',
      'Contributed to the comprehensive migration and seamless integration of enterprise applications onto OpenShift and Azure DevOps platforms.',
      'Led modernization of legacy enterprise applications, aligning them with current industry standards and scalability needs.',
      'Developed AI-Centric, Multi-Agent RAG System focused on embedding, sorting and retrieving documents, increasing troubleshooting efficiency.',
      'Developed MCP Server and Tools for automated workflow within IDEs for ADO commits and proper feature branching.',
      'Led development of Prompt Engineering AI Instructions and rules within our applications to provide cohesion among our applications and reduce likelihood of AI generated code that does not align with proper coding standards.',
      'Championed end-user feedback loops to improve UX and application adoption.',
      'Facilitated cross-team knowledge sharing to reduce dependencies on individual developers.',
      'Served as Product Owner for multiple applications, overseeing the full lifecycle of user stories and feature development within an Agile environment.',
      'Led end-to-end development of a variety of web and desktop applications utilizing multiple programming languages and frameworks, including .NET, Python, Java, and Angular.',
      'Added automated documentation deployment and alerts through use of Power Automate',

    ],
  },
  { 
    id: '2',
    title: 'Software Developer Intern',
    organization: '360Care',
    period: 'Jun 2018 - Aug 2018',
    description: 'Built and maintained APIs and web applications.',
    accomplishments: [
      'Built a full-stack MERN application for in-browser PDF editing linked to user records.',
    ],
  },
  {
    id: '3',
    title: 'Software Development Intern',
    organization: 'UPS',
    period: 'May 2017 - Aug 2017',
    description: 'Developed backend services and contributed to frontend improvements.',
    accomplishments: [
      'Developed ASP.NET CRUD application improving data management efficiency.',
      'Optimized database performance using SSRS for reporting and normalization.',
    ],
  },
]
