import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { aboutBio, skillsByCategory } from '../data/about'
import { experience } from '../data/experience'
import { education } from '../data/education'
import { certificates } from '../data/certificates'
import type { ExperienceEntry } from '../data/experience'
import type { EducationEntry } from '../data/education'
import type { CertificateEntry } from '../data/certificates'

const sectionIds = ['about', 'skills', 'experience', 'education', 'certificates'] as const
const sectionLabels: Record<(typeof sectionIds)[number], string> = {
  about: 'About me',
  skills: 'Skills',
  experience: 'Experience',
  education: 'Education',
  certificates: 'Certificates',
}

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

function SectionHeading({
  id,
  children,
}: {
  id: (typeof sectionIds)[number]
  children: ReactNode
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-gray-900 dark:text-white mt-12 first:mt-0 scroll-mt-24"
    >
      {children}
    </h2>
  )
}

function AboutPage() {
  return (
    <motion.article
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="py-12"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        About
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Background, skills, experience, and credentials.
      </p>

      <nav
        aria-label="On this page"
        className="mt-6 flex flex-wrap gap-2"
      >
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 rounded px-2 py-1"
          >
            {sectionLabels[id]}
          </a>
        ))}
      </nav>

      <motion.section variants={sectionVariants} aria-labelledby="about">
        <SectionHeading id="about">About me</SectionHeading>
        <div className="mt-4 space-y-4">
          {aboutBio.map((paragraph, i) => (
            <p
              key={i}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} aria-labelledby="skills">
        <SectionHeading id="skills">Professional skills</SectionHeading>
        <div className="mt-4 space-y-6">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} aria-labelledby="experience">
        <SectionHeading id="experience">Experience</SectionHeading>
        <ul className="mt-4 space-y-6" role="list">
          {experience.map((entry) => (
            <ExperienceCard key={entry.id} entry={entry} />
          ))}
        </ul>
      </motion.section>

      <motion.section variants={sectionVariants} aria-labelledby="education">
        <SectionHeading id="education">Education</SectionHeading>
        <ul className="mt-4 space-y-6" role="list">
          {education.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </ul>
      </motion.section>

      <motion.section variants={sectionVariants} aria-labelledby="certificates">
        <SectionHeading id="certificates">Certificates</SectionHeading>
        <ul className="mt-4 space-y-4" role="list">
          {certificates.map((entry) => (
            <CertificateCard key={entry.id} entry={entry} />
          ))}
        </ul>
      </motion.section>
    </motion.article>
  )
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 text-left shadow-sm">
      <div className="font-semibold text-gray-900 dark:text-white">
        {entry.title}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
        {entry.organization} · {entry.period}
      </div>
      {entry.description && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {entry.description}
        </p>
      )}
    </li>
  )
}

function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 text-left shadow-sm">
      <div className="font-semibold text-gray-900 dark:text-white">
        {entry.degree}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
        {entry.institution} · {entry.period}
      </div>
      {entry.notes && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {entry.notes}
        </p>
      )}
    </li>
  )
}

function CertificateCard({ entry }: { entry: CertificateEntry }) {
  const content = (
    <>
      <div className="font-semibold text-gray-900 dark:text-white">
        {entry.name}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
        {entry.issuer} · {entry.date}
      </div>
    </>
  )
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 text-left shadow-sm">
      {entry.url ? (
        <a
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 rounded"
        >
          {content}
          <span className="mt-1 inline-block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            Verify →
          </span>
        </a>
      ) : (
        content
      )}
    </li>
  )
}

export { AboutPage }
