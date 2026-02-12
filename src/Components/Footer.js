"use client"

import '../app/globals.css'

import Image from "next/image"
import Link from "next/link"

import NovexLogo from '../../public/Assets/NovexLogo.png';

import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import { FaFacebookSquare, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiCustomerServiceLine, RiInstagramFill } from "react-icons/ri";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#E3001B" }} className="text-white">
      <div className="  px-4 sm:px-6 lg:px-12 py-12 ">
        
        {/* Top Section - Logo, Navigation, Social Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column - Logo and Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white inline-block ">
              <Image
                src={NovexLogo}
                alt="Novex Global"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed max-w-lg">
              Welcome To Novex Electrical Co Ltd., Where We Offer You Premium Electrical Products. The Product We Offer For Sale Is One That We Carefully Choose. For This Reason
            </p>
            
            {/* Newsletter Section */}
            <div className="mt-8 ">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-4 ">
                Be The First To Know About Out Latest Products And Services
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  style={{ backgroundColor: 'white' }}
                  type="email"
                  placeholder="Join Our Mailing List Today :"
                  className="flex-1 px-4 py-2.5 rounded text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-red-600 px-6 py-2.5 rounded font-medium hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
       <div className="lg:col-span-4 flex items-center justify-center min-h-full ">
  <div className="grid grid-cols-2 gap-25">
    {/* Column 1 */}
    <div className="space-y-4 t">
      <a  style={{fontWeight:'300'}}  href="/" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        HOME
      </a>
      <a style={{fontWeight:'300'}}  href="/services" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        SERVICES
      </a>
      <a style={{fontWeight:'300'}}  href="/products" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        PRODUCTS
      </a>
      <a style={{fontWeight:'300'}}  href="/f&qs" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        FAQ's
      </a>
      <a style={{fontWeight:'300'}}  href="/careers" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        CAREERS
      </a>
    </div>

    {/* Column 2 */}
    <div className="space-y-4">
      <a style={{fontWeight:'300'}}  href="/about" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        ABOUT US
      </a>
      <a style={{fontWeight:'300'}}  href="/privacy_policy" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        PRIVACY POLICY
      </a>
      <a style={{fontWeight:'300'}}  href="/terms_of_use" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        TERMS OF USE
      </a>
      <a style={{fontWeight:'300'}}  href="/contact" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        CONTACT
      </a>
      <a style={{fontWeight:'300'}}  href="/contact" className="block text-white hover:text-red-300 transition-colors text-sm sm:text-base font-medium">
        LOCATION
      </a>
    </div>
  </div>
</div>


          {/* Right Column - Social Icons and Contact Info */}
          <div className="lg:col-span-4 space-y-8 space-x-16 justify-center">
            {/* Social Icons */}
          {/* Social Icons */}
            <div className="flex gap-3 flex-wrap 
                            justify-center lg:justify-end">
            <a 
                href="#" 
                className="bg-white text-red-600 p-1 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="Facebook"
            >
                <FaFacebookSquare className="w-7 h-7" />
            </a>
            <a 
                href="#" 
                className="bg-white text-red-600 p-1 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300 "
                aria-label="Instagram"
            >
                <RiInstagramFill className="w-7 h-7" />
            </a>
            <a 
                href="#" 
                className="bg-white text-red-600 p-1 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="WhatsApp"
            >
                <IoLogoWhatsapp className="w-7 h-7" />
            </a>
            <a 
                href="#" 
                className="bg-white text-red-600 p-1 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="LinkedIn"
            >
                <FaLinkedin className="w-7 h-7" />
            </a>
            <a 
                href="#" 
                className="bg-white text-red-600 p-1 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="X (Twitter)"
            >
                <FaSquareXTwitter className="w-7 h-7" />
            </a>
            </div>


            {/* Contact Info */}
            <div className="space-y-6 lg:text-left space-y-8">
              {/* Reach Us Section */}
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-3 tracking-wide">REACH US :</h4>
                <div className="space-y-2 text-sm sm:text-base">
                  <a 
                    href="tel:+447516962348" 
                    className="flex items-center gap-2.5 hover:text-gray-200 transition-colors"
                  >
                    <FaPhone className="w-4 h-4 flex-shrink-0" />
                    <span>+44 (0) 7516962348</span>
                  </a>
                  <a 
                    href="mailto:Novexgloballtd@gmail.com" 
                    className="flex items-center gap-2.5 hover:text-gray-200 transition-colors"
                  >
                    <IoIosMail className="w-5 h-5 flex-shrink-0" />
                    <span>novexgloballtd@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Location Section */}
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-3 tracking-wide">WHERE TO FIND US :</h4>
                <div className="flex items-start gap-2.5 text-sm sm:text-base">
                  <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0" />
                  <address className="not-italic leading-relaxed">
                    Novex Global Ltd., Office 03,<br />
                    Unit S0566,149 St Paul's Avenue,<br />
                    Slough, SL2 5EN,<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Language Selector */}
        <div className="border-t border-red-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs sm:text-sm text-center md:text-left">
              © 2025 Novex Global Ltd. All Rights Reserved. | Innovation Driven By Quality
            </p>
            <div className="flex items-center gap-2">
              <span className="text-white text-sm">language</span>
              <select className="bg-red-700 text-white px-3 py-1 rounded text-sm border border-red-500 focus:outline-none focus:ring-2 focus:ring-white">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer