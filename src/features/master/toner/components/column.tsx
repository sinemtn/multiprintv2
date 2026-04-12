import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { type Toner } from '../data/schema'
import { DataTableColumnHeader } from "./header-column"
import { EditRow } from "./edit-row"

export const tonerColumns: ColumnDef<Toner>[] = [

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
        <DataTableColumnHeader column={column} title='ID Sparepart' />
    ),
    cell: ({ row }) => <div className='w-[50px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: true,
    },

    // Nama Toner
    {
        accessorKey: 'nama',
        header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Nama Toner' />
        ),
        meta: {
        className: 'ps-1 max-w-0 w-1/2',
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

    // Kategori
    {
        accessorKey: 'kategori',
        header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Kategori' />
        ),
        meta: {
        className: 'ps-1 max-w-0 w-1/2',
        tdClassName: 'ps-4',
        },
        cell: ({ row }) => {
        return (
            <div className='flex space-x-2'>
            <span className='truncate font-medium'>{row.getValue('kategori')}</span>
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