import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './slices/demoSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    demo: demoReducer,
    ui: uiReducer,
  },
});

export default store;
