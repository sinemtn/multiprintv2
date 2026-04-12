import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { Button } from '@/components/ui/button'
import {
  Form,

} from '@/components/ui/form'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { type Printer } from '../data/schema'

type TaskMutateDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Printer
}

const formSchema = z.object({
  nama: z.string().min(1, 'No Komplain perlu diisi.'),
  manufaktur: z.string().min(1, 'Nama Customer perlu diisi.'),
  kategori: z.string().min(1, 'Pilih tipe surat tugas.'),
  toner: z.string().min(1, 'Nama PIC perlu diisi.'),
  supplier: z.string().min(1, 'Pilih status.'),
  aktif: z.string().min(1, 'Pilih aktif.'),
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
    nama: '',
    manufaktur:'',
    kategori:'',
    toner:'',
    supplier:'',
    aktif:'',
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
          <SheetTitle>{isUpdate ? 'Update' : 'Tambah'} Printer </SheetTitle>
          <SheetDescription>
            {isUpdate
              ? 'Update Data Stock Printer.'
              : 'Buat Stock Printer Baru.'}
          </SheetDescription>
        </SheetHeader>
        
        <Form {...form}>

          <form
            id='tasks-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-6 overflow-y-auto px-4'
          >
          
          
            {/* <FormField
              control={form.control}
              name='nama'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Nama' disabled/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
         
            <FormField
              control={form.control}
              name='manufaktur'
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
     

            <FormField
              control={form.control}
              name='kategori'
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
       
       
            <FormField
              control={form.control}
              name='toner'
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
    
    
            <FormField
              control={form.control}
              name='supplier'
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
            /> */}

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
