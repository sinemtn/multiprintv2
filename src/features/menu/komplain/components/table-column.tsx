// Import Global Components
import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type Complaint } from "../data/schema"
import { EditRow } from "./table-row-edit"
import { LongText } from '@/components/long-text'
import { cn } from '@/lib/utils'


export const TableColumns: ColumnDef<Complaint>[] = [

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
    // No Komplain
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='No. Komplain' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-36 ps-3'>{row.getValue('id')}</LongText>
        ),
        meta: {
            className: cn(
                'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)]',
                'ps-0.5 max-md:sticky start-6 @4xl/content:table-cell @4xl/content:drop-shadow-none'
            ),
        },
        enableHiding: false,
    },
    // MP. No
    {
        accessorKey: 'mpNo',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='MP. No' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('mpNo')}</div>
        ),
    },
    //   Description
    {
        accessorKey: 'description',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Deskripsi' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('description')}</div>
        ),
    },
    //   Customer
    {
        accessorKey: 'customer',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Customer' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('customer')}</div>
        ),
    },
    //   Sales
    {
        accessorKey: 'sales',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Sales' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('sales')}</div>
        ),
    },

    //   Status
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('status')}</div>
        ),
    },


    // Action
    {
        id: 'actions',
        cell: ({ row }) => <EditRow row={row} />,
    },

]
