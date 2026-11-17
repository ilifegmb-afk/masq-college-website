import type { Department, ELearningResource, StaffMember } from './academics'
import type { TextWithDocuments } from './common'

/** The library text and documents the college writes, one entry per section of the Library page. */
export interface LibraryContent {
  general: TextWithDocuments
  catalogue: TextWithDocuments
  journals: TextWithDocuments
  eResources: TextWithDocuments
}

/** Books the library holds for one department. */
export interface BookHolding {
  departmentId: string
  /** Different books. */
  titles: number
  /** Total copies of those books. */
  volumes: number
}

export type JournalFormat = 'print' | 'online'

/** A journal or magazine the library subscribes to. */
export interface Journal {
  id: string
  title: string
  publisher: string
  /** e.g. "Monthly" */
  frequency: string
  format: JournalFormat
  /** Department it is bought for; general-interest journals have none. */
  departmentId?: string
}

/** Everything the Library page shows. */
export interface LibraryDetail {
  /** Text and downloads for each section. */
  content: LibraryContent
  staff: StaffMember[]
  holdings: (BookHolding & { department: Department })[]
  journals: (Journal & { department?: Department })[]
  eResources: ELearningResource[]
}
