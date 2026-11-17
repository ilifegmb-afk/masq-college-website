import { FiAward, FiExternalLink } from 'react-icons/fi'
import type { Certificate } from '@/types/common'

/** Certificates as cards: a preview (or a certificate badge), the title, who issued it and when. Each opens in a new tab. */
export function CertificateGrid({ certificates }: { certificates: Certificate[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {certificates.map((certificate) => (
        <li key={certificate.id}>
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:border-primary hover:shadow-lg"
          >
            {certificate.imageUrl ? (
              <img src={certificate.imageUrl} alt="" loading="lazy" className="aspect-4/3 w-full bg-surface object-contain p-3" />
            ) : (
              <div className="aspect-4/3 bg-linear-to-br from-primary/10 to-secondary/10 p-3">
                {/* A simple certificate look: double border, award icon and the word "Certificate". */}
                <div className="flex h-full flex-col items-center justify-center gap-2 rounded-lg border-4 border-double border-primary/30 text-primary">
                  <FiAward aria-hidden className="text-5xl" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em]">Certificate</span>
                </div>
              </div>
            )}

            <div className="flex flex-1 flex-col p-4">
              <h4 className="text-base transition-colors group-hover:text-primary">{certificate.title}</h4>
              {(certificate.issuedBy || certificate.year) && (
                <p className="mt-1 text-sm">{[certificate.issuedBy, certificate.year].filter(Boolean).join(' · ')}</p>
              )}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-primary">
                View certificate
                <FiExternalLink aria-hidden />
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
