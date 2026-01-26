"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoBulbOutline, IoEyeOutline, IoTicketOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import HighlightSection from "@/components/HighlightSection";
import ExhibitSection from "@/components/ExhibitSection";

const Exhibition = () => {
  const logos = [
    "/images/brands/logoipsum-411.svg",
    "/images/brands/logoipsum-419.svg",
    "/images/brands/logoipsum-372.svg",
    "/images/brands/logoipsum-401.svg",
    "/images/brands/logoipsum-372.svg",
    "/images/brands/logoipsum-388.svg",
    "/images/brands/logoipsum-368.svg",
  ];

  const exhibitorProfiles = [
    "Animal Breeders and Reproduction Technologists",
    "Animal Care and Animal Health Practitioners",
    "Animal Housing and Shed Construction Professionals",
    "Environment Technologists",
    "Embryo, Semen and Reproductive Technologists",
    "Automation and Software Solution Providers",
    "Equipment and Accessories for Livestock and Aquaculture",
    "Animal Nutritionists",
    "Animal Husbandry Equipment",
    "Animal Products Processors",
    "Laboratory, Testing Equipment and Services",
    "Technology for Dung, Solid Manure and Slurry",
    "Cold Chain and Refrigeration Technology",
    "Transport Vehicles and Transport Services",
    "Banks and Agricultural Finance Institutions",
    "Agricultural Insurance Providers",
  ];

  const exhibitionBenefits = [
    {
      Icon: PiUsersThreeBold,
      title: "Grow Your Business Network",
      description:
        "Be where your customers and partners will be and develop highly engaged relationships through one-on-one interactions with your brand. Take advantage of our B2B networking sessions.",
    },
    {
      Icon: MdOutlineRocketLaunch,
      title: "Launch New Products to Market",
      description:
        "Fast-track your product launches within one of the fastest growing economies in Africa. Get hands-on with decision makers in Nigeria market and get your product introduced.",
    },
    {
      Icon: FaChartLine,
      title: "Generate More Business",
      description:
        "Over 90% of attendees are decision makers, purchasers or traders, underlining the fact that the event delivers real business opportunities.",
    },
    {
      Icon: IoEyeOutline,
      title: "Gain Maximum Brand Exposure",
      description:
        "Over 3,000+ trade visitors from around the world, providing an unrivalled opportunity for exhibitors to participate in a growing African marketplace.",
    },
    {
      Icon: IoBulbOutline,
      title: "Stay Innovative",
      description:
        "Learn about new developments in your industry. Stay current with market trends and advancements. Showcase your state-of-the-art capabilities, positioning you as an innovation leader.",
    },
    {
      Icon: IoTicketOutline,
      title: "Conference Access",
      description:
        "Attend Investment Summit sessions and gain knowledge and insights from top experts on hot topics that matter with global trade.",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[60vh] bg-primary px-5 pt-[70px]">
        {/* <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/conference.jpg"
            alt="Exhibition hall"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div> */}

        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/drjunh0fs/image/upload/v1769192476/IMG_5439_zgghr2.jpg"
            alt="Exhibition"
            className="object-cover object-top w-full h-full"
          />
          <div className="absolute inset-0 bg-primary-light/80"></div>
        </div>

        <div className="relative z-10 w-full  h-full flex items-center justify-center text-center">
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white!">
              Exhibit at the Summit
            </h1>
            <p className="md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Showcase your innovations to a global audience of industry
              leaders, investors, and decision-makers in agriculture and
              livestock technology.
            </p>
            <Button
              text="Apply to Exhibit"
              variant="primary"
              className="md:px-12 md:py-5 mx-auto"
            />
          </div>
          {/* <div className="w-full h-full z-20">
            <Image
              src="/images/conference.jpg"
              alt="Exhibition hall"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div> */}
        </div>
      </section>

      {/* Why Exhibit Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary leading-tight">
              Why Exhibit?
            </h2>
            <div className="space-y-6 md:text-lg text-gray-700 leading-relaxed">
              <p>
                Nigeria is the largest market of livestock and aquaculture in
                West Africa. The trends in the consumption of animal sourced
                foods, livestock and aquaculture by-products are key indicators
                of opportunities for investment.
              </p>
              <p>
                The agri-sector (especially the livestock and aquaculture
                sub-sector) has shown continued prospects for strong growth in
                the short, medium and long-term. Huge investment opportunities
                exist across Nigeria&apos;s livestock and aquaculture value
                chain as the government tries to boost local production.
              </p>
              {/* <p className="font-semibold text-primary">
                Companies benefit from participation in many ways:
              </p> */}
            </div>
          </div>

          {/* Sponsor Logos */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center flex-wrap gap-8 opacity-70">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center p-4 `}
                >
                  <Image
                    src={logo}
                    alt={`Partner ${index}`}
                    width={80}
                    height={80}
                    className="object-cover w-[40px] md:w-[80px]  h-full   transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-white!">
              Exhibition Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitionBenefits.map(({ Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white text-primary p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Icon color="white" size="28px" />
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitor Profiles Section */}
      <section className="w-full px-5 py-20 pb-12 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-primary">
              Exhibitor Profiles
            </h2>
            <p className="text-xl text-gray-600">Who will you meet?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {exhibitorProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary"
              >
                <p className="text-gray-700">{profile}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HighlightSection />

      <ExhibitSection />

      {/* CTA Section - Be the First to Know */}
      <section className="w-full px-5 py-20 md:py-28 bg-primary hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white! leading-tight">
            Secure Your Exhibition Space
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="md:text-lg text-white! mb-4">
              Join leading companies in the livestock and aquaculture industry
              at West Africa&apos;s premier trade event.
            </p>

            <p className="md:text-lg text-white!">
              We support your entry strategy by connecting you to the right
              distributors and facilitating profitable partnerships. We also
              offer you experts&apos; insights into the local regulations so you
              can better navigate the market.
            </p>
          </div>
          <div className="mt-12">
            <Button
              text="Apply to Exhibit"
              variant="primary"
              className="md:px-12 md:py-5 text-sm font-semibold tracking-wider mx-auto"
            />
          </div>
          <p className="text-white! mt-8">
            Questions? Reach out to our exhibitions team at{" "}
            <a
              href="mailto:exhibit@livestocksummit.com"
              className="text-white! hover:text-secondary underline font-medium"
            >
              exhibit@livestocksummit.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Exhibition;
