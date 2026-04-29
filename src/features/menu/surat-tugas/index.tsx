// Global Components
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

// Data
import { useEffect, useState } from 'react'
import { ApiSuratTugas } from './data/api-surattugas'
import { SuratTugas } from './data/schema'

// Local Components
import { PrinterDialogs } from './components/dialog'
import { MainHeaderButton } from './components/main-header-button'
import { TasksProvider } from './components/main-page'
import { TasksTable } from './components/table-filter'

export function IndexSuratTugas() {
    const [SuratTugases, setSuratTugases] = useState<SuratTugas[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                const data = await ApiSuratTugas.list()
                setSuratTugases(data)
            } catch (err) {
                console.log("Gagal load data", err)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    if (loading) {
        return <div className='p-8 text-center'>Loading Data Surat Tugas...</div>
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
                        <h2 className='text-2xl font-bold tracking-tight'>List Surat Tugas</h2>
                        <p className='text-muted-foreground'>
                            Daftar list surat tugas.
                        </p>
                    </div>
                    <MainHeaderButton />
                </div>
                <TasksTable data={SuratTugases} />
            </Main>
            <PrinterDialogs />
        </TasksProvider>
    )
}