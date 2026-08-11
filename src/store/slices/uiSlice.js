import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDemoModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openDemoModal: (state) => {
      state.isDemoModalOpen = true;
      const element = document.getElementById('demo-form');
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element, { offset: 0, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    closeDemoModal: (state) => {
      state.isDemoModalOpen = false;
    },
    triggerDemoScroll: () => {
      const element = document.getElementById('demo-form');
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element, { offset: 0, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  },
});

export const { openDemoModal, closeDemoModal, triggerDemoScroll } = uiSlice.actions;
export default uiSlice.reducer;
