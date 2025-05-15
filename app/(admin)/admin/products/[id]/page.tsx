import { getProductById } from "@/app/actions/product";
import Back from "../../goback";
import EditProductForm from "../editproductform";
import { TypographyH4 } from "@/components/typography/h4";


interface pagprops {
    params: {
        id: string
    }
}


export default async  function page({params}:{params : Promise<{id: string}>}) {
    const id:string = (await params).id;
    const product = await getProductById(id)
    console.log(product)
    return (
        <div className='flex gap-10 flex-col'>
          <Back
            path="/admin/products"
            label="go back to  products"
          />
          <TypographyH4 className="text-center capitalize text-2xl">
            Edit your  product
          </TypographyH4>
           <div>

          {
            product &&
          <EditProductForm
            {...product}
          />
          }
           </div>
        </div> 
)}
