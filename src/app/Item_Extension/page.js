'use client';

import React, { useState } from 'react';
import CategoryBar from '@/Components/CategoryBar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

import BannerImg from '../../../public/Assets/Extension/ExtBann.jpg';

import N_D102_3M_1 from '../../../public/Assets/Extension/N-D102-10M_1.jpg';
import N_D102_3M_2 from '../../../public/Assets/Extension/N-D102-10M_02.jpg';

import D103_5M_1 from '../../../public/Assets/Extension/N-D103-5M_1.jpg';
import D103_5M_2 from '../../../public/Assets/Extension/N-D103-5M_2.jpg';

import D104_2U_1 from '../../../public/Assets/Extension/N-D104-2U_1.jpg';
import D104_2U_2 from '../../../public/Assets/Extension/N-D104-2U_06.jpg';

import N_D104_1 from '../../../public/Assets/Extension/N-D104_01.jpg';
import N_D104_2 from '../../../public/Assets/Extension/N-D104_02.jpg';

import N_D105_1 from '../../../public/Assets/Extension/N-D105_01.jpg';
import N_D105_2 from '../../../public/Assets/Extension/N-D105_02.jpg';



export default function Page() {

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  const products = [
   { name: "2 GANG EXT SKT MULTI S/SWT W/NEON (3 MTR)", code: "N-D102-3M", imgs: [ N_D102_3M_1 , N_D102_3M_2 ] },
   { name: "2 GANG EXT SKT MULTI S/SWT W/NEON (5 MTR)", code: "N-D102-5M", imgs: [ N_D102_3M_1 , N_D102_3M_2 ] },
   { name: "2 GANG EXT SKT MULTI S/SWT W/NEON (10 MTR)", code: "N-D102-10M", imgs: [ N_D102_3M_1 , N_D102_3M_2 ] },
   { name: "3 GANG EXT SKT MULTI S/SWT W/NEON (3 MTR)", code: "N-D103-3M", imgs: [ D103_5M_1 , D103_5M_2 ] },
   { name: "3 GANG EXT SKT MULTI S/SWT W/NEON (5 MTR)", code: "N-D103-5M", imgs: [ D103_5M_1 , D103_5M_2 ] },
   { name: "4 GANG EXT SKT MULTI S/SWT W/NEON 2U 3MTR", code: "N-D104-2U-3M", imgs: [ D104_2U_1 , D104_2U_2 ] },


   { name: "4 GANG EXT SKT MULTI S/SWT W/NEON (3 MTR)", code: "N-D104-3M", imgs: [ N_D104_1 , N_D104_2 ] },
   { name: "4 GANG EXT SKT MULTI S/SWT W/NEON (5 MTR)", code: "N-D104-5M", imgs: [ N_D104_1 , N_D104_2 ] },
   { name: "4 GANG EXT SKT MULTI S/SWT W/NEON (10 MTR)", code: "N-D104-10M", imgs: [ N_D104_1 , N_D104_2 ] },

   { name: "5 GANG EXT SKT MULTI S/SWT W/NEON (3 MTR)", code: "N-D105-3M", imgs: [ N_D105_1 , N_D105_2 ] },
   { name: "5 GANG EXT SKT MULTI S/SWT W/NEON (5 MTR)", code: "N-D105-5M", imgs: [ N_D105_1 , N_D105_2 ] },


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
        <p className="text-3xl font-medium mb-2">EXTENSION SOCKETS</p>
        <p className="text-gray-600 lg:text-lg text-md max-w-6xl mx-auto">
         The <span className='font-medium'>NOVEX EXTENSION SOCKETS</span> is designed for safe , reliable power distribution with a strong build and high-quality internal components. Ideal for home, office , and commercial use , it delivers durability , convenience, and dependable performance. 
        </p>
      </div>

      {/* Categories */}
           <CategoryBar active="extension"/>

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
