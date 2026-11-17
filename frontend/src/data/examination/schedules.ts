import type { ExamSchedule } from '@/types/examination'

// Placeholder examination periods - the backend will supply the real ones.
export const examSchedules: ExamSchedule[] = [
  { id: 'practicals-nov-2026', title: 'Practical examinations (UG & PG)', startDate: '2026-11-16', endDate: '2026-11-21', timings: 'As per department schedule' },
  { id: 'ug-nov-2026', title: 'UG semester examinations', startDate: '2026-11-23', endDate: '2026-12-12', timings: 'FN 10:00 am - 1:00 pm, AN 2:00 pm - 5:00 pm' },
  { id: 'pg-nov-2026', title: 'PG semester examinations', startDate: '2026-11-24', endDate: '2026-12-10', timings: 'FN 10:00 am - 1:00 pm' },
  { id: 'supplementary-jan-2027', title: 'Supplementary examinations', startDate: '2027-01-18', endDate: '2027-01-23', timings: 'FN 10:00 am - 1:00 pm' },
]
