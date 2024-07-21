import Avatar01 from "@/public/assets/icons/default-avatar/avatar-1.svg";
import Avatar03 from "@/public/assets/icons/default-avatar/avatar-3.svg";
import Avatar05 from "@/public/assets/icons/default-avatar/avatar-5.svg";
import Avatar06 from "@/public/assets/icons/default-avatar/avatar-6.svg";
import Avatar07 from "@/public/assets/icons/default-avatar/avatar-7.svg";
import Avatar08 from "@/public/assets/icons/default-avatar/avatar-8.svg";
import { ChangeEvent, useState } from "react";

const useOnboardingHooks = () => {
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | ChangeEvent<HTMLInputElement>>();
  const [selectedAvatarFileName, setSelectedAvatarFileName] = useState<string>('')
  const handleOnSave = () => {
    console.log("save");
  };
  const handleOnSelectAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("==e.target", e.target.value);
  };

  const handleUploadImageFromLocal = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      setSelectedAvatarFileName(file.name)
      reader.onload = () => {
        setSelectedAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const listDefaultAvatar = [
    Avatar05,
    Avatar06,
    Avatar08,
    Avatar07,
    Avatar03,
    Avatar01,
  ];
  
  return {
    isDisabledButton,
    selectedAvatar,
    handleOnSave,
    handleOnSelectAvatar,
    handleUploadImageFromLocal,
    listDefaultAvatar,
    selectedAvatarFileName
  }
}

export default useOnboardingHooks
