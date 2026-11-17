import type { TextWithDocuments } from './common'

/** The Student Corner text and documents, one entry per section of the page. */
export interface StudentCornerContent {
  facilities: TextWithDocuments
  cafeteria: TextWithDocuments
  mensHostel: TextWithDocuments
  womensHostel: TextWithDocuments
  womensPrayerHall: TextWithDocuments
  mensPrayerHall: TextWithDocuments
  transport: TextWithDocuments
  communicationLab: TextWithDocuments
}

/** A college bus route. */
export interface BusRoute {
  id: string
  /** Number shown on the bus, e.g. "1" */
  routeNo: string
  /** Pick-up points in order, starting from the first stop. */
  stops: string[]
  /** Time the bus leaves the first stop, e.g. "7:30 am" */
  departureTime: string
  /** Bus fee per year, in the institute's currency. */
  feePerYear: number
}

/** Everything the Student Corner page shows. */
export interface StudentCornerDetail {
  content: StudentCornerContent
  busRoutes: BusRoute[]
}
