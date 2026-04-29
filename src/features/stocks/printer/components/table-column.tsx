// Import Global Components
import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from '@/components/data-table'
import { type StockPrinter } from "../data/schema"
import { EditRow } from "./table-row-edit"
import { LongText } from '@/components/long-text'
import { cn } from '@/lib/utils'


export const TableColumns: ColumnDef<StockPrinter>[] = [

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

       //   Nama Printer
       {
           accessorKey: 'name',
           header: ({ column }) => (
               <DataTableColumnHeader column={column} title='Nama Printer' />
           ),
           cell: ({ row }) => (
               <div className='w-fit ps-2 text-nowrap'>{row.getValue('name')}</div>
           ),
       },

       //   Serial
       {
           accessorKey: 'serialno',
           header: ({ column }) => (
               <DataTableColumnHeader column={column} title='Serial' />
           ),
           cell: ({ row }) => (
               <div className='w-fit ps-2 text-nowrap'>{row.getValue('serialno')}</div>
           ),
       },

       //   Lokasi
       {
           accessorKey: 'location',
           header: ({ column }) => (
               <DataTableColumnHeader column={column} title='Lokasi' />
           ),
           cell: ({ row }) => (
               <div className='w-fit ps-2 text-nowrap'>{row.getValue('location')}</div>
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

            //   Note
       {
           accessorKey: 'note',
           header: ({ column }) => (
               <DataTableColumnHeader column={column} title='Catatan' />
           ),
           cell: ({ row }) => (
               <div className='w-fit ps-2 text-nowrap'>{row.getValue('note')}</div>
           ),
       },


 

    // Action
    {
        id: 'actions',
        cell: ({ row }) => <EditRow row={row} />,
    },

]
