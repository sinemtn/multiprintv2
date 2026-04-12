// Open Library
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

// Closed Library
import { PrinterDialogs } from './components/dialog'
import { PrintersPrimaryButtons } from './components/header-menubutton'
import { TasksProvider } from './components/provider'
import { TasksTable } from './components/table'

// Data
import { useEffect, useState } from "react";
import { printeApi } from "./data/api-printer";
import { Printer } from './data/schema'


export function PrinterTasks() {

  const [allPrinters, setAllPrinters] = useState<Printer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const data = await printeApi.getAll()
        setAllPrinters(data)
      } catch (err) {
        console.error("Gagal load data", err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) {
    return <div className='p-8 text-center'>Loading Data Printer...</div>
  }

  return (
    <TasksProvider>
      <Header fixed>
   
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Stock Printer</h2>
            <p className='text-muted-foreground'>
              Daftar list stock printer.
            </p>
          </div>
          <PrintersPrimaryButtons />
        </div>
        <TasksTable data={allPrinters} />
      </Main>
      <PrinterDialogs />
    </TasksProvider>
  )

}
