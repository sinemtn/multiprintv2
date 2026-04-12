import { z } from 'zod'

export const schemacomplaint = z.object({
    id: z.string(),
    nokomplain: z.string(),
    namacustomer: z.string(),
    tipe: z.string(),
    namapic: z.string(),
    status: z.string(),
})

export type Complaint = z.infer<typeof schemacomplaint>