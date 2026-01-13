import Image from "next/image";
import Header from "@/components/Header";
import SpeakerCard from "@/components/SpeakerCard";
import Button from "@/components/UI/Button";
import { FaPlay, FaArrowRight } from "react-icons/fa6";
import BrandsCarousel from "@/components/BrandsCarousel";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"></main> */}
      <section className="relative w-full h-screen overflow-hidden bg-primary-light px-5">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cows-hero.jpg"
            alt="Conference room"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-primary-light/60"></div>
        </div>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 "></div> */}

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center flex-col">
          <div className="text-center text-white mb-20">
            <div className="mb-8">
              <p className="text-xl font-light tracking-wider mb-2">
                OCTOBER 9TH - 15TH 2026
              </p>
              <h1 className="text-4xl md:text-7xl font-bold mb-4 max-w-5xl">
                International Livestock and Agriculture Investment Summit &
                Exhibition 2026
              </h1>
              <p className="text-xl md:text-2xl font-light">Abuja</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              text="register to attend"
              variant="primary"
              className="md:px-12! md:py-5!"
            />
            <Button
              text="Apply to Exhibit"
              variant="secondary"
              className="md:px-12! md:py-5!"
            />
          </div>
        </div>
      </section>
      <section className="w-full px-5 md:max-w-[70%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-4">
              About the <br /> Summit
            </h2>
          </div>
          <div className="md:col-span-1">
            <p className="text-lg mb-4">
              The Annual Professional Conference is an exciting gathering of
              industry experts, thought leaders, and professionals from across
              the country. This year's event will feature a wide range of
              sessions and workshops designed to help attendees stay ahead of
              the curve and achieve their professional goals.
            </p>
            <p className="text-lg">
              This year's conference will be held at the{" "}
              <span className="font-bold">
                San Diego Convention Center in San Diego, California.
              </span>{" "}
              With easy access to transportation, nearby hotels, and a wide
              range of dining and entertainment options, SDCC is the perfect
              place to host our premier conference.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8  md:min-h-[600px]">
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/conference.jpg"
                alt="Conference Audience"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/goat.jpg"
                alt="Panel Discussion"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 relative w-full h-auto min-h-[536px] md:h-full">
            <Image
              src="/images/landscape.jpg"
              alt="Conference Hall"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="relative w-full h-96 md:h-screen">
          <Image
            src="/images/black-female-speaker.jpg"
            alt="Cow grazing in green field"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button className="w-16 h-16 md:w-32 md:h-32 bg-secondary rounded-full flex items-center justify-center transition-all duration-700 hover:scale-120 shadow-lg cursor-pointer">
              <FaPlay color="black" size="32px" />
            </button>
          </div>
          <div className="absolute inset-0 bg-primary-light/60"></div>
        </div>
      </section>

      <section className="w-full px-5 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black relative inline-block">
              Speakers
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-transparent via-white to-transparent"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpeakerCard
              name="Deepankar Rustagi"
              title="Founder & CEO, Omniretail Technologies"
              imageSrc="/images/speaker-1.jpg"
            />
            <SpeakerCard
              name="Kola Aina"
              title="Founding Partner, Ventures Platform Fund"
              imageSrc="/images/speaker-2.jpg"
            />
            <SpeakerCard
              name="Emeka Emetarom"
              title="Founder & CEO, Qore"
              imageSrc="/images/speaker-3.jpg"
            />
            <SpeakerCard
              name="Kola Aina"
              title="Founding Partner, Ventures Platform Fund"
              imageSrc="/images/speaker-2.jpg"
            />
            <SpeakerCard
              name="Emeka Emetarom"
              title="Founder & CEO, Qore"
              imageSrc="/images/speaker-3.jpg"
            />
            <SpeakerCard
              name="Uka Eje"
              title="CEO, Thrive Agric"
              imageSrc="/images/speaker-1.jpg"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  gap-12 px-5">
          <div className="w-full lg:w-1/2 max-h-[500px] overflow-hidden relative rounded-lg ">
            <Image
              src="/images/exhibition.jpg"
              alt="Exhibitor booth"
              width={800}
              height={640}
              className="rounded-lg object-cover shadow-lg w-full! hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-10"></div>
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apply to Exhibit at the Summit
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi.
            </p>
            <Button
              text="APPLY TO EXHIBIT"
              variant="primary"
              className="md:px-12! md:py-5!"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
              Sponsors
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            </h2>
          </div>

          {/* <div className="flex items-center justify-center gap-8"> */}
          <BrandsCarousel />
          {/* </div> */}
        </div>
      </section>

      <section className=" py-16  text-white">
        <div className="mx-auto px-5 flex flex-col gap-4">
          {/* <div className="grid grid-cols-3 gap-4 mb-8"> */}

          {/* <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
              Highlights
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-transparent via-white to-transparent"></div>
            </h2>
          </div> */}
          <GalleryCarousel />
          <GalleryCarousel reverse={true} />
          {/* </div> */}

          <div className="mx-auto pt-5">
            <Button
              text="View highlights"
              variant="primary"
              className="md:px-12! md:py-5!"
            />
          </div>
        </div>
      </section>

      <section className=" py-16 ">
        <div className="mx-auto px-5 flex flex-col gap-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Connect, Learn, Innovate
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Innovate Tech Conference
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be inspired by thought-provoking keynotes, workshops, and
              networking opportunities. Unlock new opportunities and insights at
              the forefront of innovation.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center mx-auto hover:bg-gray-800 transition-colors">
              Get Tickets <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
