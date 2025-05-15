"use client"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Control, FieldPath } from 'react-hook-form'
import {z} from 'zod'
import { AuthFormSchema } from '../../app/forms'
import { Input } from './input'


const formSchema =  AuthFormSchema('sign-up')

interface customfieldprops {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    
  }


const CustomAuthField = (props:customfieldprops) => {
  return(
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="font-bold font-poppins text-primaryFont">
            {props.label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
                <Input 
                  {...field}
                  placeholder={props.placeholder}
                  className="py-6 px-4 bg-white"
                  type={props.name === "email"  ?  "text" : props.name === "password" ? "password" : "text"}
                />
            </FormControl>
          </div>
            <FormMessage className="form-message font-poppins text-red-500 mt-2 text-extraSmall" />
          </FormItem>)}
    />)}
export default CustomAuthField