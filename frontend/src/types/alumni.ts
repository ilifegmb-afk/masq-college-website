import type { TextWithDocuments } from './common'

/** The Alumni page text (with photos and buttons), one entry per section. */
export interface AlumniContent {
  about: TextWithDocuments
  members: TextWithDocuments
  notable: TextWithDocuments
  chapters: TextWithDocuments
  wellWishers: TextWithDocuments
}

/** An office bearer or committee member of the alumni association. */
export interface AlumniMember {
  id: string
  name: string
  /** e.g. "President" */
  role: string
  /** Course and year of passing, e.g. "B.Com., 1995" */
  batch: string
  occupation: string
}

/** A former student the college is proud of. */
export interface NotableAlumnus {
  id: string
  name: string
  batch: string
  /** What they are known for, e.g. "IAS officer". */
  achievement: string
  photoUrl?: string
}

/** A group of alumni in one city or country. */
export interface AlumniChapter {
  id: string
  name: string
  country: string
  coordinator: string
  /** Year the chapter started. */
  since: string
  email?: string
}

/** A person or organisation that has supported the college. */
export interface WellWisher {
  id: string
  name: string
  /** What they gave or did, e.g. "Donated 2,000 books to the library". */
  contribution: string
}

/** Everything the Alumni page shows. */
export interface AlumniDetail {
  content: AlumniContent
  members: AlumniMember[]
  notable: NotableAlumnus[]
  chapters: AlumniChapter[]
  wellWishers: WellWisher[]
}
