import type { AnnouncementPopupContent } from '@/types/announcement'
import { applicationUrl } from './admissions'

// Placeholder announcement shown when the website opens - the backend (admin panel) will supply it.
// The photo is the home page's admissions slide (see src/data/home.ts for credits).
export const announcement: AnnouncementPopupContent = {
  enabled: true,
  title: 'Admissions open for 2026-27',
  message: 'Applications for undergraduate and postgraduate courses are now open. Apply online before 31 December.',
  imageUrl: '/images/hero/admissions.jpg',
  action: { label: 'Apply Online', href: applicationUrl },
  delaySeconds: 3,
  autoCloseSeconds: 8,
}
