import { createFileRoute } from '@tanstack/react-router'
import { IndexMasterToner } from '@/features/master/toner'

export const Route = createFileRoute('/_authenticated/master/toner/')({
  component: IndexMasterToner,
})

