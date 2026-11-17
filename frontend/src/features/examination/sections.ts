import type { ComponentType } from 'react'
import { FiAward, FiCalendar, FiCreditCard, FiRefreshCw } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { ExaminationDetail } from '@/types/examination'
import { HallTicketView, ResultsView, RevaluationView, TimetableView } from './ExaminationViews'

export interface ExaminationSection extends SideNavItem {
  view: ComponentType<{ examination: ExaminationDetail }>
}

/** The side buttons of the Examination page, in order. The first one is shown at /examination. */
export const examinationSections: ExaminationSection[] = [
  { id: 'timetable', label: 'Exam Timetable', icon: FiCalendar, view: TimetableView },
  { id: 'hall-ticket', label: 'Hall Ticket', icon: FiCreditCard, view: HallTicketView },
  { id: 'results', label: 'Results', icon: FiAward, view: ResultsView },
  { id: 'revaluation', label: 'Revaluation', icon: FiRefreshCw, view: RevaluationView },
]
