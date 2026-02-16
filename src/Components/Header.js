"use client"

import '../app/globals.css'

import Image from "next/image"
import Link from "next/link"

import LovexLogo from '../../public/Assets/NovexLogo.png';

import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import { FaFacebookSquare ,FaMapMarkerAlt , FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiCustomerServiceLine ,RiInstagramFill } from "react-icons/ri";
import { IoIosMail , IoLogoWhatsapp } from "react-icons/io";





export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "FAQs", href: "/f&qs" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT US", href: "/contact" }
  ]

  return (
    <>
      {/* Top Red Bar */}
      <div style={{backgroundColor:"#E3001B"}} className="text-white text-sm">
      <div className="max-w-full mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-5 lg:gap-12">
  {/* Left section */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10 lg:gap-32">
   
   <Link href='/'>
   <p style={{fontWeight:'400'}}  className='flex'> <RiCustomerServiceLine  size={15} className='mr-2' />+44 (0) 7516962348</p>
   </Link> 
    <Link href='/'>
   <p style={{fontWeight:'400'}}  className='flex'> <IoIosMail   size={15} className='mr-2' />novexglobaltd@gmail.com</p>
   </Link> 
    
  </div>

  {/* Right section */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10 lg:gap-32 mt-2 sm:mt-0">
     <Link href='/'>
   <p style={{fontWeight:'400'}} className='flex'> <FaMapMarkerAlt   size={15} className='mr-2' />Location</p>
   </Link>
    <span style={{fontWeight:'400'}} >EN ▾</span>
  </div>
</div>

      </div>

      {/* Main Header */}
      <header className="">
        <div className="max-w-full mx-auto px-4 shadow-lg">
          <div className="flex items-center justify-between h-20 ">

            {/* Logo */}
            <Link href="/">
              <Image
                src={LovexLogo}
                alt="Novex Logo"
                width={130}
                height={40}
                className="object-contain p-4"
                priority
              />
            </Link>

            {/* Desktop Nav - now hidden until xl breakpoint (1280px) */}
            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                style={{fontWeight:'300'}}
                  key={link.name}
                  href={link.href}
                  className="text-base text-[#E3001B] hover:text-gray-600 transition whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

           <div className="hidden xl:flex gap-3 text-[#E3001B]  ">
                <div className="flex gap-3 flex-wrap 
                            justify-center lg:justify-end">
            <a 
                href="https://www.facebook.com/" 
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="Facebook"
            >
                <FaFacebookSquare size={26} />
            </a>
            <a 
                href="https://www.instagram.com/" 
                className=" hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300 "
                aria-label="Instagram"
            >
                <RiInstagramFill size={26} />
            </a>
            <a 
                href="https://wa.me/447516962348"
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="WhatsApp"
            >
                <IoLogoWhatsapp size={26} />
            </a>
            <a 
                href="https://www.linkedin.com/" 
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="LinkedIn"
            >
                <FaLinkedin size={26} />
            </a>
            <a 
                href="https://twitter.com/" 
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="X (Twitter)"
            >
                <FaSquareXTwitter size={26} />
            </a>
            </div>

            </div>


            {/* Mobile Button - now shows until xl breakpoint */}
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden text-2xl text-gray-700"
            >
              {open ? <RxCross2 /> : <HiMiniBars3  />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
      {/* Mobile Menu */}
{open && (
  <div className="xl:hidden bg-white border-t">
    <div className="flex flex-col p-4 gap-4">
      {navLinks.map(link => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className="text-sm font-medium text-[#E3001B] hover:text-gray-600 transition"
        >
          {link.name}
        </Link>
      ))}

      {/* Mobile Social Icons */}
      <div className="flex justify-center gap-4 pt-4 border-t text-[#E3001B] ">
        <div className="flex gap-3 flex-wrap 
                            justify-center lg:justify-end">
            <a 
                href="https://www.facebook.com/" 
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="Facebook"
            >
                <FaFacebookSquare size={23} />
            </a>
            <a 
                href="https://www.instagram.com/" 
                className=" hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300 "
                aria-label="Instagram"
            >
                <RiInstagramFill size={23} />
            </a>
            <a 
                href="https://wa.me/447516962348"
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="WhatsApp"
            >
                <IoLogoWhatsapp size={23} />
            </a>
            <a 
                href="https://www.linkedin.com/" 
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="LinkedIn"
            >
                <FaLinkedin size={23} />
            </a>
            <a 
                href="https://twitter.com/" 
                className="hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300"
                aria-label="X (Twitter)"
            >
                <FaSquareXTwitter size={23} />
            </a>
            </div>
      </div>
    </div>
  </div>
)}

      </header>
    </>
  )
}