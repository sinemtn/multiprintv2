import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
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
  FormDescription,
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
import { DatePicker } from '@/components/date-picker'
import { getRouteApi } from '@tanstack/react-router'

const languages = [
  { label: 'Nigel', value: 'en' },
  { label: 'Venus', value: 'fr' },
  { label: 'Athar', value: 'de' },
  { label: 'Dhammiko', value: 'es' },
  { label: 'Adhil', value: 'pt' },
  { label: 'Novandri', value: 'ru' },
] as const

const accountFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Please enter your name.')
    .min(2, 'Name must be at least 2 characters.')
    .max(30, 'Name must not be longer than 30 characters.'),
  dob: z.date('Please select your date of birth.'),
  language: z.string('Please select a language.'),
})

const routeApi = getRouteApi('/_authenticated/surat-tugas/actions/general/$id')


type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  name: '',
}

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  const { id } = routeApi.useParams()


  function onSubmit(data: AccountFormValues) {
    showSubmittedData(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
      
      {/* Nama Customer */}
      <FormField
          control={form.control}
          name='language'
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
                        ' justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? languages.find(
                            (language) => language.value === field.value
                          )?.label
                        : 'Cari Customer'}
                      <CaretSortIcon className='ms-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[530px] p-0'>
                  <Command>
                    <CommandInput placeholder='Search language...' />
                    <CommandEmpty>Customer tidak ditemukan.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue('language', language.value)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                'size-4',
                                language.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {language.label}
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

      {/* Jenis Tugas */}
      <FormField
          control={form.control}
          name='language'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Jenis Tugas</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        ' justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? languages.find(
                            (language) => language.value === field.value
                          )?.label
                        : 'Cari Jenis Tugas'}
                      <CaretSortIcon className='ms-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[530px] p-0'>
                  <Command>
                    <CommandInput placeholder='Search language...' />
                    <CommandEmpty>Jenis tugas tidak ditemukan.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue('language', language.value)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                'size-4',
                                language.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {language.label}
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
        
      {/*No. Komplain */}
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>No. Komplain</FormLabel>
            <FormControl>
              <Input placeholder='Ex : C2025060001' disabled />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Surat Tugas */}
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Surat Tugas</FormLabel>
            <FormControl>
              <Input placeholder='Ex : SJ/2025/06/0001' disabled />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* PIC */}
      <FormField
          control={form.control}
          name='language'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>PIC</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        ' justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? languages.find(
                            (language) => language.value === field.value
                          )?.label
                        : 'Cari PIC'}
                      <CaretSortIcon className='ms-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[530px] p-0'>
                  <Command>
                    <CommandInput placeholder='Search language...' />
                    <CommandEmpty>PIC tidak ditemukan.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue('language', language.value)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                'size-4',
                                language.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {language.label}
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

      {/* <FormField
        control={form.control}
        name='dob'
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Date of birth</FormLabel>
            <DatePicker selected={field.value} onSelect={field.onChange} />
            <FormDescription>
              Your date of birth is used to calculate your age.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='language'
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Language</FormLabel>
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
                      ? languages.find(
                          (language) => language.value === field.value
                        )?.label
                      : 'Select language'}
                    <CaretSortIcon className='ms-2 h-4 w-4 shrink-0 opacity-50' />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-0'>
                <Command>
                  <CommandInput placeholder='Search language...' />
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    <CommandList>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue('language', language.value)
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              'size-4',
                              language.value === field.value
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandList>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <FormDescription>
              This is the language that will be used in the dashboard.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> */}

        <Button type='submit'>Simpan Data</Button>
      </form>
    </Form>
  )
}
