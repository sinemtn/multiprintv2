import { createFileRoute } from '@tanstack/react-router'
import { IndexMasterUser } from '@/features/master/user'

export const Route = createFileRoute('/_authenticated/master/user/')({
  component: IndexMasterUser,
})

