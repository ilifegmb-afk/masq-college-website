import { useSite } from '@/context/site-context'
import { formatDate, formatDateParts, formatFileSize, formatMoney, formatNumber } from '@/lib'

/** Date, file-size, number and money formatters bound to the current institute's locale and currency. */
export function useFormatters() {
  const { institute } = useSite()

  return {
    date: (isoDate: string) => formatDate(isoDate, institute.locale),
    dateParts: (isoDate: string) => formatDateParts(isoDate, institute.locale),
    fileSize: (bytes: number) => formatFileSize(bytes, institute.locale),
    number: (value: number) => formatNumber(value, institute.locale),
    money: (amount: number) => formatMoney(amount, institute.currency, institute.locale),
  }
}
