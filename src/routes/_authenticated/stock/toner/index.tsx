import { createFileRoute } from '@tanstack/react-router'
import { IndexStockToner } from '@/features/stocks/toner'

export const Route = createFileRoute('/_authenticated/stock/toner/')({
  component: IndexStockToner,
})

