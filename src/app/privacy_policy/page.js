import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

function Page() {
  return (
    <div className="min-h-screen bg-white text-[#E3001B]">
      <Header />

      {/* HERO / Title */}
      <section className="bg-[#E3001B] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Privacy Policy
        </h1>
        <p className="max-w-3xl mx-auto text-lg font-light">
          Your privacy is important to us. This page outlines how we collect, use, and protect your information.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            We may collect personal information such as your name, email address, and phone number when you contact us or register for updates. We also collect non-personal information like browser type and pages visited to improve your experience.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            Your information is used to respond to inquiries, provide customer support, improve our website and services, and send relevant updates or offers. We never sell your personal information to third parties.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. Cookies</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            Our website uses cookies to enhance your browsing experience, track site usage, and optimize performance. You can manage cookies through your browser settings.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. Data Security</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            We implement reasonable security measures to protect your personal data. However, no system is completely secure, and we cannot guarantee absolute security of information transmitted over the internet.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">5. Third-Party Services</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            Our site may include links to third-party websites or services. We are not responsible for the privacy practices of these third parties. Please review their privacy policies when visiting.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">6. Your Rights</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            You have the right to access, update, or delete your personal information. You can also opt-out of receiving marketing communications at any time.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">7. Contact Us</h2>
          <p className="text-gray-700 font-normal leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default Page


