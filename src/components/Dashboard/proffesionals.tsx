import React from "react";
import imageOne from "@/assets/images/professionalOne.png";
import imageTwo from "@/assets/images/professionalTwo.png";
import imageThree from "@/assets/images/professionalThree.png";
import imageFour from "@/assets/images/professionalFour.png";
import Image from "next/image";
const Professionals = () => {
  const images = [imageOne, imageTwo, imageThree, imageFour];
  return (
    <div className="flex items-center space-x-3 font-Pop">
      <div className="flex items-center -space-x-2">
        {images?.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.src}
              alt="profiles"
              height="200"
              width="200"
              className="max-w-7 max-h-7 border-[1.5px] rounded-full"
            />
          );
        })}
      </div>
      <p className="leading-[130%] text-xs sm:text-sm text-[var(--color-normalText)]">
        Elena, Marcus, Priya
      </p>{" "}
      <p className="leading-[130%] text-xs sm:text-sm text-[var(--color-normalText)]">
        +12 others
      </p>
    </div>
  );
};

export default Professionals;
