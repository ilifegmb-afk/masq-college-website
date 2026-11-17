import { useState } from 'react'
import { FiExternalLink, FiX } from 'react-icons/fi'
import { Button, Modal } from '@/components/ui'
import { loginIcons } from '@/lib'
import type { LoginMenu } from '@/types/navigation'

/** The Login button. It opens a popup listing the login choices (Student Login, Staff Login...). */
export function LoginButton({ login }: { login: LoginMenu }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button size="sm" aria-haspopup="dialog" onClick={() => setOpen(true)}>
        {login.label}
      </Button>

      <Modal open={open} onClose={close} labelledBy="login-title">
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="login-title" className="text-2xl">
                {login.label}
              </h2>
              <p className="mt-1 text-sm">Choose how you want to sign in.</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lg text-heading transition-colors hover:border-primary hover:text-primary"
            >
              <FiX aria-hidden />
            </button>
          </div>

          <ul className="mt-6 space-y-3">
            {login.options.map((option) => {
              const Icon = loginIcons[option.icon]

              return (
                <li key={option.id}>
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-primary hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary">
                      <Icon aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-heading transition-colors group-hover:text-primary">
                        {option.label}
                      </span>
                      {option.description && <span className="block text-sm">{option.description}</span>}
                    </span>
                    <FiExternalLink aria-hidden className="shrink-0 text-primary" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </Modal>
    </>
  )
}
