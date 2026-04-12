import { schemasurattugas, SuratTugas } from "./schema";


const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/assignment'

export const ApiSuratTugas = {
    // list
    list: async (): Promise<SuratTugas[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const item = result.data

        const payload = {
            id: item.assignmentNo,
            nokomplain: item.complaintNo,
            mpno: item.mpNo,
            namacustomer: item.customer.name,
            tipe: item.type,
            pic: item.pic,
            status: item.status,
        }

        return [schemasurattugas.parse(payload)]
    },

    // read by id
    byid: async (id: string): Promise<SuratTugas> => {
        const response = await fetch(`${BASE_URL}/${id}`)
        const result = await response.json()
        const readbyid = result.data

        const payload = {
            id: readbyid.assignmentNo,
            nokomplain: readbyid.complaintNo,
            mpno: readbyid.mpNo,
            namacustomer: readbyid.customer.name,
            tipe: readbyid.type,
            namapic: readbyid.pic,
            status: readbyid.status
        };
        return schemasurattugas.parse(payload);
    },

    // create
    create: async (data: SuratTugas): Promise<SuratTugas> => {
        const payload = {
            assignmentNo: data.id,
            complaintNo: data.nokomplain,
            mpNo: data.mpno,
            customer: {
                name: data.namacustomer
            },
            type: data.tipe,
            pic: data.pic,
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
            mpno: item.mpNo,
            namacustomer: item.customer.name,
            tipe: item.type,
            namapic: item.pic,
            status: item.status,
        }
        return schemasurattugas.parse(map)
    },

    // put 
    put: async (id: string, data: Partial<SuratTugas>) => {
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