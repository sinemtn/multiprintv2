import { z } from 'zod'

export const tonerSchema = z.object({
    id: z.coerce.string(),
    nama: z.coerce.string(),
    kategori: z.coerce.string(),
    status: z.coerce.string(),
})

export type Toner = z.infer<typeof tonerSchema>
