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
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'

import { type SuratTugas } from '../data/schema'

type TaskMutateDrawerProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    currentRow?: SuratTugas
}

const formSchema = z.object({

    id: z.string().optional(),
    name: z.string(),
    serialno: z.string(),
    feature: z.string(),
    buydate: z.string(),
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
            buydate: '',
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
                            ? 'Update Data Stock Printer'
                            : 'Buat Baru Stock Printer'}
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
                                        <Input {...field} placeholder='Nama' disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />




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
