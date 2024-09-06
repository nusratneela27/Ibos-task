// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card.jsx'; // Import the Card component

const Home = () => {
  const [items, setItems] = useState([]);

  // Fetch the data from JSON or API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/public/data.json'); // Update with actual path or API endpoint
      const data = await response.json();
      setItems(data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            previousPrice={item.previousPrice}
            sale={item.sale}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
