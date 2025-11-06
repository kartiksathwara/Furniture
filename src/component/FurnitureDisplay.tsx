import React from "react";

interface FurnitureItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const furnitureData: FurnitureItem[] = [
  {
    id: 1,
    name: "Luxury Sofa Set",
    price: 24999,
    image: "https://images.unsplash.com/photo-1582582494700-3f9b6f9c46e2",
    description: "Elegant 3-seater sofa with a modern design and plush comfort.",
  },
  {
    id: 2,
    name: "Wooden Dining Table",
    price: 19999,
    image: "https://images.unsplash.com/photo-1615874959474-d6091800f21d",
    description: "Six-seater dining table made from solid oak wood.",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 6999,
    image: "https://images.unsplash.com/photo-1601972599720-b62dfc0d1d6d",
    description: "Adjustable office chair designed for all-day support.",
  },
  {
    id: 4,
    name: "Classic Bed Frame",
    price: 28999,
    image: "https://images.unsplash.com/photo-1600607687185-6b1b9fbd0c93",
    description: "Queen-size bed frame made from durable teak wood.",
  },
];

const FurnitureDisplay: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🛋️ Our Furniture Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {furnitureData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 mt-2">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-indigo-600">
                  ₹{item.price.toLocaleString()}
                </span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FurnitureDisplay;
