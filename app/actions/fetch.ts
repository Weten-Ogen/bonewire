"use server"


interface payloadprops {
    route: string,
    method: string
    values?:any,
}


export async function fetchData({route,method,values }:payloadprops) {
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${route}`,
        {
            method: `${method}`,
            headers:{
                "Content-Type": "application/json",
                "cache":"no-store" 
            },
            body:JSON.stringify(values)
        }
    )

    const requestedData = await res.json();
    return requestedData;


}


export async function  getproducts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`,
        {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "cache":"no-cache"
            }
            

        }
    )

    const requestedData = await res.json();
    return requestedData;    
}
