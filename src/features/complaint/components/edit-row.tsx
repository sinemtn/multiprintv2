import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { type Row } from '@tanstack/react-table'
import { Eye, PencilIcon, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  useSidebar,
} from '@/components/ui/sidebar'
import { complaintSchema } from '../data/schema'
import { useTasks } from './provider'

type DataTabelAktifProps<TData> = {
    row: Row<TData>
}

export function EditRow<TData>({ row }: DataTabelAktifProps<TData>) {
  const task = complaintSchema.parse(row.original)
  const { setOpen, setCurrentRow } = useTasks()
  const { setOpenMobile } = useSidebar()



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

          {/* Edit based on spesific ID */}
          <DropdownMenuItem asChild>
            <Link
              to='/surat-tugas/actions/general/$id'
              params={{ id: task.id }}    

              onClick={() => setOpenMobile(false)}
              className='flex w-full cursor-pointer items-center px-2 py-1.5 text-sm'
            >
              <span className='flex-1'>Edit</span>
              <DropdownMenuShortcut>
                <PencilIcon size={16} />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>



          <DropdownMenuItem>  
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

          <DropdownMenuSeparator />
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
