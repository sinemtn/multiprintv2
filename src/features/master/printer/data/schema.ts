import { z } from 'zod'

export const printerSchema = z.object({
    id: z.coerce.string(),
    nama: z.coerce.string(),
    manufaktur: z.coerce.string(),
    kategori: z.coerce.string(),
    toner: z.coerce.string(),
    supplier: z.coerce.string(),
    aktif: z.coerce.string(),
})

export type Printer = z.infer<typeof printerSchema>