export type SocialLink = {
  label: string
  url: string
}

export type ContactInfo = {
  email: string
  phone?: string
  socials?: SocialLink[]
}

export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 000-0000',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
    { label: 'GitHub', url: 'https://github.com/yourusername' },
  ],
}
