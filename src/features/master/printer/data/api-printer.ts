import { printerSchema, Printer } from "./schema"

const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/printer'

export const printeApi = {

    // 1. Fetch all data
    getAll: async (): Promise<Printer[]> => {
        const response = await fetch (BASE_URL)
        const res = await response.json()

        // Raw Data 
        const allData = res.data || []

        return allData.map((item: any) => {
            const mappedData = {
                id: item.printerID,
                nama: item.name,
                manufaktur: item.manufacture,
                kategori: item.category, 
                toner: item.toner,
                supplier: item.supplier,
                aktif: item.active,
            }
            return printerSchema.parse(mappedData)
        })
    },

    // 2. Fetch Data based on it's ID
    getById: async (id: string): Promise<Printer> => {
        const response = await fetch(`${BASE_URL}/${encodeURIComponent(id)}`)
        const res = await response.json()
        const item = res.data

        const mappedData = {
            id: item.printerID,
            nama: item.name,
            manufaktur: item.manufacture,
            kategori: item.category, 
            toner: item.toner,
            supplier: item.supplier,
            aktif: item.active,
        }
        return printerSchema.parse(mappedData)
    },

    // 3. Update Data
    update: async (id: string, data: Partial<Printer>) => {
        const response = await fetch(`${BASE_URL}/${encodeURIComponent(id)}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
        )
        return response.json()
    },

    // 4. Delete Data
    delete: async (id:string) => {
           const response = await fetch(`${BASE_URL}/${encodeURIComponent(id)}`, 
           {
                method: 'DELETE',
           }
        )
        return response.json()
    },

    // 5. Add Data
    create: async(newData: Printer): Promise<any> => {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(newData),
        })
        return await response.json()
    },

}