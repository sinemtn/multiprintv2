import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Textarea } from '@/components/ui/textarea'

const customers = [
  { label: 'Venus', value: 'Venus' },
  { label: 'Dhammiko', value: 'Dhammiko' },
  { label: 'Adhil', value: 'Adhil' },
  { label: 'Noviandri', value: 'Noviandri' },
  { label: 'Nigel', value: 'Nigel' },
  { label: 'Jaka', value: 'Jaka' },
  { label: 'Arma', value: 'Arma' },
  { label: 'Saga', value: 'Saga' },
  { label: 'Duarin', value: 'Duarin' },
  { label: 'Camav', value: 'Camav' },
  
] as const

const accountFormSchema = z.object({
  nokomplain: z.string(),
  customer: z.string(),
  status: z.string(),
  note: z.string(),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  nokomplain: '',
  customer: '',
  status: '',
  note: '',
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
          name='nokomplain'
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. Komplain</FormLabel>
              <FormControl>
                <Input placeholder='Generate otomatis' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='customer'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Customer</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? customers.find(
                            (customer) => customer.value === field.value
                          )?.label
                        : 'Pilih Customer'}
                      <CaretSortIcon className='ms-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandInput placeholder='Cari Customer...' />
                    <CommandEmpty>Tidak ada customer.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {customers.map((customer) => (
                          <CommandItem
                            value={customer.label}
                            key={customer.value}
                            onSelect={() => {
                              form.setValue('customer', customer.value)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                'size-4',
                                customer.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {customer.label}
                          </CommandItem>
                        ))}
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
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

         <FormField
          control={form.control}
          name='note'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Keterangan...'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type='submit'>Create Komplain</Button>
      </form>
    </Form>
  )
}
