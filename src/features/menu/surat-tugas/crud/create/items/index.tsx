import { useState } from "react"
import { 
  MoreHorizontal, 
  SquarePen, 
  Trash2, 
  Plus, 
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const DATA_STATIS = [
  {
    id: "SPRT0001",
    name: "FUSER UNIT 220V",
    qty: 9,
  },
  {
    id: "SPRT0002",
    name: "PICKUP ROLLER ASSEMBLY",
    qty: 5,
  },
]

export function SuratTugasItems() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4 w-full">
      {/* Group Tombol Atas */}
      <div className="flex justify-end items-center gap-2">
        
        {/* MODAL / DIALOG POPUP */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2 h-9 bg-slate-100 text-slate-900 hover:bg-slate-200">
              <Plus className="h-4 w-4" /> Add Item
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0f172a] border-slate-800 text-slate-200 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Item</DialogTitle>
              <DialogDescription className="text-slate-400">
                Masukkan detail item baru untuk surat tugas ini.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="id" className="text-slate-300">ID Item</Label>
                <Input id="id" placeholder="Contoh: SPRT0003" className="bg-slate-900 border-slate-700 text-slate-200" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-slate-300">Nama Item</Label>
                <Input id="name" placeholder="Nama sparepart..." className="bg-slate-900 border-slate-700 text-slate-200" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="qty" className="text-slate-300">Kuantitas</Label>
                <Input id="qty" type="number" placeholder="0" className="bg-slate-900 border-slate-700 text-slate-200" />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="ghost" onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-200">
                Cancel
              </Button>
              <Button type="submit" className="bg-slate-100 text-slate-900 hover:bg-slate-200">
                Save Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabel */}
      <div className="rounded-md border border-slate-800 bg-[#020817]">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800 hover:bg-transparent">
              <TableHead className="text-slate-400 font-bold">ID Items</TableHead>
              <TableHead className="text-slate-400 font-bold">Name</TableHead>
              <TableHead className="text-slate-400 font-bold">Kuantitas</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DATA_STATIS.map((item) => (
              <TableRow key={item.id} className="border-slate-800 hover:bg-slate-900/50">
                <TableCell className="font-medium text-slate-200">{item.id}</TableCell>
                <TableCell className="text-slate-300">{item.name}</TableCell>
                <TableCell className="text-slate-300">{item.qty}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-800">
                        <MoreHorizontal className="h-4 w-4 text-slate-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[#0f172a] border-slate-800 text-slate-200">
                      <DropdownMenuItem className="gap-2 cursor-pointer focus:bg-slate-800 focus:text-slate-100">
                        <SquarePen className="h-4 w-4" /> Update
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer text-red-400 focus:bg-red-400/10 focus:text-red-400">
                        <Trash2 className="h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}