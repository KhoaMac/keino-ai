import { ChangeEvent } from "react";
import { OnboardingSection } from ".";
import useOnboardingHooks from "./useOnboardingHooks";
import Image from "next/image";
import IconGenerate from "@/public/assets/icons/generate.svg";
import IconPlusCircle from "@/public/assets/icons/plus-circle.svg";

export default function ChooseAvatar() {
  const {
    selectedAvatar,
    handleOnSelectAvatar,
    handleUploadImageFromLocal,
    listDefaultAvatar,
    selectedAvatarFileName,
  } = useOnboardingHooks();
  return (
    <>
      {/* Choose Avatar */}
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
            <div
              className={`${
                selectedAvatar
                  ? "flex p-5 w-full gap-5"
                  : "flex flex-col gap-1.5"
              }`}
            >
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
                      className="cursor-pointer text-center border-1 border-primary flex items-center rounded-lg px-4 py-1.5 mt-0.93 w-32"
                    >
                      <Image
                        src={IconGenerate}
                        alt="plus-circle"
                        className="mx-auto"
                      />
                      <p className="text-primary text-body-small-semibold">
                        Change File
                      </p>
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
    </>
  );
}
