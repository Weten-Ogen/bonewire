"use client"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Textarea } from './textarea'
import {z} from 'zod'
import { Control, FieldPath } from 'react-hook-form'
import { ProductFormSchema } from '../forms'

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
      <FormLabel>{props.label}</FormLabel>
      <FormControl>
        {
         props.type === "textinput" ? 
         <Input 
         className=''
         placeholder={props.placeholder}
         {...field}
         />:
         <Textarea 
         className=''
         {...field}
         placeholder={props.placeholder}
         />
        }
      </FormControl>
      <FormMessage className=""/>
      </FormItem>
     }}
    />
  )
}

export default CustomProductFormField
