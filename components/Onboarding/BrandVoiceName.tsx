import { ChangeEvent } from "react";
import { OnboardingSection } from ".";
import useOnboardingHooks from "./useOnboardingHooks";

export default function BrandVoiceName() {
  const { handleInputBrandVoiceName } = useOnboardingHooks()
  return (
    <OnboardingSection title="Brand voice name">
      <div className="mt-1">
        <div className="border-y-1 border-1 w-full rounded-lg">
          <input
            type="text"
            placeholder="Enter your brand voice name"
            className="bg-gray-scale-15 py-3 text-body-medium-regular w-full rounded-lg px-2 text-gray-scale-80"
            onBlur={(event: ChangeEvent<HTMLInputElement>) => {
              handleInputBrandVoiceName(event)
            }}
          />
        </div>
      </div>
    </OnboardingSection>
  );
}
