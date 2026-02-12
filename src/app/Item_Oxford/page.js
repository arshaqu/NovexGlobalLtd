'use client';

import React, { useState } from 'react';
import CategoryBar from '@/Components/CategoryBar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

import BannerImg from '../../../public/Assets/SwitchBan.png';

import NV302WPO_1 from '../../../public/Assets/Switches/Oxford/NV302WPO-1.jpg';
import NV302WPO_2 from '../../../public/Assets/Switches/Oxford/NV302WPO-2.jpg';

import NV304WPO_1 from '../../../public/Assets/Switches/Oxford/NV304WPO_1.jpg';
import NV304WPO_2 from '../../../public/Assets/Switches/Oxford/NV304WPO_2.jpg';

import NV017WPO_1 from '../../../public/Assets/Switches/Oxford/NV017WPO_1.jpg';
import NV017WPO_2 from '../../../public/Assets/Switches/Oxford/NV017WPO_2.jpg';

import NV324WPO_1 from '../../../public/Assets/Switches/Oxford/NV324WPO_1.jpg';
import NV324WPO_2 from '../../../public/Assets/Switches/Oxford/NV324WPO_2.jpg';

import NV405WPO_2 from '../../../public/Assets/Switches/Oxford/NV405WPO_2.jpg';
import NV405WPO_1 from '../../../public/Assets/Switches/Oxford/NV405WPO_1.jpg';

import NV406WPO_2 from '../../../public/Assets/Switches/Oxford/NV406WPO_2.jpg';
import NV406WPO_1 from '../../../public/Assets/Switches/Oxford/NV406WPO_1.jpg'; 

import NV406WPO_EB_1 from '../../../public/Assets/Switches/Oxford/NV406WPO-EB 6.jpg';
import NV406WPO_EB_2 from '../../../public/Assets/Switches/Oxford/NV406WPO-EB 5.jpg';

import NV405WPO_EB_1 from '../../../public/Assets/Switches/Oxford/NV405WPO-EB-3.jpg';
import NV405WPO_EB_2 from '../../../public/Assets/Switches/Oxford/NV405WPO-EB-2.jpg';


import NWPB_33_1 from '../../../public/Assets/Switches/Oxford/NWPB-33-2.jpg';
import NWPB_33_2 from '../../../public/Assets/Switches/Oxford/NWPB-33-3.jpg';

import NWPB_36_1 from '../../../public/Assets/Switches/Oxford/NWPB-36 (1).jpg';
import NWPB_36_2 from '../../../public/Assets/Switches/Oxford/NWPB-36 (2).jpg';

import NV405WP_N_1 from '../../../public/Assets/Switches/Oxford/NV405WP-N_1.jpg';
import NV405WP_N_2 from '../../../public/Assets/Switches/Oxford/NV405WP-N_2.jpg';


export default function Page() {

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  const products = [
   { name: "1 GANG 2 WAY W/P SWITCH", code: "NV302WPO", imgs: [ NV302WPO_1 , NV302WPO_2 ] },
   { name: "2 GANG 2 WAY W/P SWITCH", code: "NV304WPO", imgs: [ NV304WPO_1 , NV304WPO_2 ] },
   { name: "BELL PUSH W/P SWITCH SOCKET", code: "NV017WPO", imgs: [ NV017WPO_1 , NV017WPO_2 ] },
   { name: "20A DOUBAL POLE W/P SWITCH", code: "NV324WPO", imgs: [ NV324WPO_1 , NV324WPO_2 ] },
   { name: "13A 1 GANG W/P SWITCH SOCKET", code: "NV405WPO", imgs: [ NV405WPO_2 , NV405WPO_1 ] },
   { name: "13A 2 GANG W/P SWITCH SOCKET", code: "NV406WPO", imgs: [ NV406WPO_2 , NV406WPO_1 ] },
   { name: "3 X 3 EMPTY BOX OXFORD ", code: "NV-405WPO-EB", imgs: [ NV405WPO_EB_1 , NV405WPO_EB_2 ] },
   { name: "3 X 6 EMPTY BOX OXFORD ", code: "NV-406WPO-EB", imgs: [ NV406WPO_EB_1 , NV406WPO_EB_2 ] },
   { name: "3 X 3 OUTDOOR W/P BOX W/LOCK ", code: "NWPB-33", imgs: [ NWPB_33_1 , NWPB_33_2 ] },
   { name: "3 X 6 OUTDOOR W/P BOX W/LOCK ", code: "NWPB-36", imgs: [ NWPB_36_1 , NWPB_36_2 ] },
   { name: "13A 1 GANG W/P SWITCH SOCKET NEW", code: "NV405WP-N", imgs: [ NV405WP_N_1 , NV405WP_N_2 ] },






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
          src={BannerImg}
          alt="Oxford Series Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-center p-8">
        <p className="text-3xl font-medium mb-2">OXFORD SERIES</p>
        <p className="text-gray-600 lg:text-xl text-md max-w-6xl mx-auto">
          Our comprehensive collection of OXFORD series British standard switches and sockets
          engineered for safety and durability while meeting strict electrical standards.
        </p>
      </div>

      {/* Categories */}
      <CategoryBar active="switch" />

      {/* Products */}
      <div className="p-10">
        <div style={{ border: "2px solid #E3001B" }}>
          <div className="bg-red-600 text-white p-5 mb-4 font-bold text-xl">All Products</div>

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
