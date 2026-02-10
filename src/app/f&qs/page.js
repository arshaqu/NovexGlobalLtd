'use client';

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Who does Novex Global supply?",
      a: "Novex Global supplies electrical wiring accessories and associated electrical products to trade customers, including electrical wholesalers, contractors, distributors, and professional installers.",
    },
    {
      q: "Are your products CE and UKCA certified?",
      a: "Yes. Products are CE and UKCA certified where applicable and supplied in accordance with relevant UK and international standards.",
    },
    {
      q: "Do your products include a warranty?",
      a: "Selected product ranges are supported by warranties of up to 20 years. Warranty terms and conditions apply and vary by product category.",
    },
    {
      q: "Where are your products manufactured?",
      a: "Products are manufactured through carefully selected partners operating under controlled production environments and supported by quality assurance processes.",
    },
    {
      q: "Are your products suitable for professional installation?",
      a: "Yes. Novex Global products are designed for professional use and should be installed by a competent person in accordance with local regulations.",
    },
    {
      q: "Do you provide installation services?",
      a: "No. Novex Global supplies products only. Installation must be carried out by qualified professionals.",
    },
    {
      q: "Can I apply for a trade account?",
      a: "Yes. Trade customers can apply through the trade application process. Approval is subject to verification and account assessment.",
    },
    {
      q: "Do you offer private label or OEM supply?",
      a: "Private label and OEM supply solutions may be available for approved partners, subject to agreement, compliance requirements, and minimum order quantities.",
    },
    {
      q: "How can I request compliance documentation?",
      a: "Compliance documentation, including Declarations of Conformity, can be provided upon request through the Novex Global sales or support team.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
        <Header/>

      {/* HERO */}
      <section className="bg-[#E3001B] text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Practical information for trade customers, distributors,
          contractors, and compliance reviewers.
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-[#E3001B]">
        <div className="space-y-4">

          {faqs.map((item, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left p-5 font-medium text-lg"
              >
                <span>{item.q}</span>
                <span className="text-[#E3001B] text-3xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div style={{fontWeight:'400'}} className="p-5 text-red-500 leading-relaxed">
                  {item.a}
                </div>
              )}

            </div>
          ))}

        </div>
      </section>
            <Footer/>
    </div>
  );
}
