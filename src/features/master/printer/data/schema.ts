import { z } from 'zod'

export const schemamasterprinter = z.object({
    id: z.coerce.string(),
    name: z.coerce.string(),
    manufacture: z.coerce.string(),
    category: z.coerce.string(),
    toner: z.coerce.string(),
    supplier: z.coerce.string(),
    active: z.coerce.string(),
})

export type MasterPrinter = z.infer<typeof schemamasterprinter>