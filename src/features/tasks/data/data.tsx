import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  AlertCircle,
  CalendarPlus,
  CheckCircle2,
  Loader,
  Ban,
} from 'lucide-react'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
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

export const priorities = [
  {
    label: 'Low',
    value: 'low' as const,
    icon: ArrowDown,
  },
  {
    label: 'Medium',
    value: 'medium' as const,
    icon: ArrowRight,
  },
  {
    label: 'High',
    value: 'high' as const,
    icon: ArrowUp,
  },
  {
    label: 'Critical',
    value: 'critical' as const,
    icon: AlertCircle,
  },
]
