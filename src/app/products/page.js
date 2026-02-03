import React from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

// Images
import LiverpoolImg from "../../Assets/Liverpool_p.png";
import OxfordImg from "../../Assets/Oxford_p.png";
import RockImg from "../../Assets/Rock_p.png";
import SocketExt1 from "../../Assets/SocketExt1.png";
import SocketExt2 from "../../Assets/Socket2.png";
import SocketExt3 from "../../Assets/Socket3.png";
import Extension3 from "../../Assets/Extension3.jpg";

import Spotlight1 from "../../Assets/SpotLight1.png";
import Spotlight2 from "../../Assets/SpotLight2.jpeg";
import Spotlight3 from "../../Assets/SpotLight3.png";

import Insectkiller1 from "../../Assets/Insectkiller1.png";
import Insectkiller2 from "../../Assets/Insectkiller2.png";
import Insectkiller3 from "../../Assets/InsectKiller3.png";

import WholeSale from "../../Assets/WholeSale.png";

import Pvc1 from '../../Assets/Pvc01.png'
import Pvc2 from '../../Assets/Pvc02.png'
import Pvc3 from '../../Assets/Pvc03.png'





function ProductsSection() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Content */}
      <section className="max-w-full mx-auto px-6 py-20">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <h2 className="text-4xl tracking-widest font-semibold uppercase">
              OUR PRODUCTS
            </h2>
          </div>

          <h3
            style={{ fontWeight: "400" }}
            className="text-2xl text-gray-800 mb-6"
          >
            Electrical Wiring Accessories
          </h3>

          <p
            style={{ fontWeight: "400" }}
            className="max-w-7xl mx-auto lg:text-lg text-lg text-gray-500 leading-relaxed"
          >
            Our electrical wiring accessories are designed for professional use,
            offering reliable performance, consistent quality, and full
            compliance with UK standards. The range includes switches, sockets,
            extension sockets, and related accessories suitable for domestic,
            commercial, and light industrial applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 p-4">
          {/* Liverpool */}
          <div style={{ fontWeight: "400" }} className="text-left ">
            <div className="mb-6">
              <Image
                src={LiverpoolImg}
                alt="Liverpool Series"
                className="w-full h-auto object-cover"
              />
            </div>
            <h4 className="text-3xl tracking-widest font-medium mb-2">
              LIVERPOOL SERIES
            </h4>
            <p className="text-md text-gray-500 mb-3">
              Our electrical wiring accessories are designed for professional
              use, offering reliable performance, consistent quality
            </p>
            <span className="text-xs text-gray-800 tracking-wide cursor-pointer hover:text-black transition">
              DISCOVER MORE
            </span>
          </div>

          {/* Oxford */}
          <div style={{ fontWeight: "400" }} className="text-left">
            <div className="mb-6">
              <Image
                src={OxfordImg}
                alt="Oxford Series"
                className="w-full h-auto object-cover"
              />
            </div>
            <h4 className="text-3xl tracking-widest font-medium mb-2">
              OXFORD SERIES
            </h4>
            <p className="text-md text-gray-500  mb-3">
              Our electrical wiring accessories are designed for professional
              use, offering reliable performance, consistent quality
            </p>
            <span className="text-xs text-gray-400 tracking-wide cursor-pointer hover:text-black transition">
              DISCOVER MORE
            </span>
          </div>

          {/* Rock */}
          <div style={{ fontWeight: "400" }} className="text-left">
            <div className="mb-6">
              <Image
                src={RockImg}
                alt="Rock Series"
                className="w-full h-auto object-cover"
              />
            </div>
            <h4 className="text-3xl tracking-widest font-medium mb-2">
              ROCK SERIES
            </h4>
            <p className="text-md text-gray-500  mb-3">
              Our electrical wiring accessories are designed for professional
              use, offering reliable performance, consistent quality
            </p>
            <span className="text-xs text-gray-800 tracking-wide cursor-pointer hover:text-black transition">
              DISCOVER MORE
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-16 p-10 ">
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">
            Extension Sockets
          </h2>
          <p
            style={{ fontWeight: "400" }}
            className="text-gray-700 leading-relaxed"
          >
            Our electrical wiring accessories are designed for professional use,
            offering reliable performance, consistent quality, and full
            compliance with UK standards. The range includes switches, sockets,
            extension sockets, and related accessories suitable for domestic,
            commercial, and light industrial applications.
          </p>
        </div>
        <div className=" mx-auto px-4 lg:px-6">
          {/* Header */}

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
            {/* Left Image */}
            <div className="">
              <Image
                src={SocketExt1}
                alt="Extension Socket"
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center mt-3">
              <p
                style={{ fontWeight: "400" }}
                className="text-gray-800 mb-8 leading-relaxed max-w-lg text-center"
              >
                All products are CE and UKCA certified where applicable and
                benchmarked against established UK electrical accessory
                offerings.
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-sm font-medium shadow-md transition">
                Browse All Items
              </button>
            </div>
          </div>

          {/* Bottom Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {/* Image 1 */}
            <div>
              <Image
                src={SocketExt2}
                alt="Extension usage"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Image 2 */}
            <div>
              <Image
                src={Extension3}
                alt="Extension workspace"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Image 3 (Hidden on Mobile) */}
            <div className="hidden md:block lg:block">
              <Image
                src={SocketExt3}
                alt="Extension desk"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className=" bg-[#E3001B] mb-2 p-8 text-white text-center lg:text-xl text-lg  ">
        <p>
          NOVEX Global Ltd is a wholesale-focused company creating a scalable
          digital framework to support trade operations, marketing, and future
          expansion.
        </p>
      </div>

      <section className="w-full bg-white px-4 sm:px-6 lg:px-20 py-12 lg:py-20">
        {/* Top title */}
        <div className="mb-12 text-center lg:text-left">
          <h3 className="text-3xl font-medium mb-4">Spot Lights</h3>
          <p className="mx-auto text-center lg:text-xl lg:mx-0 text-gray-500 leading-relaxed">
            Novex Global supplies a practical range of lighting accessories
            designed to support safe, efficient installation and long-term
            reliability. Our products are sourced from trusted manufacturing
            partners and supplied to meet the expectations of professional
            installers.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left big image */}
          <div className="w-full">
            <Image
              src={Spotlight1}
              alt="Spot Light"
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Novex Spotlights <br /> Brighten Every Corner
            </h2>

            <p className="text-gray-600 max-w-xl mb-6">
              Novex Global supplies a practical range of lighting accessories
              designed to support safe, efficient installation and long-term
              reliability.
            </p>

            {/* Button */}
            <button className="bg-[#E3001B] text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-red-700 transition mb-10">
              Browse All Items
            </button>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className=" p-2">
                <Image
                  src={Spotlight2}
                  alt="Lighting Effect"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div style={{ border: "2px solid #E3001B" }} className=" p-2">
                <Image
                  src={Spotlight3}
                  alt="Light Temperature"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="w-full bg-gray-100">
        <div className="mx-auto lg:py-20 p-8">
             <div className=" lg:px-16">
               <h2 className="text-3xl lg:text-4xl font-thin text-gray-800 mb-6">
                Insects Killer
              </h2>
              <p style={{fontWeight:'400'}} className="text-gray-400 leading-relaxed ">
                Novex is the most durable brand from the United Kingdom when it
                comes to electronic flying insect killers. This device uses
                ultraviolet light to attract light-sensitive insects into an
                electronically charged metal net, which destroys them quickly
                and hygienically. The dead insects are collected in a tray
                located at the base of the unit, making cleaning easy. This
                product is ideal for use at home, in food preparation areas,
                shops, factories, farms and more. It operates without the need
                for insecticides or chemicals, making it a safe and hassle-free
                solution. The device is highly efficient and consumes very
                little power. It is easy to install and clean, and the bulbs can
                be replaced with ease. The sturdy aluminium alloy casing comes
                with a chain for hanging, allowing you to use the device
                freestanding or hanging.
              </p>
             </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">     
            <div className="lg:px-16">
              {/* Bullet Points */}
            <div>
                <ul style={{fontWeight:'400' , marginLeft:'25px',marginTop:'20px'}} className="text-gray-400 text-medium lg:text-base  ">
                <li>• Series: Slim Series</li>
                <li>• Power Supply: 230V ~ 50/60Hz</li>
                <li>• Attracts & destroys flies, mosquitoes, moths, midges</li>
                <li>• Using a High Voltage net destroyed flies quickly and hygienically</li>
                <li>• Fire retardant & UV-A rated PC-ABS</li>
                <li>• Long life span: 30,000 hours</li>
                <li>• Best choice to protect from insect bites</li>
                <li>• Novex Most Durable Brand from United Kingdom</li>
              </ul>
            </div>
              {/* Power Options */}
           <div className="grid grid-cols-2 gap-4 mt-10 p-2">
          {["2 x 8W", "2 x 10W", "2 x 15W", "2 x 20W"].map((item) => (
            <div
              // style={{color:'green'}}
              key={item}
              className="border-2 border-red-500 text-red-600 text-center text-2xl py-2 font-bold hover:bg-white " >
              {item}
            </div>
          ))}
        </div>
            </div>
          {/* Bottom Spotlight Images */}
            <div className="flex justify-center lg:justify-end mt-2 lg:mt-0 md:mt-0 ml-10 mb-5">
              <Image
                src={Insectkiller3}
                alt="Insect Killer"
                className="max-w-xs lg:max-w-sm object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
            <Image
              src={Insectkiller1}
              alt="Spotlight 1"
              className="w-full h-full object-cover"
            />
            <Image
              src={Insectkiller2}
              alt="Spotlight 2"
              className="w-full h-full object-cover"
            />
            <Image
              src={Insectkiller1}
              alt="Spotlight 3"
              className="w-full h-full object-cover hidden md:block lg:block "
            />
          </div>
          {/* Button */}
         <div className="flex justify-center mb-10 mt-10">
        <button className="bg-[#E3001B] text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-red-700 transition">
          Browse All Items
        </button>
      </div>  
        </div>
      </section>

<section className="w-full bg-white">
  <div className="mx-auto px-6 py-12 lg:px-20 lg:py-20">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* RIGHT SIDE CONTENT – FIRST ON MOBILE */}
      <div className="order-1 lg:order-2 flex flex-col justify-start text-left h-full mt-4 lg:mt-0">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-8">
          PVC Trunking
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
          Our PVC ducting and cable management solutions provide clean,
          durable, and compliant installations across residential and
          commercial environments. Manufactured using quality materials, 
          the range supports both surface and concealed applications.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
          PVC trunking are used in cable management systems to hide or
          protect the cable across the room, a floor or the wall. Normal 
          (non adhesive) and sticker type.
        </p>

        {/* POINTS */}
        <div className="text-gray-700 space-y-4 text-sm sm:text-base mb-10">
          <p>• Constructed from durable PVC, offering excellent protection against impact and wear.</p>
          <p>• Perfect for managing cables in home offices, entertainment areas, or any room where multiple cables need to be organized.</p>
          <p>• Ideal for use in offices, shops, schools, and other commercial environments.</p>
          <p>• Suitable for light industrial areas, helping to keep workspaces tidy and safe.</p>
          <p>• Measure and cut to size using a PVC cutter or hacksaw.</p>
        </div>

        {/* BUTTON */}
        <div>
          <button className="bg-[#E3001B] hover:bg-red-700 transition-colors duration-200 text-white px-8 py-3 text-sm sm:text-base font-medium shadow-md rounded mb-5">
            Browse All Items
          </button>
        </div>

      </div>

      {/* LEFT SIDE IMAGES – SECOND ON MOBILE */}
      <div className="order-2 lg:order-1 grid grid-cols-1 gap-6 ">
        {[Pvc1, Pvc2, Pvc3].map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg group shadow-lg mx-auto max-w-md sm:max-w-lg md:max-w-xl"
          >
            <Image
              src={img}
              alt={`PVC Trunking ${idx + 1}`}
              style={{height:'200px'}}
              className="w-full h-64 sm:h-72  object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


       





      <Footer />
    </div>
  );
}

export default ProductsSection;
