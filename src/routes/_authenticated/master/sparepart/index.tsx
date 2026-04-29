import { createFileRoute } from '@tanstack/react-router'
import { IndexMasterSparepart } from '@/features/master/sparepart'

export const Route = createFileRoute('/_authenticated/master/sparepart/')({
  component: IndexMasterSparepart,
})

