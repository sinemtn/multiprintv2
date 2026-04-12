// Open library
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

// Closed library
import { SparepartsDialogs } from './components/dialogs'
import { SparepartsPrimaryButtons } from './components/primary-button'
import { TasksProvider } from './components/provider'
import { TasksTable } from './components/table'

// Data
import { useEffect, useState } from "react";
import { Sparepart } from "./data/schema";
import { sparepartApi } from './data/api-sparepart'


export function SparepartTasks() {
    const [allSpareparts, setAllSpareparts] = useState<Sparepart[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                const data = await sparepartApi.getAll()
                setAllSpareparts(data)
            } catch (err) {
                console.error("Gagal load data", err)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    if (loading) {
        return <div className='p-8 text-center'>Loading Data Sparepart...</div>
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
                        <h2 className='text-2xl font-bold tracking-tight'>Master Spareparts</h2>
                        <p className='text-muted-foreground'>
                            Daftar master item spareparts.
                        </p>
                    </div>
                    <SparepartsPrimaryButtons />
                </div>
                <TasksTable data={allSpareparts} />
            </Main>
            <SparepartsDialogs />
        </TasksProvider>
    )

}