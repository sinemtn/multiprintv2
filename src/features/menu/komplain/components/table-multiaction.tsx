//  IMPORTS
import { useState } from "react";
import { type Table } from "@tanstack/react-table";
import { Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { DataTableBulkActions as ActionToolbar } from '@/components/data-table'

import { MultiDelete } from "./table-multidelete";


// PROGRAM
type MultiActionsProps<TData> = {
  table: Table<TData>
}
export function DataTableMultiActions<TData>({
  table,
}: MultiActionsProps<TData>) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  return (
    <>
      <ActionToolbar table={table} entityName='task'>
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

