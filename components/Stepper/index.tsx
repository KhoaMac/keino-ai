import { IStepper } from "@/interface";
import CheckedCircle from "@/public/assets/icons/checklist.svg";
import Image from "next/image";

const Stepper = (item: IStepper) => {

  const currentStep = 2;
  return (
    <div className="flex md:items-center gap-0.93 z-20">
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
              currentStep === item.index ? "text-white" : "text-gray-scale-40 bg-white"
            }  text-caption-semibold text-center`}
          >
            {item.index + 1}
          </span>
        </div>
      )}
      <p
        className={`text-body-medium-regular ${
          item.status
            ? "text-primary"
            : currentStep === item.index
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
