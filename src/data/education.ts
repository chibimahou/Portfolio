export type EducationEntry = {
  id: string
  degree: string
  institution: string
  period: string
  notes?: string
}

export const education: EducationEntry[] = [
  {
    id: '1',
    degree: 'B.S. Computer Science',
    institution: 'Example University',
    period: '2013 - 2017',
    notes: 'Focus on software engineering and systems.',
  },
  {
    id: '2',
    degree: 'Relevant coursework / bootcamp',
    institution: 'Online or institution name',
    period: '2022',
    notes: 'Optional short note.',
  },
]
