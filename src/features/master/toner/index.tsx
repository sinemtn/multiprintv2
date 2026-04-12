// Global Components
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

// Data
import { useEffect, useState } from 'react'
import { tonerApi } from './data/toner-api'
import { Toner } from './data/schema'

// Local Components
import { TasksProvider } from './components/provider'
import { TonerssPrimaryButtons } from './components/primary-button'
import { TasksTable } from './components/table'

export function TonerTasks() {
    const [allToners, setAllToners] = useState<Toner[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                const data = await tonerApi.getAll()
                setAllToners(data)
            } catch(err) {
                console.log("Gagal load data", err)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    if (loading) {
        return <div className='p-8 text-center'>Loading Data Toner...</div>
    }

    return (
            <TasksProvider>
                <Header fixed>
                    <Search />
                    <div className='ms-auto flex items-center space-x-4'>
                        <ThemeSwitch />
                        <ConfigDrawer />
                        <ProfileDropdown />
                    </div>
                </Header>
    
                <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
                    <div className='flex flex-wrap items-end justify-between gap-2'>
                        <div>
                            <h2 className='text-2xl font-bold tracking-tight'>Stock Toner</h2>
                            <p className='text-muted-foreground'>
                                Daftar list stock toner.
                            </p>
                        </div>
                        <TonerssPrimaryButtons />
                    </div>
                    <TasksTable data={allToners} />
                </Main>
            </TasksProvider>
        )
}