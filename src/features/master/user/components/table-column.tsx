// Import Global Components
import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type MasterUser } from "../data/schema"
import { EditRow } from "./table-row-edit"


export const TableColumns: ColumnDef<MasterUser>[] = [

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
            <DataTableColumnHeader column={column} title='User ID' />
        ),
        cell: ({ row }) => <div className='w-[80px] '>{row.getValue('id')}</div>,
        enableSorting: false,
        enableHiding: false,
    },

    // Nama 
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

    // Role
    {
        accessorKey: 'role',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Role' />
        ),
        meta: {
            tdClassName: 'ps-4'
        },
        cell: ({ row }) => {
            return (
                <div className='flex space-x-2'>
                    <span className='truncate font-medium'>{row.getValue('role')}</span>
                </div>
            )
        },
    },

    // Email
    {
        accessorKey: 'email',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Email' />
        ),
        meta: {
            tdClassName: 'ps-4'
        },
        cell: ({ row }) => {
            return (
                <div className='flex space-x-2'>
                    <span className='truncate font-medium'>{row.getValue('email')}</span>
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
