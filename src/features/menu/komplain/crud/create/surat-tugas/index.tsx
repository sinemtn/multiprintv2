import { 
  MoreHorizontal, 
  SquarePen, 
  Trash2, 
  Plus
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
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const DATA_STATIS = [
  {
    id: "ST/2026/04/001",
    customer: "PT. Maju Mundur",
    pic: "Budi Setiawan",
    status: "pending",
  },
  {
    id: "ST/2026/04/002",
    customer: "CV. Cahaya Abadi",
    pic: "Siti Aminah",
    status: "solved",
  },
]

export function ComplaintSuratTugas() {
  return (
    <div className="space-y-4 w-full">
      {/* Group Tombol Atas */}
      <div className="flex justify-end items-center gap-2">

        <Button size="sm" className="gap-2 h-9 bg-slate-100 text-slate-900 hover:bg-slate-200">
          Buat <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabel */}
      <div className="rounded-md border border-slate-800 bg-[#020817]">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800 hover:bg-transparent">
              <TableHead className="text-slate-400 font-bold">ID Penugasan</TableHead>
              <TableHead className="text-slate-400 font-bold">Customer</TableHead>
              <TableHead className="text-slate-400 font-bold">PIC</TableHead>
              <TableHead className="text-slate-400 font-bold">Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DATA_STATIS.map((item) => (
              <TableRow key={item.id} className="border-slate-800 hover:bg-slate-900/50">
                <TableCell className="font-medium text-slate-200">{item.id}</TableCell>
                <TableCell className="text-slate-300">{item.customer}</TableCell>
                <TableCell className="text-slate-300">{item.pic}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary" 
                    className={`capitalize font-medium ${
                      item.status === 'solved' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-amber-500/10 text-amber-500'
                    }`}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {/* Dropdown Action Titik Tiga */}
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