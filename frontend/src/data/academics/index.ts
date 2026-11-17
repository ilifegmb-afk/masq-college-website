// Mock academic records. Each file mirrors one backend collection; records link to each other by id:
//   degree (UG/PG/Ph.D.) <- programme (B.Sc., M.Com. ...) <- course -> department -> category (Aided/Self-Finance)
//   faculty -> department
export { departmentCategories } from './categories'
export { courses } from './courses'
export { degrees } from './degrees'
export { departments } from './departments'
export { faculty } from './faculty'
export { programmes } from './programmes'
