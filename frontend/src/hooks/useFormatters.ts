import { useSite } from '@/context/site-context'
import { formatDate, formatDateParts, formatFileSize } from '@/lib'

/** Date and file-size formatters bound to the current institute's locale. */
export function useFormatters() {
  const { institute } = useSite()

  return {
    date: (isoDate: string) => formatDate(isoDate, institute.locale),
    dateParts: (isoDate: string) => formatDateParts(isoDate, institute.locale),
    fileSize: (bytes: number) => formatFileSize(bytes, institute.locale),
  }
}
