import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { type Row } from '@tanstack/react-table'
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  useSidebar,
} from '@/components/ui/sidebar'
import { printerSchema } from '../data/schema'
import { useTasks } from './provider'

type DataTabelAktifProps<TData> = {
    row: Row<TData>
}

export function EditRow<TData>({
  row,
}: DataTabelAktifProps<TData>) {
  const task = printerSchema.parse(row.original)

  const { setOpen, setCurrentRow } = useTasks()
  const {  } = useSidebar()

    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
          >
            <DotsHorizontalIcon className='h-4 w-4' />  
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[160px]'>

          <DropdownMenuItem
            onClick={() => {
              setCurrentRow(task)
              setOpen('update')
            }}
          >
            Update
          <DropdownMenuShortcut>
            <Pencil size={16} />
          </DropdownMenuShortcut>
          </DropdownMenuItem>


          {/* <DropdownMenuItem>  
          <Link
              to='/settings'
              onClick={() => setOpenMobile(false)}
              className='grid flex-1 text-start text-sm leading-tight'
            >
              Detail
            </Link>
            <DropdownMenuShortcut>
            <Eye size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator /> */}


          <DropdownMenuItem
            onClick={() => {
              setCurrentRow(task)
              setOpen('delete')
            }}
          >
            Delete
            <DropdownMenuShortcut>
              <Trash2 size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
