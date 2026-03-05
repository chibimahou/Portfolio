import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-12"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Get in touch
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Reach out for collaboration, opportunities, or a quick hello.
      </p>

      <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Contact info
        </h2>
        <ul className="mt-4 space-y-2" role="list">
          <li>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 rounded"
            >
              Email
            </a>
            <span className="text-gray-500 dark:text-gray-400 ml-2">
              {contactInfo.email}
            </span>
          </li>
          {contactInfo.phone && (
            <li>
              <span className="text-gray-600 dark:text-gray-300">
                {contactInfo.phone}
              </span>
            </li>
          )}
          {contactInfo.socials?.map(({ label, url }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 rounded"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export { ContactPage }
