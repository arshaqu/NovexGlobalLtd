import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";

import AboutImg from "../../../public/Assets/AboutImg.png";
import Image from "next/image";
import OurStory from "../../../public/Assets/Ourstory.png";
import AboutSec from "../../../public/Assets/aboutSection.png";
import Switch from '../../../public/Assets/SwitchesAbt.png'
import Pvc from '../../../public/Assets/Pvc.png'
import Insect from '../../../public/Assets/InsectK1.png'
import Spot from '../../../public/Assets/Spot.png'



import Extension from '../../../public/Assets/ExtensionAbt.png'


import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import { PiCertificateThin } from "react-icons/pi";
import { MdBusinessCenter } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdChatboxes } from "react-icons/io";
import { GiBinoculars } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import Link from "next/link";


function page() {
  const approaches = [
    {
      icon: GiOnTarget ,
      title: "Trade Focused Distribution",
      description:
        "Trade-focused distribution tailored to professional customers",
      color: "from-red-50 to-red-100",
    },
    {
      icon: FaHandshake,
      title: "Long-term Partnership",
      description: "Long-term partnerships with trusted manufacturing partners",
      color: "from-red-50 to-red-100",
    },
    {
      icon: PiCertificateThin ,
      title: "Rigorous Quality",
      description: "Rigorous quality assurance and compliance processes",
      color: "from-red-50 to-red-100",
    },
    {
      icon: BsGraphUp,
      title: "Scalable Operations",
      description: "Scalable operations designed for reliability and growth",
      color: "from-red-50 to-red-100",
    },
  ];

  return (
    <div className="bg-white mb-2">
      <Header />

      {/* Top Red Banner */}
      <section className="w-full bg-[#E3001B] py-8 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className=" lg:text-5xl text-3xl text-white/100 p-20">
            Home <span style={{fontWeight:'300'}} className="mx-1">{">"}</span>
            <span className="text-white font-bold"> ABOUT US</span>
          </p>
        </div>
      </section>

      {/* Blue Divider Line */}
      <div className="w-full h-[2px] bg-[#00AEEF]" />

      {/* Content Section */}
      <section className="py-16 border-b-2 border-gray-200 ">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            About Novex Global Ltd
          </h2>
 
          <p style={{fontWeight:300}} className="text-md lg:text-2xl text-gray-500 leading-relaxed mb-1">
            Novex Global Ltd is a growing UK product company, proudly
            introducing the Novex brand to the UK market with a focus on
            quality, innovation, and customer-first solutions.
          </p>
        </div>
      </section>

      <section className="w-full bg-gray-100">
        {/* Top WHO WE ARE Bar */}
        <div style={{fontWeight:400}} className="w-full border-b border-gray-200 py-4">
          <p className="text-center text-2xl tracking-widest text-gray-800">
            WHO WE ARE
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          {/* Left Image */}
          {/* Left Image */}
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-auto min-h-[500px]">
            <Image
              src={AboutImg}
              alt="Who we are"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between px-6 sm:px-12 lg:px-16 py-12 lg:py-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-gray-800 leading-snug mb-6">
                A UK - Based Product Company <br />
                With Global Reach
              </h2>

              <div className="w-20 h-[1px] bg-gray-300 mb-6" />

              <div style={{fontWeight:300}} className="space-y-5 text-sm text-gray-500  text-md lg:text-lg leading-relaxed max-w-2xl lg:p-8">
                <p>
                  Novex Global Ltd is a UK-based product-focused company
                  specialising in the development and supply of high-quality
                  electrical and utility solutions. We are not resellers or
                  traders — we focus on building, refining, and delivering
                  products that meet real-world performance, safety, and
                  durability expectations.
                </p>

                <p>
                  At Novex Global Ltd, quality is not a feature — it is a
                  standard. From material selection to final output, we
                  prioritise consistency, compliance, and functional design. As
                  we continue to grow, we remain committed to expanding our
                  range responsibly, introducing new products that align with
                  market needs and uphold our brand values.
                </p>

                <p>
                  Driven by a long-term vision, Novex Global Ltd aims to build
                  trusted partnerships, deliver dependable solutions, and grow
                  as a globally recognised brand rooted in the UK.
                </p>
              </div>
              <div style={{fontWeight:300}} className=" bg-[#E3001B] mt-2 mb-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 text-center text-white text-md lg:text-lg tracking-widest">
                  <div className="py-5 border-r border-white/20">
                    ◯ &nbsp; QUALITY
                  </div>
                  <div className="py-5 border-r border-white/20">
                    ◯ &nbsp; RELIABILITY
                  </div>
                  <div className="py-5 border-r border-white/20">
                    ◯ &nbsp; INNOVATION
                  </div>
                  <div className="py-5">◯ &nbsp; INTEGRITY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Red Bar */}
      </section>

      <section className="w-full bg-white py-16 sm:py-20">
        <div style={{fontWeight:300}} className="mx-auto px-4 sm:px-6 text-md lg:text-lg lg:px-8">
          {/* Heading */}
          <h2 className="text-center text-5xl sm:text-4xl font-bold text-gray-800 mb-12">
            Why Choose Us
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-xl p-8 text-start hover:border-[#E3001B] hover:bg-red-#E3001B hover:shadow-xl hover:shadow-[#000000]/10 hover:-translate-y-1  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="flex justify-start mb-5">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white">
                  <PiCertificateFill style={{ color: "red" }} size={30} />
                </div>
              </div>
              <h3 className="text-sm lg:text-2xl font-medium text-gray-800 mb-3">
                Premium Product Quality
              </h3>
              <p
                className="text-md lg:text-lg text-gray-600 leading-relaxed"
              >
                Every Novex product is crafted using high-grade materials and
                tested to meet strict quality standards.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-xl p-8 text-start hover:shadow-xl hover:shadow-[#000000]/10 hover:-translate-y-1  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="flex justify-start mb-5">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white">
                  <RiCustomerService2Fill style={{ color: "red" }} size={30} />
                </div>
              </div>
              <h3 className="text-sm lg:text-2xl font-medium text-gray-800 mb-3">
                24×7 Customer Support
              </h3>
              <p
                className="text-md lg:text-lg text-gray-600 leading-relaxed"
              >
                Our professional support team is available around the clock to
                provide quick and reliable assistance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-xl p-8 text-start hover:shadow-xl hover:shadow-[#000000]/10 hover:-translate-y-1  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="flex justify-start mb-5">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white">
                  <FaShippingFast style={{ color: "red" }} size={30} />
                </div>
              </div>
              <h3 className="text-sm lg:text-2xl font-medium text-gray-800 mb-3">
                Fast & Secure Delivery
              </h3>
              <p
                className="text-md lg:text-lg text-gray-600 leading-relaxed"
              >
                We ensure timely dispatch and safe delivery through trusted
                logistics partners across the UK.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 rounded-xl p-8 text-start hover:shadow-xl hover:shadow-[#000000]/10 hover:-translate-y-1  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="flex justify-start mb-5">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white">
                  <HiLightBulb style={{ color: "red" }} size={30} />
                </div>
              </div>
              <h3 className="text-sm lg:text-2xl font-medium text-gray-800 mb-3">
                Innovation-Driven Solutions
              </h3>
              <p
                className="text-md lg:text-lg text-gray-600 leading-relaxed"
              >
                We continuously innovate to deliver modern solutions that meet
                evolving industry needs.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-100 rounded-xl p-8 text-start hover:shadow-xl hover:shadow-[#000000]/10 hover:-translate-y-1  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="flex justify-start mb-5">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white">
                  <AiFillDollarCircle style={{ color: "red" }} size={30} />
                </div>
              </div>
              <h3 className="text-sm lg:text-2xl font-medium text-gray-800 mb-3">
                Competitive Pricing
              </h3>
              <p
                className="text-md lg:text-lg text-gray-600 leading-relaxed"
              >
                We offer high-value products at fair and affordable prices
                without compromising on quality.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-100 rounded-xl p-8 text-start hover:shadow-xl hover:shadow-[#000000]/10 hover:-translate-y-1  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="flex justify-start mb-5">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white">
                  <IoMdChatboxes style={{ color: "red" }} size={30} />
                </div>
              </div>
              <h3 className="text-sm lg:text-2xl font-medium text-gray-800 mb-3">
                Customer-First Approach
              </h3>
              <p
                className="text-md lg:text-lg text-gray-600 leading-relaxed"
              >
                We prioritise customer satisfaction by continuously improving
                based on feedback and needs.
              </p>
            </div>
          </div>
        </div>
      </section>


        <section className=" bg-white">
      <div className="max-w-full mx-auto bg-[#E3001B] p-10 md:p-14 text-center text-white shadow-lg">

        <h2 className="text-sm md:text-4xl font-bold mb-4">
          Need Help or More Information?
        </h2>

        <p style={{fontWeight:'300'}} className="max-w-5xl mx-auto lg:text-2xl text-lg mb-8">
          Visit our Frequently Asked Questions page for details about
          certifications, warranties, trade accounts, supply services,
          and product compliance.
        </p>

        <Link
        style={{fontWeight:'300'}}
          href="/f&qs"
          className="inline-block bg-white text-[#E3001B] px-8 py-3 text-md lg:text-lg hover:opacity-90 transition"
        >
          Go to FAQ Page
        </Link>

      </div>
    </section>



      <section className="w-full bg-gray-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Outer Border Box */}
          <div className="border-2 border-red-500 rounded-xl p-6 sm:p-10 lg:p-14 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ">
              {/* Left Content */}
              <div className="">
                <div className="mb-12 sm:mb-16">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E3001B]  mb-4">
                    Our Story
                  </h2>
                  <div className="w-24 h-1.5 bg-[#E3001B] rounded-full"></div>
                </div>

                <div
                  style={{ fontWeight: "300" }}
                  className="space-y-5 text-md lg:text-lg sm:text-base text-gray-500 leading-relaxed max-w-2xl"
                >
                  <p>
                    Novex Global specialist in the wholesale supply of
                    electrical wiring accessories and complementary electrical
                    products for professional use.
                  </p>

                  <p>
                    Our portfolio includes switches, sockets, extension sockets,
                    lighting accessories, PVC ducting, Electronic Fly Killers
                    (EFKs), and an expanding range of modern electrical
                    solutions.
                  </p>

                  <p>
                    With a well-established reputation across the Middle East
                    and Africa, we bring international expertise and disciplined
                    supply-chain management to the UK market.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full h-[240px] sm:h-[300px] lg:h-[360px] relative rounded-lg overflow-hidden">
                <Image
                  src={OurStory}
                  alt="Novex Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Top Two Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Our Vision */}
            <div className="border-2 border-red-500 rounded-xl p-8 sm:p-10 bg-white">
              <div
                style={{ color: "#E3001B" }}
                className="flex items-center gap-4 mb-6 "
              >
                <div className="w-24 h-1.5 bg-[#E3001B] rounded-full"></div>
                <GiBinoculars className="w-12 h-12" />
                <h3 className="text-4xl font-semibold text-red-600">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-500 text-sm lg:text-2xl text-base leading-relaxed font-medium p-5">
                Global leadership through innovation.
              </p>
                <p style={{fontWeight:'300'}} className="text-gray-500 text-base leading-relaxed  text-md lg:text-lg p-4">
                Novex Global leads the electrical wiring accessories industry by delivering innovative, reliable solutions.
Backed by over 50 years of global expertise, we ensure quality, compliance, and long-term reliability.
Our commitment to ethical practices and modern manufacturing sets new standards for professional trade.
              </p>
            </div>
            {/* Our Mission */}
            <div className="border-2 border-red-500 rounded-xl p-8 sm:p-10 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-1.5 bg-[#E3001B] rounded-full"></div>
                <TbTargetArrow
                  style={{ color: "#E3001B" }}
                  alt="Mission"
                  className="w-12 h-12 "
                />
                <h3 className="text-4xl font-semibold text-red-600">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-500 text-base leading-relaxed font-medium text-sm lg:text-2xl p-5">
               We create smart buildings for a smarter world.
              </p>
               <p style={{fontWeight:'300'}} className="text-gray-500 text-base leading-relaxed text-md lg:text-lg p-4">
               At Novex Global, our mission is to empower the built environment with intelligent, safe, and efficient electrical solutions. By combining innovative products, trusted quality, and compliance with industry standards, we enable smarter, sustainable buildings that meet the evolving needs of professionals and end-users alike.
              </p>
            </div>
          </div>
          {/* Bottom Commitment Box */}
          <div className="border-2 border-red-500  rounded-xl bg-white overflow-hidden">
            <div className="flex flex-col sm:flex-row p-1">
              {/* Red Side Bar */}
              <div className="w-full sm:w-14 bg-red-600 ml-10 " />

              {/* Content */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <MdBusinessCenter
                    style={{ color: "#E3001B" }}
                    alt="Mission"
                    className="w-12 h-12 "
                  />
                  <h3 className="text-4xl font-semibold text-red-600">
                    Our Commitment
                  </h3>
                  <div className="w-24 h-1.5 bg-[#E3001B] rounded-full"></div>
                </div>
                <p style={{fontWeight:'300'}} className="text-gray-500 text-base text-md lg:text-lg leading-relaxed max-w-4xl ">
                  Novex Global is committed to building long-term partnerships
                  through dependable products, ethical business practices, and
                  consistent service. As we grow within the UK market, our focus
                  remains clear—raising standards, not cutting corners, and
                  setting a new benchmark in electrical wiring accessories and
                  related electrical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100">
        {/* Top Red Value Bar */}
        <div className="w-full bg-[#E3001B] mb-0.5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-white tracking-widest text-center">
            <div className="flex items-center justify-center py-4 text-sm lg:text-2xl sm:text-base font-medium border-b border-r sm:border-b-0 border-white/30">
              ✦&nbsp; EXCELLENCE
            </div>

            <div className="flex items-center justify-center py-4 text-sm lg:text-2xl sm:text-base font-medium border-b sm:border-b-0 sm:border-r border-white/30">
              ✦&nbsp; DURABILITY
            </div>

            <div className="flex items-center justify-center py-4 text-sm lg:text-2xl sm:text-base font-medium border-r border-white/30">
              ✦&nbsp; SAFETY
            </div>

            <div className="flex items-center justify-center py-4 text-sm lg:text-2xl sm:text-base font-medium">
              ✦&nbsp; PERFORMANCE
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px]">
            <Image
              src={AboutSec}
              alt="Global Reach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Red Content */}
          <div className="bg-[#E3001B] flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-0">
            <div className="max-w-2xl lg:ml-10 text-white text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight mb-6">
                Proven Experience <br /> Global Reach
              </h2>

              <p className="text-sm lg:text-2xl sm:text-base leading-relaxed text-white/90">
                Our leadership team brings more than five decades of combined
                experience in the manufacturing and wholesale of electrical
                wiring accessories and related electrical products worldwide.
                This experience enables us to understand market demands, quality
                expectations, and the importance of consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <div className="w-24 h-1.5 bg-[#E3001B] rounded-full"></div>
          </div>

          {/* Approach Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 ">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-[#E3001B]/20 p-8 sm:p-10 transition-all duration-300 hover:border-[#E3001B] hover:shadow-xl hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#E3001B] to-[#C4001A] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <approach.icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm lg:text-2xl font-bold text-[#E3001B] mb-4 transition-colors duration-300 group-hover:text-[#C4001A]">
                  {approach.title}
                </h3>

                {/* Description */}
                <p style={{fontWeight:'300'}} className="text-gray-700 text-base text-sm lg:text-2xl leading-relaxed">
                  {approach.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E3001B]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

 <section className="mt-20 px-4 md:px-8 lg:px-16 mb-12">
  <div className="text-center mb-12">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
      Our Precious Categories
    </h2>
    <div className="flex justify-center mb-4">
      <div className="w-44 h-1.5 bg-[#E3001B] rounded-full"></div>
    </div>
    <p style={{fontWeight:'300'}} className="text-sm lg:text-2xl text-gray-500 max-w-6xl mx-auto">
      High-quality electrical accessories designed for durability, safety, and modern installations.
      Reliable solutions for residential, commercial, and industrial use.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

       <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <Link  href="/liverpool">
  <Image
    src={Switch}
    alt="Spot Lights"
    className="w-full h-74 object-cover transition-transform duration-300 group-hover:scale-105"
    />
  {/* Shadow Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>

  {/* Text */}
  <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 text-white font-bold text-3xl text-center px-3 py-1 rounded">
     SWITCHES & SOCKETS
  </div>
    </Link>
</div>



   <div className="relative overflow-hidden rounded-lg shadow-lg group">
    <Link href="/Item_SpotLight">
  <Image
    src={Spot}
    alt="Spot Lights"
    className="w-full h-74 object-cover transition-transform duration-300 group-hover:scale-105"
    />

  {/* Shadow Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>

  {/* Text */}
  <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 text-white font-bold text-3xl text-center px-3 py-1 rounded">
    SPOT LIGHTS
  </div>
    </Link>
</div>


 <div className="relative overflow-hidden rounded-lg shadow-lg group">
  <Link href="/Item_Extension">
  <Image
    src={Extension}
    alt="Spot Lights"
    className="w-full h-74 object-cover transition-transform duration-300 group-hover:scale-105"
  />
  {/* Shadow Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>
  {/* Text */}
  <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 text-white font-bold text-3xl text-center px-3 py-1 rounded">
   EXTENSION SOCKETS
  </div>
  </Link>
</div>


 <div className="relative overflow-hidden rounded-lg shadow-lg group">
  <Link href="/Item_InsectKiller">
  <Image
    src={Insect}
    alt="Spot Lights"
    className="w-full h-74 object-cover transition-transform duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>
  <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 text-white font-bold text-3xl text-center px-3 py-1 rounded">
   INSECTS KILLER
  </div>
  </Link>
</div>


    <div className="relative overflow-hidden rounded-lg shadow-lg group">
  <Link href="/Item_Pvc">
  <Image
    src={Pvc}
    alt="PVC Trunking"
    className="w-full h-74 object-cover transition-transform duration-300 group-hover:scale-105"
    />
  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>
  <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 text-white font-bold text-3xl text-center px-3 py-1 rounded">
   PVC TRUNKING
  </div>
  </Link>
</div>
 

  </div>
</section>


      <Footer />
    </div>
  );
}

export default page;
