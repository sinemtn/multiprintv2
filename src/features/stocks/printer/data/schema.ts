import { z } from 'zod'

export const schemastockprinter = z.object({
    id: z.coerce.string(),
    name: z.coerce.string(),
    serialno: z.coerce.string(),
    feature: z.coerce.string(),
    buydate: z.coerce.date(),
    location: z.coerce.string(),
    branch: z.coerce.string(),
    status: z.coerce.string(),
    active: z.coerce.string(),
    note: z.coerce.string(),
})

export type StockPrinter = z.infer<typeof schemastockprinter>