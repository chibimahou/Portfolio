import { projects } from '../data/projects'
import { ProjectCard } from '../components/ui/ProjectCard'

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
          No projects yet. Add items in{' '}
          <code className="rounded bg-gray-100 dark:bg-gray-800 px-1">
            src/data/projects.ts
          </code>
          .
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
