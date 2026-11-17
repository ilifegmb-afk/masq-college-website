import type { IconType } from 'react-icons'
import { FaChalkboardUser, FaFacebookF, FaInstagram, FaLinkedinIn, FaUserGraduate, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import {
  FiAward,
  FiBook,
  FiBookOpen,
  FiDatabase,
  FiFile,
  FiFileText,
  FiGlobe,
  FiGrid,
  FiHeart,
  FiImage,
  FiMonitor,
  FiPaperclip,
  FiPlayCircle,
  FiLayers,
  FiUserCheck,
  FiUsers,
} from 'react-icons/fi'
import type { ELearningType } from '@/types/academics'
import type { AttachmentType } from '@/types/common'
import type { FeatureIconName, StatIconName } from '@/types/home'
import type { SocialPlatform } from '@/types/institute'
import type { LoginIconName } from '@/types/navigation'

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

/** Label, icon and icon colors for each kind of e-learning resource / e-resource. */
export const eLearningTypes: Record<ELearningType, { label: string; icon: IconType; className: string }> = {
  course: { label: 'Online course', icon: FiBookOpen, className: 'bg-blue-50 text-blue-600' },
  video: { label: 'Video lectures', icon: FiPlayCircle, className: 'bg-red-50 text-red-600' },
  library: { label: 'Digital library', icon: FiBook, className: 'bg-green-50 text-green-700' },
  notes: { label: 'E-content', icon: FiFileText, className: 'bg-purple-50 text-purple-600' },
  journals: { label: 'E-journals & databases', icon: FiDatabase, className: 'bg-amber-50 text-amber-700' },
}

/** Icons for the home page's "college in numbers" tiles. */
export const statIcons: Record<StatIconName, IconType> = {
  students: FiUsers,
  faculty: FiUserCheck,
  departments: FiLayers,
  programmes: FiBookOpen,
}

/** Icons for the choices in the Login popup. */
export const loginIcons: Record<LoginIconName, IconType> = {
  student: FaUserGraduate,
  staff: FaChalkboardUser,
}
