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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-15">
              {navLinks.map(link => (
                <Link
                style={{fontWeight:'300'}}
                  key={link.name}
                  href={link.href}
                  className="text-xl text-[#E3001B] hover:text-gray-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

           <div className="hidden lg:flex gap-3 text-[#E3001B] hover:bg-gray-100 transition-colors hover:scale-105 transition-transform duration-300">
              <FaFacebookSquare size={26}/>
              <FaSquareXTwitter  size={26}/>
              <IoLogoWhatsapp size={26}/>
              <RiInstagramFill size={26}/>
              <FaLinkedin size={26}/>
            </div>


            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl text-gray-700"
            >
              {open ? <RxCross2 /> : <HiMiniBars3  />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
      {/* Mobile Menu */}
{open && (
  <div className="lg:hidden bg-white border-t">
    <div className="flex flex-col p-4 gap-4">
      {navLinks.map(link => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className="text-sm font-medium text-gray-700 hover:text-[#E3001B]"
        >
          {link.name}
        </Link>
      ))}

      {/* Mobile Social Icons */}
      <div className="flex justify-center gap-4 pt-4 border-t text-[#E3001B] ">
        <FaFacebookSquare size={26} />
        <FaSquareXTwitter size={26} />
        <IoLogoWhatsapp size={26} />
        <RiInstagramFill size={26} />
        <FaLinkedin size={26} />
      </div>
    </div>
  </div>
)}

      </header>
    </>
  )
}
