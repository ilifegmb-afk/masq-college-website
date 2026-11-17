import { FiLayers } from 'react-icons/fi'
import { PanelHeading } from '@/components/ui'
import type { DepartmentDetail } from '@/types/academics'
import { EmptyPanel } from './EmptyPanel'

/** The department's labs, classrooms and other facilities. */
export function DepartmentInfrastructure({ department }: { department: DepartmentDetail }) {
  const facilities = department.infrastructure

  return (
    <div>
      <PanelHeading title="Infrastructure" description="Labs, classrooms and facilities available to the department's students." />

      {facilities.length === 0 ? (
        <EmptyPanel>Infrastructure details will be added soon.</EmptyPanel>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2">
          {facilities.map((facility) => (
            <li key={facility.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
                {facility.imageUrl ? (
                  <img src={facility.imageUrl} alt="" loading="lazy" className="aspect-3/2 w-full object-cover" />
                ) : (
                  <div className="flex aspect-3/2 items-center justify-center bg-linear-to-br from-primary/10 to-secondary/10 text-5xl text-primary">
                    <FiLayers aria-hidden />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg">{facility.name}</h3>
                  <p className="mt-2 text-sm">{facility.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
