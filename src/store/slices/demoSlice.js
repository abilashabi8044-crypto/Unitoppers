import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    institution: '',
    cityState: '',
    phone: '',
    email: '',
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
        cityState: '',
        phone: '',
        email: '',
      };
      state.submitted = false;
    },
  },
});

export const { updateFormField, submitDemoRequest, resetDemoForm } = demoSlice.actions;
export default demoSlice.reducer;
