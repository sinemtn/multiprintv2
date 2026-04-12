// Open library
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

// Closed library
import { TasksDialogs } from './components/tugas-dialogs'
import { TasksPrimaryButtons } from './components/tugas-tombol-utama'
import { TasksProvider } from './components/tugas-provider'
import { TasksTable } from './components/tugas-tabel' 

// New
import { useState, useEffect } from 'react'
import { Task } from './data/schema'
import { fetchTasks } from './data/tugas-api'



export function Tasks() {
  const [data, setData] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchTasks()
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
    return <div className='p-8 text-center'>Memuat data Surat Tugas...</div>
  }

  return(
    <TasksProvider>
      <Header fixed>
        <Search/>
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch/>
          <ConfigDrawer/>
          <ProfileDropdown/>
        </div>
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>List Surat Tugas</h2>
            <p className='text-muted-foreground'>
              Daftar Surat Tugas Yang Perlu Diselesaikan.
            </p>
          </div>
          <TasksPrimaryButtons />
        </div>
        <TasksTable data={data} />
      </Main>

    <TasksDialogs/>
    </TasksProvider>
  )
}

