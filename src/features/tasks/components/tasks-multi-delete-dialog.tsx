'use client'

import { useState } from 'react'
import { type Table } from '@tanstack/react-table'
import { AlertTriangle } from 'lucide-react'
import { toast } from 'sonner'
import { sleep } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ConfirmDialog } from '@/components/confirm-dialog'

type TaskMultiDeleteDialogProps<TData> = {
  open: boolean
  onOpenChange: (open: boolean) => void
  table: Table<TData>
}

const CONFIRM_WORD = 'HAPUS'

export function TasksMultiDeleteDialog<TData>({
  open,
  onOpenChange,
  table,
}: TaskMultiDeleteDialogProps<TData>) {
  const [value, setValue] = useState('')

  const selectedRows = table.getFilteredSelectedRowModel().rows

  const handleDelete = () => {
    if (value.trim() !== CONFIRM_WORD) {
      toast.error(`Ketik "${CONFIRM_WORD}" untuk konfirmasi.`)
      return
    }

    onOpenChange(false)

    toast.promise(sleep(2000), {
      loading: 'Deleting tasks...',
      success: () => {
        setValue('')
        table.resetRowSelection()
        return `Deleted ${selectedRows.length} ${
          selectedRows.length > 1 ? 'tasks' : 'task'
        }`
      },
      error: 'Error',
    })
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDelete}
      disabled={value.trim() !== CONFIRM_WORD}
      title={
        <span className='text-destructive'>
          <AlertTriangle
            className='me-1 inline-block stroke-destructive'
            size={18}
          />{' '}
          Hapus {selectedRows.length}{' '}
          {selectedRows.length > 1 ? 'Komplain' : 'Komplain'}
        </span>
      }
      desc={
        <div className='space-y-4'>
          <p className='mb-2'>
            Apakah anda yakin untuk menghapus data tersebut? <br />
            Data tidak dapat ditarik kembali.
          </p>

          <Label className='my-4 flex flex-col items-start gap-1.5'>
            <span className=''>Konfirmasi dengan mengetikan "{CONFIRM_WORD}":</span>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Ketik "${CONFIRM_WORD}" untuk konfirmasi.`}
            />
          </Label>

          <Alert variant='destructive'>
            <AlertTitle>Perhatian!</AlertTitle>
            <AlertDescription>
              Data yang dihapus tidak dapat ditarik kembali.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText='Delete'
      destructive
    />
  )
}
