import { z } from 'zod'

export const schemastocktoner = z.object({
    id: z.coerce.string(),
    name: z.coerce.string(),

})

export type StockToner = z.infer<typeof schemastocktoner>