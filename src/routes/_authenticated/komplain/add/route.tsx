import { createFileRoute } from '@tanstack/react-router'
import { CreateComplaint } from '@/features/menu/komplain/crud/create'

export const Route = createFileRoute('/_authenticated/komplain/add')({
  component: CreateComplaint,
})
