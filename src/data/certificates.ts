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
    name: 'Google Gen AI Leadership Certification',
    issuer: 'Google Cloud',
    date: '2025 - 2027',
  }
]
