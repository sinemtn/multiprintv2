import { taskSchema, Task } from './schema'

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch('https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/assignment')
  const res = await response.json()
  const item = res.data
  
  const mappedData = {
    id: item.assignmentNo,      
    nokomplain: item.complaintNo,
    namacustomer: item.customer.name, 
    tipe: item.type,
    namapic: item.pic,
    status: item.status,
  }

  // Validasi data dengan Zod agar aman
  return [taskSchema.parse(mappedData)]
}