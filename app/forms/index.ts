import {z} from 'zod'


export const AuthFormSchema = (type:string) => z.object({
  name: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  address : z.string().optional(),
  country: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  email: z.string().email(),
  contactNumber: z.string().min(10),
  password: z.string().min(8)
})



export const ProductFormSchema = () => z.object({
  label : z.string().min(3),
  imageUrl: z.string(),
  price : z.coerce.number(),
  description: z.string().min(5).max(350),
  tag: z.string()
})