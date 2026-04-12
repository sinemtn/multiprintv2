import { createFileRoute } from '@tanstack/react-router'
import { IndexStockPrinter } from '@/features/stocks/printer'

export const Route = createFileRoute('/_authenticated/stock/printer/')({
  component: IndexStockPrinter,
})

