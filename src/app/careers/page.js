import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

function page() {
 

  return (
    <div className="min-h-screen bg-white text-gray-800">
        <Header/>
      {/* HERO SECTION */}
      <section className="bg-[#E3001B] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Team
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          We are looking for passionate and dedicated people to grow with our company.
          Explore our open positions and build your future with us.
        </p>
      </section>

      {/* WHY JOIN US */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#E3001B]">
          Why Work With Us
        </h2>

        <div style={{fontWeight:'300'}} className="grid md:grid-cols-3 gap-8 text-center">
          <div style={{border:'2px solid #E3001B'}} className="p-6  rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl lg:text-2xl p-4 mb-2 text-red-600">Growth Opportunities</h3>
            <p className='text-red-600 text-xl lg:text-xl'>We support learning and career advancement.</p>
          </div>

          <div style={{border:'2px solid #E3001B'}} className="p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl lg:text-2xl p-4 mb-2 text-red-600">Friendly Environment</h3>
            <p className='text-red-600 text-xl lg:text-xl'>Work with a supportive and collaborative team.</p>
          </div>

          <div style={{border:'2px solid #E3001B'}} className="p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl lg:text-2xl p-4 mb-2 text-red-600">Job Stability</h3>
            <p className='text-red-600 text-xl lg:text-xl'>We provide long-term career opportunities.</p>
          </div>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#E3001B]">
          Current Openings
        </h2>

   <div className=" mx-auto px-4">
  <div className="grid md:grid-cols-3 gap-8">
    
    <div className="md:col-span-3 flex justify-center gap-8 flex-wrap">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm lg:p-10 p-5 text-center max-w-lg w-full ">
        
        <h3 className=" text-xl lg:text-2xl font-semibold text-red-600 mb-3">
          No Current Openings
        </h3>

        <p className="text-red-600 text-lg lg:text-xl text-base leading-relaxed">
          Currently, we don't have any job openings available.  
          Please check back later or follow us for future opportunities.
        </p>

      </div>
       <div className="bg-white border border-gray-200 rounded-2xl shadow-sm lg:p-10 p-5 text-center max-w-lg w-full">
        
        <h3 className="text-xl lg:text-2xl font-semibold text-red-600 mb-3">
          No Current Openings
        </h3>

        <p className="text-red-600 text-xl lg:text-xl text-base leading-relaxed">
          Currently, we don't have any job openings available.  
          Please check back later or follow us for future opportunities.
        </p>

      </div>

           <div className="bg-white border border-gray-200 rounded-2xl shadow-sm lg:p-10 p-5 text-center max-w-lg w-full">
        
        <h3 className="text-2xl lg:text-2xl font-semibold text-red-600 mb-3">
          No Current Openings
        </h3>

        <p className="text-red-600 text-xl lg:text-xl text-base leading-relaxed">
          Currently, we don't have any job openings available.  
          Please check back later or follow us for future opportunities.
        </p>

      </div>

    </div>

    
   

  </div>

  
</div>

      </section>

      {/* APPLICATION FORM */}
 <section className="py-20 px-4 bg-red-200">
  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E3001B] mb-10">
      Apply Now
    </h2>

    <form  className="space-y-6 ">

      {/* Full Name */}
      <div className=''>
        <label className="block text-lg lg:text-xl font-medium text-gray-700 mb-2 text-red-600">
          Full Name
        </label>
        <input
          style={{border:'1px solid #E3001B'}}
          type="text"
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3  transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-lg lg:text-xl font-medium text-gray-700 mb-2 text-red-600">
          Email Address
        </label>
        <input
          style={{border:'1px solid #E3001B'}}
          type="email"
          placeholder="Enter your email"
          className="w-full  rounded-xl px-4 py-3  transition"
        />
      </div>

      {/* Position */}
      <div>
        <label className="block text-lg lg:text-xl font-medium text-gray-700 mb-2 text-red-600">
          Position Applying For
        </label>
        <input
        style={{border:'1px solid #E3001B'}}
          type="text"
          placeholder="Job title"
          className="w-full  rounded-xl px-4 py-3 focus:border-[#E3001B] transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-lg lg:text-xl font-medium text-gray-700 mb-2 text-red-600">
          Your Message
        </label>
        <textarea
          style={{border:'1px solid #E3001B'}}
          rows="5"
          placeholder="Tell us about yourself..."
          className="w-full  rounded-xl px-4 py-3  transition resize-none"
        />
      </div>

      {/* Button */}
      <button
      style={{cursor:'pointer'}}
        type="submit"
        className="w-full bg-[#E3001B] text-white py-5 rounded-xl text-lg lg:text-xl font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
      >
        Submit Application
      </button>

    </form>
  </div>
</section>
    <Footer/>

    </div>
  ) 
}

export default page
