import { schemamastersparepart, MasterSparepart } from "./schema"

const BASE_URL = 'http://202.155.157.237/api/sparepart'

export const ApiSparepart = {
    // list
    list: async (): Promise<MasterSparepart[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const read = result.data || []

        return read.map((item: any) => {
            const payload = {
                id: item.id,
                name: item.name,
                active: item.active,
            }
            return schemamastersparepart.parse(payload)
        })
    },

    // read by id
    byid: async (id: string): Promise<MasterSparepart> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const result = await response.json()
        const readbyid = result.data

        const payload = {
            id: readbyid.id,
            name: readbyid.name,
            active: readbyid.active,
        };
        return schemamastersparepart.parse(payload);
    },

    // create
    create: async (data: MasterSparepart): Promise<MasterSparepart> => {
        const payload = {
            id: data.id,
            name: data.name,
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
            active: item.active,
        }
        return schemamastersparepart.parse(map)
    },

    // put 
    put: async (id: string, data: Partial<MasterSparepart>) => {
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