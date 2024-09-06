import React from 'react';

const Card = ({ title, price, sale, description, image, previousPrice }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500 mb-2">{description}</p>
        <p className="text-green-500 font-bold">${price} <span className="line-through text-red-500">${previousPrice}</span></p>
        <p className="text-red-500">{sale}</p>
      </div>
    </div>
  );
};

export default Card;
