"use client"
import React, { useState } from 'react'
import { Form } from '@/components/ui/form'
import { ProductFormSchema } from '@/app/forms/'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import CustomProductFormField from '@/components/ui/customproductform'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { createProduct, updateProduct } from '@/app/actions/product'



interface productprops {
  id:string,    
  label:string
  imageUrl:string,
  price:string,
  description:string,
  tag:string,

}


const formSchema = ProductFormSchema()

const EditProductForm = (props:productprops) => {
  
  const [loading, setLoading] = useState(false)
  const [error ,  setError] = useState("")
  const router = useRouter();
  
  const productform = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      label: props.label,
      imageUrl: props.imageUrl,
      description:props.description,
      price: props.price,
      tag: props.tag,
     
    }
  })  

  const OnSubmit = async(values:any) => {
    setLoading(prev=> !prev)  
     await updateProduct(props.id, {...values})
     setLoading(prev => !prev)
      router.refresh()
      toast("Product has been updated")
      
  }
  return (<div className='w-full'>{
    loading ?
    <div className='w-full flex items-center justify-center  '>
      <Loader2
      size={72}
      className="animate-spin "/>  
    </div>:
      <Form {...productform}>
      <form className='flex flex-col   gap-6 md:w-[80%] md:mx-auto border p-4 md:p-16 rounded-lg shadow-sm  bg-yellow-500'
      onSubmit={productform.handleSubmit(OnSubmit)}>
      
      <CustomProductFormField 
       control={productform.control}
       name="label"
       label="Product Name"
       placeholder="Enter the product name."
       type="textinput"
       />
       <CustomProductFormField 
       control={productform.control}
       name="imageUrl"
       label="Image URL"
       placeholder="Enter the image path."
       type="textinput"
       />
       <CustomProductFormField 
       control={productform.control}
       name="price"
       label="Price"
       placeholder="Enter the Price."
       type="textinput"
       />      
       <CustomProductFormField 
       control={productform.control}
       name="description"
       label="Description"
       placeholder="Enter the product name."
       type="textarea"
       />
       <CustomProductFormField 
       control={productform.control}
       name="tag"
       label="Tag"
       placeholder="Enter the product tag."
       type="textinput"
       />
       <div className='w-full pt-5 md:pt-8 '>
        <Button 
        type="submit"
        variant="outline" 
        className='w-full p-4 md:p-6 text-xl uppercase font-bold'>Update</Button>
       </div>
      </form>
    </Form>
    }
    </div>
  )
}

export default EditProductForm
