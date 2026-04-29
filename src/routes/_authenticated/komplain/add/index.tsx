import { createFileRoute } from '@tanstack/react-router'
import { AddComplaint } from '@/features/menu/komplain/crud/create/general'


export const Route = createFileRoute('/_authenticated/komplain/add/')({
  component: AddComplaint,
})
