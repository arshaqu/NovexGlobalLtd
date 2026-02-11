'use client';

import React, { useState } from 'react';
import CategoryBar from '@/Components/CategoryBar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

import BannerImg from '../../assets/SwitchBan.png';

import NM302_1 from '../../assets/Switches/Rock/NM302_1.png';
import NM302_2 from '../../assets/Switches/Rock/NM302_2.png';

import NM304_1 from '../../assets/Switches/Rock/NM304_1.png';
import NM304_2 from '../../assets/Switches/Rock/NM304_2.png';

import NM306_1 from '../../assets/Switches/Rock/NM306_1.png';
import NM306_2 from '../../assets/Switches/Rock/NM306_2.png';

import NM405_1 from '../../assets/Switches/Rock/NM405_1.jpg';
import NM405_2 from '../../assets/Switches/Rock/NM405_2.jpg';

import NM406_1 from '../../assets/Switches/Rock/NM406_1.png';
import NM406_2 from '../../assets/Switches/Rock/NM406_2.png';

import NM429_1 from '../../assets/Switches/Rock/NM429_1.jpg';
import NM429_2 from '../../assets/Switches/Rock/NM429_2.jpg';

import NM401_1 from '../../assets/Switches/Rock/NM401_1.png';
import NM401_2 from '../../assets/Switches/Rock/NM401_2.png';

import NM402_1 from '../../assets/Switches/Rock/NM402_1.jpg';
import NM402_2 from '../../assets/Switches/Rock/NM402_2.jpg';

import NM324_1 from '../../assets/Switches/Rock/NM324_1.png';
import NM324_2 from '../../assets/Switches/Rock/NM324_2.png';

export default function Page() {

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  const products = [
   { name: "1 GANG 2 WAY SWITCH", code: "NM302", imgs: [ NM302_2 , NM302_1 ] },
   { name: "2 GANG 2 WAY SWITCH", code: "NM304", imgs: [ NM304_1 , NM304_2 ] },
   { name: "3 GANG 2 WAY SWITCH", code: "NM306", imgs: [ NM306_1 , NM306_2 ] },
   { name: "20A DOUBAL POLE SWITCH", code: "NM324", imgs: [ NM324_1 , NM324_2 ] },
   { name: "13A 1 GANG SWITCH SOCKET", code: "NM405", imgs: [ NM405_1 , NM405_2 ] },
   { name: "13A 2 GANG SWITCH SOCKET", code: "NM406", imgs: [ NM406_1 , NM406_2 ] },
   { name: "15A 1 GANG SWITCH SOCKET", code: "NM429", imgs: [ NM429_1 , NM429_2 ] },
   { name: "1 GANG BLANK PLATE 3 X 3", code: "NM401", imgs: [ NM401_1 , NM401_2 ] },
   { name: "2 GANG BLANK PLATE 3 X 6", code: "NM401", imgs: [ NM402_1 , NM402_2 ] },

  ];

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-0">

      <Header />

      {/* Banner */}
      <div className="w-full">
        <Image
        loading='lazy'
          src={BannerImg}
          alt="Oxford Series Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-center p-8">
        <p className="text-3xl font-medium mb-2">ROCK SERIES ( METAL CLADS )</p>
        <p  className="text-gray-800 lg:text-lg text-md max-w-6xl mx-auto">
         The <span className='font-medium'>ROCK SERIES</span> features heavy-duty metal-clads switches and sockets designed for superiror strength, high protection , and long-term reliability in demanding environments.
        </p>
      </div>

      {/* Categories */}
      <CategoryBar active="switch" />

      {/* Products */}
      <div className="p-10">
        <div style={{ border: "2px solid #E3001B" }}>
          <div className="bg-red-600 text-white p-5 mb-4">All Products</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
            {currentProducts.map((p, idx) => (
              <HoverImageCard key={idx} product={p} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 border rounded-full cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-red-600 border-red-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}


function HoverImageCard({ product }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col"
      onMouseEnter={() => setImgIndex((prev) => (prev + 1) % product.imgs.length)}
      onMouseLeave={() => setImgIndex(0)}
    >
      <div className="w-full mb-4 flex justify-center items-center overflow-hidden rounded-lg h-[200px]">
        <Image
        loading='lazy'
        style={{height:'180px'}}
          src={product.imgs[imgIndex]}
          alt={product.name}
          className="object-contain w-full h-full transition hover:scale-105"
        />
      </div>

      <div className="text-left p-1">
        <p className="text-red-500 text-lg lg:text-xl font-normal">
          {product.name}
        </p>
        <p className="text-red-900 text-md font-normal mt-2">
          {product.code}
        </p>
      </div>
    </div>
  );
}
