import React from "react";

interface CountrySectionProps {
  title: string;
  text: string;
  flag: string;
  image: string;
  imagePosition?: "left" | "right";
  buttonLabel: string;
}

export const CountrySection: React.FC<CountrySectionProps> = ({
  title,
  text,
  flag,
  image,
  imagePosition = "right",
  buttonLabel,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-10 gap-10 max-w-7xl mx-auto">
      {isImageLeft && (
        <div className="flex-1">
          <img
            src={image}
            alt="country"
            className="w-full h-auto object-cover rounded-[20px]"
          />
        </div>
      )}

      <div className="flex-1 text-[#1C162B]">
        <div className="flex items-center gap-3 mb-4">
          <img src={flag} alt="flag" className="w-20 rounded-sm" />
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-base md:text-lg text-[#1C162B] opacity-80 mb-6 whitespace-pre-line">
          {text}
        </p>
        <button className="bg-[#A457EC] text-white font-medium px-6 py-3 rounded-md hover:opacity-90 transition">
          {buttonLabel}
        </button>
      </div>

      {!isImageLeft && (
        <div className="flex-1">
          <img
            src={image}
            alt="country"
            className="w-full h-auto object-cover rounded-[20px]"
          />
        </div>
      )}
    </section>
  );
};
