import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'


// const customers = [
//   { label: 'Venus', value: 'Venus' },
//   { label: 'Dhammiko', value: 'Dhammiko' },
//   { label: 'Adhil', value: 'Adhil' },
//   { label: 'Noviandri', value: 'Noviandri' },
//   { label: 'Nigel', value: 'Nigel' },
//   { label: 'Jaka', value: 'Jaka' },
//   { label: 'Arma', value: 'Arma' },
//   { label: 'Saga', value: 'Saga' },
//   { label: 'Duarin', value: 'Duarin' },
//   { label: 'Camav', value: 'Camav' },

// ] as const

const accountFormSchema = z.object({
  id: z.string(),
  nokomplain: z.string(),
  mpno: z.string(),
  status: z.string(),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  id: '',
  nokomplain: '',
  mpno: '',
  status: '',
}

export function ProfileForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  function onSubmit(data: AccountFormValues) {
    showSubmittedData(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>

        <FormField
          control={form.control}
          name='id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surat Tugas ID</FormLabel>
              <FormControl>
                <Input placeholder='Surat Tugas ID' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='nokomplain'
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. Komplain</FormLabel>
              <FormControl>
                <Input placeholder='No. Komplain' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='mpno'
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. MP</FormLabel>
              <FormControl>
                <Input placeholder='No. MP' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Pilih Status' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Solved'>Solved</SelectItem>
                  <SelectItem value='Repair'>Repair</SelectItem>
                  <SelectItem value='Maintenance'>Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Create Surat Tugas</Button>
      </form>
    </Form>
  )
}
