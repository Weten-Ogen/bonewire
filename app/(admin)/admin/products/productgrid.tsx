"use client"
import React, { useEffect, useState } from 'react'
import AdminProductCard from './productcard'
import { filterlist } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { getProducts } from '@/app/actions/product'

interface productprops {
    id: string,
    label: string,
    imageUrl: string,
    price: string,
    description: string,
    tag: string,
    createdAt: Date,
}

interface productgridprops {
    className?: string,
    data: productprops[]
}

const AdminProductGrid = ({ className = "", data }: productgridprops) => {
    const [products, setProducts] = useState<productprops[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>("all")

    // Load initial props data on mount
    useEffect(() => {
        setProducts(data)
    }, [data])

    // Handle filtering with fresh fetch each time (case-insensitive)
    const handlefilterSearch = async (filt: string) => {
        setFilter(filt)
        setLoading(true)

        try {
            const fetchedProducts = await getProducts()

            if (filt.toLowerCase() === 'all') {
                setProducts(fetchedProducts)
            } else {
                const filtered = fetchedProducts.filter((prod: productprops) =>
                    prod.tag.trim().toLowerCase() === filt.trim().toLowerCase()
                )
                setProducts(filtered)
            }
        } catch (error) {
            console.error("Error fetching products:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`flex flex-col items-start relative ${className}`}>
            {/* Filter buttons */}
            <div className='flex flex-wrap gap-2 p-4 mt-5'>
                {filterlist.map(item => (
                    <Button
                        key={item.label}
                        onClick={() => handlefilterSearch(item.label)}
                        disabled={loading}
                        className={`capitalize px-6 font-poppins ${filter === item.label.toLowerCase() ? 'text-extraSmall font-bold -translate-y-0.5 duration-500 ease-out' : 'text-sm'}`}
                    >
                        {item.label}
                    </Button>
                ))}
            </div>

            {/* Loader */}
            {loading ? (
                <div className='flex items-center justify-center w-full min-h-[300px]'>
                    <Loader size={40} className='animate-spin bg-secondaryColor' />
                </div>
            ) : (
                /* Product grid */
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-4 w-full mx-auto'>
                    {products.length > 0 ? (
                        products.map(item => (
                            <AdminProductCard key={item.id} {...item} />
                        ))
                    ) : (
                        <div className='text-center w-full text-gray-500'>No products found.</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AdminProductGrid
