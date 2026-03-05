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
    degree: 'B.S. Computer Science - Minor in Mathematics',
    institution: 'Indiana University - Southeast',
    period: '2012 - 2017',
  }
]
