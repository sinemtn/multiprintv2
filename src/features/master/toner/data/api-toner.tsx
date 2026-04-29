import { schemamastertoner, MasterToner } from "./schema"

const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/toner'

export const ApiToner = {
    // list
    list: async (): Promise<MasterToner[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const read = result.data || []

        return read.map((item: any) => {
            const payload = {
                id: item.id,
                name: item.name,
                category: item.category,
                active: item.active,
            }
            return schemamastertoner.parse(payload)
        })
    },

    // read by id
    byid: async (id: string): Promise<MasterToner> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const result = await response.json()
        const readbyid = result.data

        const payload = {
            id: readbyid.id,
            name: readbyid.name,
            category: readbyid.category,
            active: readbyid.active,
        };
        return schemamastertoner.parse(payload);
    },

    // create
    create: async (data: MasterToner): Promise<MasterToner> => {
        const payload = {
            id: data.id,
            name: data.name,
            category: data.category,
            active: data.active,
        };

        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        const result = await response.json()
        const item = result.data

        const map = {
            id: item.id,
            name: item.name,
            category: item.category,
            active: item.active,
        }
        return schemamastertoner.parse(map)
    },

    // put 
    put: async (id: string, data: Partial<MasterToner>) => {
        const response = await fetch(`${BASE_URL}/${id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
        )
        return response.json()
    },

    // deactive
    deactive: async (id: string) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PATCH'
        })
        return response.json()
    }

}