import { schemastockprinter, StockPrinter } from "./schema";


const BASE_URL ='http://202.155.157.237/api/stock/sparepart'

export const ApiSparepart = {
    // list
    list: async():Promise<StockPrinter[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const read = result.data || []

        return read.map((item:any) => {
            const payload = {
            id: item.mpNo,
            name: item.printer,
            serialno: item.serialNo,
            feature: item.feature,
            buydate: item.buyDate,
            location: item.location,
            branch: item.branch,
            status: item.status,
            active: item.active,
            note: item.note,
            }
            return schemastockprinter.parse(payload)
        })
    },

    // read by id
    byid: async(id: string): Promise<StockPrinter> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const result = await response.json()
        const readbyid = result.data

        const payload = {
            id: readbyid.mpNo,
            name: readbyid.printer,
            serialno: readbyid.serialNo,
            feature: readbyid.feature,
            buydate: readbyid.buyDate,
            location: readbyid.location,
            branch: readbyid.branch,
            status: readbyid.status,
            active: readbyid.active,
            note: readbyid.note,
        }; 
        return schemastockprinter.parse(payload);
    },

    // create
    create: async(data: StockPrinter): Promise<StockPrinter> => {
        const payload = {
        mpNo: data.id,
        printer: data.name,
        serialNo: data.serialno,
        feature: data.feature,
        buyDate: data.buydate,
        location: data.location,
        branch: data.branch,
        status: data.status,
        active: data.active,
        note: data.note,
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
            id: item.mpNo,
            name: item.printer,
            serialno: item.serialNo,
            feature: item.feature,
            buydate: item.buyDate,
            location: item.location,
            branch: item.branch,
            status: item.status,
            active: item.active,
            note: item.note,
        }
        return schemastockprinter.parse(map)
    }, 

    // put 
    put: async (id: string, data: Partial<StockPrinter>) => {
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