import { createFileRoute } from '@tanstack/react-router'
import { IndexMasterPrinter } from '@/features/master/printer'

export const Route = createFileRoute('/_authenticated/master/printer/')({
  component: IndexMasterPrinter,
})

