import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

const PROFILE_IMAGE_PATH = '/profile.jpg'

export function HomePage() {
  const [profileImageError, setProfileImageError] = useState(false)

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="py-12 md:py-20"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
        <motion.div
          variants={item}
          className="shrink-0 flex justify-center md:justify-start"
        >
          {profileImageError ? (
            <div
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm text-center px-3"
              aria-hidden
            >
              Add profile.jpg to public/
            </div>
          ) : (
            <img
              src={PROFILE_IMAGE_PATH}
              alt="Trevor Jackson"
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-lg ring-2 ring-gray-200 dark:ring-gray-700"
              onError={() => setProfileImageError(true)}
            />
          )}
        </motion.div>
        <div className="min-w-0 flex-1">
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Trevor Jackson
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            Full Stack Developer with 8+ years of experience building scalable web applications.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-6 text-base text-gray-500 dark:text-gray-400 max-w-xl"
          >
            With experience across backend systems, frontend design, and cloud architecture, with a core focus on incorporating AI and ML into applications to enhance user experience and efficiency. I focus on building secure, maintainable applications that scale.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-opacity"
            >
              View projects
            </Link>
            <Link
              to="/download"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              Download resume
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
