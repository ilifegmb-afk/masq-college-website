import type { ExamResult } from '@/types/examination'

// Placeholder published results, newest first - the backend will supply the real ones.
// Urls are examples; the backend will supply real result links.
export const examResults: ExamResult[] = [
  { id: 'reval-apr-2026', title: 'April 2026 - Revaluation results', publishedOn: '2026-06-25', url: '/files/examination/results/revaluation-apr-2026.pdf' },
  { id: 'pg-apr-2026', title: 'April 2026 - PG semester results', publishedOn: '2026-05-30', url: '/files/examination/results/pg-apr-2026.pdf' },
  { id: 'ug-apr-2026', title: 'April 2026 - UG semester results', publishedOn: '2026-05-28', url: '/files/examination/results/ug-apr-2026.pdf' },
  { id: 'pg-nov-2025', title: 'November 2025 - PG semester results', publishedOn: '2025-12-31', url: '/files/examination/results/pg-nov-2025.pdf' },
  { id: 'ug-nov-2025', title: 'November 2025 - UG semester results', publishedOn: '2025-12-29', url: '/files/examination/results/ug-nov-2025.pdf' },
]
