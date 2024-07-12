"use client";

import React from "react";
import { ImCross } from "react-icons/im";
import { useStore } from "@/app/zustand/store";
const ItemCard = ({ product }) => {
  const { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } =
    useStore((state) => ({
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
    }));

  return (
    <div>
      <div className="w-full grid grid-cols-5 mb-4 border py-2">
        <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
          <ImCross
            onClick={() => removeFromCart(product?.id)}
            className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
          />
          <img className="w-32 h-32" src={product?.image} alt="itemImage" />
          <h1 className=" font-semibold">{product?.title}</h1>
        </div>
        <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
          <div className="flex w-1/3 items-center text-lg font-semibold">
            ${product?.price}
          </div>
          <div className="w-1/3 flex items-center gap-6 text-lg">
            <span
              className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
              onClick={() => decreaseQuantity(product.id)}
            >
              -
            </span>
            <p>{product.quantity}</p>
            <span
              className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </span>
          </div>
        </div>
        <button
          className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300 cursor-pointer "
          onClick={clearCart}
        >
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
