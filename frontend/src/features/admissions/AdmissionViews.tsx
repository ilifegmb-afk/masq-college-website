import { ContentPanel } from '@/components/ui'
import type { AdmissionsDetail } from '@/types/admissions'
import { FeeTables } from './FeeTables'
import { ProgrammesTable } from './ProgrammesTable'

// One component per side button of the Admissions page.

interface ViewProps {
  admissions: AdmissionsDetail
}

export function GuidanceView({ admissions }: ViewProps) {
  return (
    <ContentPanel
      title="Admission Guidance"
      description="How to apply, important dates and where to get help."
      content={admissions.guidance}
    />
  )
}

export function ProgrammesView({ admissions }: ViewProps) {
  return (
    <ContentPanel title="Programmes Offered" content={admissions.programmes}>
      <ProgrammesTable courses={admissions.courses} />
    </ContentPanel>
  )
}

export function EligibilityView({ admissions }: ViewProps) {
  return (
    <ContentPanel
      title="Eligibility Criteria"
      description="Who can apply for undergraduate, postgraduate and doctoral courses."
      content={admissions.eligibility}
    />
  )
}

export function FeesView({ admissions }: ViewProps) {
  return (
    <ContentPanel title="Fee Structure" content={admissions.fees}>
      <FeeTables courses={admissions.courses} />
    </ContentPanel>
  )
}

export function InstructionsView({ admissions }: ViewProps) {
  return (
    <ContentPanel
      title="General Instructions"
      description="Documents to bring and rules to follow during admission."
      content={admissions.instructions}
    />
  )
}
