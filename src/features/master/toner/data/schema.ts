import { z } from 'zod'

export const schemamastertoner = z.object({
    id: z.coerce.string(),
    name: z.coerce.string(),
    category: z.coerce.string(),
    active: z.coerce.string(),
})
export type MasterToner = z.infer<typeof schemamastertoner>