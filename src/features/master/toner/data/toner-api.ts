import { tonerSchema, Toner } from "./schema";
const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/toner'

export const tonerApi = {

    // 1. Fetch All Data
    getAll: async(): Promise<Toner[]> => {
        const response = await fetch (BASE_URL)
        const res = await response.json()
        const allData = res.data || []

        return allData.map((item: any) => {
            const mappedData = {
                id: item.id,
                nama: item.name,
                kategori: item.category,
                status: item.active,
            }

            return tonerSchema.parse(mappedData)
        })
    }, 


    // 4. Update
    update: async (id: string, data: Partial<Toner>) => {
        const response = await fetch(`${BASE_URL}/${encodeURIComponent(id)}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
    )
        return response.json()
    },

    // 5. Delete
    delete: async (id:string) => {
        const response = await fetch(`${BASE_URL}/${encodeURIComponent(id)}`,
        {
            method: 'DELETE',
        }
    )
        return response.json()
    },

    
}