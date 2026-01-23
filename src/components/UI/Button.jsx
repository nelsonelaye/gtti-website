import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ text, className, variant }) => {
  return (
    <button
      className={`text-xs md:text-sm flex items-center text-primary uppercase justify-center gap-2 px-4 md:px-6 py-4 md:py-3 font-asap font-semibold rounded border cursor-pointer transition-all duration-700 ${
        variant === "primary"
          ? "bg-secondary  border-secondary hover:bg-primary hover:text-white hover:border-primary"
          : "bg-transparent text-white border-white hover:bg-primary hover:border-primary"
      } ${className}`}
    >
      {text}

      {/* <GoArrowUpRight size="24px" /> */}
    </button>
  );
};

export default Button;
