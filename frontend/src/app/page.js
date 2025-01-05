"use client"

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // state untuk toggle hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // fungsi toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white text-black">

      {/* humberger navbar */}
      <nav className="relative">
        {/* tombol humberger */}
        <div className="p-4">
          <button className="text-x1" onClick={toggleMenu}>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
          </button>
        </div>

        {/* Sidebar Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full z-50">
            {/* Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
              onClick={toggleMenu} // Klik di luar menu untuk menutup
            ></div>

            {/* Menu List */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-white text-black p-4 sm:w-1/3"
            >
              <ul className="space-y-4 text-lg font-semibold">
                <li><a href="#" className="hover:text-gray-600">Home</a></li>
                <li><a href="/barang" className="hover:text-gray-600">Barang</a></li>
                <li><a href="#" className="hover:text-gray-600">Service</a></li>
                <li><a href="#" className="hover:text-gray-600">Contact</a></li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header className="text-center sm:text-left p-4">
        <Image
          className="mx-auto sm:mx-auto "
          src="/next.svg"
          alt="Next.js logo"
          color=""
          width={180}
          height={38}
          priority
        />
        <h1 className="mt-8 text-3xl font-semibold">Produk yang Dapat Dibuat</h1>
        <p className="mt-2 text-lg text-gray-600">Banyak Produk yang Bisa Dibuat</p>
      </header>

    </div>
  );
}