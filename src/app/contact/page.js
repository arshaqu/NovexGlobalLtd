'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/Components/Header';

import { FaFacebookSquare ,FaMapMarkerAlt , FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiCustomerServiceLine ,RiInstagramFill } from "react-icons/ri";
import { IoIosMail , IoLogoWhatsapp } from "react-icons/io";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Form submitted successfully!');
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full">
        <Header/>
      {/* Header with Breadcrumb */}
      <div className="w-full bg-[#E3001B] py-16">
        <div className="max-w-7xl mx-auto px-6">
         <div className="flex items-center justify-center gap-4 text-white text-3xl">
  <Link
    href="/"
    className="cursor-pointer hover:underline opacity-80 hover:opacity-100 transition"
  >
    Home
  </Link>

  <span className="opacity-60 text-2xl">&nbsp; › &nbsp;</span>

  <span className="font-semibold tracking-wide drop-shadow-[0_3px_8px_rgba(0,0,0,1.8)]">
    CONTACT&nbsp;US
  </span>
</div>

        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] bg-gray-200 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4449999999997!2d-0.1426!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwOCczMy40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location Map"
        />
      </div>

      {/* Store Location & Social Links Section */}
      <div style={{}} className="bg-white py-12  p-12">
        <div style={{border:'2px solid #red'}} className="max-w-8xl mx-auto px-6 shadow-lg p-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-start">
            
            {/* Store Location */}
            <div className='lg:ml-10'>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Store is located : -
              </h3>
              <div className="space-y-1  text-gray-400 text-md font-medium">
                <p>Novex Global Ltd., Office 03,</p>
                <p>Unit S0566,149 St Paul's Avenue, </p>
                <p>Slough, SL2 5EN,</p>
                <p>United Kingdom,</p>
              </div>
            </div>

            {/* Social Media Links */}
    <div className="w-full">
  <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center md:text-left">
    Social Media Links
  </h3>
  {/* Mobile: Flex | Desktop: Grid */}
  <div className="flex justify-between items-start gap-4 md:grid md:grid-cols-5 md:gap-8">
    {/* Instagram */}
    <div className="flex flex-col items-center gap-2 flex-1">
      <span className="hidden md:block text-md font-medium text-gray-400">
        Instagram
      </span>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="Instagram"
      >
        <RiInstagramFill size={30} className="text-[#E3001B]" />
      </a>
    </div>

    {/* Facebook */}
    <div className="flex flex-col items-center gap-2 flex-1">
      <span className="hidden md:block text-md font-medium text-gray-400">
        Facebook
      </span>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="Facebook"
      >
        <FaFacebookSquare size={30} className="text-[#E3001B]" />
      </a>
    </div>
    {/* LinkedIn */}
    <div className="flex flex-col items-center gap-2 flex-1">
      <span className="hidden md:block text-md font-medium text-gray-400">
        LinkedIn
      </span>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={30} className="text-[#E3001B]" />
      </a>
    </div>
    {/* WhatsApp */}
    <div className="flex flex-col items-center gap-2 flex-1">
      <span className="hidden md:block text-md font-medium text-gray-400">
        WhatsApp
      </span>
      <a
        href="https://wa.me/447516982248"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <IoLogoWhatsapp size={30} className="text-[#E3001B]" />
      </a>
    </div>

    {/* X */}
    <div className="flex flex-col items-center gap-2 flex-1">
      <span className="hidden md:block text-md font-medium text-gray-400">
        X
      </span>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="X (Twitter)"
      >
        <FaSquareXTwitter size={30} className="text-[#E3001B]" />
      </a>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>




       <div className="flex justify-center gap-2 pt-4 border-t text-[#E3001B]">
            </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                GET IN TOUCH
              </h2>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                We&apos;d love to hear from you! Whether you have a feedback, or a business inquiry, feel free to reach out and connect with our team.
              </p>

              {/* Location */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-2">
                  <svg className="text-[#E3001B] mt-1 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location :</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Unit 30/60A, Office 3<br />
                      Sir off Paul&apos;s Road<br />
                      Slough, SL2 5EN<br />
                      Berkshire - United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-2">
                  <svg className="text-[#E3001B] mt-1 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email :</h3>
                    <p className="text-gray-600 text-sm">
                      sales@neevaglobal.uk<br />
                      info@neevaglobal.uk
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <svg className="text-[#E3001B] mt-1 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us for Product Inquiry:</h3>
                    <p className="text-gray-600 text-sm">
                      Tel : 01308 224460<br />
                      Mob : +44 (0) 7516982248
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-sm"
                    required
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-sm"
                  required
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Messages ..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-sm resize-none"
                  required
                />

                {/* Submit Button */}
              
                  <div className='flex justify-end p-8'>
                      <button type="submit" className='bg-[#E3001B] hover:bg-red-700 text-white px-24 py-3 rounded-md font-medium transition-colors duration-200 text-sm p-10'>Submit</button>
                  </div>


              </form>
            </div>
          </div>
        </div>
      </div>





      {/* Floating Contact Buttons */}
     
    </div>
  );
}