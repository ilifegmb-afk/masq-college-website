export type DegreeId = 'ug' | 'pg' | 'phd'

/** A level of study: UG, PG or Ph.D. */
export interface Degree {
  id: DegreeId
  /** Short form, e.g. "UG" */
  code: string
  /** Full name, e.g. "Undergraduate" */
  name: string
}

/** A programme such as B.Sc. or M.Com., awarded at one degree level. */
export interface Programme {
  id: string
  /** Short form, e.g. "B.Sc." */
  code: string
  /** Full name, e.g. "Bachelor of Science" */
  name: string
  degreeId: DegreeId
}

export type DepartmentCategoryId = 'aided' | 'self-finance'

/** How a department is funded: Aided or Self-Finance. */
export interface DepartmentCategory {
  id: DepartmentCategoryId
  name: string
}

/** One programme taught by one department, e.g. "B.Sc. Computer Science". */
export interface Course {
  id: string
  name: string
  programmeId: string
  departmentId: string
  durationYears: number
  /** Number of seats. */
  intake: number
  eligibility: string
}

/** A member of staff (teaching or library), shown with FacultyCard. */
export interface StaffMember {
  id: string
  name: string
  designation: string
  qualification: string
  specialization: string
  experienceYears: number
  email: string
  /** Optional portrait; the initials are shown without one. */
  photoUrl?: string
  /** Marks the head of the department (or the librarian). */
  isHead?: boolean
}

/** A teacher in a department. */
export interface Faculty extends StaffMember {
  departmentId: string
}

export type ELearningType = 'course' | 'video' | 'library' | 'notes' | 'journals'

/** An online learning resource (recommended by a department, or an e-resource of the library). */
export interface ELearningResource {
  id: string
  title: string
  description: string
  type: ELearningType
  url: string
}

/** A lab, classroom or other facility of the department. */
export interface Facility {
  id: string
  name: string
  description: string
  imageUrl?: string
}

export interface Department {
  id: string
  /** URL-safe identifier, used in the page address. */
  slug: string
  /** Short name used in menus and breadcrumbs, e.g. "Commerce". */
  name: string
  /** Full heading, e.g. "PG & Research Department of Commerce". */
  title: string
  category: DepartmentCategoryId
  imageUrl: string
  established: number
  /** About text, one entry per paragraph. */
  about: string[]
  vision: string
  mission: string[]
  eLearning: ELearningResource[]
  infrastructure: Facility[]
}

/** A course with its programme and degree attached. */
export interface CourseDetail extends Course {
  programme: Programme
  degree: Degree
}

/** A department and the courses it offers at one degree level (used on the Programmes page). */
export interface DepartmentWithCourses {
  department: Department
  courses: CourseDetail[]
}

/** Everything the department page shows: the department plus its faculty and courses. */
export interface DepartmentDetail extends Department {
  faculty: Faculty[]
  courses: CourseDetail[]
}
