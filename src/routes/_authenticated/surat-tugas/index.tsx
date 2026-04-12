import { createFileRoute } from '@tanstack/react-router'
import { IndexSuratTugas } from '@/features/menu/surat-tugas'

export const Route = createFileRoute('/_authenticated/surat-tugas/')({
  component: IndexSuratTugas,
})

