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

type MultiDeleteProps<TData> = {
    open: boolean
    onOpenChange: (open: boolean) => void
    table: Table<TData>
}
const CONFIRM_WORD = 'HAPUS'

export function MultiDelete<TData>({
  open,
  onOpenChange,
  table,
}: MultiDeleteProps<TData>) {
  const [value, setValue] = useState('')
  const selectedRows = table.getFilteredSelectedRowModel().rows
  const handleDelete = () => {
    if (value.trim() !== CONFIRM_WORD) {
      toast.error(`Ketik "${CONFIRM_WORD}" untuk konfirmasi.`)
      return
    }
    onOpenChange(false)
    toast.promise(sleep(2000), {
      loading: 'Sedang menghapus...',
      success: () => {
        setValue('')
        table.resetRowSelection()
        return `Hapus ${selectedRows.length} ${
          selectedRows.length > 1 ? 'Data' : 'Data'
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
          {selectedRows.length > 1 ? 'Data' : 'Data'}
        </span>
      }
      desc={
        <div className='space-y-4'>

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
      confirmText='Hapus'
      destructive
    />
  )
}