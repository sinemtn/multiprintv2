import { createFileRoute } from '@tanstack/react-router'
import { TonerTasks } from '@/features/master/toner'

export const Route = createFileRoute('/_authenticated/toners/')({
  component: TonerTasks,
})

