import { z } from 'zod'

export const sparepartSchema = z.object({
    id: z.coerce.string(),
    nama: z.coerce.string(),
    status: z.coerce.string(),
    
})

export type Sparepart = z.infer<typeof sparepartSchema>