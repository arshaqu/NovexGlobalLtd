// app/products/page.js
'use client';

import React, { useState } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useRef } from "react";


import BannerImg from '../../../public/Assets/SwitchBan.png';


// Product images imports
import VK0201_1 from '../../../public/Assets/Switches/VK0201_1.jpg';
import VK0201_2 from '../../../public/Assets/Switches/VK0201_2.jpg';
import VK0202_1 from '../../../public/Assets/Switches/VK0202_1.jpg';
import VK0202_2 from '../../../public/Assets/Switches/VK0202_2.jpg';
import VK0203_1 from '../../../public/Assets/Switches/VK0203_1.jpg';
import VK0203_2 from '../../../public/Assets/Switches/VK0203_2.jpg';
import VK0204_1 from '../../../public/Assets/Switches/VK0204_1.jpg';
import VK0204_2 from '../../../public/Assets/Switches/VK0204_2.jpg';
import VK0205_1 from '../../../public/Assets/Switches/VK0205_2.jpg';
import VK0205_2 from '../../../public/Assets/Switches/VK0205_1.jpg';
import VK0206_1 from '../../../public/Assets/Switches/VK0206_1.jpg';
import VK0206_2 from '../../../public/Assets/Switches/VK0206_2.jpg';
import VK0207_1 from '../../../public/Assets/Switches/VK0207_1.jpg';
import VK0207_2 from '../../../public/Assets/Switches/VK0207_2.jpg';
import VK0209_1 from '../../../public/Assets/Switches/VK0209_1.jpg';
import VK0209_2 from '../../../public/Assets/Switches/VK0209_2.jpg';
import VK0213_1 from '../../../public/Assets/Switches/VK0213_1.jpg';
import VK0213_2 from '../../../public/Assets/Switches/VK0213_2.jpg';
import VK0217_1 from '../../../public/Assets/Switches/VK0217_1.jpg';
import VK0217_2 from '../../../public/Assets/Switches/VK0217_2.jpg';
import VK307A_1 from '../../../public/Assets/Switches/VK307A_1.jpg';
import VK307A_2 from '../../../public/Assets/Switches/VK307A_2.jpg';
import VK224_1 from '../../../public/Assets/Switches/VK0224_1.jpg';
import VK224_2 from '../../../public/Assets/Switches/VK0224_2.jpg';
import VK227_1 from '../../../public/Assets/Switches/VK0227_1.jpg';
import VK227_2 from '../../../public/Assets/Switches/VK0227_2.jpg';
import VK229_1 from '../../../public/Assets/Switches/VK0229_1.jpg';
import VK229_2 from '../../../public/Assets/Switches/VK0229_2.jpg';
import VK0231_1 from '../../../public/Assets/Switches/VK0231_2.jpg';
import VK0231_2 from '../../../public/Assets/Switches/VK0231_1.jpg';
import VZ0215_1 from '../../../public/Assets/Switches/VZ0215_1.jpg';
import VZ0215_2 from '../../../public/Assets/Switches/VZ0215_2.jpg';
import VZ0219_1 from '../../../public/Assets/Switches/VZ0219-1.jpg';
import VZ0219_2 from '../../../public/Assets/Switches/VZ0219-2.jpg';
import VZ0201_1 from '../../../public/Assets/Switches/VZ0201_1.jpg';
import VZ0201_2 from '../../../public/Assets/Switches/VZ0201_2.jpg';
import VZ0202_1 from '../../../public/Assets/Switches/VZ0202-1.jpg';
import VZ0202_2 from '../../../public/Assets/Switches/VZ0202-3.jpg';
import VJ0220_1 from '../../../public/Assets/Switches/VJ0220_1.jpg';
import VJ0220_2 from '../../../public/Assets/Switches/VJ0220_2.jpg';
import VJ0221_1 from '../../../public/Assets/Switches/VJ0221_1.jpg';
import VJ0221_2 from '../../../public/Assets/Switches/VJ0221_2.jpg';
import VZ901_1 from '../../../public/Assets/Switches/VZ901_1.jpg';
import VZ901_2 from '../../../public/Assets/Switches/VZ901_2.jpg';

import VZ902_1 from '../../../public/Assets/Switches/VZ902_1.jpg';
import VZ902_2 from '../../../public/Assets/Switches/VZ902_2.jpg';

import VZ0205_1 from '../../../public/Assets/Switches/VZ0205_1.jpg';
import VZ0205_2 from '../../../public/Assets/Switches/VZ0205_2.jpg';

import VZ205U1_1 from '../../../public/Assets/Switches/VZ205U1_1.jpg';
import VZ205U1_2 from '../../../public/Assets/Switches/VZ205U1_2.jpg';

import VZ205U2_1 from '../../../public/Assets/Switches/VZ205U2_1.jpg';
import VZ205U2_2 from '../../../public/Assets/Switches/VZ205U2_2.jpg';

import VZ205DU_1 from '../../../public/Assets/Switches/VZ205DU_1.jpg';
import VZ205DU_2 from '../../../public/Assets/Switches/VZ205DU_2.jpg';

import VZ0206_1 from '../../../public/Assets/Switches/VZ0206_1.jpg';
import VZ0206_2 from '../../../public/Assets/Switches/VZ0206_2.jpg';

import VZ206DU_1 from '../../../public/Assets/Switches/VZ206DU_1.jpg';
import VZ206DU_2 from '../../../public/Assets/Switches/VZ206DU_2.jpg';


import VZ206U2_1 from '../../../public/Assets/Switches/VZ206U2_1.jpg';
import VZ206U2_2 from '../../../public/Assets/Switches/VZ206U2_3.jpg';

import VZ0229_1 from '../../../public/Assets/Switches/VZ0229_1.jpg';
import VZ0229_2 from '../../../public/Assets/Switches/VZ0229_2.jpg';

import VZ0232_1 from '../../../public/Assets/Switches/VZ0232_1.jpg';
import VZ0232_2 from '../../../public/Assets/Switches/VZ0232_2.jpg';

import VZ0555_1 from '../../../public/Assets/Switches/VZ0555_1.jpg';
import VZ0555_2 from '../../../public/Assets/Switches/VZ0555_2.jpg';

import VZ0239_1 from '../../../public/Assets/Switches/VZ0239_1.jpg';
import VZ0239_2 from '../../../public/Assets/Switches/VZ0239_2.jpg';

import VZ0263_1 from '../../../public/Assets/Switches/VZ0263_3.jpg';
import VZ0263_2 from '../../../public/Assets/Switches/VZ0263_2.jpg';

import VZ0266_1 from '../../../public/Assets/Switches/VZ0266_1.jpg';
import VZ0266_2 from '../../../public/Assets/Switches/VZ0266_2.jpg';

import VZ0243_1 from '../../../public/Assets/Switches/VZ0243_1.jpg';
import VZ0243_2 from '../../../public/Assets/Switches/VZ0243_2.jpg';

import VZ0258_1 from '../../../public/Assets/Switches/VZ0258_1.jpg';
import VZ0258_2 from '../../../public/Assets/Switches/VZ0258_2.jpg';

import W500_1 from '../../../public/Assets/Switches/500W_1.jpg';
import W500_2 from '../../../public/Assets/Switches/500W_2.jpg';

import W5002G_1 from '../../../public/Assets/Switches/500W2G_1.jpg';
import W5002G_2 from '../../../public/Assets/Switches/500W2G_2.jpg';

import W1000_1 from '../../../public/Assets/Switches/1000W_1.jpg';
import W1000_2 from '../../../public/Assets/Switches/1000W_2.jpg';

import W10002G_1 from '../../../public/Assets/Switches/1000W2G_1.jpg';
import W10002G_2 from '../../../public/Assets/Switches/1000W2G_2.jpg';

import W1500_1 from '../../../public/Assets/Switches/1500W_1.jpg';
import W1500_2 from '../../../public/Assets/Switches/1500W_2.jpg';

import VZ0202_3H_1 from '../../../public/Assets/Switches/VZ0202_3H_1.jpg';
import VZ0202_3H_2 from '../../../public/Assets/Switches/VZ0202_3H_2.jpg';

import VZ0202_4H_1 from '../../../public/Assets/Switches/VZ0202_4H_1.jpg';
import VZ0202_4H_2 from '../../../public/Assets/Switches/VZ0202_4H_2.jpg';

import v0354_1 from '../../../public/Assets/Switches/v0354_1.jpg';
import v0354_2 from '../../../public/Assets/Switches/v0354_2.jpg';

import V0364_1 from '../../../public/Assets/Switches/V0364_1.jpg';
import V0364_2 from '../../../public/Assets/Switches/V0364_2.jpg';
import CategoryBar from '@/Components/CategoryBar';




export default function LiverpoolSeriesPage() {
  const router = useRouter();
  const productSectionRef = useRef(null);


  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24; // 6 rows × 4 columns

  // Product list
  const products = [
    { name: "1 GANG 1 WAY SWITCH", code: "VK0201", imgs: [VK0201_1, VK0201_2] },
    { name: "1 GANG 2 WAY SWITCH", code: "VK0202", imgs: [VK0202_1, VK0202_2] },
    { name: "2 GANG 1 WAY SWITCH", code: "VK0203", imgs: [VK0203_1, VK0203_2] },
    { name: "2 GANG 2 WAY SWITCH", code: "VK0204", imgs: [VK0204_1, VK0204_2] },
    { name: "3 GANG 1 WAY SWITCH", code: "VK0205", imgs: [VK0205_1, VK0205_2] },
    { name: "3 GANG 2 WAY SWITCH", code: "VK0206", imgs: [VK0206_1, VK0206_2] },
    { name: "4 GANG 1 WAY SWITCH 3 X 6", code: "VK0207", imgs: [VK0207_1, VK0207_2] },
    { name: "6 GANG 1 WAY SWITCH 3 X 6", code: "VK0209", imgs: [VK0209_1, VK0209_2] },
    { name: "1 GANG INTERMEDIATE SWITCH", code: "VK0213", imgs: [VK0213_1, VK0213_2] },
    { name: "1 GANG 1 WAY BELL SWITCH", code: "VK0217", imgs: [VK0217_1, VK0217_2] },
    { name: "4 GANG 1 WAY SWITCH 3X3", code: "NV307A", imgs: [VK307A_1, VK307A_2] },
    { name: "20A DOUBAL POLE SWITCH", code: "VK0224", imgs: [VK224_1, VK224_2] },
    { name: "45A DOUBAL POLE SWITCH 3X3", code: "VK0227", imgs: [VK227_1, VK227_2] },
    { name: "45A DOUBAL POLE SWITCH 3 X 6", code: "VK0229", imgs: [VK229_1, VK229_2] },
    { name: "45A DP + 13A SWITCH SOCKET 3x6", code: "VK0231", imgs: [VK0231_1, VK0231_2] },
    { name: "3A FUSE UNITE + NEON", code: "VZ0215", imgs: [VZ0215_1, VZ0215_2] },
    { name: "13A FUSE UNITE", code: "VZ0219", imgs: [VZ0219_1, VZ0219_2] },
    { name: "1 GANG BLANK PLATE 3 X 3", code: "VZ0201", imgs: [VZ0201_2, VZ0201_1] },
    { name: "2 GANG BLANK PLATE 3 X 6", code: "VZ0202", imgs: [VZ0202_1, VZ0202_2] },
    { name: "20A CONNECTING PLATE", code: "VJ0220", imgs: [VJ0220_1, VJ0220_2] }, 
    { name: "45A CONNECTING PLATE", code: "VJ0221", imgs: [VJ0221_1, VJ0221_2] }, 
    { name: "1 GANG PLATE TEL/DATA", code: "VZ901", imgs: [VZ901_1, VZ901_2] }, 
    { name: "2 GANG SWITCH SOCKET", code: "VZ902", imgs: [VZ902_2, VZ902_1] }, 
    { name: "13A 1 GANG SWITCH SOCKET", code: "VZ0205", imgs: [VZ0205_2, VZ0205_1] }, 
    { name: "13A 1 GANG SWITCH SOCKET +1 USB", code: "VZ205U1", imgs: [VZ205U1_1, VZ205U1_2] }, 
    { name: "13A 1 GANG SWITCH SOCKET +2 USB", code: "VZ205U2", imgs: [VZ205U2_1, VZ205U2_2] }, 
    { name: "13A 1 GANG UNIVERSAL SWITCH SOCKET", code: "VZ205DU", imgs: [VZ205DU_1, VZ205DU_2] }, 
    { name: "13A 2 GANG SWITCH SOCKET", code: "VZ0206", imgs: [VZ0206_1, VZ0206_2] }, 
    { name: "13A 2 GANG UNIVERSAL SWITCH SOCKET", code: "VZ206DU", imgs: [VZ206DU_1, VZ206DU_2 ] }, 
    { name: "13A 2 GANG SWITCH SOCKET +2 USB", code: "VZ206U2", imgs: [VZ206U2_1, VZ206U2_2] }, 
    { name: "15A SWITCH SOCKET", code: "VZ0229", imgs: [VZ0229_1, VZ0229_2] }, 
    { name: "1 GANG TV SOCKET", code: "VZ0232", imgs: [VZ0232_1, VZ0232_2] }, 
    { name: "1 GANG SATELLITE SOCKET", code: "VZ0555", imgs: [VZ0555_1, VZ0555_2] }, 
    { name: "1 GANG TEL MASTER BRITISH SOCKET", code: "VZ0239", imgs: [VZ0239_1, VZ0239_2] }, 
    { name: "1 GANG RJ11 TEL SOCKET", code: "VZ0263", imgs: [VZ0263_1, VZ0263_2] }, 
    { name: "2 GANG RJ11 REL SOCKET", code: "VZ0266", imgs: [VZ0266_1, VZ0266_2] }, 
    { name: "2 GANG RJ45 DATA SOCKET", code: "VZ0243", imgs: [VZ0243_1, VZ0243_2] }, 
    { name: "SHAVER SOCKET 220V TO 110V", code: "VZ0258", imgs: [VZ0258_1, VZ0258_2] },
    { name: "500W LIGHT CONTROL DIMMER", code: "500W", imgs: [W500_1, W500_2] }, 
    { name: "500W 2GANG LIGHT CONTROL DIMMER", code: "500W 2G", imgs: [W5002G_1, W5002G_2] }, 
    { name: "1000W LIGHT CONTROL DIMMER", code: "1000W", imgs: [W1000_1, W1000_2] }, 
    { name: "1000W 2GANG LIGHT CONTROL DIMMER", code: "1000W 2G", imgs: [W10002G_1, W10002G_2] }, 
    { name: "1500W 1GANG LIGHT CONTROL DIMMER", code: "1500W 2G", imgs: [W1500_1, W1500_2] }, 
    { name: "2 GANG BLANK PLAT WHT - 3 HOLE", code: "VZ0202(3H)", imgs: [VZ0202_3H_1, VZ0202_3H_2] }, 
    { name: "2 GANG BLANK PLAT WHT - 4 HOLE", code: "VZ0202(4H)", imgs: [ VZ0202_4H_2 , VZ0202_4H_1] }, 

    { name: "4 GANG 500W DIMMER WHT", code: "V0354", imgs: [ v0354_1 , v0354_2] }, 
    { name: "4 GANG 1000W DIMMER WHT", code: "V0364", imgs: [ V0364_1 , V0364_2] }, 






  ];

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner */}
      <div className="w-full">
        <Image
          src={BannerImg}
          alt="Liverpool Series Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title & Description */}
      <div className="text-center p-8">
        <p className="text-3xl font-medium mb-2">LIVERPOOL SERIES</p>
        <p className="text-gray-600 lg:text-xl text-md max-w-6xl mx-auto" style={{ fontWeight: 400 }}>
          Liverpool British standard switches and sockets are designed to meet trusted UK standards.
          They offer reliable performance, safety, and long-lasting quality.
        </p>
      </div>

      {/* Categories */}
      <CategoryBar active="switch"/>

      {/* Product Grid */}
     <div className="lg:p-10 p-5 " ref={productSectionRef}>
        <div style={{ border: "2px solid #E3001B" }}>
          <div className="bg-red-600 text-white p-5 font-bold text-xl font-small mb-4">All Products</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
            {currentProducts.map((p, idx) => (
              <HoverImageCard key={idx} product={p} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                      setCurrentPage(i + 1);
                      productSectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  style={{borderRadius:'25px' , cursor:'pointer'}}
                  className={`px-4 py-2 border ${
                    currentPage === i + 1
                      ? "bg-red-600 text-white font-bold  border-red-600 mb-2"
                      : "bg-white text-red-600 font-bold border-red-600 mb-2 "
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

// Hover Image Component
function HoverImageCard({ product }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col"
      onMouseEnter={() => setImgIndex((prev) => (prev + 1) % product.imgs.length)}
      onMouseLeave={() => setImgIndex(0)}
    >
      {/* Image container with fixed height */}
      <div className="w-full mb-4 flex justify-center items-center overflow-hidden rounded-lg"
           style={{ height: '180px' }}> {/* fixed height */}
        <Image
          loading='lazy'
          src={product.imgs[imgIndex]}
          alt={product.name}
          className="object-contain w-full h-full transform transition duration-100 hover:scale-105"
        />
      </div>

      {/* Text container with flex-grow for alignment */}
      <div className="text-left flex flex-col justify-end h-auto p-1">
        <p className="text-red-500 text-sm lg:text-xl font-normal" style={{ letterSpacing: '1px' }}>
          {product.name}
        </p>
        <p className="text-red-900 text-md font-normal mt-2">{product.code}</p>
      </div>
    </div>
  );
}
