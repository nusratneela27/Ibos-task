import React, { useContext } from "react";
import { IoBagOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const Card = ({ id, title, price, sale, description,previousPrice, image }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card border p-2 h-[550px] w-[350px]">
      <img
        src={image}
        alt={title}
        className="rounded-lg bg-slate-100 m-4"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">{title}</h2>

        <div className="flex justify-between">
          <p className="font-bold">${price} </p>
          <p className="line-through text-gray-500">${previousPrice}</p>
          <p className="text-red-500 font-bold">{sale}</p>
        </div>

        <p className="text-gray-500 mb-2">{description}</p>
      </div>
      <button
        onClick={() => addToCart({ id, title, price, sale, description, image })}
        className="btn bg-black text-white mx-4"
      >
        <IoBagOutline size={18}></IoBagOutline> Add To Cart
      </button>
    </div>
  );
};

export default Card;
