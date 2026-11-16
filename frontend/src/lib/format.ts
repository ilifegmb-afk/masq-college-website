import type { Address } from '@/types/institute'

/** Formats an ISO date (YYYY-MM-DD). UTC avoids the day shifting with the viewer's timezone. */
export function formatDate(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(isoDate))
}

/** Day and short month of an ISO date, for calendar-style badges, e.g. { day: "12", month: "Nov" }. */
export function formatDateParts(isoDate: string, locale: string): { day: string; month: string } {
  const parts = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', timeZone: 'UTC' }).formatToParts(
    new Date(isoDate),
  )
  const valueOf = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? ''

  return { day: valueOf('day'), month: valueOf('month') }
}

/** Formats a byte count as KB or MB, e.g. 245760 -> "240 KB". */
export function formatFileSize(bytes: number, locale: string): string {
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 })
  const megabytes = bytes / (1024 * 1024)

  return megabytes >= 1
    ? `${number.format(megabytes)} MB`
    : `${number.format(Math.max(1, Math.round(bytes / 1024)))} KB`
}

export function formatAddress(address: Address): string {
  return [
    address.line1,
    address.line2,
    `${address.city}, ${address.state} ${address.postalCode}`,
    address.country,
  ]
    .filter(Boolean)
    .join(', ')
}

export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
