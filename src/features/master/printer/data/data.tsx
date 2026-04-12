import { Ban, CalendarPlus, CheckCircle2, Loader } from "lucide-react"

export const tipes = [
    {
        value: 'Maintenance',
        label: 'Maintenance'as const,
        icon: CalendarPlus,
    },
     {
        value: 'Servie',
        label: 'Service' as const,
        icon: CalendarPlus,
    },
    {
        value: 'Non-Repair',
        label: 'Non-Repair'as const,
        icon: CalendarPlus,
    },

]
    export const statuses = [
        {
    label: 'Baru',
    value: 'Baru' as const,
    icon: CalendarPlus,
    },
    {
        label: 'Proses',
        value: 'Proses' as const,
        icon: Loader,
    },
    {
        label: 'Selesai',
        value: 'Selesai' as const,
        icon: CheckCircle2
    },
    {
        label: 'Cancel',
        value: 'Cancel' as const,
        icon: Ban
    },

]