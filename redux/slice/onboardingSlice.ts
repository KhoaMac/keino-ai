// src/redux/slices/onboardingSlice.ts
import { IBrandVoices } from '@/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  onboardingSelectedStep: number
  chooseBrandVoiceTemplate: IBrandVoices
  descriptionOfBrandVoice: string
  brandVoiceName: string
  businessRefFile: string,
  inputUrls: string[],
  submitForm: any
}

const initialState: OnboardingState = {
  onboardingSelectedStep: 0,
  chooseBrandVoiceTemplate: {
    name: '',
    avatar: '',
    description: '',
  },
  descriptionOfBrandVoice: '',
  brandVoiceName: '',
  businessRefFile: '',
  inputUrls: [],
  submitForm: {}
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setChooseBrandVoiceTemplate: (state, action: PayloadAction<IBrandVoices>) => {
      state.chooseBrandVoiceTemplate = {
        name: action.payload.name,
        avatar: action.payload.avatar,
        description: action.payload.description,
      };
    },
    setOnboardingCheckedStep: (state, action: PayloadAction<number>) => {
      state.onboardingSelectedStep = action.payload; 
    },
    setDescriptionOfBrandVoice: (state, action: PayloadAction<string>) => {
      state.descriptionOfBrandVoice = action.payload;
    },
    setBrandVoiceName: (state, action: PayloadAction<string>) => {
      state.brandVoiceName = action.payload
    },
    setBusinessUploadFile: (state, action: PayloadAction<string>) => {
      state.businessRefFile = action.payload
    },
    setInputUrls: (state, action: PayloadAction<string>) => {
      state.inputUrls = [...state.inputUrls, action.payload];
    },
    deleteInputUrl: (state, action: PayloadAction<number>) => {
      state.inputUrls = state.inputUrls.filter((_, index) => index !== action.payload);
      console.log('==action', action.payload);
    },
    setSubmitForm: (state, action) => {
      state.submitForm = action.payload;
      console.log('==state.submitForm ', state.submitForm )
    }
  },
});

export const {
  setSubmitForm,
  setOnboardingCheckedStep,
  setChooseBrandVoiceTemplate,
  setDescriptionOfBrandVoice,
  setBrandVoiceName,
  setBusinessUploadFile,
  setInputUrls,
  deleteInputUrl
} = onboardingSlice.actions;
export default onboardingSlice.reducer;

