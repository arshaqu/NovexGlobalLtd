'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* MAIN PAGE CONTENT */}
      <div className="w-full relative"> {/* relative here is fine, button will still work */}
        <Header />

        {/* Breadcrumb */}
        <div className="w-full bg-[#E3001B] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4 text-white text-3xl">
              <Link style={{fontWeight:'300'}} href="/" className="cursor-pointer hover:underline opacity-100 hover:opacity-80 transition">Home</Link>
              <span style={{fontWeight:'800'}} className="opacity-70 text-3xl">&nbsp; › &nbsp;</span>
              <span className="font-semibold tracking-wide drop-shadow-[0_3px_8px_rgba(0,0,0,1.8)]">CONTACT&nbsp;US</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] bg-gray-200">
          <iframe
          style={{width:'100%' , height:'400px'}}
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.966013779114!2d-0.5842770880151177!3d51.51383951011547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766571bf291513%3A0x5118f767dbf25e73!2sNovex%20Global%20Ltd!5e0!3m2!1sen!2sae!4v1770206726151!5m2!1sen!2sae"     
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location Map"
          />
        </div>

        {/* Store Info + Social */}
        <div className="bg-white py-12 px-12">
          <div className="max-w-8xl mx-auto shadow-lg p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className='lg:ml-10'>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">We are located at:</h3>
                <div style={{fontWeight:'300'}} className="space-y-1  text-gray-600 text-lg lg:text-xl ">
                  <p>Novex Global Ltd., Office 03,</p>
                  <p>Unit S0566,149 St Paul's Avenue,</p>
                  <p>Slough, SL2 5EN,</p>
                  <p>United Kingdom,</p>
                </div>
              </div>

              {/* Social */}
              <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center md:text-left">
                  Social Media Links
                </h3>
                <div style={{fontWeight:'300'}} className="flex justify-between items-start gap-4 md:grid md:grid-cols-5 md:gap-8">
                  {/* Instagram */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <span className="hidden md:block text-lg text-gray-600">Instagram</span>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                      <RiInstagramFill size={30} className="text-[#E3001B]" />
                    </a>
                  </div>
                  {/* Facebook */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <span className="hidden md:block text-lg text-gray-600">Facebook</span>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                      <FaFacebookSquare size={30} className="text-[#E3001B]" />
                    </a>
                  </div>
                  {/* LinkedIn */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <span className="hidden md:block text-lg text-gray-600">LinkedIn</span>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                      <FaLinkedin size={30} className="text-[#E3001B]" />
                    </a>
                  </div>
                  {/* WhatsApp */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <span className="hidden md:block text-lg text-gray-600">WhatsApp</span>
                    <a href="https://wa.me/447516982248" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                      <IoLogoWhatsapp size={30} className="text-[#E3001B]" />
                    </a>
                  </div>
                  {/* X */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <span className="hidden md:block text-lg text-gray-600">X</span>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                      <FaSquareXTwitter size={30} className="text-[#E3001B]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col lg:flex-row lg:gap-8 px-4 lg:px-20 py-12">
          {/* Left Info */}
          <div className="lg:w-1/4 bg-white rounded-lg shadow-lg p-8 mb-8 lg:mb-0">
            <h2 style={{color:'#E3001B'}} className="text-2xl font-bold text-gray-800 mb-4">GET IN TOUCH</h2>
            <p className="text-gray-500 text-xl lg:text-xl max-w-md font-medium mb-8 leading-relaxed">
              We'd love to hear from you! Feedback or inquiries, reach out to our team.
            </p>
              <div style={{width:'100%' , height:'1px', backgroundColor:'#E3001B'}} className='rounded'></div>

            <div className='p-4' >
                       <div style={{letterSpacing:'2px' ,color:'#E3001B'}} className='flex text-xl font-medium text-gray-800 p-4'><MdLocationPin size={24} className='mr-2'/>Location : </div>

              <p style={{marginLeft:'43px' ,  fontWeight:'300'}} className="text-gray-800 text-xl lg:text-lg font-medium leading-relaxed">
              Unit S0566 , Office 3 <br/>149 St.Pauls Road , <br/> Slough , SL2 5EN,<br/>  United Kingdom
            </p>      
            </div>


              <div style={{width:'100%' , height:'1px', backgroundColor:'#E3001B'}} className='rounded'></div>


              
              <div className='p-2' >
                        <div style={{letterSpacing:'2px' ,color:'#E3001B'}} className='flex text-xl font-medium text-gray-800 p-4'><MdLocationPin size={24} className='mr-2'/>Email : </div>

              <p style={{marginLeft:'43px' , fontWeight:'300'}} className="text-gray-800 text-xl lg:text-lg leading-relaxed">
              sales@novexglobal.uk
            </p> 
              <p style={{marginLeft:'43px' , fontWeight:'300'}} className="text-gray-800 text-xl lg:text-lg  leading-relaxed">
              info@novexglobal.uk
            </p>      
            </div>

              <div style={{width:'100%' , height:'1px', backgroundColor:'#E3001B'}} className='rounded'></div>


            
            <div style={{letterSpacing:'2px' ,color:'#E3001B'}} className='flex text-xl font-medium text-gray-800 p-4'><MdLocationPin size={24} className='mr-2'/>Call Us for Product Inquiry : </div>
              <p style={{marginLeft:'43px' , fontWeight:'300'}} className="text-gray-800 text-xl lg:text-lg leading-relaxed">
              Tel : 03308 224460
            </p> 
              <p style={{marginLeft:'43px' , fontWeight:'300'}} className="text-gray-800 text-xl lg:text-lg  leading-relaxed">
              Mob : +44 (0) 7516962348
            </p>      



           

          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6 lg:p-8">
            <h2 style={{color:'#E3001B'}} className="text-3xl font-bold text-gray-800 mb-4">Request a Quote Today</h2>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input style={{border:'1px solid #E3001B' , fontWeight:'300'}} type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-8 py-4 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-xl lg:text-xl" required />
                <input style={{border:'1px solid #E3001B' , fontWeight:'300'}} type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-8 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-xl lg:text-xl" required />
              </div>
              <input style={{border:'1px solid #E3001B' , fontWeight:'300'}} type="text" name="subject" placeholder="Your Subject" value={formData.subject} onChange={handleChange} className="w-full px-8 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-xl lg:text-xl" required />
              <textarea style={{border:'1px solid #E3001B' , fontWeight:'300'}} name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} rows="6" className="w-full px-8 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3001B] focus:border-transparent text-xl lg:text-xl resize-none" required />
              <div className="flex justify-end">
                <button type="submit" className="bg-[#E3001B] hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 mt-6 text-xl lg:text-xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>

  
    </>
  );
}
