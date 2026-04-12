import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type Task } from '../data/schema'
import { EditRow } from './tugas-editbaris'

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
      <DataTableColumnHeader column={column} title='ID' />
    ),
    cell: ({ row }) => <div className='w-[120px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: true,
    },

    // No Komplain
    {
      accessorKey: 'nokomplain',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='No Komplain' />
      ),
      meta: {
        className: 'ps-1 max-w-0 w-1/3',
        tdClassName: 'ps-4',
      },
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('nokomplain')}</span>
          </div>
        )
      },
    },

    // Nama Customer
    {
      accessorKey: 'namacustomer',
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
            <span className='truncate font-medium'>{row.getValue('namacustomer')}</span>
          </div>
        )
      },
    },

    // Nama PIC
    {
      accessorKey: 'namapic',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Nama PIC' />
      ),
      meta: {
        className: 'ps-1 max-w-0 w-1/3',
        tdClassName: 'ps-4',
      },
      cell: ({ row }) => {
   
        return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('namapic')}</span>
          </div>
        )
      },
    },

    // Tipe
    // {
    // accessorKey: 'tipe',
    // header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title='Tipe' />
    // ),
    // meta: { 
    // tdClassName: 'ps-4' },
    // cell: ({ row }) => {
    //     const tipe = tipes.find(
    //     (tipe) => tipe.value === row.getValue('tipe')
    //     )

    //     if (!tipe) {
    //     return null
    //     }

    //     return (
    //     <div className='flex w-[80px] items-center gap-2'>
    //       {tipe.icon && (
    //         <tipe.icon className='size-4 text-muted-foreground' />
    //       )}
    //       <span>{tipe.label}</span>
    //     </div>
    //   )
    // },
    // filterFn: (row, id, value) => {
    //     return value.includes(row.getValue(id))
    // },
    // },
    {
      accessorKey: 'tipe',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Tipe' />
      ), 
      meta: {
        tdClassName: 'ps-4'
      },
      cell: ({ row }) => {
         return (
          <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('tipe')}</span>
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
        tdClassName: 'ps-4'
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