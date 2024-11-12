"use client"

import { ColumnDef } from "@tanstack/react-table"




export type Payment = {
    id :string,
    label:string,
    imageUrl:string,
    price:number,
    description:string, 
    tag:string, 
    createdAt:Date,
    updatedAt:Date
}

export const productColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "imageUrl",
    header: "Imageurl",
  },
  {
    accessorKey: "price",
    header: "Amount",
  },
  {
    accessorKey: "description",
    header: "description",
  },
  {
    accessorKey: "tag",
    header: "Tag",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    accessorKey: "updatedAt",
    header: "UpdatedAt",
  },
]

  