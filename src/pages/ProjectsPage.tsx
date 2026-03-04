import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import type { Project, ProjectStatus } from '../data/projects'

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'completed':
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'in development':
    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  'on-hold':
    'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  'retired':
    'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  const label = status === 'on-hold' ? 'On hold' : status.charAt(0).toUpperCase() + status.slice(1)
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      {label}
    </span>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.3 },
  }),
}

function getFallbackImageUrl(title: string): string {
  return `https://placehold.co/600x340/1e293b/94a3b8?text=${encodeURIComponent(title)}`
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const fallbackUrl = getFallbackImageUrl(project.title)
  const imageSrc = project.image?.startsWith('/') ? project.image : (project.image ?? fallbackUrl)

  const content = (
    <>
      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget
            if (!target.src.includes('placehold.co')) target.src = fallbackUrl
          }}
        />
      </div>
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
          {project.title}
        </h3>
        <div className="mt-2">
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
          {project.workedOn}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        {project.tags && project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.link && (
          <span className="mt-2 inline-block text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            View project →
          </span>
        )}
      </div>
    </>
  )

  const cardClassName =
    'rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden text-left shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500 block'

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
        >
          {content}
        </a>
      ) : (
        <div className={cardClassName}>{content}</div>
      )}
    </motion.article>
  )
}

export function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        A selection of work and side projects.
      </p>
      {projects.length === 0 ? (
        <p className="mt-8 text-gray-500 dark:text-gray-400">
          No projects yet. Add items in <code className="rounded bg-gray-100 dark:bg-gray-800 px-1">src/data/projects.ts</code>.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {projects.map((project, index) => (
            <li key={project.id}>
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
