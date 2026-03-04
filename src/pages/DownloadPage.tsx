import { motion } from 'framer-motion'

const RESUME_URL = '/resume.pdf'

export function DownloadPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-12"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Resume
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Download my resume in PDF format.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={RESUME_URL}
          download="Resume.pdf"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-opacity"
        >
          Download resume (PDF)
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          Open in new tab
        </a>
      </div>
    </motion.section>
  )
}
