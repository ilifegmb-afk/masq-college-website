import type { CourseDetail, Department } from './academics'
import type { TextWithDocuments } from './common'

/** The admission text and documents the college writes, one entry per section of the page. */
export interface AdmissionsContent {
  guidance: TextWithDocuments
  programmes: TextWithDocuments
  eligibility: TextWithDocuments
  fees: TextWithDocuments
  instructions: TextWithDocuments
}

/** Yearly fee of one course, in the institute's currency. */
export interface CourseFee {
  courseId: string
  tuitionFee: number
  /** Lab, library, exam and other fees. */
  otherFees: number
}

/** A course as listed on the admission pages: with its department and (if set) its fee. */
export interface AdmissionCourse extends CourseDetail {
  department: Department
  fee?: CourseFee
}

/** Everything the Admissions page shows. */
export interface AdmissionsDetail extends AdmissionsContent {
  courses: AdmissionCourse[]
}
