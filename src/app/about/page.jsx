"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import {
  IoBulbOutline,
  IoLeafOutline,
  IoRocketOutline,
  IoPeopleOutline,
  IoTrophyOutline,
  IoSchoolOutline,
} from "react-icons/io5";

const About = () => {
  const objectives = [
    {
      Icon: IoLeafOutline,
      title: "Improvement of Social and Economic Benefits",
      description:
        "Enhancing the social and economic benefits of agriculture across communities and stakeholders.",
    },
    {
      Icon: IoPeopleOutline,
      title: "Raising Future Leaders",
      description:
        "Developing future leaders to take over leadership positions in agriculture, commerce, and related sectors for a suitable replacement of aging ones.",
    },
    {
      Icon: IoBulbOutline,
      title: "Positive Attitudinal Change",
      description:
        "Promoting positive attitudinal change in our society, particularly transparency in commerce.",
    },
    {
      Icon: IoRocketOutline,
      title: "Strategic Partnerships",
      description:
        "Partner with interested organizations (public and private) for food secured future in Nigeria and other African countries focusing on livestock, aquaculture crop value chain research, education, promotion and funding.",
    },
    {
      Icon: IoSchoolOutline,
      title: "Media and Education",
      description:
        "Set up media production station to improve agriculture in Nigeria and Africa through education and awareness.",
    },
    {
      Icon: IoTrophyOutline,
      title: "Recognition and Growth",
      description:
        "Organizing awards in agriculture, technology, trade, education and other sectors that promote growth and development in Nigeria and Africa.",
    },
  ];

  const strategies = [
    {
      number: "01",
      title: "Partnership & Research",
      description:
        "Partner with stakeholders and development partners in research to build scalable and sustainable livestock and aquaculture practices which assures shared prosperity.",
    },
    {
      number: "02",
      title: "Education & Networking",
      description:
        "Provide education and network farmers on global best practices in livestock farming to improve their decision making, technical efficiency, productivity and profitability.",
    },
    {
      number: "03",
      title: "Technology & Finance",
      description:
        "Use technology to link farmers with financial institutions and credits to fund innovative livestock and aquaculture business ideas.",
    },
    {
      number: "04",
      title: "Trade Promotion",
      description:
        "Offer networking opportunities with key decision makers and industry influencers through trade promotions and exhibitions.",
    },
    {
      number: "05",
      title: "Recognition & Awards",
      description:
        "Award deserving Africans who are making giant strides in growing their State or National GDP through livestock and aquaculture industry.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/conference.jpg"
            alt="Agricultural landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-5">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              About GTTI
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Green Transformation Trailblazers Initiative - Working towards a
              food-secure future in developing African countries
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/farmer.jpg"
                alt="Farming community"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary leading-tight">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Green Transformation Trailblazers Initiative (GTTI) is a
                  Non-Government organization domiciled in Nigeria working with
                  developing partners to ensure a food-secure future in
                  developing African Countries.
                </p>
                <p>
                  The NGO is set up to support farmers, enhance agricultural
                  production and help improve food security and alleviate
                  poverty. GTTI is focused on developing the livestock and
                  aquaculture value chain through research, education, trade
                  promotions, marketing and provision of access to funding.
                </p>
                <p>
                  The company is also the official organizer of the
                  International Trade Fair for Livestock and Aquaculture (ITFLA)
                  Annual Expo in Nigeria and West African Dairy and Beef
                  Summit/Exhibition.
                </p>
                <p>
                  The GTTI partners with industry stakeholders and is dedicated
                  to enhancing food and nutrition security, poverty mitigation,
                  and stimulation of economic growth within the ecosystem. The
                  organization&apos;s programs and exhibitions are largely
                  designed to not only create value by creating a platform for
                  all stakeholder interactions but has remained a pillar of
                  support to the government on projects and programs that will
                  create jobs and grow the country&apos;s GDP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Vision, Mission & Strategy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/vision.jpg"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/60"></div>
              </div>
              <div className="p-10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <IoRocketOutline color="white" size="32px" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To bring about sustainable and productive agriculture.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-primary rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/mission.jpg"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="p-10 text-white">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <IoLeafOutline color="#166534" size="32px" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-100 leading-relaxed">
                  To improve wholesome food security through sustainable
                  competitive advantage in agriculture production, particularly
                  across the African continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims and Objectives Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Aims and Objectives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map(({ Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Icon color="white" size="28px" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
            <p className="text-lg text-gray-700 leading-relaxed">
              Organizing of both local and international exhibitions of products
              and services of agriculture, commerce and technology. Organizing
              programs that are largely designed for all stakeholders
              interactions, support government and international organizations
              on projects that will be for empowerment and growth of the
              country&apos;s GDP.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Our Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To achieve our mission and vision, we implement these strategic
              initiatives
            </p>
          </div>

          <div className="space-y-6">
            {strategies.map(({ number, title, description }, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we&apos;re transforming agriculture across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/farmers-training.jpg"
                alt="Farmers training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold px-4 text-center">
                  Farmer Training Programs
                </p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/livestock-expo.jpg"
                alt="Livestock expo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold px-4 text-center">
                  Annual Exhibitions
                </p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/aquaculture.jpg"
                alt="Aquaculture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold px-4 text-center">
                  Aquaculture Development
                </p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/partnership-meeting.jpg"
                alt="Partnership meeting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold px-4 text-center">
                  Strategic Partnerships
                </p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/technology.jpg"
                alt="Agricultural technology"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold px-4 text-center">
                  Technology Integration
                </p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/community.jpg"
                alt="Community engagement"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold px-4 text-center">
                  Community Engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full px-5 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/partnership.jpg"
            alt="Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Join Us in Our Mission
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Be part of the transformation towards a food-secure Africa. Partner
            with us to create sustainable agricultural solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              text="Become a Partner"
              variant="primary"
              className="md:px-12 md:py-5 text-sm font-semibold tracking-wider mx-auto bg-white text-primary hover:bg-gray-100"
            />
            <Button
              text="Contact Us"
              variant="secondary"
              className="md:px-12 md:py-5 text-sm font-semibold tracking-wider mx-auto border-2 border-white text-white hover:bg-white hover:text-primary"
            />
          </div>
        </div>
      </section>

      {/* Stay in the Loop */}
      <section className="w-full px-5 py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest updates on our programs, initiatives, and impact
            stories.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-primary"
            />
            <Button
              text="Subscribe"
              variant="primary"
              className="md:px-8 md:py-4"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
