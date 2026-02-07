'use client';

import React, { useState } from 'react';
import CategoryBar from '@/Components/CategoryBar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

import BannerImg from '../../Assets/SpotLights/Bann1.png';

import NV3260CW_1 from '../../Assets/SpotLights/NV3260CW_1.png';
import NV3260CW_2 from '../../Assets/SpotLights/NV3260CW_2.png';



export default function Page() {

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  const products = [
   { name: "4W 60 SMD LED LIGHT WHITE FITTING DAYLIGHT", code: "NV3260CW", imgs: [ NV3260CW_1 , NV3260CW_2 ] },
  

   ];

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-100">

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
        <p className="text-3xl font-medium mb-2">SPOT LIGHTS</p>
        <p className="text-gray-600 lg:text-lg text-md max-w-6xl mx-auto">
         The <span className='font-medium'>NOVEX GLOBAL LTD</span> supplies a practical range of lighting accessories
          designed to support safe, efficient installation and long-term reliablility.
          Our products are sourced from trusted manufacturing partners and supplied to meet the expectations of professional installers.
        </p>
      </div>

      {/* Categories */}
           <CategoryBar active="spot"/>

      {/* Products */}
      <div  className="p-10 ">
        <div  style={{ border: "2px solid #E3001B"  }}>
          <div  className="bg-red-600 text-white font-bold text-xl p-5 mb-4">All Products</div>

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
        <p className="text-red-500 text-lg lg:text-xl text-center font-normal">
          {product.name}
        </p>
        <p className="text-red-900 text-md font-normal mt-2">
          {product.code}
        </p>
      </div>
    </div>
  );
}

