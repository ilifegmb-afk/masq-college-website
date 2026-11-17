import type { Leader } from './about'
import type { Department, DepartmentWithCourses, Faculty } from './academics'
import type { TextWithDocuments } from './common'

/** The Research page text (with photos, documents and certificates), one entry per section. */
export interface ResearchContent {
  centres: TextWithDocuments
  about: TextWithDocuments
  dean: TextWithDocuments
  guides: TextWithDocuments
  products: TextWithDocuments
  gallery: TextWithDocuments
  certificates: TextWithDocuments
}

/** A faculty member approved to supervise Ph.D. scholars. */
export interface PhdGuide {
  /** Points to src/data/academics/faculty.ts */
  facultyId: string
  scholarsGuiding: number
  scholarsAwarded: number
}

export interface PhdGuideDetail extends PhdGuide {
  member: Faculty
  department: Department
}

export type ResearchProductType = 'patent' | 'publication' | 'book' | 'project'

/** A research output: a patent, publication, book or funded project. */
export interface ResearchProduct {
  id: string
  type: ResearchProductType
  title: string
  /** Who did it, e.g. "Dr. T. Ramesh, Dr. K. Nasreen Banu" */
  by: string
  year: string
}

/** Everything the Research page shows. */
export interface ResearchDetail {
  content: ResearchContent
  /** Departments recognised as research centres (those offering a Ph.D.), with their Ph.D. courses. */
  centres: DepartmentWithCourses[]
  dean: Leader
  guides: PhdGuideDetail[]
  products: ResearchProduct[]
}
