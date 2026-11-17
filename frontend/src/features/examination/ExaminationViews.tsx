import { ContentPanel } from '@/components/ui'
import type { ExaminationDetail } from '@/types/examination'
import { ExamScheduleTable } from './ExamScheduleTable'
import { ResultsTable } from './ResultsTable'

// One component per side button of the Examination page.

interface ViewProps {
  examination: ExaminationDetail
}

export function TimetableView({ examination }: ViewProps) {
  return (
    <ContentPanel title="Exam Timetable" description="Dates and timings of the upcoming examinations." content={examination.content.timetable}>
      <ExamScheduleTable schedules={examination.schedules} />
    </ContentPanel>
  )
}

export function HallTicketView({ examination }: ViewProps) {
  return (
    <ContentPanel
      title="Hall Ticket"
      description="How to download your hall ticket, and the rules for the examination hall."
      content={examination.content.hallTicket}
    />
  )
}

export function ResultsView({ examination }: ViewProps) {
  return (
    <ContentPanel title="Results" description="Published results and the grading system." content={examination.content.results}>
      <ResultsTable results={examination.results} />
    </ContentPanel>
  )
}

export function RevaluationView({ examination }: ViewProps) {
  return (
    <ContentPanel
      title="Revaluation"
      description="Photocopy of answer scripts, retotalling and revaluation."
      content={examination.content.revaluation}
    />
  )
}
