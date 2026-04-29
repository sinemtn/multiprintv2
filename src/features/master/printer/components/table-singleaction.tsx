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

import { type MasterPrinter } from '../data/schema'

type TaskMutateDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: MasterPrinter
}

const formSchema = z.object({

  id: z.string(),
  name: z.string(),
  manufacture: z.string(),
  category: z.string(),
  toner: z.string(),
  supplier: z.string(),
  active: z.string(),
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
      manufacture: '',
      category: '',
      toner: '',
      supplier: '',
      active: '',
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
          <SheetTitle>{isUpdate ? 'Update' : 'Tambah'} Master Printer </SheetTitle>
          <SheetDescription>
            {isUpdate
              ? 'Update Data Master Printer'
              : 'Buat Baru Master Printer'}
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

            {/* Manufacture  */}
            <FormField
              control={form.control}
              name='manufacture'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manufaktur</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Manufaktur' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Supplier  */}
            <FormField
              control={form.control}
              name='supplier'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Supplier' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Toner  */}
            <FormField
              control={form.control}
              name='toner'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Toner</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Toner' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Kategori */}
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori </FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Kategori Printer'
                    items={[
                      { label: 'Black', value: 'Black' },
                      { label: 'Color', value: 'Color' },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status */}
            <FormField
              control={form.control}
              name='active'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Status Printer'
                    items={[
                      { label: 'True', value: 'True' },
                      { label: 'False', value: 'False' },
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
            Simpan
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
