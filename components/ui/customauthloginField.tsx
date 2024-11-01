"use client"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Textarea } from './textarea'
import { Control, FieldPath } from 'react-hook-form'
import {z} from 'zod'
import { AuthLoginSchema } from '@/app/forms'
import { Input } from './input'


const formSchema =  AuthLoginSchema()

interface customfieldprops {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    
  }


const CustomAuthLoginField = (props:customfieldprops) => {
  return(
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="font-bold text-xl">
            {props.label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
                <Input 
                  {...field}
                  placeholder={props.placeholder}
                  className="py-4"
                  type={props.name === "email"  ?  "text" : props.name === "password" ? "password" : "text"}
                />
            </FormControl>
          </div>
            <FormMessage className="form-message text-red-500 mt-2" />
          </FormItem>)}
    />)}
export default CustomAuthLoginField