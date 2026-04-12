import { complaintSchema, Complaint } from "./schema";
const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/complaint'

export const complaintApi = {

    // 1. Fetch All Data
    getAll: async(): Promise<Complaint[]> => {
        const response = await fetch (BASE_URL)
        const res = await response.json()
        const allData = res.data || []

        return allData.map((item: any) => {
            const mappedData = {
                id: item.complaintNo,
                mpno: item.mpNo,
                description: item.description,
                customer: item.customer,
                sales: item.sales,
                status: item.status,
            }
            return complaintSchema.parse(mappedData)
        })
    },

}