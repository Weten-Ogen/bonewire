// "use client"

// import * as React from "react"
// import {
//   type ColumnDef,
//   type ColumnFiltersState,
//   type SortingState,
//   type VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"

// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Save, X } from "lucide-react"
// import { DataTableViewOptions } from "./data_table_view_options"
// import {toast} from 'sonner'

// interface PrismaStudioTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
//   onUpdateData?: (updatedData: TData[]) => void
// }

// export function PrismaStudioTable<TData, TValue>({
//   columns,
//   data: initialData,
//   onUpdateData,
// }: PrismaStudioTableProps<TData, TValue>) {
//   const [data, setData] = React.useState<TData[]>(initialData)
//   const [sorting, setSorting] = React.useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
//   const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = React.useState({})
//   const [globalFilter, setGlobalFilter] = React.useState("")
//   const [editedRows, setEditedRows] = React.useState<Record<string, TData>>({})
//   const [hasChanges, setHasChanges] = React.useState(false)

//   // Update internal data when initialData changes
//   React.useEffect(() => {
//     setData(initialData)
//   }, [initialData])

//   // Update a cell value
//   const updateData = (rowIndex: number, columnId: string, value: any) => {
//     const rowId = table.getRowModel().rows[rowIndex].id

//     setData((old) => {
//       const newData = [...old]
//       const row = { ...newData[rowIndex] } as any
//       row[columnId] = value
//       newData[rowIndex] = row

//       // Track edited rows
//       setEditedRows((prev) => ({
//         ...prev,
//         [rowId]: row,
//       }))

//       setHasChanges(true)
//       return newData
//     })
//   }

//   // Save all changes
//   const saveChanges = () => {
//     if (onUpdateData) {
//       onUpdateData(data)
//     }

//     toast(`updated the columns`)

//     setEditedRows({})
//     setHasChanges(false)
//   }

//   // Discard all changes
//   const discardChanges = () => {
//     setData(initialData)
//     setEditedRows({})
//     setHasChanges(false)

//     toast(`all changes are reset`)
//   }

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onSortingChange: setSorting,
//     getSortedRowModel: getSortedRowModel(),
//     onColumnFiltersChange: setColumnFilters,
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     onGlobalFilterChange: setGlobalFilter,
//     meta: {
//       updateData,
//     },
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//       globalFilter,
//     },
//   })

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Input
//             placeholder="Search all columns..."
//             value={globalFilter ?? ""}
//             onChange={(event) => setGlobalFilter(event.target.value)}
//             className="max-w-sm"
//           />
//           {globalFilter && (
//             <Button variant="ghost" onClick={() => setGlobalFilter("")} size="icon">
//               <X className="h-4 w-4" />
//             </Button>
//           )}
//         </div>
//         <div className="flex items-center gap-2">
//           {hasChanges && (
//             <>
//               <Button variant="outline" size="sm" onClick={discardChanges} className="flex items-center gap-1">
//                 <X className="h-4 w-4" />
//                 Discard
//               </Button>
//               <Button variant="default" size="sm" onClick={saveChanges} className="flex items-center gap-1">
//                 <Save className="h-4 w-4" />
//                 Save Changes
//               </Button>
//             </>
//           )}
//           <DataTableViewOptions table={table} />
//         </div>
//       </div>
//       <div className="rounded-md border bg-white">
//         <Table>
//           <TableHeader className="bg-slate-50">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id} className="font-medium text-xs uppercase">
//                       {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row, rowIndex) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                   className={`hover:bg-slate-50 ${Object.keys(editedRows).includes(row.id) ? "bg-blue-50/50" : ""}`}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, {
//                         ...cell.getContext(),
//                         rowIndex,
//                       })}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
//           selected.
//         </div>
//         <div className="flex items-center space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.setPageIndex(0)}
//             disabled={!table.getCanPreviousPage()}
//           >
//             <ChevronsLeft className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <span className="flex items-center gap-1 text-sm">
//             <span>Page</span>
//             <strong>
//               {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
//             </strong>
//           </span>
//           <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//             disabled={!table.getCanNextPage()}
//           >
//             <ChevronsRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

