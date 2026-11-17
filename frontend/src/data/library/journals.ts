import type { Journal } from '@/types/library'

// Placeholder subscription list - the backend will supply the real one.
// departmentId points to src/data/academics/departments.ts; general-interest titles have none.
export const journals: Journal[] = [
  { id: 'ca-journal', title: 'The Chartered Accountant', publisher: 'ICAI', frequency: 'Monthly', format: 'print', departmentId: 'dept-commerce' },
  { id: 'ijc', title: 'Indian Journal of Commerce', publisher: 'Indian Commerce Association', frequency: 'Quarterly', format: 'print', departmentId: 'dept-commerce' },
  { id: 'management-accountant', title: 'The Management Accountant', publisher: 'ICMAI', frequency: 'Monthly', format: 'print', departmentId: 'dept-commerce-sf' },
  { id: 'csi-communications', title: 'CSI Communications', publisher: 'Computer Society of India', frequency: 'Monthly', format: 'print', departmentId: 'dept-computer-science' },
  { id: 'efy', title: 'Electronics For You', publisher: 'EFY Group', frequency: 'Monthly', format: 'print', departmentId: 'dept-computer-applications' },
  { id: 'ijm', title: 'Indian Journal of Marketing', publisher: 'Associated Management Consultants', frequency: 'Monthly', format: 'online', departmentId: 'dept-business-administration' },
  { id: 'hbr', title: 'Harvard Business Review', publisher: 'Harvard Business Publishing', frequency: 'Bi-monthly', format: 'print', departmentId: 'dept-business-administration' },
  { id: 'jcs', title: 'Journal of Chemical Sciences', publisher: 'Indian Academy of Sciences', frequency: 'Monthly', format: 'online', departmentId: 'dept-chemistry' },
  { id: 'resonance', title: 'Resonance', publisher: 'Indian Academy of Sciences', frequency: 'Monthly', format: 'print', departmentId: 'dept-chemistry' },
  { id: 'hans', title: 'Hans', publisher: 'Akshar Prakashan', frequency: 'Monthly', format: 'print', departmentId: 'dept-hindi' },
  { id: 'epw', title: 'Economic and Political Weekly', publisher: 'Sameeksha Trust', frequency: 'Weekly', format: 'print' },
  { id: 'yojana', title: 'Yojana', publisher: 'Publications Division', frequency: 'Monthly', format: 'print' },
  { id: 'employment-news', title: 'Employment News', publisher: 'Publications Division', frequency: 'Weekly', format: 'print' },
]
