import Header from "@/Components/Header";
import Image from "next/image";
import Link from "next/link"

import NovexLogo from "../../public/Assets/NovexLogo.png";
import HomeBan from '../../public/Assets/HomeBan.png'

import SwitchSocket from '../../public/Assets/Switch.png'
import ExtenstionSocket from '../../public/Assets/Extension.png'
import SpotLight from '../../public/Assets/Spotlight.png'
import InsectKiller from '../../public/Assets/InsectKiller.png'
import PvcTrunking from '../../public/Assets/PvcTrunking.png'


import Liverpool from "../../public/Assets/liverpool.png";
import Oxford from "../../public/Assets/oxford.png";
import Rock from "../../public/Assets/rock.png";

import Extension1 from "../../public/Assets/Extension1.jpg";
import Extension2 from "../../public/Assets/Extension2.jpg";

import SpotBan from "../../public/Assets/Spotlightban.png";

import InsectKiller1 from "../../public/Assets/InsectK1.png";
import InsectKiller2 from "../../public/Assets/InsectK2.png";
import InsectKiller3 from "../../public/Assets/InsectK3.png";
import InsectKiller4 from "../../public/Assets/InsectK4.png";

import Pvc1 from "../../public/Assets/Pvc1.png";
import Pvc2 from "../../public/Assets/Pvc2.png";
import Pvc3 from "../../public/Assets/Pvc3.png";
import Footer from "@/Components/Footer";






export default function Home() {

   const categories = [
  { title: "Switch & Socket", image: SwitchSocket, href: '/liverpool' },
  { title: "Extension Sockets", image: ExtenstionSocket, href: '/Item_Extension' },
  { title: "Spot Lights", image: SpotLight, href: '/Item_SpotLight' },
  { title: "Insect Killers", image: InsectKiller, href: '/Item_InsectKiller' },
  { title: "PVC Trunking", image: PvcTrunking, href: '/Item_Pvc' },
];

    const series = [
    { title: "LIVERPOOL SERIES", image: Liverpool ,href: '/liverpool' },
    { title: "OXFORD SERIES", image: Oxford ,href: '/Item_Oxford' },
    { title: "ROCK SERIES", image: Rock , href:'/Item_Rock' }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="">
      <Link href={"/products"}>
        <Image
              src={HomeBan}
              alt="Novex Global"
              className="w-full"
              priority
            />
      </Link>
      </section>



      {/* Novex Content Section */}
      <section className="bg-gray-100 lg:p-40 py-20 h-auto ">
        <div className=" mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center ">
            <Image
              src={NovexLogo}
              alt="Novex Global"
              width={280}
              height={84}
              className="object-contain"
              priority
            />
          </div>
          {/* Text Content */}
          <div style={{fontWeight:'400'}} className="space-y-6 text-gray-500 leading-relaxed lg:pl-30 lg:pr-30 p-10 text-start text-justify ">
            <p style={{fontWeight:'400'}} className="text-gray-500   text-sm leading-relaxed lg:text-justify">
              <span className=" text-gray-900 ">Novex Global</span> is a
              UK-based wholesaler supplying electrical wiring accessories and
              associated electrical products. Backed by over 50 years of combined
              global experience in manufacturing and wholesale distribution, we
              focus on quality, compliance, and long-term reliability for the
              professional trade.
              We specialist in the wholesale supply of electrical wiring accessories and
              complementary electrical products for professional use. Our portfolio includes
              switches, sockets, extension sockets, lighting accessories, PVC ducting, Electronic Fly
              Killers (EFKs), and an expanding range of modern electrical solutions.
              With a well-established reputation across the Middle East and Africa, we bring
              international expertise and disciplined supply-chain management to the UK market. </p>
            <p className="text-gray-500   text-sm leading-relaxed lg:text-justify">
               <span className="text-gray-900 ">Novex Global</span> leadership team brings more than five decades of combined experience in the
              manufacturing and wholesale of electrical wiring accessories and related electrical
              products worldwide. This experience enables us to understand market demands,
              quality expectations, and the importance of consistency.
              We work closely with carefully selected manufacturing partners in China, operating
              under controlled production environments and robust quality assurance systems.</p>
            <p className="text-gray-500   text-sm leading-relaxed lg:text-justify">
              <span className="text-gray-900 ">Novex Global</span> is committed to building long-term partnerships through dependable
              products, ethical business practices, and consistent service. As we grow within the UK
              market, our focus remains clear—raising standards, not cutting corners, and setting a
              new benchmark in electrical wiring accessories and related electrical solutions.
            </p>
          </div>
        </div>
      </section>




   <section className="bg-white py-24">
      <div className=" mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-medium text-gray-900">
          Explore Our Products
        </h2>
        <p style={{fontWeight:'400'}} className="mt-4 max-w-5xl mx-auto text-gray-500 leading-relaxed ">
          Explore our high-quality product range, crafted with precision and care
          to meet modern standards. Designed for durability, safety, and style,
          our products deliver reliable performance for both residential and
          commercial spaces.</p>
        {/* Subheading */}
        <h3 className="mt-16 text-3xl font-medium text-gray-800">
          Shop by Category
        </h3>
        {/* Categories */}
        <div style={{ cursor:'pointer'}} className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 place-items-center p-4">
          {categories.map((item, index) => (
            <Link key={index} href={item.href} className="flex flex-col items-center group">
            <div key={index} className="flex flex-col items-center group ">
              {/* Circle */}
              <div className="relative w-80 h-80 rounded-full bg-gray-100 flex items-center justify-center transition group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-6"/>
              </div>
              {/* Label */}
              <p className="mt-4 text-xl font-medium text-gray-700">
                {item.title}
              </p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>






 <section className="bg-gray-100 py-24">
      <div className="lg:max-w-[80%] mx-auto px-6 text-center">
        {/* Heading */}
         <h2 className="text-center text-3xl md:text-5xl  font-bold text-gray-800 mb-14 px-6">
          SWITCHES & SOCKETS
        </h2>
 
        <p style={{fontWeight:'400'}} className="mt-4 max-w-5xl mx-auto  text-gray-600 leading-relaxed">
          Novex switches and sockets deliver premium quality, durability, and
          modern design. Built for reliability and performance, we also offer a
          wide range of trusted electrical solutions.
        </p>
        {/* Cards */}
    <div style={{cursor:'pointer'}} className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
  {series.map((item, index) => (
    <Link key={index} href={item.href} className="">
    <div
      key={index}
      style={{border:'2px solid '}}
      className="relative h-72 sm:h-80 md:h-96 overflow-hidden group
      rounded-tl-3xl rounded-br-3xl shadow-md hover:shadow-xl">
      {/* Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Default Overlay (Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      {/* Hover Red Overlay */}
      <div className="absolute inset-0 bg-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-3xl tracking-wide">
          EXPLORE
        </span>
      </div>
      {/* Bottom Text (Series Name) */}
      <div style={{ backgroundColor: 'rgba(227, 0, 27, 0.4)' }}  className="absolute bottom-0 left-0 right-0 rounded-br-3xl p-4">
        <p className="text-white text-lg font-medium tracking-wide">
          {item.title}
        </p>
      </div>
    </div>
       </Link>
        ))}
      </div>
        {/* Button */}
        <div className="mt-14">
          <Link href='/products'>
          <button style={{fontWeight:'300' , cursor:'pointer'}} className="bg-red-600 text-white hover:border-1 px-20 py-3 text-lg hover:bg-white hover:text-red-600  hover:border-red-500 transition">
            Explore
          </button>
          </Link>
        </div>
      </div>
    </section>


      <section className="bg-white py-20">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl tracking-[0.1em] font-bold text-gray-800 mb-14 px-6">
          EXTENSION SOCKETS
        </h2>

        {/* Full Width Grid */}
            
        <div style={{overflow:'hidden'}} className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* IMAGE 1 (mobile: 1st content item) */}
          <div className="order-1 lg:order-2 relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
            <Image
              src={Extension1}
              alt="Extension socket workspace"
              fill
              className="object-cover  hover:scale-105 transition-transform duration-300 "
              priority
            />
          </div>

          {/* TEXT 1 */}
          <div className="order-2 lg:order-1 px-6 lg:px-24 space-y-6 text-center p-12">
            <p className="text-3xl md:text-5xl text-gray-700 leading-tight font-normal opacity-80">
              Novex – Designed for
            </p>
            <p className="text-3xl md:text-5xl text-gray-700 leading-tight font-normal opacity-80">
              Quality and Performance
            </p>

            <div className="flex justify-center pt-6">
              <Link
                 href="/Item_Extension"
                className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-red-600  hover:border-red-500 hover:border-2 transition">
                Explore More
              </Link>
            </div>
          </div>

          {/* IMAGE 2 */}
            <div className="order-3 lg:order-3 relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
              <Image
                src={Extension2}
                alt="Extension socket close-up"
                fill
                className="object-cover  hover:scale-105 transition-transform duration-300"
              />
            </div>

          {/* TEXT 2 */}
          <div className="order-4 lg:order-4 px-6 lg:px-24 space-y-4 text-center md:text-2xl text-start p-12">
            <p className="text-gray-600 font-normal opacity-80  leading-relaxed max-w-2xl mx-auto">
              High-performance electrical solutions built with precision and
              attention to detail.
            </p>

            <p className="text-gray-600 font-normal opacity-80 leading-relaxed max-w-2xl mx-auto">
              Trusted for reliability, safety, and long-term value across diverse
              applications.
            </p>

             <div className="flex justify-center pt-6">
              <Link
                 href="/Item_Extension"
                className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-red-600  hover:border-red-500 hover:border-2 transition">
                Explore More
              </Link>
            </div>
          </div>

        </div>
      </section>



    <section style={{backgroundColor:"#E3001B"}} className=" py-16 md:py-20 lg:py-14 lg:m-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        {/* Text Content */}
        <div className="text-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
          <p className="text-white text-base text-sm lg:text-xl leading-relaxed ">
           <span style={{fontWeight:'bold'}}>NOVEX Global</span> is a wholesale-focused company creating a scalable digital framework to support trade operations, marketing, and future expansion.
          </p>
        </div>
      </div>
    </section>





    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Image Section - Left Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <Image
                src={SpotBan} 
                alt="Novex Global Spot Light" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 style={{letterSpacing:'2px'}} className="text-gray-400  text-5xl lg:text-7xl font-light tracking-wide mb-2">
              Novex 
            </h2>
            <h1 style={{letterSpacing:'3px'}} className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8">
              <span className="text-gray-900">Spot Light</span>{' '}
              <span className="text-gray-400 font-light">Series</span>
            </h1>
            <p style={{letterSpacing:'2px', fontWeight:'300'}} className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 p-5 lg:p-0">
              Innovative lighting solutions that seamlessly combine form and function, enhancing every space with elegance and efficiency.
            </p>
            <div className="space-y-4 ">
              <a 
                href="#" 
                className="inline-block text-gray-400 hover:text-gray-600 text-sm sm:text-base underline transition-colors mb-4">
                Learn more
              </a>
              <div>
                <Link href='/Item_SpotLight'>
                <button style={{cursor:'pointer'}} className="bg-red-600 text-white px-20 py-3 text-lg  hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-500 transition mt-8">
                  Explore
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <section className=" bg-white">
      <div className="max-w-full mx-auto bg-[#E3001B] p-10 md:p-14 text-center text-white shadow-lg">

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Need Help or More Information?
        </h2>

        <p className="max-w-4xl mx-auto text-lg mb-8">
          Visit our Frequently Asked Questions page for details about
          certifications, warranties, trade accounts, supply services,
          and product compliance.
        </p>

        <Link
          href="/f&qs"
          className="inline-block bg-white text-[#E3001B] px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Go to FAQ Page
        </Link>

      </div>
    </section>


   <section className="py-12 md:py-16 lg:py-20">

      {/* TEXT CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            style={{ fontWeight: 200 }}
            className="text-4xl md:text-7xl mb-3"
          >
            Efficient Electronic{" "}
            <span className="font-bold text-gray-900 tracking-wide">
              Insect Killers
            </span>
          </h2>

          <p className="text-gray-900 text-2xl max-w-3xl mx-auto mt-8">
            Durable UK-made insect killer with 30,000-hour lifespan, safe,
            chemical-free, and easy to clean
          </p>
        </div>
      </div>

      {/* MOBILE LAYOUT - Shows on mobile only */}
      <div className="md:hidden space-y-6">
        {/* Image 1 */}
        <div className="w-full p-5">
          <Image
            src={InsectKiller1}
            alt="Insect Killer"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Text 1 */}
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-xl sm:text-lg leading-relaxed">
            Slim, efficient, and versatile — perfect for homes, kitchens,
            shops, farms, and factories.
          </p>
        </div>

        {/* Image 2 */}
        <div className="w-full p-5">
          <Image
            src={InsectKiller3}
            alt="Insect Killer"
            className="w-full h-auto"
          />
        </div>

        {/* Text 2 */}
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-xl sm:text-lg leading-relaxed">
            Slim, efficient, and versatile — perfect for homes, kitchens,
            shops, farms, and factories.
          </p>
        </div>

        {/* Image 3 */}
        <div className="w-full p-5">
          <Image
            src={InsectKiller2}
            alt="Insect Killer"
            className="w-full h-auto"
          />
        </div>

        {/* Text 3 */}
        <div className="container mx-auto px-4">
          <p className="text-gray-600 lg:text-4xl sm:text-lg leading-relaxed">
           Efficient UV light trap with low power consumption, fire-resistant casing, and 24/7 protection against flying insects.
          </p>
        </div>

        {/* Image 4 */}
        <div className="w-full p-5">
          <Image
            src={InsectKiller4}
            alt="Insect Killer"
            className="w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* DESKTOP LAYOUT - Shows on tablet and above */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Full-size landscape image */}
          <div className="w-full lg:pt-[2px] lg:pr-0 lg:pb-[10px] lg:pl-[40px] p-5">
            <Image
              src={InsectKiller1}
              alt="Insect Killer"
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Second image */}
          <div className="w-full lg:pt-[2px] lg:pr-0 lg:pb-[10px] lg:pl-[40px] p-5">
            <Image
              src={InsectKiller3}
              alt="Insect Killer"
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Description */}
          <div className="container lg:ml-15 p-2">
            <p className="text-gray-600 lg:text-3xl text-xl sm:text-lg leading-relaxed">
               Hygienic CV Light trap with fire-retardant casing, low power consumption, and 27/7 operation.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-12">

          <div className="container mx-auto px-4 mt-8">
            <p className="text-gray-600 lg:text-3xl text-xl leading-relaxed">
              Slim, efficient, and versatile — perfect for homes, kitchens,
              shops, farms, and factories.
            </p>
          </div>

          {/* Full-size landscape image */}
          <div className="w-full lg:pr-[40px] lg:pb-[0px] lg:pl-[0px] p-5">
            <Image
              src={InsectKiller2}
              alt="Insect Killer"
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Full-size landscape image */}
          <div className="w-full lg:pt-[0px] lg:pr-[40px] lg:pb-[0px] lg:pl-[0px] p-5">
            <Image
              src={InsectKiller4}
              alt="Insect Killer"
              className="w-full h-auto  hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>

      {/* BUTTON */}
     

         <div className="text-center mt-12">
                <Link href='/Item_InsectKiller'>
                <button style={{cursor:'pointer'}} className="bg-red-600 text-white px-20 py-3 text-lg  hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-500 transition mt-8">
                  Explore
                </button>
                </Link>
              </div>
    </section>

<section>
        <div style={{backgroundColor:'#E3001B'}} className="p-15 justify-center text-center lg:m-2">
        <h2 className="lg:text-4xl text-2xl font-bold text-white">High-Impact & Professional</h2>
        <h2 style={{fontWeight:400}} className="mt-3 lg:text-2xl text-md text-white">"Delivering Engineered Products Designed for Long-lasting Performance and Safety."</h2>
      </div>
</section>


     <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
            <span className="font-bold text-red-600">PVC Trunking</span>
            <span className="font-light text-red-500"> - Efficient and Neat Cable Management Solution.</span>
          </h2>

          {/* Features List */}
          <div className="space-y-4 text-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-bold min-w-fit text-red-500 mr-2">Effortless Installation :</span>
              <span style={{fontWeight:'400'}} className="text-gray-700">Self-adhesive Backing Allows For Quick And Tool-free Installation, Saving Time And Effort.</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-bold min-w-fit text-red-500 mr-2">Durable Construction :</span>
              <span style={{fontWeight:'400'}} className="text-gray-700">High-quality PVC Ensures Long-lasting Performance And Reliability.</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-bold min-w-fit text-red-500 mr-2">Versatile And Customization :</span>
              <span style={{fontWeight:'400'}} className="text-gray-700">Available In Various Sizes And Easily Customizable To Fit Any Installation.</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-bold min-w-fit text-red-500 mr-2">Enhanced Cable Protection :</span>
              <span style={{fontWeight:'400'}} className="text-gray-700">Protects Cables From Damage, Ensuring Safe And Reliable Electrical Connections.</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <span className="font-bold min-w-fit text-red-500 mr-2">Neat And Professional Look :</span>
              <span style={{fontWeight:'400'}} className="text-gray-700">Conceals And Organizes Cables, Providing A Clean And Professional Appearance.</span>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
          
          {/* Image 1 */}
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-md">
            <Image
              src={Pvc1}
              alt="PVC Trunking in living room"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-md">
            <Image
              src={Pvc2}
              alt="PVC Trunking close-up"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-md sm:col-span-2 lg:col-span-1">
            <Image
              src={Pvc3}
              alt="PVC Trunking installation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        {/* Explore Button */}
               <div className="text-center">
                <Link href='/Item_Pvc'>
                <button style={{cursor:'pointer'}} className="bg-red-600 text-white px-20 py-3 text-lg  hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-500 transition mt-8">
                  Explore
                </button>
                </Link>
              </div>
      </div>
    </section>

    <section>



    </section>


          <Footer/>

     
    </div>
  );
}
