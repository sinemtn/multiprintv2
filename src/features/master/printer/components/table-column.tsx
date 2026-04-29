// Import Global Components
import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type MasterPrinter } from "../data/schema"
import { EditRow } from "./table-row-edit"
import { LongText } from '@/components/long-text'
import { cn } from '@/lib/utils'


export const TableColumns: ColumnDef<MasterPrinter>[] = [

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

    // Printer ID
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='ID' />
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

    //   Manufaktur
    {
        accessorKey: 'manufacture',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Manufaktur' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('manufacture')}</div>
        ),
    },

    //   Category
    {
        accessorKey: 'category',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Kategori' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('category')}</div>
        ),
    },

    //   Toner
    {
        accessorKey: 'toner',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Toner' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('toner')}</div>
        ),
    },


    //   Supplier
    {
        accessorKey: 'supplier',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Supplier' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('supplier')}</div>
        ),
    },

    //   Active
    {
        accessorKey: 'active',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => (
            <div className='w-fit ps-2 text-nowrap'>{row.getValue('active')}</div>
        ),
    },

    // Action
    {
        id: 'actions',
        cell: ({ row }) => <EditRow row={row} />,
    },

]

