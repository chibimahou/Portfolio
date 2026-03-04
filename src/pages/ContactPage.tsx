import { motion } from 'framer-motion'
import { useState } from 'react'
import { contactInfo } from '../data/contact'

const FORM_ACTION = import.meta.env.VITE_CONTACT_FORM_ACTION ?? ''

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const form = e.currentTarget
    if (FORM_ACTION) {
      const formData = new FormData(form)
      fetch(FORM_ACTION, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
        .then((res) => {
          if (res.ok) setSubmitted(true)
          else setError('Something went wrong. Please try again or email directly.')
        })
        .catch(() => setError('Network error. Please try again or email directly.'))
      return
    }
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    const mailto = `mailto:${contactInfo.email}?subject=Contact from portfolio&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
    window.location.href = mailto
    setSubmitted(true)
  }

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
              Email me
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

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Send a message
        </h2>
        {submitted ? (
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Thanks! Your message has been sent.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            action={FORM_ACTION || undefined}
            method={FORM_ACTION ? 'POST' : undefined}
            className="mt-4 space-y-4 max-w-xl"
          >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>
              {error && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-opacity"
              >
                Send message
              </button>
          </form>
        )}
      </div>

      {!FORM_ACTION && (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Submitting opens your email client. To POST to a service instead, set <code className="rounded bg-gray-100 dark:bg-gray-800 px-1">VITE_CONTACT_FORM_ACTION</code> (e.g. Formspree or Netlify Forms).
        </p>
      )}
    </motion.section>
  )
}

export { ContactPage }
