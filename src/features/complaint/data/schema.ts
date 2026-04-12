import { z } from 'zod'

export const complaintSchema = z.object({
    id: z.coerce.string(),
    mpno: z.coerce.string(),
    description: z.coerce.string(),
    customer: z.coerce.string(),
    sales: z.coerce.string(),
    status: z.coerce.string(),
})

export type Complaint = z.infer<typeof complaintSchema>