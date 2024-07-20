import { IStepper } from "@/interface";
import CheckedCircle from "@/public/assets/icons/checklist.svg";
import Image from "next/image";
import { useMemo, useState } from "react";

const Stepper = (item: IStepper) => {
  console.log("===item", item.index);
  const currentStep = 2;
  return (
    <div className="flex items-center gap-[0.9375rem]">
      {item.status ? (
        <Image src={CheckedCircle} alt="Checked Circle" />
      ) : (
        <div
          className={`w-[1.5625rem] h-[1.5625rem] flex items-center rounded-full ${
            currentStep === item.index
              ? "bg-primary"
              : " border-1 border-gray-scale-40"
          }`}
        >
          <span
            className={`mx-auto ${
              currentStep === item.index ? "text-white" : "text-gray-scale-40"
            }  text-caption-semibold text-center`}
          >
            {item.index + 1}
          </span>
        </div>
      )}
      <p
        className={`text-body-medium-semibold ${
          !item.status && currentStep === item.index
            ? "text-primary"
            : "text-gray-scale-40"
        }`}
      >
        {item.title}
      </p>
    </div>
  );
};

export default Stepper;
