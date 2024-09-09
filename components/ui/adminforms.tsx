"use client"
import React from 'react'
import { Form } from './form';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Resolver } from 'dns';
import { cn, productSchema } from '@/lib/utils';
import ProductFormCustomInput from './productForm';
import { Button } from './button';


interface adminformprops {
    className?:string,
}

const productFormSchema = productSchema

const AdminForms = ({className}:adminformprops) => {
    const productShema = useForm<z.infer<typeof productFormSchema>>({
            resolver: zodResolver(productFormSchema),
            defaultValues : {
             label: "",
             content: "",
             imageurl : "",
             price: "",
             tags: "",
             gender: "",
            },
        }
    )

    return (
    <div className={cn('w-full  p-4',className)}>
        <Form {...productShema}>
            <form className='w-full flex flex-col  items-center '>
            

                    <ProductFormCustomInput 
                        control={productShema.control}
                        name="label"
                        label='Name'
                        placeholder="enter your ProductName"
                    />
                    <ProductFormCustomInput
                    control={productShema.control}
                    name="content"
                    label="Description"
                    placeholder='give a brief description here.'
                    />
                
                <ProductFormCustomInput
                control={productShema.control}
                name="imageurl"
                label="Image Path"
                placeholder='enter you image url here'
                />

              <ProductFormCustomInput
                control={productShema.control}
                name="price"
                label="Price"
                placeholder='enter the price'
                />
                <ProductFormCustomInput
                control={productShema.control}
                name="tags"
                label="Category"
                placeholder='tell the type of goods it is here.'
                />
               <ProductFormCustomInput
                control={productShema.control}
                name="gender"
                label="Gender"
                placeholder='enter M for Male, F for Female'
                />
                <div className='w-full mt-2'>
                    <Button type="submit" className='w-full'>
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    </div>
  )

}
export default AdminForms
