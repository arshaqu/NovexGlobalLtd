import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

function page() {
  return (
     <div className="min-h-screen bg-white text-[#E3001B]">
      <Header />

      {/* HERO / Title */}
      <section className="bg-[#E3001B] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Terms of Use
        </h1>
        <p className="max-w-3xl mx-auto text-lg font-light">
          Please read these terms carefully before using our website or services.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            By accessing or using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree, you must not use this site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Use of Website</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of Novex Global Ltd or its licensors and is protected by applicable copyright and trademark laws.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. Product Information</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            While we strive to provide accurate information, product images, descriptions, and availability are subject to change without notice. Always verify details before purchasing.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            Novex Global Ltd is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website or products, except as required by law.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">6. Third-Party Links</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            This website may contain links to third-party sites. We do not endorse or assume responsibility for content, privacy policies, or practices of these external sites.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            We reserve the right to modify these Terms of Use at any time without prior notice. Users are encouraged to review the Terms periodically.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">8. Governing Law</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            These terms are governed by the laws of the United Kingdom. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in the UK.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">9. Contact Us</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            For any questions regarding these Terms of Use, please contact us at:
            <br />
            <span className="font-medium">Email:</span> support@novexglobal.com <br />
            <span className="font-medium">Phone:</span> +44 (0) 7516962348
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page
