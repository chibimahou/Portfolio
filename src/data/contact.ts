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
  email: 'jacksontrevor297@gmail.com',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/trevor-jackson-prof/' },
    { label: 'GitHub 1', url: 'https://github.com/chibimahou' },
    { label: 'GitHub 2', url: 'https://github.com/AIHeart-Professional' },
  ],
}
