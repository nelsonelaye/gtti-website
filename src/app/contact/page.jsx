"use client";
import SponsorshipSection from "@/components/SponsorshipSection";
import Button from "@/components/UI/Button";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const contactSections = [
    {
      title: "Address",
      type: "address",
      value: "2, Fadeyi Street, off Obafemi Awolowo Way,",
      value2: "Ikeja, Lagos, Nigeria, West Africa",
      href: "https://maps.google.com/?q=2+Fadeyi+Street+Ikeja+Lagos+Nigeria",
    },
    {
      title: "Phone",
      type: "phone",
      value: "+234 813 796 9988",
      value2: "+234 803 362 8532",
      href: "tel:+2348137969988",
      href2: "tel:+2348033628532",
    },
    {
      title: "Email",
      type: "email",
      value: "support@gtti.com.ng",
      href: "mailto:support@gtti.com.ng",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <main className="min-h-screen">
      {/* Split Screen Contact Section */}
      <section className="w-full min-h-screen grid lg:grid-cols-2 bg-primary pt-[50px] md:py-[150px]">
        {/* Left Side - Contact Information */}
        <div className="bg-primary w-full text-white px-5 md:px-16 py-20 flex ">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white! font-bold mb-4">
              Contact Us
            </h1>
            <p className="md:text-lg md:text-xl text-neutral mb-16 leading-relaxed">
              We are here to help! If you have any questions, or concerns, or
              need assistance about the exhibition and advert on the exhibition,
              please reach out to us using the following contact details:
            </p>

            <div className="space-y-6 md:space-y-10">
              {contactSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl md:text-3xl font-semibold mb-3 text-white!">
                    {section.title}
                  </h3>

                  {section.type === "address" && (
                    <a
                      href={section.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral md:text-lg hover:text-white transition-colors inline-block"
                    >
                      <div>{section.value}</div>
                      <div>{section.value2}</div>
                    </a>
                  )}

                  {section.type === "phone" && (
                    <div className="space-y-1">
                      <a
                        href={section.href}
                        className="text-neutral md:text-lg hover:text-white transition-colors block"
                      >
                        {section.value}
                      </a>
                      <a
                        href={section.href2}
                        className="text-neutral md:text-lg hover:text-white transition-colors block"
                      >
                        {section.value2}
                      </a>
                    </div>
                  )}

                  {section.type === "email" && (
                    <a
                      href={section.href}
                      className="text-neutral md:text-lg hover:text-secondary hover:underline transition-all inline-block"
                    >
                      {section.value}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Decorative Pattern */}
        <div className="bg-[#F6F4EF] flex items-center justify-center p-8 md:p-16">
          <div className="relative w-full max-w-2xl aspect-square">
            {/* Starburst Pattern */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Generate starburst rays */}
              {Array.from({ length: 16 }).map((_, index) => {
                const angle = (index * 360) / 16;
                const rotation = `rotate(${angle} 100 100)`;
                return (
                  <rect
                    key={index}
                    x="95"
                    y="20"
                    width="10"
                    height="60"
                    className="fill-primary"
                    transform={rotation}
                  />
                );
              })}
              {/* Center horizontal bar */}
              <rect
                x="20"
                y="95"
                width="160"
                height="10"
                className="fill-primary"
              />
            </svg>
          </div>
        </div>
      </section>
      <SponsorshipSection />
    </main>
  );
};

export default Contact;

//  <div className="w-full max-w-6xl mx-auto px-5 py-12 bg-[#F6F4EF] hidden">
//       <form onSubmit={() => {}} className="space-y-6">
//         {/* First Row - First Name and Last Name */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             className="w-full px-8 py-6 rounded-full bg-white border-none text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             className="w-full px-8 py-6 rounded-full bg-white border-none text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
//           />
//         </div>

//         {/* Second Row - Phone and Email */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Enter your number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full px-8 py-6 rounded-full bg-white border-none text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-8 py-6 rounded-full bg-white border-none text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
//           />
//         </div>

//         {/* Third Row - Message */}
//         <div>
//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={8}
//             className="w-full px-8 py-6 rounded-3xl bg-white border-none text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-6 rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg uppercase tracking-wider transition-colors"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
