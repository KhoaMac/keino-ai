import Dropzone from "../Dropzone";
import Button from "../Button";
import { BUTTON_TYPES } from "@/utils/CONSTANTS";
import IconGenerate from "@/public/assets/icons/generate.svg";
import useOnboardingHooks from "./useOnboardingHooks";
import IconPDF from "@/public/assets/icons/pdf.svg";
import IconFile from "@/public/assets/icons/file.svg";
import Image from "next/image";

export default function UploadBusinessReference() {
  const { files, handleDrop } = useOnboardingHooks();
  console.log('==files', files)
  return (
    <div>
      <div
        className={`flex items-center ${
          files.length > 0 ? "justify-start gap-5" : "justify-center"
        } w-full border-2 border-dashed border-primary rounded-lg bg-primary-disabled-50 p-5 mt-2`}
      >
        {files.length > 0 && (
          <div className="relative w-20 h-20">
            <Image src={IconPDF} alt="pdf" layout="fill" />
          </div>
        )}
        <div className="flex flex-col items-center justify-center">
          <Dropzone
            onDrop={handleDrop}
            className={`${
              files.length > 0 ? "flex-col-reverse w-auto h-auto" : "h-auto"
            }`}
          >
            {files.length > 0 ? (
              <div className="mt-3.5 flex w-full">
                <Button
                  text="Change File"
                  type={BUTTON_TYPES.OUTLINE}
                  icon={IconGenerate}
                  onClick={() => handleDrop}
                  className="justify-center !py-1.5 !text-body-small-semibold text-primary"
                />
              </div>
            ) : (
              <div className="flex-col flex items-center gap-2.5 cursor-pointer">
                <div className="relative w-8 h-8">
                  <Image src={IconFile} alt="pdf" layout="fill" />
                </div>
                <p className="text-gray-scale-60 text-center max-w-[17.25rem]">
                  Drag & Drop or{" "}
                  <span className="text-primary underline text-body-small-semibold">
                    Choose file
                  </span>{" "}
                  to upload .doc, .docx, .html, .md, .pdf, .pptx or .txt
                </p>
              </div>
            )}
            {files &&
              Array.isArray(files) &&
              files.map((file, index) => (
                <p
                  key={index}
                  className="text-body-medium-semibold text-gray-scale-80"
                >
                  {file.name}
                </p>
              ))}
          </Dropzone>
        </div>
      </div>
    </div>
  );
}
