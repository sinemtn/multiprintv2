import { schemacomplaint, Complaint } from "./schema";


const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/complaint'

export const ApiComplaint = {
    // list
    list: async (): Promise<Complaint[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const read = result.data || []

        return read.map((item: any) => {
            const payload = {
                id: item.complaintNo,
                mpNo: item.mpNo,
                description: item.description,
                customer: item.customer,
                sales: item.sales,
                status: item.status,
            }
            return schemacomplaint.parse(payload)
        })
    },

    // read by id
    byid: async (id: string): Promise<Complaint> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const result = await response.json()
        const readbyid = result.data

        const payload = {

            id: readbyid.complaintNo,
            mpNo: readbyid.mpNo,
            description: readbyid.description,
            customer: readbyid.customer,
            sales: readbyid.sales,
            status: readbyid.status,
        };
        return schemacomplaint.parse(payload);
    },

    // create
    create: async (data: Complaint): Promise<Complaint> => {
        const payload = {
            complaintNo: data.id,
            mpNo: data.mpNo,
            description: data.description,
            customer: data.customer,
            sales: data.sales,
            status: data.status,
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
            id: item.complaintNo,
            mpNo: item.mpNo,
            description: item.description,
            customer: item.customer,
            sales: item.sales,
            status: item.status,
        }
        return schemacomplaint.parse(map)
    },

    // put 
    put: async (id: string, data: Partial<Complaint>) => {
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