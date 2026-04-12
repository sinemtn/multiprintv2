import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type Complaint } from '../data/schema'
import { EditRow } from './edit-row'

export const complaintsColumn: ColumnDef<Complaint>[] = [

    // ID All Select
    {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
    },

    // ID Spesific Select
    {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='ID' />
    ),
    cell: ({ row }) => <div className='w-[120px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: true,
    },

    // MP. NO
    {
      accessorKey: 'mpno',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='MP. No' />
      ),
      meta: {
        className: 'ps-1 max-w-0 w-1/3',
        tdClassName: 'ps-4',
      },
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('mpno')}</span>
          </div>
        )
      },
    },

    // Nama Customer
    {
      accessorKey: 'customer',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Nama Customer' />
      ),
      meta: {
        className: 'ps-1 max-w-0 w-1/3',
        tdClassName: 'ps-4',
      },
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('customer')}</span>
          </div>
        )
      },
    },


    // Status
     {
      accessorKey: 'status',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Status' />
      ), 
       meta: {
        className: 'ps-1 max-w-0 w-1/3',
        tdClassName: 'ps-4',
      },
      cell: ({ row }) => {
         return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('status')}</span>
          </div>
        )
      },
    },

    // Action
    {
      id: 'actions',
      cell: ({ row }) => <EditRow row={row} />,
    },
]