import { z } from 'zod'

export const schemamastersparepart = z.object({
    id: z.coerce.string(),
    name: z.coerce.string(),
    active: z.coerce.string(),
})
export type MasterSparepart = z.infer<typeof schemamastersparepart>