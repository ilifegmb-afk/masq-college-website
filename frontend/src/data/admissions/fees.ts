import type { CourseFee } from '@/types/admissions'

// Placeholder yearly fees (in INR) - the backend will supply the real ones.
// courseId points to src/data/academics/courses.ts; the category (Aided / Self-Finance) comes from the course's department.
export const courseFees: CourseFee[] = [
  // Aided
  { courseId: 'bcom-general', tuitionFee: 4500, otherFees: 3500 },
  { courseId: 'mcom', tuitionFee: 6000, otherFees: 4000 },
  { courseId: 'phd-commerce', tuitionFee: 15000, otherFees: 5000 },
  { courseId: 'bsc-chemistry', tuitionFee: 5000, otherFees: 5500 },
  { courseId: 'msc-chemistry', tuitionFee: 7000, otherFees: 6000 },
  { courseId: 'phd-chemistry', tuitionFee: 15000, otherFees: 6000 },
  { courseId: 'ba-hindi', tuitionFee: 3000, otherFees: 3000 },
  { courseId: 'ma-hindi', tuitionFee: 4500, otherFees: 3500 },

  // Self-Finance
  { courseId: 'bcom-ca', tuitionFee: 32000, otherFees: 6000 },
  { courseId: 'bcom-pa', tuitionFee: 35000, otherFees: 6000 },
  { courseId: 'bsc-cs', tuitionFee: 35000, otherFees: 7000 },
  { courseId: 'msc-cs', tuitionFee: 40000, otherFees: 8000 },
  { courseId: 'bca', tuitionFee: 38000, otherFees: 7000 },
  { courseId: 'mca', tuitionFee: 55000, otherFees: 9000 },
  { courseId: 'bba', tuitionFee: 30000, otherFees: 6000 },
  { courseId: 'mba', tuitionFee: 60000, otherFees: 10000 },
]
