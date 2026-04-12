import { z } from 'zod'

export const taskSchema = z.object({
    id: z.string(),
    nokomplain: z.string(),
    namacustomer: z.string(),
    tipe: z.string(),
    namapic: z.string(),
    status: z.string(),
})

export type Task = z.infer<typeof taskSchema>