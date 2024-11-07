"use server"
import { del } from "@vercel/blob"
import { list } from "@vercel/blob"
const token ="vercel_blob_rw_l8YHwWsVKn8VKuaa_oXaXXm60iyBVV85qcNfGAUAUHOJixT"

export const fetchmoreimages = async(response:any)  => {
     const images = await list({
        cursor: response?.cursor
      })

      return images
}

export const delimage = async(image:any) => {
    return del(image.url, {token:token})
} 