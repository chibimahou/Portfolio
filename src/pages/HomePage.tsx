import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/projects'
import { stats } from '../data/stats'
import { skillsByCategory } from '../data/about'
import { contactInfo } from '../data/contact'
import { ProjectCard } from '../components/ui/ProjectCard'

const PROFILE_IMAGE_PATH = '/profile.jpg'
const FEATURED_COUNT = 3

// ─── animation variants ───────────────────────────────────────────────────────

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

// ─── sub-components ───────────────────────────────────────────────────────────

function ProfileImage() {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div
        className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm text-center px-3"
        aria-hidden
      >
        Add profile.jpg to public/
      </div>
    )
  }
  return (
    <img
      src={PROFILE_IMAGE_PATH}
      alt="Trevor Jackson"
      className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-xl ring-2 ring-gray-200 dark:ring-gray-700"
      onError={() => setError(true)}
    />
  )
}

function ScrollArrow() {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      className="mt-10 flex justify-center md:justify-start"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-gray-400 dark:text-gray-500"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </motion.div>
  )
}

function HeroSection() {
  return (
    <motion.section
      variants={heroContainer}
      initial="hidden"
      animate="show"
      aria-label="Introduction"
      className="py-14 md:py-20"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
        <motion.div
          variants={heroItem}
          className="shrink-0 flex justify-center md:justify-start"
        >
          <ProfileImage />
        </motion.div>

        <div className="min-w-0 flex-1">
          <motion.h1
            variants={heroItem}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Trevor Jackson
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-3 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300"
          >
            Full-Stack Developer | 8+ Years | AI-Enthusiast
          </motion.p>
          <motion.p
            variants={heroItem}
            className="mt-5 text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed"
          >
            I build scalable full stack web and desktop applications, from backend APIs and cloud
            infrastructure to polished frontends, with a focus on AI/ML integration, security, and
            long-term maintainability.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-opacity"
            >
              View my work
            </Link>
            <a
              href="/resume.pdf"
              download="Resume.pdf"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-colors"
            >
              Download resume
            </a>
          </motion.div>
          <motion.div variants={heroItem}>
            <ScrollArrow />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function StatsBar() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      aria-label="Quick stats"
      className="py-8 border-y border-gray-200 dark:border-gray-800"
    >
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-5 py-4 text-center shadow-sm"
          >
            <dt className="text-2xl font-bold text-gray-900 dark:text-white">{value}</dt>
            <dd className="mt-1 text-sm text-gray-500 dark:text-gray-400">{label}</dd>
          </div>
        ))}
      </dl>
    </motion.section>
  )
}

function FeaturedProjects() {
  const featured = projects.slice(0, FEATURED_COUNT)
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      aria-labelledby="featured-heading"
      className="py-12"
    >
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h2
          id="featured-heading"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Featured projects
        </h2>
        <Link
          to="/projects"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 rounded"
        >
          View all projects →
        </Link>
      </div>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {featured.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </motion.section>
  )
}

function SkillsGrid() {
  const entries = Object.entries(skillsByCategory)
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      aria-labelledby="skills-heading"
      className="py-12 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h2
          id="skills-heading"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Skills
        </h2>
        <Link
          to="/about#skills"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 rounded"
        >
          Full skills list →
        </Link>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {entries.map(([category, skills]) => (
          <motion.div
            key={category}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-20px' }}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
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
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function FooterCta() {
  const socials = contactInfo.socials ?? []
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      aria-label="Call to action"
      className="py-14 border-t border-gray-200 dark:border-gray-800 text-center"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Let's work together
      </h2>
      <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
        Open to new opportunities and collaborations. Reach out or explore my work.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-opacity"
        >
          View projects
        </Link>
        <a
          href="/resume.pdf"
          download="Resume.pdf"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-colors"
        >
          Download resume
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-colors"
        >
          Contact me
        </Link>
      </div>
      {socials.length > 0 && (
        <div className="mt-6 flex justify-center gap-4">
          {socials.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 rounded transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </motion.section>
  )
}

// ─── page ─────────────────────────────────────────────────────────────────────

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedProjects />
      <SkillsGrid />
      <FooterCta />
    </>
  )
}
