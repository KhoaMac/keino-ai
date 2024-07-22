// src/redux/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import onboardingReducer from '../slice/onboardingSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    onboarding: onboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
