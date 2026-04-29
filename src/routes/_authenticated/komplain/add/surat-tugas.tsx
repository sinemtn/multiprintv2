import { createFileRoute } from '@tanstack/react-router'
import { ComplaintSuratTugas } from '@/features/menu/komplain/crud/create/surat-tugas'

export const Route = createFileRoute('/_authenticated/komplain/add/surat-tugas')({
  component: ComplaintSuratTugas,
})
