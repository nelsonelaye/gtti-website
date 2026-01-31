import Image from "next/image";
import React from "react";
import Button from "./UI/Button";
import Link from "next/link";

const SponsorshipSection = () => {
  return (
    <section className="w-full bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  gap-12 px-5">
        <div className="w-full max-md:h-96 h-full lg:w-1/2 max-h-[800px] overflow-hidden relative rounded-lg ">
          <Image
            src="/images/partners.jpg"
            alt="Exhibitor booth"
            width={800}
            height={640}
            className="rounded-lg object-cover shadow-lg w-full! h-full hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white!">
            Become a Sponsor
          </h2>
          <p className="md:text-lg text-gray-300 mb-8">
            Join us to be part of the exclusive group of private companies,
            producers, manufacturers, government Organizations, International
            Agencies and contributors that are supporting the ILASE Expo 2026.
            As you well know, sponsorships are great opportunity to show your
            commitment as a leader in the fast growing the fast growing
            livestock and aquaculture industry and our sponsors are crucial to
            the success of this world-class livestock and aquaculture Trade fair
            Expo 2026.
          </p>
          <p className="md:text-lg text-gray-300 mb-8">
            Position your brand through our{" "}
            <span className="font-bold">Bronze, Silver, Gold, or Platinum</span>{" "}
            packages. To sponsor, exhibit, or advertise in the event catalogue,
            contact us at{" "}
            <Link
              href="https://wa.me/2348137969988"
              target="_blank"
              className="text-secondary underline"
            >
              +2348137969988
            </Link>{" "}
            (WhatsApp) or{" "}
            <Link
              href="tel:+2348033628532"
              target="_blank"
              className="text-secondary underline"
            >
              +2348033628532
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
