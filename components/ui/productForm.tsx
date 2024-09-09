"use client"
import React from 'react'
import { 
    FormControl, 
    FormField, 
    FormLabel, 
    FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import {  productSchema } from '@/lib/utils'


const formSchemab = productSchema

interface CustomInputp {
  control:Control<z.infer<typeof formSchemab>>,
  name:FieldPath<z.infer<typeof formSchemab>>,
  label: string,
  placeholder: string
}

const ProductFormCustomInput = ({ control, name, label, placeholder }: CustomInputp) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full ">
          <FormLabel className="form-label mt-2">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col mt-2">
            <FormControl className="w-full">
              <Input
                placeholder={placeholder}
                className="w-full py-6"
                type='text'
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default ProductFormCustomInput