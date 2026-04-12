// Global Components
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

// Local Components
import { TasksDialogs } from './components/dialogs'
import { ComplaintPrimaryButtons } from'./components/primary-button'
import { TasksProvider } from './components/provider'
import { TasksTable } from './components/complaint-table'

// Data 
import { useEffect, useState } from 'react'
import { complaintApi } from './data/complaintApi'
import { Complaint } from './data/schema'

export function ComplaintTasks(){
    const [allComplaints, setComplaints] = useState<Complaint[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async() => {
            try{
                setLoading(true)
                const data = await complaintApi.getAll()
                setComplaints(data)
            } catch(err){
                console.error("Gagal load data", err)
            } finally { 
                setLoading(false)
            }
        }
        
        load()
    }, [])

    if (loading) {
        return <div className='p-8 text-center'>Loading Data Komplain...</div>
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
                <h2 className='text-2xl font-bold tracking-tight'>List Komplain</h2>
                <p className='text-muted-foreground'>
                  Daftar Komplain Yang Perlu Diselesaikan.
                </p>
              </div>
              <ComplaintPrimaryButtons />
            </div>
            <TasksTable data={allComplaints} />
          </Main>
        <TasksDialogs/>
        </TasksProvider>
      )
}