import Link from 'next/link'
import React from 'react'
const ProductLayout = ({ product }) => {
    return (
        <div className='w-11/12 relative border border-gray-300'>
            <div className='max-w-80 max-h-80 relative overflow-y-hidden'>
                <Link href={`/info/${product?.id}`}
                    className=' p-2'>
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className='h-40 w-40 mx-auto mb-3 hover:scale-110 duration-100 cursor-pointer'
                    />
                </Link>
            </div>
            <div className="max-w-80 py-1 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                <div className="flex items-center justify-between font-titleFont">
                    <h2 className="font-semibold line-clamp-2">
                        {product?.title}
                    </h2>
                    <p className="text-[#767676] text-[14px]">${product?.price}</p>
                </div>

            </div>
        </div>
    )
}

export default ProductLayout