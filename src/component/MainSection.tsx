import React, { useState, useEffect } from "react";
import { Truck, Shield, Clock,  Star } from "lucide-react";

const MainSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Modern Velvet Sofa",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      rating: 4.8,
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Minimalist Dining Set",
      price: "$899",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      rating: 4.9,
      tag: "New Arrival",
    },
    {
      id: 3,
      name: "Luxury King Bed",
      price: "$1,599",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      rating: 4.7,
      tag: "Trending",
    },
    {
      id: 4,
      name: "Executive Office Chair",
      price: "$449",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
      rating: 4.6,
      tag: "Popular",
    },
  ];

  const collections = [
    {
      name: "Scandinavian Elegance",
      desc: "Clean lines, natural materials",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    },
    {
      name: "Industrial Chic",
      desc: "Raw materials, bold statements",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
    },
    {
      name: "Mid-Century Modern",
      desc: "Timeless design classics",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6">Transform Your Living Space</h1>
          <p className="text-lg mb-8">
            Discover premium furniture that combines timeless design with modern comfort.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-amber-600 rounded-full hover:bg-amber-700 transition">
              Shop Collection
            </button>
            <button className="px-6 py-3 bg-white/20 rounded-full border border-white/30 hover:bg-white/30 transition">
              View Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[{ icon: Truck, title: "Free Delivery", desc: "On orders over $500" },
            { icon: Shield, title: "5 Year Warranty", desc: "Premium quality guaranteed" },
            { icon: Clock, title: "Fast Assembly", desc: "Professional setup available" }].map(
            (f, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-amber-50">
                <f.icon className="w-8 h-8 text-amber-600" />
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Curated Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((col, i) => (
              <div key={i} className="relative group h-96 rounded-3xl overflow-hidden">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{col.name}</h3>
                  <p>{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {featuredProducts.map((p) => (
              <div key={p.id} className="bg-white shadow hover:shadow-2xl rounded-xl overflow-hidden transition">
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.name}</h3>
                  <div className="flex justify-between mt-2">
                    <span>{p.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="ml-1">{p.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
