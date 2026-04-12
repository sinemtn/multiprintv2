import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type Task } from '../data/schema'

export const tasksColumns: ColumnDef<Task>[] = [

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
      <DataTableColumnHeader column={column} title='ID ' />
    ),
    cell: ({ row }) => <div className='w-[120px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: true,
    },

    // Items Name
    {
      accessorKey: 'nama',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Nama' />
      ),
      meta: {
        className: 'ps-1 max-w-0 w-2/3',
        tdClassName: 'ps-4',
      },
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('nama')}</span>
          </div>
        )
      },
    },

    // Items Qty
    {
      accessorKey: 'qty',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Qty' />
      ),
      meta: {
        className: 'ps-1 max-w-0 w-1/3',
        tdClassName: 'ps-4',
      },
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('qty')}</span>
          </div>
        )
      },
    },

]