import React from "react";
import { IoClose } from "react-icons/io5";

const YoutubeFrame = ({ onClose }) => {
  return (
    <div className="fixed h-screen w-screen inset-0 z-600 flex items-center justify-center bg-black/70">
      <IoClose
        size="32px"
        className="absolute top-5 right-5 text-white text-2xl cursor-pointer"
        onClick={onClose}
      />
      <iframe
        width="80%"
        height="60%"
        src={`https://www.youtube.com/embed/8Yr4RlmEu0c`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="Embedded youtube"
        className="rounded-md md:w-[60%]!"
      />
    </div>
  );
};

export default YoutubeFrame;
