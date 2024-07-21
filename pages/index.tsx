import OnboardingLayout from "@/components/layouts/OnboardingLayout";
import Onboarding from "@/components/Onboarding";
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

      {/* Render the stepper list */}
      <div className="flex flex-col md:flex-row items-baseline md:items-center w-full gap-2.5 px-2.5 py-[1.5625rem]">
        {/* Map over the stepper list */}
        {stepperList &&
          stepperList.map((stepper: IStepper, index: number) => {
            /**
             * Render a single stepper item in the list.
             *
             * @param {IStepper} stepper - The stepper object containing the stepper's index, status, and title.
             * @param {number} index - The index of the stepper in the list.
             * @return {JSX.Element} The rendered stepper component.
             */
            return (
              <div className="flex flex-col md:flex-row md:items-center gap-2.5" key={index}>
                {/* Render the stepper component */}
                <Stepper {...{ ...stepper, currentStep: 3 }} />
                {/* Render a separator if it's not the last item in the list */}
                {index < stepperList.length - 1 && (
                  <div
                    className={`h-[1px] w-6 md:w-7 z-10 relative rotate-90 md:rotate-0 ${
                      stepper.status ? "bg-primary" : "bg-gray-scale-40"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
      </div>

      <Onboarding />
    </OnboardingLayout>
  );
}
