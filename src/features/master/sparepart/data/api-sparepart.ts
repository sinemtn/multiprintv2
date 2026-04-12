import { sparepartSchema, Sparepart } from "./schema";

const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/sparepart'

export const sparepartApi = {

    // All Data Master Sparepart
    getAll: async (): Promise<Sparepart[]> => {
        const response = await fetch(BASE_URL)
        const res = await response.json()

        const spareparts = res.data || []

        return spareparts.map((sparepart: any) => {
            const mappedData = {
                id: sparepart.id,
                nama: sparepart.name,
                status: sparepart.active
            }
            return sparepartSchema.parse(mappedData)
        })
    },

    // Update 
    update: async (id: string, data: Partial<Sparepart>) => {
        const response = await fetch(`${BASE_URL}/${encodeURIComponent(id)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        return response.json()
    },

    // Delete 
    delete: async (id: string) => {
        const response = await fetch(`${BASE_URL}/${encodeURIComponent(id)}`,
            {
                method: 'DELETE'
            }
        )
        return response.json()
    }



}