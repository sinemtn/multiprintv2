// Global Components
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

// Data
import { useEffect, useState } from 'react'
import { ApiComplaint } from './data/api-complaint'
import { Complaint } from './data/schema'

// Local Components
import { MainHeaderButton } from './components/main-header-button'
import { TasksTable } from './components/table-filter'
import { TasksProvider } from './components/main-page'
import { PrinterDialogs } from './components/dialog'

export function IndexStockPrinter() {
    const [Complaints, setComplaints] = useState<Complaint[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                const data = await ApiComplaint.list()
                setComplaints(data)
            } catch (err) {
                console.log("Gagal load data", err)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    if (loading) {
        return <div className='p-8 text-center'>Loading Data Stock Printer...</div>
    }

    return (
        // <TasksProvider>
        //     <Header fixed>
        //         <div className='ms-auto flex items-center space-x-4'>
        //             <ThemeSwitch />
        //             <ProfileDropdown />
        //         </div>
        //     </Header>
        //     <Main>
        //         <div className='flex flex-wrap items-end justify-between gap-2'>
        //             <div>
        //                 <h2 className='text-2xl font-bold tracking-tight'>Stock Printer</h2>
        //                 <p className='text-muted-foreground'>
        //                     Daftar list stock printer.
        //                 </p>
        //             </div>
        //             <MainHeaderButton />
        //         </div>
        //         <TasksTable data={StockPrinters} />
        //     </Main>
        // </TasksProvider>
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
                        <h2 className='text-2xl font-bold tracking-tight'>List Komplain</h2>
                        <p className='text-muted-foreground'>
                            Daftar list Komplain.
                        </p>
                    </div>
                    <MainHeaderButton />
                </div>
                <TasksTable data={Complaints} />
            </Main>
            <PrinterDialogs />
        </TasksProvider>
    )
}