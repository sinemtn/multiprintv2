import { createFileRoute } from '@tanstack/react-router'
import { ActionGeneral } from '@/features/tugas/actions/general'
import { z } from 'zod'

const taskSearchSchema = z.object({
  nokomplain: z.string().optional().catch(''),
  id: z.string().optional().catch(''),
  namapic: z.string().optional().catch(''),
  tipe: z.string().optional().catch(''),
  status: z.string().optional().catch(''),
})


export const Route = createFileRoute('/_authenticated/surat-tugas/actions/general/$id')({
  validateSearch: (search) => taskSearchSchema.parse(search),
  component: ActionGeneral, 
})