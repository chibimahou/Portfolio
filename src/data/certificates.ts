export type CertificateEntry = {
  id: string
  name: string
  issuer: string
  date: string
  url?: string
}

export const certificates: CertificateEntry[] = [
  {
    id: '1',
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    url: 'https://example.com/verify',
  },
  {
    id: '2',
    name: 'Example Professional Certification',
    issuer: 'Issuer Name',
    date: '2023',
  },
]
