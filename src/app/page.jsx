import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/UI/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
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
    </main>
  );
}
