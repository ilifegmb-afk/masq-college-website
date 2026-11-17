import type { ComponentType } from 'react'
import { FiBookOpen, FiCheckSquare, FiClipboard, FiCompass, FiCreditCard } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { AdmissionsDetail } from '@/types/admissions'
import { EligibilityView, FeesView, GuidanceView, InstructionsView, ProgrammesView } from './AdmissionViews'

export interface AdmissionSection extends SideNavItem {
  view: ComponentType<{ admissions: AdmissionsDetail }>
}

/** The side buttons of the Admissions page, in order. The first one is shown at /admissions. */
export const admissionSections: AdmissionSection[] = [
  { id: 'guidance', label: 'Admission Guidance', icon: FiCompass, view: GuidanceView },
  { id: 'programmes', label: 'Programmes Offered', icon: FiBookOpen, view: ProgrammesView },
  { id: 'eligibility', label: 'Eligibility Criteria', icon: FiCheckSquare, view: EligibilityView },
  { id: 'fees', label: 'Fee Structure', icon: FiCreditCard, view: FeesView },
  { id: 'instructions', label: 'General Instructions', icon: FiClipboard, view: InstructionsView },
]
