// Import Global Components
import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type MasterSparepart } from "../data/schema"
import { EditRow } from "./table-row-edit"


export const TableColumns: ColumnDef<MasterSparepart>[] = [

    // Checkbox
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

    // ID
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='id' />
        ),
        cell: ({ row }) => <div className='w-[80px] '>{row.getValue('id')}</div>,
        enableSorting: false,
        enableHiding: false,
    },

    // Nama Toner
    {
        accessorKey: 'name',
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
                    <span className='truncate font-medium'>{row.getValue('name')}</span>
                </div>
            )
        },
    },


    // Customer
    {
        accessorKey: 'active',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        meta: {
            tdClassName: 'ps-4'
        },
        cell: ({ row }) => {
            return (
                <div className='flex space-x-2'>
                    <span className='truncate font-medium'>{row.getValue('active')}</span>
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
