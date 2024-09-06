import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card/Card.jsx";
import { ProductContext } from "../components/context/ProductContext.jsx";

const Home = () => {
  const { products } = useContext(ProductContext);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/public/data.json");
  //     const data = await response.json();
  //     setItems(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="flex flex-col md:flex-row justify-evenly w-full py-20">
      <div className="flex flex-col space-y-4 w-56">
        <button className="btn bg-black text-white">Rocking chair</button>
        <button className="btn bg-black text-white">Side Chair</button>
        <button className="btn bg-black text-white">Lounge Chair</button>
      </div>
      <div className="border-r"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            sale={item.sale}
            previousPrice={item.previousPrice}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
