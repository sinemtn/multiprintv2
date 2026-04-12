import { showSubmittedData } from '@/lib/show-submitted-data'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { TasksImportDialog } from './tugas-import-dialog'
import { TasksMutateDrawer } from './tugas-action'
import { useTasks } from './tugas-provider'

export function TasksDialogs() {
    const { open, setOpen, currentRow, setCurrentRow } = useTasks()
    return(
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
                    title={`Hapus surat tugas: ${currentRow.id} ?`}
                    desc={
                        <>
                            Anda menghapus surat tugas dengan ID{' '}
                            <strong>{currentRow.id}</strong>. <br />      
                        </>
                    }
                    confirmText='Delete'
                    />

                </>
            )}
            
        </>
    )}
