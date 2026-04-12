//  IMPORTS
import { useState } from "react";
import { type Table } from "@tanstack/react-table";
import { Trash2 } from 'lucide-react'
import { toast } from "sonner"
import { sleep } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { DataTableBulkActions as ActionToolbar } from '@/components/data-table'
import { type Complaint } from '../data/schema'
import { MultiDelete } from "./table-multidelete";


// PROGRAM
type MultiActionsProps<TData> = {
  table: Table<TData>
}
export function DataTableMultiActions<TData>({
  table,
}: MultiActionsProps<TData>) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const selectedRows = table.getFilteredSelectedRowModel().rows
  const handleBulkStatusChange = (status: string) => {
    const selectedTasks = selectedRows.map((row) => row.original as Complaint)
    toast.promise(sleep(2000), {
      loading: 'Updating status...',
      success: () => {
        table.resetRowSelection()
        return `Status updated to "${status}" for ${selectedTasks.length} task${selectedTasks.length > 1 ? 's' : ''}.`
      },
      error: 'Error',
    })
    table.resetRowSelection()
  }

  const handleBulkTipeChange = (tipe: string) => {
    const selectedTasks = selectedRows.map((row) => row.original as Complaint)
    toast.promise(sleep(2000), {
      loading: 'Updating priority...',
      success: () => {
        table.resetRowSelection()
        return `Tipe updated to "${tipe}" for ${selectedTasks.length} task${selectedTasks.length > 1 ? 's' : ''}.`
      },
      error: 'Error',
    })
    table.resetRowSelection()
  }

  const handleBulkExport = () => {
    const selectedTasks = selectedRows.map((row) => row.original as Complaint)
    toast.promise(sleep(2000), {
      loading: 'Exporting...',
      success: () => {
        table.resetRowSelection()
        return `Exported ${selectedTasks.length} task${selectedTasks.length > 1 ? 's' : ''} to CSV.`
      },
      error: 'Error',
    })
    table.resetRowSelection()
  }

  return (
    <>
      <ActionToolbar table={table} entityName='task'>
        {/* <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='size-8'
                  aria-label='Update status'
                  title='Update status'
                >
                  <CircleArrowUp />
                  <span className='sr-only'>Update status</span>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update status</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent sideOffset={14}>
            {statuses.map((status) => (
              <DropdownMenuItem
                key={status.value}
                defaultValue={status.value}
                onClick={() => handleBulkStatusChange(status.value)}
              >
                {status.icon && (
                  <status.icon className='size-4 text-muted-foreground' />
                )}
                {status.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='size-8'
                  aria-label='Update priority'
                  title='Update tipe'
                >
                  <ArrowUpDown />
                  <span className='sr-only'>Update tipe</span>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update tipe</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent sideOffset={14}>
            {tipes.map((tipe) => (
              <DropdownMenuItem
                key={tipe.value}
                defaultValue={tipe.value}
                onClick={() => handleBulkTipeChange(tipe.value)}
              >
                {tipe.icon && (
                  <tipe.icon className='size-4 text-muted-foreground' />
                )}
                {tipe.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              onClick={() => handleBulkExport()}
              className='size-8'
              aria-label='Export tasks'
              title='Export tasks'
            >
              <Download />
              <span className='sr-only'>Export surat tugas</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Export surat tugas</p>
          </TooltipContent>
        </Tooltip> */}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='destructive'
              size='icon'
              onClick={() => setShowDeleteConfirm(true)}
              className='size-8'
              aria-label='Hapus Printer'
              title='Hapus Printer'
            >
              <Trash2 />
              <span className='sr-only'>Hapus Data</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hapus Data</p>
          </TooltipContent>
        </Tooltip>
      </ActionToolbar>

      <MultiDelete
        open={showDeleteConfirm}
        onOpenChange={setShowDeleteConfirm}
        table={table}
      />
    </>
  )
}

