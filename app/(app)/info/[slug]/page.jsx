
import Button from "@/app/_components/Button";
import React from "react";

async function getSingleProduct(product_id) {
    const res = await fetch(`https://fakestoreapi.com/products/${product_id}`);
    const data = await res.json();
    return data;

}

export default async function ProductDetails({ params: { slug } }) {

    const productDetail = await getSingleProduct(slug);


    return (
        <>
            <div className='flex flex-col items-center justify-center border border-gray-300 p-2 pt-4'>
                <img
                    src={productDetail?.image}
                    alt={productDetail?.title}
                    className='h-40 mx-auto mb-3 hover:scale-110 duration-100 cursor-pointer'
                />
                <div className="" >
                    <p className='font-semibold line-clamp-2'>{productDetail?.title}</p>
                    <p className='font-semibold line-clamp-2'>${productDetail?.price}</p>
                    <p className='font-semibold line-clamp-2'>{productDetail?.category}</p>
                     <Button />
                </div>
            </div>
        </>
    );
}