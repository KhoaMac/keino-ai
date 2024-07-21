import useOnboardingHooks from "./useOnboardingHooks";
import Image from "next/image";
import IconSparkDisabled from "@/public/assets/icons/spark-disabled.svg";
import Button from "../Button";
import { BUTTON_TYPES } from "@/utils/CONSTANTS";
import IconGenerate from "@/public/assets/icons/generate.svg";

interface ISuggestionProps {
  currentCheckedBox?: number;
}
const SuggestionGenerator: React.FC<ISuggestionProps> = ({
  currentCheckedBox = 0
}) => {
  const {
    isDisabledButton,
    handleGenerateBrandVoiceSuggestions,
    suggestionText,
  } = useOnboardingHooks();
  return (
    <>
      <div className="bg-primary-disabled-50 border-dashed border-1 p-5 gap-2.5 mt-1.5 mb-2.5">
        {suggestionText ? (
          <span className="text-gray-scale-60 text-body-medium-regular">
            {suggestionText}
          </span>
        ) : (
          <>
            <div className="relative">
              <Image
                src={IconSparkDisabled}
                alt="spark-disabled"
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col text-center w-full">
              {currentCheckedBox === 0 ? (
                <>
                  <span className="text-body-medium-regular text-gray-scale-60">
                    Fill out all the fields, and we'll craft the perfect brand
                    voice for you!
                  </span>
                  <Button
                    text="Generate Now"
                    type={BUTTON_TYPES.NONE}
                    disabled={isDisabledButton}
                    onClick={handleGenerateBrandVoiceSuggestions}
                    className="justify-center py-3 text-body-medium-semibold text-primary underline"
                  />
                </>
              ) : (
                <span
                  className="text-body-medium-regular text-gray-scale-60 cursor-pointer"
                  onClick={handleGenerateBrandVoiceSuggestions}
                >
                  Alternatively, we can{" "}
                  <span className="text-primary underline text-body-medium-regular font-bold">
                    Generate
                  </span>{" "}
                  a brand voice for you.
                </span>
              )}
            </div>
          </>
        )}
      </div>
      {suggestionText && (
        <div className="mt-3.5 flex w-full justify-end">
          <Button
            text="Regenerate"
            type={BUTTON_TYPES.NONE}
            icon={IconGenerate}
            onClick={handleGenerateBrandVoiceSuggestions}
            className="justify-center py-3 text-body-medium-semibold text-primary underline"
          />
        </div>
      )}
    </>
  );
};

export default SuggestionGenerator;
