import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { tipes, statuses } from '../data/data'
import { type Printer } from '../data/schema'
import { EditRow } from "./action-menu"
import { Link } from "@tanstack/react-router"


export const tasksColumns: ColumnDef<Printer>[] = [

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
      <DataTableColumnHeader column={column} title='ID Printer' />
    ),
    cell: ({ row }) => <div className='w-[50px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: true,
    },

    // Kategori
    {
      accessorKey: 'kategori',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Kategori' />
      ), 
      meta: {
        tdClassName: 'ps-4'
      },
      cell: ({ row }) => {
         return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('kategori')}</span>
          </div>
        )
      },
    },

    // Nama Printer
    {
      accessorKey: 'nama',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Nama' />
      ),
      meta: {
        className: 'ps-1 max-w-0 w-1/3',
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

    // Action
    {
      id: 'actions',
      cell: ({ row }) => <EditRow row={row} />,
    },



]