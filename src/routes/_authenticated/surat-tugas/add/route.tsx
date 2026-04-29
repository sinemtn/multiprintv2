import { createFileRoute } from '@tanstack/react-router'
import { CreateSuratTugas } from '@/features/menu/surat-tugas/crud/create'

export const Route = createFileRoute('/_authenticated/surat-tugas/add')({
  component: CreateSuratTugas,
})
