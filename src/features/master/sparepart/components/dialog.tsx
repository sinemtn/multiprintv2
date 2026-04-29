import { showSubmittedData } from '@/lib/show-submitted-data'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { TasksImportDialog } from './import-csv'
import { TasksMutateDrawer } from './table-singleaction'
import { useTasks } from './main-page'

export function PrinterDialogs() {
    const { open, setOpen, currentRow, setCurrentRow } = useTasks()
    return (
        <>
            <TasksMutateDrawer
                key='task-create'
                open={open === 'create'}
                onOpenChange={() => setOpen('create')}
            />

            <TasksImportDialog
                key='tasks-import'
                open={open === 'import'}
                onOpenChange={() => setOpen('import')}
            />

            {currentRow && (
                <>
                    <TasksMutateDrawer
                        key={`task-update-${currentRow.id}`}
                        open={open === 'update'}
                        onOpenChange={() => {
                            setOpen('update')
                            setTimeout(() => {
                                setCurrentRow(null)
                            }, 500)
                        }}
                        currentRow={currentRow}
                    />

                    <ConfirmDialog
                        key='task-delete'
                        destructive
                        open={open === 'delete'}
                        onOpenChange={() => {
                            setOpen('delete')
                            setTimeout(() => {
                                setCurrentRow(null)
                            }, 500)
                        }}
                        handleConfirm={() => {
                            setOpen(null)
                            setTimeout(() => {
                                setCurrentRow(null)
                            }, 500)
                            showSubmittedData(
                                currentRow,
                                'Surat tugas telah terhapus:'
                            )
                        }}
                        className='max-w-md'
                        title={`Hapus Toner ${currentRow.id}`}
                        desc={
                            <>
                                Anda yakin untuk menghapus toner ini? {' '}
                                {/* <strong>{currentRow.nama}</strong>. <br /> */}
                            </>
                        }
                        confirmText='Delete'
                    />

                </>
            )}

        </>
    )
}
