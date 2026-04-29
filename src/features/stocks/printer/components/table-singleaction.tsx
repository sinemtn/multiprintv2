import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { SelectDropdown } from '@/components/select-dropdown'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { DatePicker } from '@/components/date-picker'
import { type StockPrinter } from '../data/schema'

type TaskMutateDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: StockPrinter
}

const formSchema = z.object({
  id: z.string(),
  name: z.string(),
  serialno: z.string(),
  feature: z.string(),
  buydate: z.date(),
  location: z.string(),
  branch: z.string(),
  status: z.string(),
  active: z.string(),
  note: z.string(),
})
type TaskForm = z.infer<typeof formSchema>


export function TasksMutateDrawer({
  open,
  onOpenChange,
  currentRow,
}: TaskMutateDrawerProps) {
  const isUpdate = !!currentRow

  const form = useForm<TaskForm>({
    resolver: zodResolver(formSchema),
    defaultValues: currentRow ?? {
      id: '',
      name: '',
      serialno: '',
      feature: '',
      buydate: undefined,
      location: '',
      branch: '',
      status: '',
      active: '',
      note: '',
    },
  })

  const onSubmit = (data: TaskForm) => {
    // do something with the form data
    onOpenChange(false)
    form.reset()
    showSubmittedData(data)
  }

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v)
        form.reset()
      }}
    >
      <SheetContent className='flex flex-col'>
        <SheetHeader className='text-start'>
          <SheetTitle>{isUpdate ? 'Update' : 'Tambah'} Stock Printer </SheetTitle>
          <SheetDescription>
            {isUpdate
              ? 'Update Data Stock Toner'
              : 'Buat Baru Stock Toner'}
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            id='tasks-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-6 overflow-y-auto px-4'
          >

            {/* Printer ID */}
            <FormField
              control={form.control}
              name='id'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Printer ID</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='ID Printer' disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Printer Name */}
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Printer</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Nama Printer' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Serial Key */}
            <FormField
              control={form.control}
              name='serialno'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No. Serial</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Serial' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Feature */}
            <FormField
              control={form.control}
              name='feature'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fitur</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Fitur' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
          control={form.control}
          name='buydate'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Tanggal Beli</FormLabel>
              <DatePicker selected={field.value} onSelect={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />

            {/* Location */}
            <FormField
              control={form.control}
              name='location'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokasi</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Lokasi' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Branch */}
            <FormField
              control={form.control}
              name='branch'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cabang</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Cabang' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status */}
            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Status Printer'
                    items={[
                      { label: 'Ready', value: 'Ready' },
                      { label: 'Contract', value: 'Contract' },
                      { label: 'Repair', value: 'Repair' },
                      { label: 'Sold', value: 'Sold' },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Note */}
            <FormField
              control={form.control}
              name='note'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catatan</FormLabel>
                  <FormControl>
                    <Textarea
                      className='resize-none'
                      placeholder='Tambahkan catatan (optional)'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            



          </form>
        </Form>



        <SheetFooter className='gap-2'>
          <SheetClose asChild>
            <Button variant='outline'>Tutup</Button>
          </SheetClose>
          <Button form='tasks-form' type='submit'>
            Simpan
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
