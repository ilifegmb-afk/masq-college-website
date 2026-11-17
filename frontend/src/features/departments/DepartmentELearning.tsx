import { ResourceCard } from '@/components/cards'
import { PanelHeading } from '@/components/ui'
import type { DepartmentDetail } from '@/types/academics'
import { EmptyPanel } from './EmptyPanel'

/** Online courses, video lectures and digital libraries the department recommends. */
export function DepartmentELearning({ department }: { department: DepartmentDetail }) {
  const resources = department.eLearning

  return (
    <div>
      <PanelHeading title="E-Learning" description="Online courses and study material recommended by the department." />

      {resources.length === 0 ? (
        <EmptyPanel>E-learning resources will be added soon.</EmptyPanel>
      ) : (
        <ul className="space-y-4">
          {resources.map((resource) => (
            <li key={resource.id}>
              <ResourceCard resource={resource} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
