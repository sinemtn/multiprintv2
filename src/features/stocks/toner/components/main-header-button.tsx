import { Button } from '@/components/ui/button'
import { useTasks } from './main-page'

export function MainHeaderButton() {
  const { setOpen } = useTasks()
  return (
    <div className='flex gap-2'>
      <Button className='space-x-1' onClick={() => setOpen('create')}>
        <span>Add Stock Toner</span>
      </Button>
    </div>
  )
}
