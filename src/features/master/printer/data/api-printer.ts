import { schemamasterprinter, MasterPrinter } from "./schema"


const BASE_URL ='https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/printer'

export const ApiPrinter = {
    // list
    list: async():Promise<MasterPrinter[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const read = result.data || []

        return read.map((item:any) => {
            const payload = {
            id: item.printerID,
            name: item.name, 
            manufacture: item.manufacture,
            category: item.category,
            toner: item.toner,
            supplier: item.supplier,
            active: item.active
            
            }
            return schemamasterprinter.parse(payload)
        })
    },

    // read by id
    byid: async(id: string): Promise<MasterPrinter> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const result = await response.json()
        const readbyid = result.data

        const payload = {
            id: readbyid.printerID,
            name: readbyid.name, 
            manufacture: readbyid.manufacture,
            category: readbyid.category,
            toner: readbyid.toner,
            supplier: readbyid.supplier,
            active: readbyid.active
        }; 
        return schemamasterprinter.parse(payload);
    },

    // create
    create: async(data: MasterPrinter): Promise<MasterPrinter> => {
        const payload = {
            printerID: data.id,
            name: data.name,
            manufacture: data.manufacture,
            category: data.category,
            toner: data.toner,
            supplier: data.supplier,
            active: data.active
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
            id: item.printerID,
            name: item.name, 
            manufacture: item.manufacture,
            category: item.category,
            toner: item.toner,
            supplier: item.supplier,
            active: item.active
        }
        return schemamasterprinter.parse(map)
    }, 

    // put 
    put: async (id: string, data: Partial<MasterPrinter>) => {
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