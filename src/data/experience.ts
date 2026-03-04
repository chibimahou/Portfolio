export type ExperienceEntry = {
  id: string
  title: string
  organization: string
  period: string
  description?: string
}

export const experience: ExperienceEntry[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    organization: 'Example Corp',
    period: 'Mar 2023 - Current',
    description: 'Lead development of customer-facing and internal tools. Introduced TypeScript and modern React patterns across the stack.',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    organization: 'Previous Company',
    period: 'Jan 2020 - Feb 2023',
    description: 'Built and maintained APIs and web applications. Collaborated with design and product teams on new features.',
  },
  {
    id: '3',
    title: 'Software Developer',
    organization: 'First Job Inc',
    period: 'Jun 2017 - Dec 2019',
    description: 'Developed backend services and contributed to frontend improvements.',
  },
]
