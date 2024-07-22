import Avatar09 from "@/public/assets/icons/default-avatar/avatar-9.svg";
import Avatar04 from "@/public/assets/icons/default-avatar/avatar-4.svg";
import Avatar02 from "@/public/assets/icons/default-avatar/avatar-2.svg";
import Avatar06 from "@/public/assets/icons/default-avatar/avatar-6.svg";
import Avatar07 from "@/public/assets/icons/default-avatar/avatar-7.svg";
import Avatar08 from "@/public/assets/icons/default-avatar/avatar-8.svg";
import { listDescriptions, TABLE_DATA_BRAND_VOICES } from "@/utils/CONSTANTS";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteInputUrl, setBrandVoiceName, setBusinessUploadFile, setChooseBrandVoiceTemplate, setDescriptionOfBrandVoice, setInputUrls, setSubmitForm } from "@/redux/slice/onboardingSlice";

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
  const [isBrandVoiceDrawerOpen, setBrandVoiceDrawerOpen] = useState<boolean>(false);

  // Handle redux, slice, store
  const dispatch = useDispatch()
  const onboardingSelectedStep = useSelector((state: RootState) => state.onboarding.onboardingSelectedStep);
  const chooseBrandVoiceTemplate = useSelector((state: RootState) => state.onboarding.chooseBrandVoiceTemplate);
  const descriptionOfBrandVoice = useSelector((state: RootState) => state.onboarding.descriptionOfBrandVoice);
  const brandVoiceName = useSelector((state: RootState) => state.onboarding.brandVoiceName);
  const businessRefFile = useSelector((state: RootState) => state.onboarding.businessRefFile);
  const inputUrls = useSelector((state: RootState) => state.onboarding.inputUrls);


  const handleOnSave = useCallback(() => {
    switch (onboardingSelectedStep) {
      case 0:
        dispatch(setSubmitForm({
          checkedStep: onboardingSelectedStep,
          descriptionOfBrandVoice: descriptionOfBrandVoice,
          brandVoiceName: brandVoiceName,
          files: businessRefFile,
          inputUrls: inputUrls
        }))
        break
      case 1:
        dispatch(setSubmitForm({
          checkedStep: onboardingSelectedStep,
          descriptionOfBrandVoice: descriptionOfBrandVoice,
          brandVoiceName: brandVoiceName,
        }))
        break
      case 2:
        dispatch(setSubmitForm({
          checkedStep: onboardingSelectedStep,
          chooseBrandVoiceTemplate: chooseBrandVoiceTemplate,
        }))
        break;
    }
    
  }, [onboardingSelectedStep,
    TABLE_DATA_BRAND_VOICES,
    dispatch,
    chooseBrandVoiceTemplate,
    descriptionOfBrandVoice,
    businessRefFile,
    inputUrls
  ]);

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
  const handleGenerateBrandVoiceSuggestions = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * listDescriptions.length);
    setSuggestionText(listDescriptions[randomIndex]);
    dispatch(setDescriptionOfBrandVoice(listDescriptions[randomIndex]))
  }, []);
  
  const handleDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    dispatch(setBusinessUploadFile(acceptedFiles[0].name));
  }, [dispatch]);

  const handleAddUrl = () => {
    setNumberOfInputFields(numberOfInputFields + 1);
  };

  const handleOnDeleteUrl = useCallback((index: number) => {
    // setNumberOfInputFields(numberOfInputFields - 1);
    dispatch(deleteInputUrl(index));
  }, [dispatch]);

  const handleChange = useCallback((index: number) => {
    dispatch(setChooseBrandVoiceTemplate(TABLE_DATA_BRAND_VOICES[index]));
    setSelectedBrandVoiceIndex(index);
  }, [onboardingSelectedStep, dispatch]);

  const toggleDrawerViewMore = (index?: number) => {
    setBrandVoiceDrawerOpen(!isBrandVoiceDrawerOpen);
    if (index) setSelectViewMoreIndex(index)
  };

  const handleDescriptionOfBrandVoice = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!event.target.value) return
    dispatch(setDescriptionOfBrandVoice(event.target.value))
  }, [dispatch])


  const handleInputBrandVoiceName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return
    dispatch(setBrandVoiceName(event.target.value))
  }, [dispatch])

  const handleCustomWebsiteUrls = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return
    const inputUrls: string = event.target.value;
    dispatch(setInputUrls(inputUrls))
  }, [dispatch])

  useEffect(() => {
    dispatch(setChooseBrandVoiceTemplate(TABLE_DATA_BRAND_VOICES[selectedBrandVoiceIndex]));
  }, [dispatch, selectedBrandVoiceIndex])

  useEffect(() => {
    switch (onboardingSelectedStep) {
      case 2:
        setIsDisabledButton(false);
        break
    }
  }, [onboardingSelectedStep, isDisabledButton])
  
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
    selectDefaultAvatarIndex,
    handleDescriptionOfBrandVoice,
    handleInputBrandVoiceName,
    handleCustomWebsiteUrls
  }
}

export default useOnboardingHooks
