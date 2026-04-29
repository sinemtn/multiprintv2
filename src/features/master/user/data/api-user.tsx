// import { schemamasteruser, MasterUser } from "./schema"

// const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/user'

// export const ApiUser = {
//     // list
//     list: async (): Promise<MasterUser[]> => {
//         const response = await fetch(BASE_URL)
//         const result = await response.json()
//         const read = result.data || []

//         return read.map((item: any) => {
//             const payload = {
//                 id: item.id,
//                 name: item.name,
//                 role: item.role,
//                 email: item.email,
//                 password: item.password,
//             }
//             return schemamasteruser.parse(payload)
//         })
//     },

//     // read by id
//     byid: async (id: string): Promise<MasterUser> => {
//         const response = await fetch(`${BASE_URL}/${id}`)
//         const result = await response.json()
//         const readbyid = result.data

//         const payload = {
//             id: readbyid.id,
//             name: readbyid.name,
//             role: readbyid.role,
//             email: readbyid.email,
//             password: readbyid.password,
//         };
//         return schemamasteruser.parse(payload);
//     },

//     // create
//     create: async (data: MasterUser): Promise<MasterUser> => {
//         const payload = {
//             id: data.id,
//             name: data.name,
//             role: data.role,
//             email: data.email,
//             password: data.password,
//         };

//         const response = await fetch(BASE_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload)
//         })
//         const result = await response.json()
//         const item = result.data

//         const map = {
//             id: item.id,
//             name: item.name,
//             role: item.role,
//             email: item.email,
//             password: item.password,
//         }
//         return schemamasteruser.parse(map)
//     },

//     // put 
//     put: async (id: string, data: Partial<MasterUser>) => {
//         const response = await fetch(`${BASE_URL}/${id}`,
//             {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data),
//             }
//         )
//         return response.json()
//     },

//     // deactive
//     deactive: async (id: string) => {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//             method: 'PATCH'
//         })
//         return response.json()
//     }

// }


import { schemamasteruser, MasterUser } from "./schema";
const BASE_URL = 'https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/user'

export const ApiUser = {
    // list
    list: async (): Promise<MasterUser[]> => {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        const item = result.data

        const payload = {
            id: item.id,
            name: item.name,
            role: item.role,
            email: item.email,
            password: item.password,
        }

        return [schemamasteruser.parse(payload)]
    }
}