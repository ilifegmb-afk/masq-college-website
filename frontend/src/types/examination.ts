import type { TextWithDocuments } from './common'

/** The examination text and documents, one entry per section of the Examination page. */
export interface ExaminationContent {
  timetable: TextWithDocuments
  hallTicket: TextWithDocuments
  results: TextWithDocuments
  revaluation: TextWithDocuments
}

/** One examination period, e.g. the UG odd-semester exams. */
export interface ExamSchedule {
  id: string
  title: string
  /** ISO date, e.g. 2026-11-23 */
  startDate: string
  /** ISO date */
  endDate: string
  /** e.g. "10:00 am – 1:00 pm" */
  timings: string
}

/** A published set of results. */
export interface ExamResult {
  id: string
  title: string
  /** ISO date */
  publishedOn: string
  /** Link to the result file or results page. */
  url: string
}

/** Everything the Examination page shows. */
export interface ExaminationDetail {
  content: ExaminationContent
  schedules: ExamSchedule[]
  results: ExamResult[]
}
