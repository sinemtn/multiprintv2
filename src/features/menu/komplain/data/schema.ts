import { z } from 'zod'

export const schemacomplaint = z.object({
    id: z.string(),
    mpNo: z.string(),
    description: z.string(),
    customer: z.string(),
    sales: z.string(),
    status: z.string(),
})

export type Complaint = z.infer<typeof schemacomplaint>