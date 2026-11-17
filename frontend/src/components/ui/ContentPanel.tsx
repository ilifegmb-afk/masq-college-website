import type { ReactNode } from 'react'
import { FiAward, FiBell, FiDownload, FiExternalLink } from 'react-icons/fi'
import type { TextWithDocuments } from '@/types/common'
import { AttachmentList } from './AttachmentList'
import { ButtonLink } from './Button'
import { CertificateGrid } from './CertificateGrid'
import { NoticeItem } from './NoticeItem'
import { PanelHeading } from './PanelHeading'
import { PhotoGrid } from './PhotoGrid'
import { TextBlocks } from './TextBlocks'

interface ContentPanelProps {
  title: string
  description?: string
  content: TextWithDocuments
  /** Extra content shown between the text and the downloads, e.g. a table. */
  children?: ReactNode
}

/**
 * A section with a heading, then (each optional) photos, notifications, buttons, text,
 * extra content such as a table, certificates and the downloads.
 */
export function ContentPanel({ title, description, content, children }: ContentPanelProps) {
  return (
    <div>
      <PanelHeading title={title} description={description} />

      {content.images && content.images.length > 0 && (
        <div className="mb-8">
          <PhotoGrid photos={content.images} />
        </div>
      )}

      {content.notices && content.notices.length > 0 && (
        <div className="mb-8 overflow-hidden rounded-2xl border border-line [&>div:last-child]:border-b-0">
          <h3 className="flex items-center gap-2 bg-surface px-6 py-3 text-base">
            <FiBell aria-hidden className="text-primary" />
            Notifications
          </h3>
          {content.notices.map((notice) => (
            <NoticeItem key={notice.id} notice={notice} newLabel="New" />
          ))}
        </div>
      )}

      {content.actions && content.actions.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-3">
          {content.actions.map((action, index) => {
            // Links to other websites (e.g. the student portal) open in a new tab.
            const external = action.href.startsWith('http')
            return (
              <ButtonLink
                key={action.href}
                href={action.href}
                variant={index === 0 ? 'primary' : 'outline'}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {action.label}
                {external && <FiExternalLink aria-hidden />}
              </ButtonLink>
            )
          })}
        </div>
      )}

      <TextBlocks blocks={content.blocks} />

      {children && <div className="mt-10">{children}</div>}

      {content.certificates && content.certificates.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 flex items-center gap-2 text-lg">
            <FiAward aria-hidden className="text-primary" />
            Certificates
          </h3>
          <CertificateGrid certificates={content.certificates} />
        </div>
      )}

      {content.documents && content.documents.length > 0 && (
        <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg">
            <FiDownload aria-hidden className="text-primary" />
            Downloads
          </h3>
          <AttachmentList attachments={content.documents} />
        </div>
      )}
    </div>
  )
}
