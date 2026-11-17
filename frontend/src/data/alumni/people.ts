import type { AlumniChapter, AlumniMember, NotableAlumnus, WellWisher } from '@/types/alumni'

// Placeholder alumni records with made-up names - the backend will supply the real ones.

export const alumniMembers: AlumniMember[] = [
  { id: 'president', name: 'Mr. K. Suresh', role: 'President', batch: 'B.Com., 1995', occupation: 'Chartered Accountant' },
  { id: 'vice-president', name: 'Dr. M. Shanthi', role: 'Vice-President', batch: 'M.Sc. Chemistry, 1998', occupation: 'Associate Professor' },
  { id: 'secretary', name: 'Mr. A. Rahman Khan', role: 'Secretary', batch: 'BBA, 2007', occupation: 'Entrepreneur' },
  { id: 'joint-secretary', name: 'Ms. P. Deepa', role: 'Joint Secretary', batch: 'BCA, 2010', occupation: 'Software Engineer' },
  { id: 'treasurer', name: 'Mr. S. Ganesh', role: 'Treasurer', batch: 'M.Com., 2003', occupation: 'Bank Manager' },
  { id: 'member-1', name: 'Mr. R. Vijay', role: 'Executive Member', batch: 'B.Sc. Computer Science, 2012', occupation: 'Data Analyst' },
  { id: 'member-2', name: 'Ms. N. Sameera', role: 'Executive Member', batch: 'M.A. Hindi, 2011', occupation: 'School Teacher' },
  { id: 'staff-coordinator', name: 'Dr. M. Abdul Rahman', role: 'Staff Coordinator', batch: 'B.Com., 2004', occupation: 'Assistant Professor of Commerce' },
]

export const notableAlumni: NotableAlumnus[] = [
  { id: 'arun-kumar', name: 'Dr. S. Arun Kumar', batch: 'B.Sc. Chemistry, 2005', achievement: 'IAS officer' },
  { id: 'nivetha', name: 'Ms. R. Nivetha', batch: 'B.Com., 2001', achievement: 'Chief Financial Officer of an IT services company' },
  { id: 'yusuf', name: 'Mr. A. Mohamed Yusuf', batch: 'BBA, 2012', achievement: 'Founder of a fintech start-up in Bengaluru' },
  { id: 'priya', name: 'Dr. K. Priya', batch: 'M.Sc. Chemistry, 2006', achievement: 'Senior Scientist at a national research laboratory' },
  { id: 'karthik', name: 'Mr. J. Karthik', batch: 'B.Com., 1999', achievement: 'International cricket umpire' },
  { id: 'ayesha', name: 'Ms. F. Ayesha', batch: 'M.A. Hindi, 2008', achievement: 'Award-winning author and translator' },
]

export const alumniChapters: AlumniChapter[] = [
  { id: 'chennai', name: 'Chennai Chapter', country: 'India', coordinator: 'Mr. V. Ramesh', since: '2012', email: 'chennai@alumni.masqcollege.example' },
  { id: 'bengaluru', name: 'Bengaluru Chapter', country: 'India', coordinator: 'Ms. S. Kavya', since: '2015', email: 'bengaluru@alumni.masqcollege.example' },
  { id: 'coimbatore', name: 'Coimbatore Chapter', country: 'India', coordinator: 'Mr. R. Senthil', since: '2018', email: 'coimbatore@alumni.masqcollege.example' },
  { id: 'uae', name: 'UAE Chapter (Dubai)', country: 'United Arab Emirates', coordinator: 'Mr. M. Imran', since: '2014', email: 'uae@alumni.masqcollege.example' },
  { id: 'singapore', name: 'Singapore Chapter', country: 'Singapore', coordinator: 'Ms. L. Priya', since: '2017', email: 'singapore@alumni.masqcollege.example' },
  { id: 'usa', name: 'USA Chapter', country: 'United States', coordinator: 'Dr. A. Kumar', since: '2019', email: 'usa@alumni.masqcollege.example' },
]

export const wellWishers: WellWisher[] = [
  { id: 'hameed', name: 'Mr. S. Abdul Hameed', contribution: 'Endowed the annual gold medal for the best outgoing B.Com. student' },
  { id: 'meenakshi', name: 'Dr. R. Meenakshi', contribution: 'Donated 2,000 books to the central library' },
  { id: 'bala', name: 'Mr. K. Balasubramanian', contribution: 'Sponsored the smart classrooms of the Commerce department' },
  { id: 'textiles', name: 'Sri Lakshmi Textiles', contribution: 'Scholarships for 25 first-generation students every year' },
  { id: 'peter', name: 'Mr. J. Peter', contribution: 'Funded the RO drinking water plant on the campus' },
  { id: 'batch-1990', name: 'Alumni of the 1990 batch', contribution: 'Built the open-air auditorium on the campus' },
]
