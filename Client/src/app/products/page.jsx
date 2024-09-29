"use client"

import { useEffect, useState } from 'react';
import CardProduct from '@/components/CardProduct';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [activeBtn, setActiveBtn] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:7000/api/v1/products?populate=categoryId");
      const data = await response.json();
      setProducts(data.data);
    })();
  }, []);

  // Function to filter products based on active category
  const filterProducts = (category) => {
    if (!category) return products; // No filter applied
    return products.filter(e => e?.categoryId[0]?.name.toLowerCase() === category.toLowerCase());
  };

  // Get filtered products based on the active button
  const filteredProducts = filterProducts(activeBtn);

  // Mapping through filtered products to create CardProduct components
  const productCards = filteredProducts.map((e, index) => (
    <CardProduct
      key={index}
      id={e._id}
      image={`http://localhost:7000/${e?.mainImage}`}
      price={e.price}
      name={e.title}
      category={e.categoryId[0].name}
    />
  ));

  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <div className="sticky top-0">
            <h2 className="font-bold text-lg mb-4">Product Categories</h2>
            <ul>
              <li className="mb-2">
                <button onClick={() => setActiveBtn("man")}>Men</button>
              </li>
              <li className="mb-2">
                <button onClick={() => setActiveBtn("woma")}>Women</button>
              </li>
              <li className="mb-2">
                <button onClick={() => setActiveBtn("kind")}>Kind</button>
              </li>
              {/* Add more categories */}
            </ul>

            <h2 className="font-bold text-lg mt-6 mb-4">Filter by Price</h2>
            <input
              type="range"
              min="0"
              max="2000"
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>$2000</span>
            </div>

            <h2 className="font-bold text-lg mt-6 mb-4">Filter by Color</h2>
            <ul>
              {/* Add more colors */}
            </ul>

            <h2 className="font-bold text-lg mt-6 mb-4">Filter by Size</h2>
            <ul>
              {/* Add more sizes */}
            </ul>
          </div>
        </div>

        {/* Product List */}
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCards.length > 0 ? productCards : <p>No products found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
