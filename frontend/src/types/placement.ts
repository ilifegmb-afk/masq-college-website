import type { Leader } from './about'
import type { StaffMember } from './academics'
import type { TextWithDocuments } from './common'
import type { Recruiter } from './home'

/** The Placement page text (with photos and buttons), one entry per section. */
export interface PlacementContent {
  general: TextWithDocuments
  head: TextWithDocuments
  team: TextWithDocuments
  drives: TextWithDocuments
  eligibility: TextWithDocuments
  recruiters: TextWithDocuments
}

/** An upcoming campus recruitment drive. */
export interface PlacementDrive {
  id: string
  company: string
  /** Job role offered, e.g. "Trainee Software Engineer" */
  role: string
  /** ISO date of the drive */
  date: string
  /** Who can apply, e.g. "BCA, B.Sc. Computer Science, MCA" */
  eligibleCourses: string
  /** Salary offered, e.g. "₹4.2 LPA" */
  salary?: string
  venue: string
  /** Where students register for the drive. */
  registerUrl?: string
}

/** Everything the Placement page shows. */
export interface PlacementDetail {
  content: PlacementContent
  head: Leader
  team: StaffMember[]
  drives: PlacementDrive[]
  /** The same recruiter logos as the home page. */
  recruiters: Recruiter[]
}
