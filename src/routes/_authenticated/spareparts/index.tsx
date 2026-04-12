import z from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { SparepartTasks } from '@/features/master/sparepart'


const taskSearchSchema = z.object({
  page: z.number().optional().catch(1),
  pageSize: z.number().optional().catch(10),
  filter: z.string().optional().catch(''),
})


export const Route = createFileRoute('/_authenticated/spareparts/')({
  validateSearch: taskSearchSchema,
  component: SparepartTasks,
})
