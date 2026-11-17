import type { TextWithDocuments } from './common'

/** The IQAC page text and certificates, one entry per section. */
export interface IqacContent {
  iqac: TextWithDocuments
  members: TextWithDocuments
  naac: TextWithDocuments
  nirf: TextWithDocuments
  aishe: TextWithDocuments
  aqar: TextWithDocuments
}

/** A member of the IQAC committee (staff, management or an outside member). */
export interface IqacMember {
  id: string
  name: string
  /** Role in the IQAC, e.g. "Chairperson" or "Coordinator". */
  role: string
  /** Job or position, e.g. "Principal" or "Associate Professor & Head, Chemistry". */
  designation: string
}

/** Everything the IQAC page shows. */
export interface IqacDetail {
  content: IqacContent
  members: IqacMember[]
}
