import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'home', // 'home' | 'contact' | 'privacy' | 'terms' | 'about'
  isDemoModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    openDemoModal: (state) => {
      state.isDemoModalOpen = true;
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

export const { setCurrentPage, openDemoModal, closeDemoModal, triggerDemoScroll } = uiSlice.actions;
export default uiSlice.reducer;
