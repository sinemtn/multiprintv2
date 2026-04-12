import { z } from 'zod'

export const schemasurattugas = z.object({
    id: z.string().default(''),
    nokomplain: z.string().default(''),
    mpno: z.string().default(''),
    namacustomer: z.string().default(''),
    tipe: z.string().default(''),
    pic: z.string().default(''),
    status: z.string().default(''),
})

export type SuratTugas = z.infer<typeof schemasurattugas>