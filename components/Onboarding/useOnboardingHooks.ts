import Avatar09 from "@/public/assets/icons/default-avatar/avatar-9.svg";
import Avatar04 from "@/public/assets/icons/default-avatar/avatar-4.svg";
import Avatar02 from "@/public/assets/icons/default-avatar/avatar-2.svg";
import Avatar06 from "@/public/assets/icons/default-avatar/avatar-6.svg";
import Avatar07 from "@/public/assets/icons/default-avatar/avatar-7.svg";
import Avatar08 from "@/public/assets/icons/default-avatar/avatar-8.svg";
import { listDescriptions } from "@/utils/CONSTANTS";
import { ChangeEvent, useCallback, useState } from "react";

const useOnboardingHooks = () => {
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | ChangeEvent<HTMLInputElement>>();
  const [selectedAvatarFileName, setSelectedAvatarFileName] = useState<string>('')
  const [currentCheckedBox, setCurrentCheckedBox] = useState<number>(0);
  const [suggestionText, setSuggestionText] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [numberOfInputFields, setNumberOfInputFields] = useState<number>(1);
  const [selectedBrandVoiceIndex, setSelectedBrandVoiceIndex] = useState<number>(0);
  const [selectViewMoreIndex, setSelectViewMoreIndex] = useState<number>(0);
  const [selectDefaultAvatarIndex, setSelectDefaultAvatarIndex] = useState<number>(0)
  const handleOnSave = () => {
    // console.log("save");
  };
  const handleOnSelectAvatar = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    console.log("==e.target", e.target.value);
    setSelectDefaultAvatarIndex(index)
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
    Avatar06,
    Avatar07,
    Avatar09,
    Avatar08,
    Avatar04,
    Avatar02,
  ];

  const handleSelectTab = useCallback((n: number) => {
    setCurrentCheckedBox(n);
  }, []);

  /**
   * Generate a random suggestion text from listDescriptions
   */
  const handleGenerateBrandVoiceSuggestions = () => {
    const randomIndex = Math.floor(Math.random() * listDescriptions.length);
    setSuggestionText(listDescriptions[randomIndex]);
  };
  
  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const handleAddUrl = () => {
    setNumberOfInputFields(numberOfInputFields + 1);
  };

  const handleOnDeleteUrl = () => {
    setNumberOfInputFields(numberOfInputFields - 1);
  };

  const handleChange = (index: number) => {
    setSelectedBrandVoiceIndex(index);
  };

  const [isBrandVoiceDrawerOpen, setBrandVoiceDrawerOpen] = useState(false);

  const toggleDrawerViewMore = (index?: number) => {
    setBrandVoiceDrawerOpen(!isBrandVoiceDrawerOpen);
    if (index) setSelectViewMoreIndex(index)
  };
  
  return {
    isDisabledButton,
    selectedAvatar,
    handleOnSave,
    handleOnSelectAvatar,
    handleUploadImageFromLocal,
    listDefaultAvatar,
    selectedAvatarFileName,
    currentCheckedBox,
    setCurrentCheckedBox,
    handleSelectTab,
    handleGenerateBrandVoiceSuggestions,
    suggestionText,
    files,
    handleDrop,
    numberOfInputFields,
    handleAddUrl,
    handleOnDeleteUrl,
    selectedBrandVoiceIndex,
    handleChange,
    toggleDrawerViewMore,
    isBrandVoiceDrawerOpen,
    selectViewMoreIndex,
    selectDefaultAvatarIndex
  }
}

export default useOnboardingHooks
