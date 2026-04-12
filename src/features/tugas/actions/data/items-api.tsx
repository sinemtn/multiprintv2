import z from "zod";
import { taskSchema, Task } from "./schema";

export async function fetchItems(): Promise<Task[]> {
  const response = await fetch ('https://103bec10-ae2f-4484-bfc7-16921f4b1b5e.mock.pstmn.io/api/assignment')
  const res = await response.json()
  const items = res.data?.items || []

  const itemList = items.map((item: any) => {
    return {
      id: String(item.id),
      nama: String (item.name),
      qty: String (item.qty),
    }
  })

  return z.array(taskSchema).parse(itemList)

}