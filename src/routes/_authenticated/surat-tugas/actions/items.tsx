import { createFileRoute } from '@tanstack/react-router'
import { ActionItems } from '@/features/tugas/actions/items'

export const Route = createFileRoute('/_authenticated/surat-tugas/actions/items')({
    component: ActionItems,
})