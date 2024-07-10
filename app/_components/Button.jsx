'use client'
import {useStore} from '../zustand/store';

const Button = () => {
    const { addToCart, products } = useStore((state) => ({
        addToCart: state.addToCart,
        products: state.products,
      }))
      console.log(products);
    return (
        <div>
            <button
                onClick={() => addToCart(products)}
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Button