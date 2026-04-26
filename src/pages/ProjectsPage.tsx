import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ui/ProjectCard'

export function ProjectsPage() {
  const exampleProjects = projects.filter((project) => project.group === 'example')
  const standardProjects = projects.filter((project) => project.group !== 'example')
  const [activeTab, setActiveTab] = useState<'projects' | 'examples'>(() =>
    standardProjects.length > 0 ? 'projects' : 'examples',
  )

  const isProjectsTab = activeTab === 'projects'
  const activeProjects = isProjectsTab ? standardProjects : exampleProjects
  const activeTitle = isProjectsTab ? 'Projects' : 'Examples'
  const activeDescription = isProjectsTab
    ? 'A selection of work and side projects.'
    : 'Live interactive examples embedded in this portfolio.'

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Projects
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        A selection of work, side projects, and interactive examples.
      </p>
      {exampleProjects.length === 0 && standardProjects.length === 0 ? (
        <p className="mt-8 text-gray-500 dark:text-gray-400">
          No projects yet. Add items in{' '}
          <code className="rounded bg-gray-100 dark:bg-gray-800 px-1">
            src/data/projects.ts
          </code>
          .
        </p>
      ) : (
        <section className="mt-8">
          <div className="overflow-x-auto">
            <div
              className="inline-flex min-w-max rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-900"
              role="tablist"
              aria-label="Project categories"
            >
              <button
                type="button"
                role="tab"
                aria-selected={isProjectsTab}
                aria-controls="projects-tabpanel"
                id="projects-tab"
                disabled={standardProjects.length === 0}
                onClick={() => setActiveTab('projects')}
                className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 aria-selected:bg-gray-100 aria-selected:text-gray-900 dark:text-gray-300 dark:aria-selected:bg-gray-800 dark:aria-selected:text-white"
              >
                Projects ({standardProjects.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={!isProjectsTab}
                aria-controls="projects-tabpanel"
                id="examples-tab"
                disabled={exampleProjects.length === 0}
                onClick={() => setActiveTab('examples')}
                className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 aria-selected:bg-gray-100 aria-selected:text-gray-900 dark:text-gray-300 dark:aria-selected:bg-gray-800 dark:aria-selected:text-white"
              >
                Examples ({exampleProjects.length})
              </button>
            </div>
          </div>

          <div
            role="tabpanel"
            id="projects-tabpanel"
            aria-labelledby={isProjectsTab ? 'projects-tab' : 'examples-tab'}
            className="mt-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {activeTitle}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{activeDescription}</p>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {activeProjects.map((project, index) => (
                <li key={project.id} className="h-full">
                  <ProjectCard project={project} index={index} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </section>
  )
}
