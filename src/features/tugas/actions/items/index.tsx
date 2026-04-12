
import { Main } from '@/components/layout/main'
import { TasksTable } from '../components/items-tabel'
import { useState, useEffect } from 'react'
import { Task } from '../data/schema'
import { fetchItems} from '../data/items-api'


export function ActionItems() {

  const [data, setData] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

   useEffect(() => {
      async function loadData() {
        try {
          const result = await fetchItems()
          setData(result)
        } catch (error) {
          console.error("Gagal ambil data:", error)
        } finally {
          setLoading(false)
        }
      }
      loadData()
    }, [])
  
    if (loading) {
      return <div className='p-8 text-center'>Memuat data Items...</div>
    }


  return (
    
    <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
      <TasksTable data={data} />
    </Main>
      
      //  <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
      //         <div className='flex flex-wrap items-end justify-between gap-2'>
      //           <div>
      //             <h2 className='text-2xl font-bold tracking-tight'>List Surat Tugas</h2>
      //             <p className='text-muted-foreground'>
      //               Daftar Surat Tugas Yang Perlu Diselesaikan.
      //             </p>
      //           </div>
            
      //         </div>
             
      //       </Main>
  
  )
}
