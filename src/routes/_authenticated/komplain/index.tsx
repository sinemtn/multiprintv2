
import { createFileRoute } from '@tanstack/react-router' 
import { IndexComplaint } from '@/features/menu/komplain'


export const Route = createFileRoute('/_authenticated/komplain/')({
  component: IndexComplaint,
})


