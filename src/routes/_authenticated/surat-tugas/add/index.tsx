import { createFileRoute } from '@tanstack/react-router'
import { AddSuratTugas } from '@/features/menu/surat-tugas/crud/create/general'

export const Route = createFileRoute('/_authenticated/surat-tugas/add/')({
  component: AddSuratTugas,
})
