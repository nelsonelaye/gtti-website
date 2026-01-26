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
import Link from "next/link";

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
      <section className="relative w-full h-[80vh] md:h-[60vh] overflow-hidden">
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
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white!">
              About GTTI
            </h1>
            <p className="md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Green Transformation Trailblazers Initiative - Working towards a
              food-secure future in developing African countries
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 ">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/farmer.jpg"
                alt="Farming community"
                fill
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl md:text-5xl  font-bold mb-4 text-primary leading-tight">
                Who We Are
              </h2>
              <div className="space-y-6 md:text-lg  leading-relaxed">
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
                  International{" "}
                  <span className="font-semibold">
                    {" "}
                    Trade Fair for Livestock and Aquaculture (ITFLA) Annual Expo
                  </span>{" "}
                  in Nigeria and{" "}
                  <span className="font-semibold">
                    West African Dairy and Beef Summit/Exhibition
                  </span>
                  .
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
      <section className="w-full px-5 py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white!">
              Vision, Mission & Strategy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:w-4/5 mx-auto">
            {/* Vision */}
            <div className=" rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/cattles.jpg"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/60"></div>
              </div>
              <div className="py-10">
                <div className="p-3 w-fit bg-white rounded-full flex items-center justify-center mb-4">
                  <IoRocketOutline className="text-primary" size="32px" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-4 text-white!">
                  Our Vision
                </h3>
                <p className="md:text-lg text-white leading-relaxed max-w-3xl">
                  To bring about sustainable and productive agriculture.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-primary rounded-lg  overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/market.jpg"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="py-10 text-white!">
                <div className="p-3 w-fit bg-white rounded-full flex items-center justify-center mb-4">
                  <IoLeafOutline className="text-primary" size="32px" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-4 text-white!">
                  Our Mission
                </h3>
                <p className="md:text-lg text-gray-100 leading-relaxed max-w-[450px]">
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
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
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

          <div className="mt-12 bg-gray-50 p-8 rounded-lg border-l-4 border-primary hidden">
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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Our Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To achieve our mission and vision, we implement these strategic
              initiatives
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-20">
              {strategies.map(({ number, title, description }, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-lg md:text-2xl font-bold text-white">
                      {number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full  md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="bg-neutral/10 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
                      <h3 className="text-lg md:text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">
                        {title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Gallery Section */}
      <section className="w-full px-5 py-20 md:py-28 bg-gray-50 hidden">
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

      <section className="w-full mx-auto px-5 py-20 md:py-28 bg-primary hidden">
        <div className="mx-auto px-2 md:px-5 flex flex-col gap-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white!">
              Empowering Farmers. <br /> Growing Nations.
            </h2>

            <p className="md:text-lg mb-8 max-w-2xl mx-auto text-white!">
              From research to market, we are building the livestock and
              aquaculture infrastructure that powers economies. Partner with us
              to scale production, secure food systems, and drive sustainable
              growth across West Africa.
            </p>
            <div className="flex justify-center items-center">
              <Button
                text="Contact Our Team"
                variant="primary"
                className="md:px-12 md:py-5 text-sm font-semibold tracking-wider mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  gap-12 px-5">
          <div className="w-full lg:w-1/2 max-h-[500px] overflow-hidden relative rounded-lg ">
            <Image
              src="/images/fish.jpg"
              alt="Exhibitor booth"
              width={800}
              height={640}
              className="rounded-lg object-cover object-top shadow-lg w-full! hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white!">
              Pioneer a Food-Secure <br /> and Prosperous Africa
            </h2>

            <div className="md:text-lg text-gray-300 mb-8">
              <p className="mb-4">
                As trailblazers in the green transformation movement, we are
                building a collaborative ecosystem where industry stakeholders
                and developmental partners converge.
              </p>

              <p>
                Through specialized education, trade promotion, and
                government-level support, we are securing Africa’s nutrition
                future while fostering a climate for job creation and commercial
                excellence. Partner with GTTI today to harness the potential of
                the livestock sector and drive a resilient, food-secure legacy
                for the continent.
              </p>
            </div>

            <Link href="/contact">
              <Button
                text="Talk to Our Team"
                variant="primary"
                className="md:px-12! md:py-5!"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
