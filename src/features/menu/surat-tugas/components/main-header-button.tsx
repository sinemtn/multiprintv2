import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export function MainHeaderButton() {

  return (
    <div className='flex gap-2'>
      <Button className='space-x-1'>
        <span>
          <Link
              to='/surat-tugas/add'
              className='grid flex-1 text-start text-sm leading-tight'
            >
              Buat Surat Tugas
            </Link>
          </span> 
      </Button>
    </div>
  )
}
