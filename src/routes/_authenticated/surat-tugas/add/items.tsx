import { createFileRoute } from '@tanstack/react-router'
import { SuratTugasItems } from '@/features/menu/surat-tugas/crud/create/items'
export const Route = createFileRoute('/_authenticated/surat-tugas/add/items')({
  component: SuratTugasItems,
})
