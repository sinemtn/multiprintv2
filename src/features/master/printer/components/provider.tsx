import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { type Printer } from '../data/schema'

type TasksDialogType = 'create' | 'update' | 'delete' | 'import'

type TasksContextType = {
  open: TasksDialogType | null
  setOpen: (str: TasksDialogType | null) => void
  currentRow: Printer | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Printer | null>>
}

const TasksContext = React.createContext<TasksContextType | null>(null)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useDialogState<TasksDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Printer | null>(null)

  return (
    <TasksContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </TasksContext>
  )
}

export const useTasks = () => {
  const tasksContext = React.useContext(TasksContext)

  if (!tasksContext) {
    throw new Error('useTasks has to be used within <TasksContext>')
  }

  return tasksContext
}
