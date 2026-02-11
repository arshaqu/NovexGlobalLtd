'use client';

import React, { useState } from 'react';
import CategoryBar from '@/Components/CategoryBar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

import BannerImg from '../../assets/InsectsKiller/IkBann.png';

import NPT_382_1 from '../../assets/PVC/NPT-382.png';
import NPT_382_2 from '../../assets/PVC/NPT-382.png';

import NPT_5050_1 from '../../assets/PVC/NPT-5050.png';
import NPT_5050_2 from '../../assets/PVC/NPT-5050.png';

import NPT_7575_1 from '../../assets/PVC/NPT-7575.png';
import NPT_7575_2 from '../../assets/PVC/NPT-7575.png';

import NPT_100100_1 from '../../assets/PVC/NPT-100100.png';
import NPT_100100_2 from '../../assets/PVC/NPT-100100.png';

import NPTS_3825_1 from '../../assets/PVC/NPTS3825.png';
import NPTS_3825_2 from '../../assets/PVC/NPTS3825.png';

import NPTS_2516_1 from '../../assets/PVC/NPTS2516.png';
import NPTS_2516_2 from '../../assets/PVC/NPTS2516.png';

import NPTS_1616_1 from '../../assets/PVC/NPTS1616.png';
import NPTS_1616_2 from '../../assets/PVC/NPTS1616.png';

import NPTS_1010_1 from '../../assets/PVC/NPTS-1010.png';
import NPTS_1010_2 from '../../assets/PVC/NPTS-1010.png';



export default function Page() {

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  const products = [
   { name: "38 X 25 PVC TRUNKING W/STICKER ", code: "NPT-3825", imgs: [  NPT_382_1 , NPT_382_2 ] },
   { name: "50 X 50 PVC TRUNKING", code: "NPT-5050", imgs: [  NPT_5050_1 , NPT_5050_2 ] },
   { name: "75 X 75 PVC TRUNKING", code: "NPT-7575", imgs: [  NPT_7575_1 , NPT_7575_2 ] },
   { name: "100 X 100 PVC TRUNKING ", code: "NPT-100100", imgs: [  NPT_100100_1 , NPT_100100_2  ] },

   { name: "10 X 10 PVC TRUNKING W/STICKER", code: "NPTS-1010", imgs: [  NPTS_3825_1 , NPTS_3825_2 ] },
   { name: "16 X 16 PVC TRUNKING W/STICKER", code: "NPTS-1616", imgs: [  NPTS_2516_1 , NPTS_2516_2 ] },
   { name: "16 X 25 PVC TRUNKING W/STICKER", code: "NPTS-2516", imgs: [  NPTS_1616_1 , NPTS_1616_2 ] },
   { name: "38 X 25 PVC TRUNKING W/STICKER", code: "NPTS-3825", imgs: [  NPTS_1010_1 , NPTS_1010_2  ] },
   ];

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen ">

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
        <p className="text-3xl font-medium mb-2">PVC TRUNKING</p>
        <p className="text-gray-900 lg:text-lg text-md max-w-6xl mx-auto">
          Our <span className='font-medium'>PVC Trunking</span> ducting and cable management solutions provide clean, durable, and complaint installations across residential and commercial environments. Manufactured using quality materials, the range supports both surface and concealed applications.
        </p>
      </div>

      {/* Categories */}
           <CategoryBar active="pvc"/>

      {/* Products */}
      <div  className="p-10 ">
        <div  style={{ border: "2px solid #E3001B"  }}>
          <div  className="bg-red-600 text-white font-bold text-xl p-5 mb-4">All Products</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 ">
            {currentProducts.map((p, idx) => (
              <HoverImageCard key={idx} product={p} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-8 flex-wrap mb-5 font-bold">
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
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col "
      onMouseEnter={() => setImgIndex((prev) => (prev + 1) % product.imgs.length)}
      onMouseLeave={() => setImgIndex(0)}
    >
      <div className="w-full mb-4 flex justify-center items-center overflow-hidden rounded-lg h-[200px] ">
        <Image
        loading='lazy'
        style={{height:'180px'}}
          src={product.imgs[imgIndex]}
          alt={product.name}
          className="object-contain w-full h-full transition hover:scale-105"
        />
      </div>

      <div className="text-left p-1 ">
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

