import React from "react";
import Image from "next/image";

const SpeakerCard = ({ name, title, imageSrc }) => {
  return (
    <div>
      {/* </> */}
      <div className="relative w-full h-80 md:h-96 rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-top hover:scale-110 transition-transform duration-500 cursor-grab"
        />
        {/* <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-linear-to-t from-primary/50 via-transparent to-transparent"></div> */}
      </div>

      <div className="py-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-1 text-primary">
          {name}
        </h3>
        <p className="text-sm md:text-base opacity-50">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
