import type { BusRoute } from '@/types/studentCorner'

// Placeholder bus routes with made-up stop names - the backend will supply the real ones.
export const busRoutes: BusRoute[] = [
  { id: 'route-1', routeNo: '1', stops: ['New Bus Stand', 'Railway Junction', 'Gandhi Market'], departureTime: '7:30 am', feePerYear: 9000 },
  { id: 'route-2', routeNo: '2', stops: ['Anna Nagar', 'KK Nagar', 'Collectorate'], departureTime: '7:20 am', feePerYear: 10000 },
  { id: 'route-3', routeNo: '3', stops: ['Old Town', 'Big Bazaar Street', 'Court Road'], departureTime: '7:25 am', feePerYear: 9500 },
  { id: 'route-4', routeNo: '4', stops: ['Industrial Estate', 'Medical College', 'Ring Road'], departureTime: '7:15 am', feePerYear: 11000 },
  { id: 'route-5', routeNo: '5', stops: ['Lake View', 'Bharathi Nagar', 'Police Colony'], departureTime: '7:35 am', feePerYear: 8500 },
]
