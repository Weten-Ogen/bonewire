// "use client"

// import type { Table } from "@tanstack/react-table"
// import { Settings2 } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../../components/ui/"

// interface DataTableViewOptionsProps<TData> {
//   table: Table<TData>
// }

// export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="sm" className="ml-auto flex items-center gap-1">
//           <Settings2 className="h-4 w-4" />
//           <span>View</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="w-[150px]">
//         <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {table
//           .getAllColumns()
//           .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
//           .map((column) => {
//             return (
//               <DropdownMenuCheckboxItem
//                 key={column.id}
//                 className="capitalize text-acc-color"
//                 checked={column.getIsVisible()}
//                 onCheckedChange={(value) => column.toggleVisibility(!!value)}
//               >
//                 {column.id}
//               </DropdownMenuCheckboxItem>
//             )
//           })}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
