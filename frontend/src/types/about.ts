import type { Department, Faculty } from './academics'
import type { TextWithDocuments } from './common'

/** The About text and documents, one entry per section of the About page. */
export interface AboutContent {
  aboutUs: TextWithDocuments
  visionMission: TextWithDocuments
  leadership: TextWithDocuments
  faculty: TextWithDocuments
}

/** A member of the management or a college officer, e.g. the Principal. */
export interface Leader {
  id: string
  name: string
  /** e.g. "Principal" */
  role: string
  qualification?: string
  photoUrl?: string
  /** A message to visitors, one entry per paragraph. Leaders with a message are shown first, in full. */
  message?: string[]
}

/** A teacher with their department attached, as listed in the faculty directory. */
export interface FacultyWithDepartment extends Faculty {
  department: Department
}

/** Everything the About page shows. */
export interface AboutDetail {
  content: AboutContent
  leaders: Leader[]
  faculty: FacultyWithDepartment[]
}
