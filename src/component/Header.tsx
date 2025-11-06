import React, { useState, useEffect } from "react";

import {
  ShoppingCart,
  Search,
  MapPin,
  User,
  Heart,
} from "lucide-react";

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeNav, setActiveNav] = useState("Study & Office");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNav = [
    "Sofas",
    "Living",
    "Bedroom",
    "Mattress",
    "Dining",
    "Storage",
    "Study & Office",
    "Outdoor & Balcony",
    "Furnishings",
    "Lighting & Decor",
    "Interiors",
    "WS Luxe",
  ];

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-stone-800" style={{ fontFamily: "Georgia, serif" }}>
              SHIVAM
            </span>
            <span className="text-xs text-stone-500" style={{ fontFamily: "Georgia, serif" }}>
              Luxury Furniture
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Products, Color & More..."
                className="w-full px-4 py-3 pr-12 border border-stone-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-stone-100 rounded-md">
                <Search className="w-5 h-5 text-stone-500" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="flex flex-col items-center text-stone-600 hover:text-amber-600">
              <MapPin className="w-5 h-5" />
              <span className="text-xs mt-1">Stores</span>
            </button>
            <button className="flex flex-col items-center text-stone-600 hover:text-amber-600">
              <User className="w-5 h-5" />
              <span className="text-xs mt-1">Profile</span>
            </button>
            <button className="flex flex-col items-center text-stone-600 hover:text-amber-600">
              <Heart className="w-5 h-5" />
              <span className="text-xs mt-1">Wishlist (0)</span>
            </button>
            <button className="flex flex-col items-center text-stone-600 hover:text-amber-600">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-xs mt-1">Cart (0)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
            {mainNav.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-4 text-sm font-medium relative ${
                  activeNav === item ? "text-amber-600" : "text-stone-700 hover:text-amber-600"
                }`}
              >
                {item}
                {activeNav === item && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
