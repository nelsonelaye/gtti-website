import React from "react";

const Button = ({ text, className, variant }) => {
  return (
    <button
      className={`text-xs md:text-sm px-4 md:px-6 py-4 md:py-3 text-primary uppercase font-asap font-medium rounded border border-neutral hover:bg-primary hover:text-white hover:border-primary cursor-pointer  ${
        variant === "primary"
          ? "bg-secondary border-secondary"
          : "bg-transparent text-white"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
