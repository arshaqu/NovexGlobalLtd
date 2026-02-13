import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";

export default function page() {
  return (
    <div className="bg-white text-gray-800">
        <Header/>

      {/* HERO */}
      <section className="bg-[#E3001B] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p style={{fontWeight:'300'}} className="max-w-4xl mx-auto text-lg md:text-2xl opacity-95">
            Trade-focused electrical wholesale solutions designed for
            professional installers, contractors, and distributors.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className=" max-w-8xl mx-auto p-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

          {/* B2B Wholesale */}
          <div style={{border:'2px solid #E3001B' }} className=" rounded-2xl p-8 hover:shadow-2xl transition lg:p-20">
            <h3 className="text-lg lg:text-3xl font-semibold text-[#E3001B] mb-4 ">
              B2B Wholesale Supply
            </h3>
            <p style={{fontWeight:'300'}} className="text-[#E3001B] text-md lg:text-xl leading-relaxed ">
              Professional supply of electrical wiring accessories including
              switches, sockets, extension sockets, lighting accessories,
              PVC ducting, and Electronic Fly Killers (EFKs).
            </p>
          </div>

          {/* Trade Accounts */}
          <div style={{border:'2px solid #E3001B'}} className=" rounded-2xl p-8 hover:shadow-2xl transition lg:p-20">
            <h3 className="text-3xl font-semibold text-[#E3001B] mb-4">
              Trade Account Management
            </h3>
           <p style={{fontWeight:'300'}} className="text-[#E3001B] text-md lg:text-xl leading-relaxed ">
              Structured pricing tiers for contractors, wholesalers, and
              strategic partners with scalable purchasing options and
              long-term trade support.
            </p>
          </div>

          {/* Compliance */}
          <div  style={{border:'2px solid #E3001B' }} className=" rounded-2xl p-8 hover:shadow-2xl transition lg:p-20">
            <h3 className="text-lg lg:text-3xl font-semibold text-[#E3001B] mb-4">
              Compliance & Certification
            </h3>
             <p style={{fontWeight:'300'}} className="text-[#E3001B] text-md lg:text-xl leading-relaxed ">
              Products are CE and UKCA certified where applicable and supplied
              in accordance with relevant UK and international standards.
            </p>
          </div>

          {/* Technical Resources */}
          <div style={{border:'2px solid #E3001B'}} className=" rounded-2xl p-8 hover:shadow-2xl transition lg:p-20">
            <h3 className="text-lg lg:text-3xl font-semibold text-[#E3001B] mb-4">
              Technical Documentation
            </h3>
             <p style={{fontWeight:'300'}} className="text-[#E3001B] text-md lg:text-xl leading-relaxed ">
              Access product datasheets, compliance documentation,
              Declarations of Conformity, and technical specifications
              for professional use.
            </p>
          </div>

          {/* OEM / Private Label */} 
          <div style={{border:'2px solid #E3001B'}} className=" rounded-2xl p-8 hover:shadow-2xl transition lg:p-20">
            <h3 className="text-lg lg:text-3xl font-semibold text-[#E3001B] mb-4">
              OEM & Private Label Supply
            </h3>
             <p style={{fontWeight:'300'}} className="text-[#E3001B] text-md lg:text-xl leading-relaxed ">
              Approved partners can access custom branding,
              packaging adaptation, and specification-aligned
              manufacturing solutions.
            </p>
          </div>

          {/* Warranty */}
          <div style={{border:'2px solid #E3001B'}} className=" rounded-2xl p-8 hover:shadow-lg transition lg:p-20">
            <h3 className="text-lg lg:text-3xl font-semibold text-[#E3001B] mb-4">
              Warranty & Quality Assurance
            </h3>
            <p style={{fontWeight:'300'}} className="text-[#E3001B] text-md lg:text-xl leading-relaxed ">
              Selected product ranges are supported by warranties
              of up to 20 years, subject to terms and conditions
              and supported by documented QA processes.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{backgroundColor:"#ffffff"}} className=" py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#E3001B] mb-12">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            <div className="bg-[#E3001B] lg:text-2xl text-white p-6 rounded-xl border lg:p-10">
              Trade-focused distribution tailored to professional customers.
            </div>

            <div className="bg-[#E3001B] lg:text-2xl text-white p-6 rounded-xl border lg:p-10">
              Long-term partnerships with trusted manufacturing partners.
            </div>

            <div className="bg-[#E3001B] lg:text-2xl text-white p-6 rounded-xl border lg:p-10">
              Rigorous quality assurance and compliance processes.
            </div>

            <div className="bg-[#E3001B] lg:text-2xl text-white p-6 rounded-xl border lg:p-10 ">
              Scalable operations designed for long-term growth and reliability.
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 px-6 text-center">
        <div style={{fontWeight:'300'}} className="max-w-3xl mx-auto">
          <h2 className="text-lg lg:text-4xl font-bold text-[#E3001B] mb-4">
            Become a Trade Partner
          </h2>
          <p className="text-gray-600 mb-8 text-lg lg:text-2xl">
            Apply for a trade account to access structured pricing,
            technical resources, and professional support.
          </p>

          <button style={{cursor:'pointer'}} className="bg-[#E3001B] text-white px-8 py-3 text-lg lg:text-2xl hover:scale-[1.03] active:scale-[0.97] transition">
            Apply for Trade Account
          </button>
        </div>
      </section>
        <Footer/>
    </div>
  );
}
