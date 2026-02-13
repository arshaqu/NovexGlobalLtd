'use client';

import React, { useState } from 'react';
import CategoryBar from '@/Components/CategoryBar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';

import BannerImg from '../../../public/Assets/SpotLights/Bann1.jpg';

import NV3260CW_1 from '../../../public/Assets/SpotLights/NV3260CW_1.jpg';
import NV3260CW_2 from '../../../public/Assets/SpotLights/NV3260CW_2.jpg';

import NV3260CWW_1 from '../../../public/Assets/SpotLights/NV3260CWW_02.jpg';
import NV3260CWW_2 from '../../../public/Assets/SpotLights/NV3260CWW_1.jpg';

import NV3260CC_1 from '../../../public/Assets/SpotLights/NV3260CC_1.jpg';
import NV3260CC_2 from '../../../public/Assets/SpotLights/NV3260CC_02.jpg';

import NV3260CSV_1 from '../../../public/Assets/SpotLights/NV3260CSV_1.jpg';
import NV3260CSV_2 from '../../../public/Assets/SpotLights/NV3260CSV_2.jpg';

import NV323005_1 from '../../../public/Assets/SpotLights/NV323005_1.jpg';
import NV323005 from '../../../public/Assets/SpotLights/NV323005.jpg';

import NV323006_1 from '../../../public/Assets/SpotLights/NV323006_1.jpg';
import NV323006 from '../../../public/Assets/SpotLights/NV323006.jpg';

import NV323007_1 from '../../../public/Assets/SpotLights/NV323007_1.jpg';
import NV323007 from '../../../public/Assets/SpotLights/NV323007.jpg';

import NV3260FSV_1 from '../../../public/Assets/SpotLights/NV.3260FSV_1.jpg';
import NV3260FSV_2 from '../../../public/Assets/SpotLights/NV.3260FSV_2.jpg';

import NDL_PLED_A7_3C_WH_1 from '../../../public/Assets/SpotLights/NDL-PLED-A7-3C-WH_2.jpg';
import NDL_PLED_A7_3C_WH_2 from '../../../public/Assets/SpotLights/NDL-PLED-A7-3C-WH_1.jpg';

import NLD_PLED_A7W_1 from '../../../public/Assets/SpotLights/NLD-PLED-A7W_1.jpg';
import NLD_PLED_A7W_2 from '../../../public/Assets/SpotLights/NLD-PLED-A7W_3.jpg';

import NDL_PLED_A25W_1 from '../../../public/Assets/SpotLights/NLD-PLED-A7W_1.jpg';
import NDL_PLED_A25W_2 from '../../../public/Assets/SpotLights/NDL-PLED-A25W-3C-WH_3.jpg';

import NDL_PLED_A25W_3C_1 from '../../../public/Assets/SpotLights/NDL-PLED-A25W-3C-WH_1.jpg';
import NDL_PLED_A25W_3C_2 from '../../../public/Assets/SpotLights/NDL-PLED-A25W-3C-WH_2.jpg';

import NDL_PLED_E7_3C_WH_1 from '../../../public/Assets/SpotLights/NDL-PLED-E7-3C-WH_1.jpg';
import NDL_PLED_E7_3C_WH_2 from '../../../public/Assets/SpotLights/NDL-PLED-E7-3C-WH_2.jpg';

import NDL_PLED_S9WW_WH_1 from '../../../public/Assets/SpotLights/NDL-PLED-S9WW-WH_01.jpg';
import NDL_PLED_S9WW_WH_01 from '../../../public/Assets/SpotLights/NDL-PLED-S45W-WH_3.jpg';

import NDL_PLED_S30W_1 from '../../../public/Assets/SpotLights/NDL-PLED-S30W_1.jpg';
import NDL_PLED_S30W_2 from '../../../public/Assets/SpotLights/NDL-PLED-S30W_2.jpg';

import NDL_LED_3C_E25W_1 from '../../../public/Assets/SpotLights/NDL-PLED-3C-E25W_1.jpg';
import NDL_LED_3C_E25W_2 from '../../../public/Assets/SpotLights/NDL-PLED-3C-E25W_2.jpg';

import NDL_PLEDSR_3C_E25W_1 from '../../../public/Assets/SpotLights/NDL-PLEDSR-3C-E25W_1.jpg';
import NDL_PLEDSR_3C_E25W_2 from '../../../public/Assets/SpotLights/NDL-PLEDSR-3C-E25W_2.jpg';

import NDL_PLEDR_Q12W_1 from '../../../public/Assets/SpotLights/NDL-PLEDR-Q12W_1.jpg';
import NDL_PLEDR_Q12W_2 from '../../../public/Assets/SpotLights/NDL-PLEDR-Q12W_2.jpg'

import NDL_PLEDR_Q7W_3C_1 from '../../../public/Assets/SpotLights/NDL-PLEDR-Q7W-3C_1.jpg';
import NDL_PLEDR_Q7W_3C_2 from '../../../public/Assets/SpotLights/NDL-PLEDR-Q7W-3C_2.jpg'

import NDL_PLEDR_Q7W_3C_MB_1 from '../../../public/Assets/SpotLights/NDL-PLEDR-Q7W-3C-MB-1.jpg';
import NDL_PLEDR_Q7W_3C_MB_2 from '../../../public/Assets/SpotLights/NDL-PLEDR-Q7W-3C-MB-2.jpg'



export default function Page() {

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  const products = [
   { name: "4W 60 SMD LED LIGHT WHITE FITTING DAYLIGHT", code: "NV3260CW", imgs: [ NV3260CW_1 , NV3260CW_2 ] },
   { name: "4W 60 SMD LED LIGHT WHITE FITTING DAYLIGHT", code: "NV3260CWW", imgs: [ NV3260CWW_1 , NV3260CWW_2 ] },
   { name: "4W 60 SMD LED LIGHT CHROME FITTING DAYLIGHT", code: "NV3260CC", imgs: [ NV3260CC_1 , NV3260CC_2 ] },
   { name: "4W 60 SMD LED LIGHT S.CHROME FITTING DAYLIGHT", code: "NV3260CSV", imgs: [ NV3260CSV_1 , NV3260CSV_2 ] },
   { name: "4W 60 SMD LED LIGHT S.CHROME FITTING DAYLIGHT", code: "NV3260FSV", imgs: [  NV3260FSV_1 , NV3260FSV_2 , ] },
   { name: "7W 16 SMD LED LIGHT FITTING SURFACE DAYLIGHT", code: "NV323005", imgs: [  NV323005 , NV323005_1 , ] },
   { name: "17W 64 SMD LED LIGHT FITTING SURFACE DAYLIGHT", code: "NV323007", imgs: [  NV323007 , NV323007_1 , ] },
   { name: "10W 36 SMD LED LIGHT FITTING SURFACE DAYLIGHT", code: "NV323006", imgs: [  NV323006 , NV323006_1 , ] },
   { name: "7W LED PANEL DAYLIGHT", code: "NDL-PLED-A7W", imgs: [  NLD_PLED_A7W_1 , NLD_PLED_A7W_2 , ] },
   { name: "7W LED PANEL DAY/WARM/NAT", code: "NDL-PLED-A7-3C-WH", imgs: [  NDL_PLED_A7_3C_WH_2 , NDL_PLED_A7_3C_WH_1 , ] },
   { name: "25W LED PANEL DAYLIGHT", code: "NDL-PLED-A25W", imgs: [ NDL_PLED_A25W_1 , NDL_PLED_A25W_2 ] },
   { name: "25W LED PANEL 3 COLOR", code: "NDL-PLED-A25W", imgs: [ NDL_PLED_A25W_3C_1 , NDL_PLED_A25W_3C_2 ] },
   { name: "35W LED PANEL DAYLIGHT", code: "NDL-PLED-A35W", imgs: [ NDL_PLED_A25W_1 , NDL_PLED_A25W_2 ] },

   { name: "7W LED PANEL DAYLIGHT", code: "NDL-PLED-E7W", imgs: [  NDL_PLED_E7_3C_WH_1 , NDL_PLED_E7_3C_WH_2 , ] },
   { name: "7W LED PANEL WARM WHITE", code: "NDL-PLED-E7WW", imgs: [  NDL_PLED_E7_3C_WH_1 , NDL_PLED_E7_3C_WH_2 , ] },
   { name: "7W LED PANEL DAY/WARM/NAT", code: "NDL-PLED-E7-3C-WH", imgs: [  NDL_PLED_E7_3C_WH_1 , NDL_PLED_E7_3C_WH_2 , ] },
   { name: "25W LED PANEL DAYLIGHT", code: "NDL-PLED-E25W", imgs: [  NDL_PLED_E7_3C_WH_1 , NDL_PLED_E7_3C_WH_2 , ] },
   { name: "25W LED PANEL DAYLIGHT ROUND RECESSED", code: "NDL-PLED-3C-E25W", imgs: [  NDL_LED_3C_E25W_1 , NDL_LED_3C_E25W_2 , ] },
   { name: "25W LED PANEL DAYLIGHT SQUARE RECESSED", code: "NDL-PLEDSR-3C-E25W", imgs: [  NDL_PLEDSR_3C_E25W_1 , NDL_PLEDSR_3C_E25W_2 , ] },
   
   { name: "9W LED PANEL DAYLIGHT", code: "NDL-PLEDS-S9W", imgs: [  NDL_PLED_S9WW_WH_1 , NDL_PLED_S9WW_WH_01 , ] },
   { name: "9W LED PANEL WARM WHITE", code: "NDL-PLEDS-S9WW", imgs: [  NDL_PLED_S9WW_WH_1 , NDL_PLED_S9WW_WH_01 , ] },
   { name: "30W LED PANEL DAYLIGHT", code: "NDL-PLED-S30W", imgs: [  NDL_PLED_S30W_1 , NDL_PLED_S30W_2 , ] },
   { name: "45W LED PANEL DAYLIGHT", code: "NDL-PLED-S45W", imgs: [  NDL_PLED_S30W_1 , NDL_PLED_S30W_2 , ] },
   { name: "12W LED SPOT LIGHT FITTING DAYLIGHT", code: "NDL-PLEDR-Q12W", imgs: [  NDL_PLEDR_Q12W_1 , NDL_PLEDR_Q12W_2 , ] },
   
   { name: "7W LED SPOT LIGHT FITTING WHITE 3 COLOR", code: "NDL-PLEDR-Q7W-3C-WH", imgs: [  NDL_PLEDR_Q7W_3C_1 , NDL_PLEDR_Q7W_3C_2 , ] },
   { name: "7W LED SPOT LIGHT FITTING M.BLK 3 COLOR", code: "NDL-PLEDR-Q7W-3C-MB", imgs: [  NDL_PLEDR_Q7W_3C_MB_1 , NDL_PLEDR_Q7W_3C_MB_2 , ] },






   

   









   

  

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
      <div  className="lg:p-10 p-5 ">
        <div  style={{ border: "2px solid #E3001B"  }}>
          <div  className="bg-red-600 text-white font-bold text-xl p-5 mb-4">All Products</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
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
        <p className="text-red-500 text-sm lg:text-xl text-center font-normal">
          {product.name}
        </p>
        <p className="text-red-900 text-md font-normal mt-2">
          {product.code}
        </p>
      </div>
    </div>
  );
}

