import Tips from "../Tips";
import InfoIcon from "@/public/assets/icons/info.svg";
import Image from "next/image";
import GroupCheckbox from "./GroupCheckbox";
import IconPlusActive from "@/public/assets/icons/plus-active.svg";
import Button from "../Button";
import { BUTTON_TYPES, checkboxes, tips } from "@/utils/CONSTANTS";
import { ChangeEvent, useState } from "react";
import IconDelete from "@/public/assets/icons/delete.svg";
import IconPlusCircle from "@/public/assets/icons/plus-circle.svg";
import useOnboardingHooks from "./useOnboardingHooks";
import IconGenerate from "@/public/assets/icons/generate.svg";

const Onboarding = () => {
  const {
    isDisabledButton,
    selectedAvatar,
    handleOnSave,
    handleOnSelectAvatar,
    handleUploadImageFromLocal,
    listDefaultAvatar,
    selectedAvatarFileName,
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
      <OnboardingSection title="Which describe you?">
        <div className="mt-0.93">
          {checkboxes && (
            <GroupCheckbox
              checkboxes={checkboxes}
              name="checkbox"
              currentSelection={(n) => console.log("nnn", n)}
            />
          )}
        </div>
      </OnboardingSection>

      <OnboardingSection title="Company website URLs:" infoToolTip>
        <CompanyInputWebsites />
      </OnboardingSection>

      <OnboardingSection title="Preview Keoni’s Brand Voice Suggestion">
        <div className="custom-divder" />
      </OnboardingSection>

      <OnboardingSection>
        <div className="custom-divider" />
      </OnboardingSection>

      <OnboardingSection title="Brand voice name">
        <div className="mt-1">
          <div className="border-y-1 border-1 w-full rounded-lg">
            <input
              type="text"
              placeholder="Enter your brand voice name"
              className="bg-gray-scale-15 py-3 text-body-medium-regular w-full rounded-lg px-2 text-gray-scale-80"
            />
          </div>
        </div>
      </OnboardingSection>

      <OnboardingSection title="Choose avatar">
        <div className="mt-1 flex w-full gap-5">
          <div className="flex max-w-60 w-full flex-wrap gap-0.93">
            {listDefaultAvatar.map((avatar: string, index: number) => (
              <label
                key={index}
                className={`cursor-pointer w-[4.375rem] h-[4.375rem] rounded-lg relative ${
                  selectedAvatar === avatar ? "border-2 border-primary" : ""
                }`}
              >
                <input
                  type="radio"
                  name="avatar"
                  value={avatar}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    handleOnSelectAvatar(event)
                  }
                  className="hidden"
                />
                <Image
                  src={avatar}
                  alt={`default-avatar-${index}`}
                  layout="fill"
                  className="rounded-lg"
                />
              </label>
            ))}
          </div>
          <div className="bg-primary-disabled-50 w-full justify-center items-center flex flex-col border-1 rounded-lg border-dashed border-primary">
            <div className={`${selectedAvatar ? 'flex p-5 w-full gap-5' : 'flex flex-col gap-1.5'}`}>
              {selectedAvatar ? (
                <>
                  <div className="w-[7.125rem] h-[7.125rem] relative">
                    <Image
                      className="w-full h-auto max-w-[17.1875rem] max-h-[17.1875rem] rounded-lg"
                      src={
                        typeof selectedAvatar === "string" ? selectedAvatar : ""
                      }
                      layout="fill"
                      alt="uploaded-avatar"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p>{selectedAvatarFileName}</p>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-center border-1 border-primary flex items-center rounded-lg px-4 py-2 mt-0.93 w-32"
                    >
                      <Image
                        src={IconGenerate}
                        alt="plus-circle"
                        className="mx-auto"
                      />
                      <p className="text-primary text-body-small-semibold">Change File</p>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          handleUploadImageFromLocal(event)
                        }
                      />
                    </label>
                  </div>
                </>
              ) : (
                <div className="w-44">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-center"
                  >
                    <Image
                      src={IconPlusCircle}
                      alt="plus-circle"
                      className="mx-auto"
                    />
                    <p className="text-primary">Upload custom avatar</p>
                    <p className="text-gray-scale-40 text-caption-regular">
                      Minimum image size: 200 x 200 px. Maximum file size: 1 MB
                    </p>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleUploadImageFromLocal(event)
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </OnboardingSection>

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
