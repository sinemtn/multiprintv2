import { z } from 'zod'

export const schemastocktoner = z.object({
    id: z.coerce.string(),
    location: z.coerce.string(),
    branch: z.coerce.string(),
    qty: z.coerce.number(),
    note: z.coerce.string(),
    createdAt: z.coerce.string(), 
    customer: z.coerce.string(),

})

export type StockToner = z.infer<typeof schemastocktoner>