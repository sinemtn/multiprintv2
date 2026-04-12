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
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { SelectDropdown } from '@/components/select-dropdown'
import { type Sparepart } from '../data/schema'

type TaskMutateDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Sparepart
}

const formSchema = z.object({
  nokomplain: z.string().min(1, 'No Komplain perlu diisi.'),
  namacustomer: z.string().min(1, 'Nama Customer perlu diisi.'),
  tipe: z.string().min(1, 'Pilih tipe surat tugas.'),
  namapic: z.string().min(1, 'Nama PIC perlu diisi.'),
  status: z.string().min(1, 'Pilih status.'),
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
    nokomplain: '',
    namacustomer:'',
    tipe:'',
    namapic:'',
    status:'',
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
          <SheetTitle>{isUpdate ? 'Update' : 'Create'} Surat Tugas</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? 'Update the task by providing necessary info.'
              : 'Add a new task by providing necessary info.'}
            Click save.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id='tasks-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-6 overflow-y-auto px-4'
          >
          
            {/* No Komplain */}
            <FormField
              control={form.control}
              name='nokomplain'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No. Komplain</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='No komplain' disabled/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Nama Customer */}
            <FormField
              control={form.control}
              name='namacustomer'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Customer</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Nama Customer' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Tipe */}
            <FormField
              control={form.control}
              name='tipe'
              render={({ field }) => (
                <FormItem className='relative'>
                  <FormLabel>Tipe</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center'>
                        <FormControl>
                          <RadioGroupItem value='Maintenance' />
                        </FormControl>
                        <FormLabel className='font-normal'>Maintenance</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center'>
                        <FormControl>
                          <RadioGroupItem value='Servie' />
                        </FormControl>
                        <FormLabel className='font-normal'>Servie</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center'>
                        <FormControl>
                          <RadioGroupItem value='Non-Repair' />
                        </FormControl>
                        <FormLabel className='font-normal'>Non-Repair</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Nama PIC */}
            <FormField
              control={form.control}
              name='namapic'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama PIC</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Nama PIC' />
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
                    placeholder='Pilih Status Surat Tugas'
                    items={[
                      { label: 'Baru', value: 'Baru' },
                      { label: 'Proses', value: 'Proses' },
                      { label: 'Selesai', value: 'Selesai' },
                      { label: 'Cancel', value: 'Cancel' },
                    ]}
                  />
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
            Save
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
