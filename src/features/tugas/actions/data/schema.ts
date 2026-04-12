import { z } from 'zod'

export const taskSchema = z.object({
    id: z.coerce.string(),
    nama: z.coerce.string(),
    qty: z.coerce.string(),
})

export type Task = z.infer<typeof taskSchema>