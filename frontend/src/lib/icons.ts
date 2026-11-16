import type { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import {
  FiAward,
  FiBook,
  FiFile,
  FiFileText,
  FiGlobe,
  FiGrid,
  FiHeart,
  FiImage,
  FiMonitor,
  FiPaperclip,
  FiUsers,
} from 'react-icons/fi'
import type { AttachmentType } from '@/types/common'
import type { FeatureIconName } from '@/types/home'
import type { SocialPlatform } from '@/types/institute'

/** Maps icon names sent by the backend to components. */
export const featureIcons: Record<FeatureIconName, IconType> = {
  heart: FiHeart,
  book: FiBook,
  monitor: FiMonitor,
  award: FiAward,
  users: FiUsers,
  globe: FiGlobe,
}

export const socialPlatforms: Record<SocialPlatform, { label: string; icon: IconType }> = {
  facebook: { label: 'Facebook', icon: FaFacebookF },
  instagram: { label: 'Instagram', icon: FaInstagram },
  linkedin: { label: 'LinkedIn', icon: FaLinkedinIn },
  x: { label: 'X', icon: FaXTwitter },
  youtube: { label: 'YouTube', icon: FaYoutube },
}

/** Label, icon and icon colors for each kind of attachment, so file types are recognisable at a glance. */
export const attachmentTypes: Record<AttachmentType, { label: string; icon: IconType; className: string }> = {
  pdf: { label: 'PDF', icon: FiFileText, className: 'bg-red-50 text-red-600' },
  doc: { label: 'DOC', icon: FiFile, className: 'bg-blue-50 text-blue-600' },
  sheet: { label: 'XLS', icon: FiGrid, className: 'bg-green-50 text-green-700' },
  image: { label: 'Image', icon: FiImage, className: 'bg-purple-50 text-purple-600' },
  other: { label: 'File', icon: FiPaperclip, className: 'bg-surface text-body' },
}
