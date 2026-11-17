import { siteContent } from '@/data'
import { aboutContent, leaders } from '@/data/about'
import { alumniChapters, alumniContent, alumniMembers, notableAlumni, wellWishers } from '@/data/alumni'
import { courses, degrees, departments, faculty, programmes } from '@/data/academics'
import { admissionsContent, courseFees } from '@/data/admissions'
import { examinationContent, examResults, examSchedules } from '@/data/examination'
import { iqacContent, iqacMembers } from '@/data/iqac'
import { bookHoldings, eResources, journals, libraryContent, libraryStaff } from '@/data/library'
import { placementContent, placementDrives, placementHead, placementTeam } from '@/data/placement'
import { deanOfResearch, phdGuides, researchContent, researchProducts } from '@/data/research'
import { busRoutes, studentCornerContent } from '@/data/studentCorner'
import type { AboutDetail } from '@/types/about'
import type { AlumniDetail } from '@/types/alumni'
import type { CourseDetail, DegreeId, DepartmentDetail, DepartmentWithCourses } from '@/types/academics'
import type { AdmissionsDetail } from '@/types/admissions'
import type { ExaminationDetail } from '@/types/examination'
import type { IqacDetail } from '@/types/iqac'
import type { LibraryDetail } from '@/types/library'
import type { PlacementDetail } from '@/types/placement'
import type { ResearchDetail } from '@/types/research'
import type { SiteContent } from '@/types/site'
import type { StudentCornerDetail } from '@/types/studentCorner'

/**
 * The single seam between the UI and the backend.
 * Today these return the local mock; later replace each body with a fetch, e.g.
 *   const res = await fetch(`${API_URL}/institutes/${slug}/site`)
 *   return (await res.json()) as SiteContent
 */
export async function getSiteContent(): Promise<SiteContent> {
  return siteContent
}

/** Mock-only helper: a department's courses, each with its programme and degree attached. */
function coursesOf(departmentId: string): CourseDetail[] {
  return courses
    .filter((course) => course.departmentId === departmentId)
    .flatMap((course) => {
      const programme = programmes.find((item) => item.id === course.programmeId)
      const degree = degrees.find((item) => item.id === programme?.degreeId)
      return programme && degree ? [{ ...course, programme, degree }] : []
    })
}

/**
 * One department with its faculty and courses, or null when the slug is unknown.
 * Backend: GET /api/departments/:slug (the server does this joining).
 */
export async function getDepartment(slug: string): Promise<DepartmentDetail | null> {
  const department = departments.find((item) => item.slug === slug)
  if (!department) return null

  return {
    ...department,
    faculty: faculty.filter((member) => member.departmentId === department.id),
    courses: coursesOf(department.id),
  }
}

/**
 * Every department that offers courses at the given degree (UG, PG or Ph.D.), with those courses.
 * Backend: GET /api/courses?degree=ug
 */
export async function getCoursesByDegree(degreeId: DegreeId): Promise<DepartmentWithCourses[]> {
  return departments
    .map((department) => ({
      department,
      courses: coursesOf(department.id).filter((course) => course.degree.id === degreeId),
    }))
    .filter((item) => item.courses.length > 0)
}

/**
 * The admission text and documents, plus every course with its department and fee.
 * Backend: GET /api/admissions
 */
export async function getAdmissions(): Promise<AdmissionsDetail> {
  const admissionCourses = departments.flatMap((department) =>
    coursesOf(department.id).map((course) => ({
      ...course,
      department,
      fee: courseFees.find((fee) => fee.courseId === course.id),
    })),
  )

  return { ...admissionsContent, courses: admissionCourses }
}

/**
 * The library text and documents, staff, books per department, journals and e-resources.
 * Backend: GET /api/library
 */
export async function getLibrary(): Promise<LibraryDetail> {
  const departmentOf = (id?: string) => departments.find((department) => department.id === id)

  return {
    content: libraryContent,
    staff: libraryStaff,
    holdings: bookHoldings.flatMap((holding) => {
      const department = departmentOf(holding.departmentId)
      return department ? [{ ...holding, department }] : []
    }),
    journals: journals.map((journal) => ({ ...journal, department: departmentOf(journal.departmentId) })),
    eResources,
  }
}

/**
 * The Student Corner text and documents, and the college bus routes.
 * Backend: GET /api/student-corner
 */
export async function getStudentCorner(): Promise<StudentCornerDetail> {
  return { content: studentCornerContent, busRoutes }
}

/**
 * The examination text and documents, upcoming exam periods and published results.
 * Backend: GET /api/examination
 */
export async function getExamination(): Promise<ExaminationDetail> {
  return { content: examinationContent, schedules: examSchedules, results: examResults }
}

/**
 * The About text and documents, the management and officers, and every teacher with their department
 * (department by department, heads first).
 * Backend: GET /api/about
 */
export async function getAbout(): Promise<AboutDetail> {
  const allFaculty = departments.flatMap((department) =>
    faculty
      .filter((member) => member.departmentId === department.id)
      .sort((a, b) => Number(b.isHead ?? false) - Number(a.isHead ?? false))
      .map((member) => ({ ...member, department })),
  )

  return { content: aboutContent, leaders, faculty: allFaculty }
}

/**
 * IQAC, NAAC, NIRF, AISHE and AQAR text and certificates, and the IQAC committee members.
 * Backend: GET /api/iqac
 */
export async function getIqac(): Promise<IqacDetail> {
  return { content: iqacContent, members: iqacMembers }
}

/**
 * The Research page: text, research centres (departments with a Ph.D.), the Dean of Research,
 * Ph.D. guides (with their faculty record and department) and research outputs.
 * Backend: GET /api/research
 */
export async function getResearch(): Promise<ResearchDetail> {
  const guides = phdGuides.flatMap((guide) => {
    const member = faculty.find((item) => item.id === guide.facultyId)
    const department = departments.find((item) => item.id === member?.departmentId)
    return member && department ? [{ ...guide, member, department }] : []
  })

  return {
    content: researchContent,
    centres: await getCoursesByDegree('phd'),
    dean: deanOfResearch,
    guides,
    products: researchProducts,
  }
}

/**
 * The Alumni page: text, office bearers, notable alumni, chapters and well wishers.
 * Backend: GET /api/alumni
 */
export async function getAlumni(): Promise<AlumniDetail> {
  return { content: alumniContent, members: alumniMembers, notable: notableAlumni, chapters: alumniChapters, wellWishers }
}

/**
 * The Placement page: text, placement officer, coordinators, upcoming drives and recruiter logos.
 * Backend: GET /api/placement
 */
export async function getPlacement(): Promise<PlacementDetail> {
  return {
    content: placementContent,
    head: placementHead,
    team: placementTeam,
    drives: placementDrives,
    recruiters: siteContent.home.recruiters.items,
  }
}
