"use client"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Textarea } from './textarea'
import {z} from 'zod'
import { Control, FieldPath } from 'react-hook-form'
import { ProductFormSchema } from '../../app/forms'

const formSchema = ProductFormSchema()

interface customfieldprops {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    type:string
  }

const CustomProductFormField = (props:customfieldprops) => {
  return (
    <FormField
     control={props.control}
     name={props.name}
     render={({field}) => {
         return <FormItem className='flex flex-col '>
      <FormLabel className="text-xl font-bold">{props.label}</FormLabel>
      <FormControl>
        {
         props.type === "textinput" ? 
         <Input 
         className="bg-white py-6 px-4"
         placeholder={props.placeholder}
         {...field}
         />:
         <Textarea 
         className='bg-white py-6 px-4'
         {...field}
         placeholder={props.placeholder}
         />}
      </FormControl>
      <FormMessage className="mt-2 text-md"/>
      </FormItem>
     }}
    />
  )
}

export default CustomProductFormField
