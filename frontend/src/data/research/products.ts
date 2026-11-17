import type { ResearchProduct } from '@/types/research'

// Placeholder research outputs, newest first - the backend will supply the real list.
export const researchProducts: ResearchProduct[] = [
  { id: 'patent-corrosion', type: 'patent', title: 'Eco-friendly corrosion inhibitor from plant extracts', by: 'Dr. T. Ramesh, Dr. K. Nasreen Banu', year: '2025' },
  { id: 'paper-nanoparticles', type: 'publication', title: 'Green synthesis of silver nanoparticles using neem leaf extract', by: 'Dr. K. Nasreen Banu', year: '2025' },
  { id: 'book-cost-accounting', type: 'book', title: 'Fundamentals of Cost Accounting', by: 'Dr. R. Senthil Kumar', year: '2024' },
  { id: 'paper-digital-payments', type: 'publication', title: 'Digital payments and small retailers in tier-2 cities', by: 'Dr. M. Abdul Rahman', year: '2024' },
  { id: 'project-shg', type: 'project', title: 'Financial literacy among rural women self-help groups', by: 'Dr. S. Fathima Begum', year: '2024' },
  { id: 'project-water', type: 'project', title: 'Water quality of village ponds in the district', by: 'Dr. T. Ramesh', year: '2023' },
]
