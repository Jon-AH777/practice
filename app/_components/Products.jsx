import React from 'react'
import ProductLayout from './ProductLayout';
async function getAllProducts(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}


export default async function Products (){
    const products = await getAllProducts();

    
  return (
    <div className='grid grid-cols-5 gap-4 container mx-auto p-4'>
        {products.map((item) => (
            <ProductLayout key={item.id} product={item} />
        ))}
    </div>
  )
}
