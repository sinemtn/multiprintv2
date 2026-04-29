import { schemastocktoner, StockToner } from "./schema";


const BASE_URL ='https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/stock/toner'

export const ApiToner = {
    // list
    list: async():Promise<StockToner[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const read = result.data || []

        return read.map((item:any) => {
            const payload = {
            id: item.toner,
            location: item.location,
            branch: item.branch,
            qty: item.qty,
            note: item.note,
            customer: item.customer
            }
            return schemastocktoner.parse(payload)
        })
    },

    // read by id
    byid: async(id: string): Promise<StockToner> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const result = await response.json()
        const readbyid = result.data

        const payload = {
            id: readbyid.toner,
            location: readbyid.location,
            branch: readbyid.branch,
            qty: readbyid.qty,
            note: readbyid.note,
            customer: readbyid.customer
        }; 
        return schemastocktoner.parse(payload);
    },

    // create
    create: async(data: StockToner): Promise<StockToner> => {
        const payload = {
        toner: data.id,
        location: data.location,
        branch: data.branch,
        qty: data.qty,
        note: data.note,
        customer: data.customer
        };

        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(payload)
        })
        const result = await response.json()
        const item = result.data
        
        const map = {
            id: item.toner,
            location: item.location,
            branch: item.branch,
            qty: item.qty,
            note: item.note,
            customer: item.customer
        }
        return schemastocktoner.parse(map)
    }, 

    // put 
    put: async (id: string, data: Partial<StockToner>) => {
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
    deactive: async (id:string) => {
        const response = await fetch(`${BASE_URL}/${id}`,{
            method: 'PATCH'
        })
        return response.json()
    }

}