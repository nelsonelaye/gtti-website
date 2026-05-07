"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import {
  FaFileLines,
  FaPassport,
  FaHotel,
  FaPlaneArrival,
  FaCircleCheck,
} from "react-icons/fa6";

const TravelGuide = () => {
  const travelServices = [
    {
      title: "Invitation Letters",
      desc: "Official invitation letters for visa application upon confirmed registration.",
      icon: FaFileLines,
    },
    {
      title: "Visa Guidance",
      desc: "Step-by-step guidance on Nigeria visa requirements and application process.",
      icon: FaPassport,
    },
    {
      title: "Hotel Recommendations",
      desc: "Partner hotels near the venue with special rates for ILASE participants.",
      icon: FaHotel,
    },
    {
      title: "Airport Transfers",
      desc: "Pickup from Nnamdi Azikiwe International Airport to your hotel and venue.",
      icon: FaPlaneArrival,
    },
  ];

  const visaOptions = [
    {
      id: 1,
      title: "Nigerian E-Visa",
      description:
        "Nigeria offers an Electronic Visa (E-Visa) facility for eligible nationalities traveling for business, trade fairs, exhibitions, and conferences.",
      isRecommended: true,
      benefits: [
        "Online application process",
        "Faster processing timelines",
        "Suitable for short-term business visits",
        "Electronic approval issued prior to travel",
      ],
      documents:"Passport biodata page (6 months validity), Official ILASE 2026 Invitation Letter, Flight itinerary & accommodation."
,      extraTitle: "Recommended for:",
      extraContent:
        "International exhibitors, B2B visitors, hosted buyers, speakers, and trade delegates attending ILASE 2026.",
        
      accentColor: "border-secondary",
      iconColor: "text-secondary",
 extraBg: "bg-secondary/5",
      extraBorder: "border-secondary/10",
      extraTextColor: "text-secondary",
    },
    {
      id: 2,
      title: "Nigeria Embassy / Consulate",
      description:
        "Participants not eligible for E-Visa or requiring multiple-entry visas should apply through the nearest Nigerian Embassy or Consulate in their country of residence.",
      isRecommended: false,
      benefits: [
        "Processing times vary by location",
        "Additional documentation may be requested",
        "Apply 4–8 weeks prior to travel",
        "Best for long-term or complex stays",
      ],
      documents: null,
      extraTitle: "Recommended for:",
      extraContent:
        "Long-term visitors, multiple-entry applicants, and nationals not covered by the E-Visa program.",
      accentColor: "border-primary",
      iconColor: "text-secondary",
      extraBg: "bg-secondary/5",
      extraBorder: "border-secondary/10",
      extraTextColor: "text-secondary",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/travel-guide-hero.png"
          alt="International Travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 container mx-auto px-5 text-center *:text-white!">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            ILASE 2026: Visa Assistance
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10">
            Comprehensive travel guidance and visa support for international
            exhibitors and visitors.
          </p>
          {/* <Link href="#" target="_blank" className="inline-block">
            <Button
              text="Request Assistance"
              variant="primary"
              className="px-10 py-5"
            />
          </Link> */}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-4">
            Travel Assistance
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-8">
            Visa Support Services
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We understand that traveling to Nigeria may require visa
            arrangements. Our dedicated team is here to assist international
            exhibitors and visitors with their visa application process to
            ensure a smooth journey to ILASE 2026.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-primary-light p-8 rounded-2xl text-white hover:bg-primary transition-all duration-300 transform hover:-translate-y-2 border border-white/10"
            >
              <service.icon className="text-4xl text-secondary mb-6" />
              <h4 className="text-xl font-bold mb-4 text-white!">
                {service.title}
              </h4>
              <p className="text-white/80 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visa Information */}
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Travel & Visa Guidance for Exhibitors and Visitors
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              All international exhibitors, delegates, buyers, and visitors
              attending ILASE 2026 (International Livestock and Aquaculture
              Summit and Exhibition) must obtain a <b>valid Nigerian visa</b>{" "}
              unless exempt under Nigerian immigration regulations. Participants
              are strongly advised to begin their visa application early.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {visaOptions.map((option) => (
              <div
                key={option.id}
                className={`bg-white p-8 rounded-2xl shadow-sm ${option.accentColor} relative overflow-hidden`}
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <h3 className="text-2xl font-bold text-primary ">
                    {option.id}. {option.title}
                  </h3>
                  {option.isRecommended && (
                    <div className="absolute top-3 right-4 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-4 mb-8">
                  {option.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCircleCheck
                        className={`${option.iconColor} mt-1 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`p-4 ${option.extraBg} rounded-xl border ${option.extraBorder}`}
                >
                  <p
                    className={`text-sm font-semibold ${option.extraTextColor} mb-2`}
                  >
                    {option.extraTitle}
                  </p>
                  <p className="text-sm text-gray-600 ">
                    {option.extraContent}
                  </p>
                </div>

                <p className="text-sm text-gray-600 mt-6"><span className="font-semibold">Supporting documents:</span> {option.documents || "Not Applicable"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support and Advisory */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="mx-auto">
            <h3 className="max-md:text-center text-2xl md:text-3xl font-bold text-primary mb-8 border-b-4 border-secondary inline-block pb-2">
              Visa Support & Invitation Letters
            </h3>
            <p className="max-md:text-center text-lg text-gray-700 mb-6">
              The ILASE 2026 Organizing Committee can assist with:
            </p>
            <ul className="space-y-4">
              {[
                "Issuance of official invitation letters",
                "Event participation confirmation documents",
                "General visa guidance upon request",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-lg text-sm ">
              <strong>
                <i>Note:</i>
              </strong>{" "}
              Final visa approval rests solely with the Nigerian Immigration
              Service.
            </p>
          </div>

          <div className="mx-auto">
            <h3 className="max-md:text-center text-2xl md:text-3xl font-bold text-primary mb-8 border-b-4 border-secondary md:inline-block pb-2">
              Travel Advisory
            </h3>
            <ul className="space-y-6">
              {[
                "Passports must be valid for at least six (6) months beyond the date of entry into Nigeria",
                "Participants should carry printed copies of their visa approval, invitation letter, and hotel booking",
                "Transit visa requirements may apply for travelers connecting through third-country airports",
                "Early application is strongly recommended to ensure smooth travel and participation at ILASE 2026.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700">
                  <span className="font-bold text-secondary text-xl leading-none">
                    {i + 1}.
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 mt-16 pt-12 border-t border-gray-100 text-center">
            <p className="text-lg text-gray-700 mb-10">
              For more information, please call{" "}
              <a
                href="tel:+2348137969988"
                className="font-bold text-primary hover:text-secondary transition-colors"
              >
                +2348137969988
              </a>{" "}
              or{" "}
              <a
                href="tel:+2348033628532"
                className="font-bold text-primary hover:text-secondary transition-colors"
              >
                +2348033628532
              </a>
              ,{" "}
              <a
                href="tel:+2348034780938"
                className="font-bold text-primary hover:text-secondary transition-colors"
              >
                +2348034780938
              </a>
              . Email:{" "}
              <a
                href="mailto:support@gttinitiatives.org"
                className="font-bold text-primary hover:text-secondary transition-colors"
              >
                support@gttinitiatives.org
              </a>
            </p>
            {/* <Link href="#" target="_blank" className="inline-block">
              <Button
                text="Request Assistance"
                variant="primary"
                className="px-10 py-5"
              />
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TravelGuide;