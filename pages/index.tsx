import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import Stepper from "@/components/Stepper";
import { IStepper } from "@/interface";

export default function Home() {
  const name = "Jordan";

  const stepperList: IStepper[] = [
    {
      index: 0,
      status: true,
      title: "About you",
    },
    {
      index: 1,
      status: true,
      title: "Inspirations",
    },
    {
      index: 2,
      status: false,
      title: "Brand Voice",
    },
    {
      index: 3,
      status: false,
      title: "Knowledge Base",
    },
  ];


  return (
    <OnboardingLayout>
      <div>
        <h1 className="text-title-small-semibold text-gray-scale-100">
          Welcome onboard, {name}
        </h1>
        <p className="text-gray-scale-60">
          Help Keoni.ai create personalized content for you (&lt;5 min)
        </p>
      </div>
      <div className="flex items-center w-full gap-2.5 px-2.5 py-[1.5625rem]">
        {stepperList &&
          stepperList.map((stepper: IStepper, index: number) => {
            return (
              <div className="flex items-center gap-2.5" key={index}>
                <Stepper {...{ ...stepper, currentStep: 3 }} />
                {index < stepperList.length - 1 && (
                  <div
                    className={`h-[1px] w-7 ${
                      stepper.status ? "bg-primary" : "bg-gray-scale-40"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
      </div>
    </OnboardingLayout>
  );
}
