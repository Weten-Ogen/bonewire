// "use client"

// import * as React from "react"
// import type { ColumnDef } from "@tanstack/react-table"
// import { ArrowUpDown, MoreHorizontal } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Badge } from "@/components/ui/badge"
// import type { User } from "./quiz"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Switch } from "@/components/ui/switch"

// // Editable cell components
// interface EditableCellProps {
//   getValue: () => any
//   row: any
//   column: any
//   table: any
//   rowIndex: number
// }

// // Text cell
// export const EditableCell: React.FC<EditableCellProps> = ({ getValue, row, column, table, rowIndex }) => {
//   const initialValue = getValue()
//   const [value, setValue] = React.useState(initialValue)
//   const [isEditing, setIsEditing] = React.useState(false)

//   const onBlur = () => {
//     table.options.meta?.updateData(rowIndex, column.id, value)
//     setIsEditing(false)
//   }

//   React.useEffect(() => {
//     setValue(initialValue)
//   }, [initialValue])

//   return isEditing ? (
//     <Input
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       onBlur={onBlur}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") onBlur()
//         if (e.key === "Escape") {
//           setValue(initialValue)
//           setIsEditing(false)
//         }
//       }}
//       autoFocus
//       className="h-8 w-full"
//     />
//   ) : (
//     <div className="w-full cursor-pointer rounded px-1 py-0.5 hover:bg-slate-100" onClick={() => setIsEditing(true)}>
//       {value}
//     </div>
//   )
// }

// // Select cell for role
// export const EditableRoleCell: React.FC<EditableCellProps> = ({ getValue, row, column, table, rowIndex }) => {
//   const initialValue = getValue()
//   const [value, setValue] = React.useState(initialValue)
//   const [isEditing, setIsEditing] = React.useState(false)

//   const onValueChange = (newValue: string) => {
//     setValue(newValue)
//     table.options.meta?.updateData(rowIndex, column.id, newValue)
//     setIsEditing(false)
//   }

//   React.useEffect(() => {
//     setValue(initialValue)
//   }, [initialValue])

//   const roleVariant = value === "admin" ? "destructive" : value === "editor" ? "default" : "outline"

//   return isEditing ? (
//     <Select value={value} onValueChange={onValueChange}>
//       <SelectTrigger className="h-8 w-full">
//         <SelectValue placeholder="Select role" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="admin">admin</SelectItem>
//         <SelectItem value="editor">editor</SelectItem>
//         <SelectItem value="viewer">viewer</SelectItem>
//       </SelectContent>
//     </Select>
//   ) : (
//     <div className="w-full cursor-pointer rounded px-1 py-0.5 hover:bg-slate-100" onClick={() => setIsEditing(true)}>
//       <Badge variant={roleVariant}>{value}</Badge>
//     </div>
//   )
// }

// // Boolean cell for active status
// export const EditableBooleanCell: React.FC<EditableCellProps> = ({ getValue, row, column, table, rowIndex }) => {
//   const initialValue = getValue()
//   const [value, setValue] = React.useState(initialValue)

//   const onValueChange = (checked: boolean) => {
//     setValue(checked)
//     table.options.meta?.updateData(rowIndex, column.id, checked)
//   }

//   React.useEffect(() => {
//     setValue(initialValue)
//   }, [initialValue])

//   return (
//     <div className="flex items-center space-x-2">
//       <Switch checked={value} onCheckedChange={onValueChange} className="data-[state=checked]:bg-green-500" />
//       <Badge variant={value ? "default" : "secondary"} className="capitalize">
//         {value ? "Active" : "Inactive"}
//       </Badge>
//     </div>
//   )
// }

// // Date cell
// export const EditableDateCell: React.FC<EditableCellProps> = ({ getValue, row, column, table, rowIndex }) => {
//   const initialValue = getValue()
//   const [value, setValue] = React.useState(initialValue)
//   const [isEditing, setIsEditing] = React.useState(false)

//   const dateValue = new Date(value).toISOString().split("T")[0]

//   const onBlur = () => {
//     table.options.meta?.updateData(rowIndex, column.id, value)
//     setIsEditing(false)
//   }

//   React.useEffect(() => {
//     setValue(initialValue)
//   }, [initialValue])

//   return isEditing ? (
//     <Input
//       type="date"
//       value={dateValue}
//       onChange={(e) => setValue(new Date(e.target.value).toISOString())}
//       onBlur={onBlur}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") onBlur()
//         if (e.key === "Escape") {
//           setValue(initialValue)
//           setIsEditing(false)
//         }
//       }}
//       autoFocus
//       className="h-8 w-full"
//     />
//   ) : (
//     <div className="w-full cursor-pointer rounded px-1 py-0.5 hover:bg-slate-100" onClick={() => setIsEditing(true)}>
//       {new Date(value).toLocaleDateString()}
//     </div>
//   )
// }

// export const columns: ColumnDef<User>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "id",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         className="p-0 hover:bg-transparent"
//       >
//         ID
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => <div className="font-mono text-xs">{row.getValue("id")}</div>,
//   },
//   {
//     accessorKey: "name",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         className="p-0 hover:bg-transparent"
//       >
//         Name
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row, table, column }) => (
//       <EditableCell
//         getValue={() => row.getValue("name")}
//         row={row}
//         column={column}
//         table={table}
//         rowIndex={row.index} // ✅ Fixed here
//       />
//     ),
//   },
//   {
//     accessorKey: "email",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         className="p-0 hover:bg-transparent"
//       >
//         Email
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row, table, column }) => (
//       <EditableCell
//         getValue={() => row.getValue("email")}
//         row={row}
//         column={column}
//         table={table}
//         rowIndex={row.index} // ✅ Fixed here
//       />
//     ),
//   },
//   {
//     accessorKey: "role",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         className="p-0 hover:bg-transparent"
//       >
//         Role
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row, table, column }) => (
//       <EditableRoleCell
//         getValue={() => row.getValue("role")}
//         row={row}
//         column={column}
//         table={table}
//         rowIndex={row.index} // ✅ Fixed here
//       />
//     ),
//     filterFn: (row, id, value) => value.includes(row.getValue(id)),
//   },
//   {
//     accessorKey: "active",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         className="p-0 hover:bg-transparent"
//       >
//         Status
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row, table, column }) => (
//       <EditableBooleanCell
//         getValue={() => row.getValue("active")}
//         row={row}
//         column={column}
//         table={table}
//         rowIndex={row.index} // ✅ Fixed here
//       />
//     ),
//   },
//   {
//     accessorKey: "createdAt",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         className="p-0 hover:bg-transparent"
//       >
//         Created At
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row, table, column }) => (
//       <EditableDateCell
//         getValue={() => row.getValue("createdAt")}
//         row={row}
//         column={column}
//         table={table}
//         rowIndex={row.index} // ✅ Fixed here
//       />
//     ),
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const user = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>Copy ID</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View details</DropdownMenuItem>
//             <DropdownMenuItem>Edit</DropdownMenuItem>
//             <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]
