import { createFileRoute } from '@tanstack/react-router'
import { Settings } from '@/features/tugas/actions'

export const Route = createFileRoute('/_authenticated/surat-tugas/actions')({
  component: Settings,
})
