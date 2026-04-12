import { schemacomplaint, Complaint } from "./schema";


const BASE_URL = 'http://202.155.157.237/api/complaint'

export const ApiComplaint = {
    // list
    list: async (): Promise<Complaint[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const read = result.data || []

        return read.map((item: any) => {
            const payload = {
                id: item.assignmentNo,
                nokomplain: item.complaintNo,
                namacustomer: item.customer.name,
                tipe: item.type,
                namapic: item.pic,
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
            id: readbyid.assignmentNo,
            nokomplain: readbyid.complaintNo,
            namacustomer: readbyid.customer.name,
            tipe: readbyid.type,
            namapic: readbyid.pic,
            status: readbyid.status
        };
        return schemacomplaint.parse(payload);
    },

    // create
    create: async (data: Complaint): Promise<Complaint> => {
        const payload = {
            assignmentNo: data.id,
            complaintNo: data.nokomplain,
            customer: {
                name: data.namacustomer
            },
            type: data.tipe,
            pic: data.namapic,
            status: data.status
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
            id: item.assignmentNo,
            nokomplain: item.complaintNo,
            namacustomer: item.customer.name,
            tipe: item.type,
            namapic: item.pic,
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