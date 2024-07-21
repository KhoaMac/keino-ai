import Tips from "../Tips";
import InfoIcon from "@/public/assets/icons/info.svg";
import Image from "next/image";
import GroupCheckbox from "./GroupCheckbox";
import IconPlusActive from "@/public/assets/icons/plus-active.svg";
import Button from "../Button";
import { BUTTON_TYPES, checkboxes, tips } from "@/utils/CONSTANTS";
import { useState } from "react";
import IconDelete from "@/public/assets/icons/delete.svg";
import useOnboardingHooks from "./useOnboardingHooks";
import ChooseAvatar from "./ChooseAvatar";
import BrandVoiceName from "./BrandVoiceName";
import SuggestionGenerator from "./SuggestionGenerator";
import UploadBusinessReference from "./UploadBusinessReference";

const Onboarding = () => {
  const {
    isDisabledButton,
    handleOnSave,
    currentCheckedBox,
    handleSelectTab,
  } = useOnboardingHooks();
  return (
    <div className="flex flex-col px-5 md:pl-[3.125rem] md:pr-[3.75rem] py-10 bg-white rounded-0.93">
      <div className="flex flex-col mb-2.5">
        <p className="text-heading-medium-semibold text-gray-scale-100">
          Brand Voice
        </p>
        <p className="text-gray-scale-60 mt-1">
          Tailor the content to your brand voice. Simply input your company’s
          landing page URL. You can add additional brand voices later in the
          configure screen
        </p>
      </div>
      <div className="mt-[2.1875rem]">
        <Tips {...tips} />
      </div>
      <OnboardingSection title="Which describe you?" infoToolTip>
        <div className="mt-0.93">
          {checkboxes && (
            <GroupCheckbox
              checkboxes={checkboxes}
              name="checkbox"
              currentSelection={handleSelectTab}
            />
          )}
        </div>
      </OnboardingSection>

      {currentCheckedBox === 0 && (
        <>
          <OnboardingSection title="Company website URLs:" infoToolTip>
            <CompanyInputWebsites />
          </OnboardingSection>

          <OnboardingSection title="Business references">
            <UploadBusinessReference />
          </OnboardingSection>

          {/* Preview Keoni’s Brand Voice Suggestion */}
          <OnboardingSection title="Preview Keoni’s Brand Voice Suggestion">
            <SuggestionGenerator />
          </OnboardingSection>

          <OnboardingSection>
            <div className="custom-divider" />
          </OnboardingSection>

          {/* Brand Voice name */}
          <BrandVoiceName />
          
          {/* Choose Avatar */}
          <ChooseAvatar />
        </>
      )}

      {/* Save form */}
      <div className="flex flex-col gap-3.5 mt-[2.1875rem]">
        <Button
          text="Save & Next"
          type={isDisabledButton ? BUTTON_TYPES.DEFAULT : BUTTON_TYPES.DISABLED}
          disabled={isDisabledButton}
          onClick={handleOnSave}
          className="justify-center py-3 text-body-large-semibold text-white"
        />
        <Button
          text="Skip for now"
          type={BUTTON_TYPES.NONE}
          onClick={handleOnSave}
          className="justify-center text-gray-scale-60"
        />
      </div>
    </div>
  );
};

const CompanyInputWebsites = () => {
  const [numberOfInputFields, setNumberOfInputFields] = useState<number>(1);
  const handleAddUrl = () => {
    setNumberOfInputFields(numberOfInputFields + 1);
  };

  const handleOnDeleteUrl = () => {
    setNumberOfInputFields(numberOfInputFields - 1);
  };
  return (
    <>
      <div className="mt-1 gap-5 flex flex-col">
        {[...Array(numberOfInputFields)].map((_, index) => (
          <div className="flex items-center w-full gap-2.5" key={index}>
            <div className="flex items-center w-full">
              <div className="bg-gray-scale-20 py-[0.84375rem] rounded-l-lg border-l-1 border-y-1">
                <p className="text-gray-scale-80 px-2.5">https://</p>
              </div>
              <div className="border-y-1 border-r-1 w-full rounded-r-lg">
                <input
                  type="text"
                  placeholder="input URL"
                  className="bg-gray-scale-15 py-[0.84375rem] text-body-medium-regular w-full rounded-r-lg px-2 text-gray-scale-80"
                />
              </div>
            </div>

            {index > 0 && (
              <Button
                type={BUTTON_TYPES.NONE}
                icon={IconDelete}
                onClick={handleOnDeleteUrl}
                className="px-0 py-1"
              />
            )}
          </div>
        ))}
      </div>
      {numberOfInputFields < 3 && (
        <div className="mt-3.5 flex w-full justify-end">
          <Button
            text="Add more URLs"
            type={BUTTON_TYPES.NONE}
            icon={IconPlusActive}
            onClick={handleAddUrl}
          />
        </div>
      )}
    </>
  );
};

const OnboardingSection = ({
  title,
  children,
  infoToolTip = false,
}: {
  title?: string;
  children: React.ReactNode;
  infoToolTip?: boolean;
}) => {
  return (
    <div className="mt-[1.5625rem]">
      {title && (
        <div className="flex items-center gap-2">
          <p className="text-body-medium-semibold text-gray-scale-80">
            {title}
          </p>
          {infoToolTip && <Image src={InfoIcon} alt="Info Icon" />}
        </div>
      )}

      {children}
    </div>
  );
};

export default Onboarding;
export {
  OnboardingSection
}
