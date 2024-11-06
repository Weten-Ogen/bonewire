"use server"

import { list } from "@vercel/blob"

export const fetchmoreimages = async(response:any)  => {
     const images = await list({
        cursor: response?.cursor
      })

      return images
}