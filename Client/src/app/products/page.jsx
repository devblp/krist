"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Products() {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 2000],
    color: '',
    size: '',
  });

  const products = [
    { id: 1, name: 'Allen Solly', price: 80, originalPrice: 100, image: '/images/product1.png', category: 'Bags', color: 'Red', size: 'L' },
    { id: 2, name: 'Louis Philippe Sport', price: 50, originalPrice: 65, image: '/images/product2.png', category: 'Men', color: 'Blue', size: 'M' },
    { id: 2, name: 'Louis Philippe Sport', price: 50, originalPrice: 65, image: '/images/product2.png', category: 'Men', color: 'Blue', size: 'M' },
    { id: 2, name: 'Louis Philippe Sport', price: 50, originalPrice: 65, image: '/images/product2.png', category: 'Men', color: 'Blue', size: 'M' },
    { id: 2, name: 'Louis Philippe Sport', price: 50, originalPrice: 65, image: '/images/product2.png', category: 'Men', color: 'Blue', size: 'M' },
    { id: 2, name: 'Louis Philippe Sport', price: 50, originalPrice: 65, image: '/images/product2.png', category: 'Men', color: 'Blue', size: 'M' },
    { id: 2, name: 'Louis Philippe Sport', price: 50, originalPrice: 65, image: '/images/product2.png', category: 'Men', color: 'Blue', size: 'M' },
    { id: 2, name: 'Louis Philippe Sport', price: 50, originalPrice: 65, image: '/images/product2.png', category: 'Men', color: 'Blue', size: 'M' },
    // ... Add more products here
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category ? product.category === filters.category : true) &&
      (filters.color ? product.color === filters.color : true) &&
      (filters.size ? product.size === filters.size : true) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    );
  });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <div className="sticky top-0">
            <h2 className="font-bold text-lg mb-4">Product Categories</h2>
            <ul>
              <li className="mb-2">
                <button onClick={() => handleFilterChange('category', 'Men')}>Men</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleFilterChange('category', 'Women')}>Women</button>
              </li>
              {/* Add more categories */}
            </ul>

            <h2 className="font-bold text-lg mt-6 mb-4">Filter by Price</h2>
            <input
              type="range"
              min="0"
              max="2000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>${filters.priceRange[1]}</span>
            </div>

            <h2 className="font-bold text-lg mt-6 mb-4">Filter by Color</h2>
            <ul>
              <li className="mb-2">
                <button onClick={() => handleFilterChange('color', 'Red')}>Red</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleFilterChange('color', 'Blue')}>Blue</button>
              </li>
              {/* Add more colors */}
            </ul>

            <h2 className="font-bold text-lg mt-6 mb-4">Filter by Size</h2>
            <ul>
              <li className="mb-2">
                <button onClick={() => handleFilterChange('size', 'S')}>S</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleFilterChange('size', 'M')}>M</button>
              </li>
              <li className="mb-2">
                <button onClick={() => handleFilterChange('size', 'L')}>L</button>
              </li>
              {/* Add more sizes */}
            </ul>
          </div>
        </div>

        {/* Product List */}
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg">
                <Image src={product.image} alt={product.name} width={300} height={300} className="rounded-md" />
                <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  <span className="text-sm line-through text-gray-500">${product.originalPrice}</span>
                </div>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
