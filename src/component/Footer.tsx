import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 text-center">
      <div className="flex flex-col items-center justify-center mb-4">
        <span className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
          Wooden Street
        </span>
        <span className="text-xs text-gray-400" style={{ fontFamily: "Georgia, serif" }}>
          Furniture... bonded with love
        </span>
      </div>
      <p className="text-gray-400 mb-6">Premium furniture for modern living</p>
      <p className="text-gray-500 text-sm">© 2025 Wooden Street. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
