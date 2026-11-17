import { ContentPanel } from '@/components/ui'
import type { StudentCornerDetail } from '@/types/studentCorner'
import { BusRoutesTable } from './BusRoutesTable'

// One component per side button of the Student Corner page.

interface ViewProps {
  studentCorner: StudentCornerDetail
}

export function FacilitiesView({ studentCorner }: ViewProps) {
  return <ContentPanel title="Student Facilities" content={studentCorner.content.facilities} />
}

export function CafeteriaView({ studentCorner }: ViewProps) {
  return <ContentPanel title="Cafeteria" description="Timings and facilities of the college cafeteria." content={studentCorner.content.cafeteria} />
}

export function MensHostelView({ studentCorner }: ViewProps) {
  return <ContentPanel title="Hostel for Men" description="Rooms, facilities, fees and rules." content={studentCorner.content.mensHostel} />
}

export function WomensHostelView({ studentCorner }: ViewProps) {
  return <ContentPanel title="Hostel for Women" description="Rooms, facilities, fees and rules." content={studentCorner.content.womensHostel} />
}

export function WomensPrayerHallView({ studentCorner }: ViewProps) {
  return <ContentPanel title="Prayer Hall for Women" content={studentCorner.content.womensPrayerHall} />
}

export function MensPrayerHallView({ studentCorner }: ViewProps) {
  return <ContentPanel title="Prayer Hall for Men" content={studentCorner.content.mensPrayerHall} />
}

export function TransportView({ studentCorner }: ViewProps) {
  return (
    <ContentPanel title="Transport" description="College bus routes, timings and fees." content={studentCorner.content.transport}>
      <BusRoutesTable routes={studentCorner.busRoutes} />
    </ContentPanel>
  )
}

export function CommunicationLabView({ studentCorner }: ViewProps) {
  return <ContentPanel title="Communication Lab" content={studentCorner.content.communicationLab} />
}
