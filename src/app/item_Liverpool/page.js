// app/products/page.js
'use client';

import React, { useState } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { CgMenuGridR } from "react-icons/cg";

import BannerImg from '../../Assets/SwitchBan.png';
import DummyProduct from '../../Assets/InsectK1.png';
import SpotIcon from '../../Assets/spotlightIcon.png';
import ExtensionIcon from '../../Assets/extensionIcon.png';
import PVCIcon from '../../Assets/PVCIcon.png';
import SwitchIcon from '../../Assets/SwitchIcon.png';

import VK0201_1 from '../../Assets/Switches/VK0201_1(1).jpg';
import VK0201_2 from '../../Assets/Switches/VK0201_2(1).jpg';

import VK0202_1 from '../../Assets/Switches/VK0202_1(2).jpg';
import VK0202_2 from '../../Assets/Switches/VK0202_2(2).jpg';

import VK0203_1 from '../../Assets/Switches/VK0203_1(5).jpg';
import VK0203_2 from '../../Assets/Switches/VK0203_2(5).jpg';

import VK0204_1 from '../../Assets/Switches/VK0204_1(6).jpg';
import VK0204_2 from '../../Assets/Switches/VK0204_2(6).jpg';

import VK0205_1 from '../../Assets/Switches/VK0205_1(7).jpg';
import VK0205_2 from '../../Assets/Switches/VK0205_2(7).jpg';

import VK0206_1 from '../../Assets/Switches/VK0206_1(8).jpg';
import VK0206_2 from '../../Assets/Switches/VK0206_2(8).jpg';

import VK0207_1 from '../../Assets/Switches/VK0207_1(10).jpg';
import VK0207_2 from '../../Assets/Switches/VK0207_2(10).jpg';

import VK0209_1 from '../../Assets/Switches/VK0209_1(11).jpg';
import VK0209_2 from '../../Assets/Switches/VK0209_2(11).jpg';

import VK0213_1 from '../../Assets/Switches/VK0213_1(4).jpg';
import VK0213_2 from '../../Assets/Switches/VK0213_2(4).jpg';



export default function LiverpoolSeriesPage() {
  const router = useRouter();

  // Product list with multiple images
  const products = [
    {
      name: "1 GANG 1 WAY SWITCH",
      code: "VK0201",
      imgs: [VK0201_1, VK0201_2],
    }, {
      name: "1 GANG 2 WAY SWITCH",
      code: "VK0202",
      imgs: [VK0202_1, VK0202_2],
    },
    {
      name: "2 GANG 1 WAY SWITCH",
      code: "VK0203",
      imgs: [VK0203_1, VK0203_2],
    },
    {
      name: "2 GANG 2 WAY SWITCH",
      code: "VK0204",
      imgs: [VK0204_1, VK0204_2],
    },
    {
      name: "3 GANG 1 WAY SWITCH",
      code: "VK0205",
      imgs: [VK0205_1, VK0205_2],
    },
    {
      name: "3 GANG 2 WAY SWITCH",
      code: "VK0206",
      imgs: [VK0206_1, VK0206_2],
    },
    {
      name: "4 GANG 1 WAY SWITCH 3 X 6",
      code: "VK0207",
      imgs: [VK0207_1, VK0207_2],
    },
    {
      name: "6 GANG 1 WAY SWITCH 3 X 6",
      code: "VK0209",
      imgs: [VK0209_1, VK0209_2],
    },
    {
      name: "1 GANG INTERMEDIATE SWITCH",
      code: "VK0213",
      imgs: [VK0213_1, VK0213_2],
    },
  ];

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
      <div className="max-w-8xl mx-auto p-8">
        <div className="bg-red-600 text-white text-xl font-medium p-4 flex gap-2">
          <CgMenuGridR size={25} />
          <span className="mt-1">All Categories</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "clamp(16px, 5vw, 80px)", // responsive gap
            padding: "16px",
            border: "1px solid #E3001B",
            color: "#E3001B",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          {/* Active category with red line */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              borderLeft: "4px solid #E3001B",
              paddingLeft: "8px",
            }}
          >
            <Image src={SwitchIcon} alt="Switch Icon" width={24} height={24} />

            <select
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                outline: "none",
                color: "#E3001B",
                fontWeight: "500",
              }}
              defaultValue=""
              onChange={(e) => {
                const value = e.target.value;
                if (value) router.push(value);
              }}
            >
              <option value="" disabled hidden>
                Switches and Socket
              </option>
              <option value="/item_extension">Liverpool Series</option>
              <option value="/item_oxford">Oxford Series</option>
              <option value="/item_rock">Rock Series</option>
            </select>
          </span>

          <Link href="/item_extension">
            <div className="flex items-center gap-2">
              <Image src={ExtensionIcon} alt="Extension Icon" width={24} height={24} />
              <span style={{ whiteSpace: "nowrap" }}>Extension Socket</span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Image src={SpotIcon} alt="Spot Lights" width={24} height={24} />
            <span style={{ whiteSpace: "nowrap" }}>Spot Lights</span>
          </div>

          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
              <path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
              <path d="M3 13h4" />
              <path d="M17 13h4" />
              <path d="M12 20v-6" />
              <path d="M4 19l3.35 -2" />
              <path d="M4 7l3.75 2.4" />
              <path d="M20 7l-3.75 2.4" />
              <path d="M3 3l18 18" />
            </svg>
            <span style={{ whiteSpace: "nowrap" }}>Insects Killer</span>
          </div>

          <div className="flex items-center gap-2">
            <Image src={PVCIcon} alt="PVC Trunking" width={24} height={24} />
            <span style={{ whiteSpace: "nowrap" }}>PVC Trunking</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-10">
        <div style={{ border: "2px solid #E3001B" }}>
          <div className="bg-red-600 text-white p-5 font-medium mb-4">All Products</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
            {products.map((p, idx) => (
              <HoverImageCard key={idx} product={p} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Separate component for hover image effect
function HoverImageCard({ product }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col"
      onMouseEnter={() => setImgIndex((prev) => (prev + 1) % product.imgs.length)}
      onMouseLeave={() => setImgIndex(0)}
    >
      {/* Image */}
      <div className="w-full h-auto mb-4 flex justify-center items-center overflow-hidden rounded-lg p-4">
        <Image
          src={product.imgs[imgIndex]}
          alt={product.name}
          className="object-cover w-full h-full transform transition duration-300 hover:scale-105"
        />
      </div>

      {/* Text left-aligned */}
      <div className="text-left p-1">
        <p className="text-red-500 text-lg lg:text-xl font-medium">{product.name}</p>
        <p className="text-gray-900 text-md" style={{ fontWeight: 400 }}>{product.code}</p>
      </div>
    </div>
  );
}
