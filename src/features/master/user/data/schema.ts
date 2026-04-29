import { z } from 'zod'

export const schemamasteruser = z.object({
    id: z.coerce.string(),
    name: z.coerce.string(),
    role: z.coerce.string(),
    email: z.coerce.string(),
    password: z.coerce.string(),
})
export type MasterUser = z.infer<typeof schemamasteruser>