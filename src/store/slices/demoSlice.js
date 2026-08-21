import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    institution: '',
    city: '',
    phone: '',
    email: '',
    sessionTime: 'Morning (10:00 AM - 1:00 PM)',
    bookingDate: '',
  },
  submitted: false,
};

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    submitDemoRequest: (state) => {
      state.submitted = true;
    },
    resetDemoForm: (state) => {
      state.formData = {
        name: '',
        institution: '',
        city: '',
        phone: '',
        email: '',
        sessionTime: 'Morning (10:00 AM - 1:00 PM)',
        bookingDate: '',
      };
      state.submitted = false;
    },
  },
});

export const { updateFormField, submitDemoRequest, resetDemoForm } = demoSlice.actions;
export default demoSlice.reducer;
