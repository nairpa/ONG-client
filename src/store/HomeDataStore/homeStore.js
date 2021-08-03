import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_WELCOME_TEXT } from '../../consts/const';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    linkedin: "https://www.linkedin.com",
    welcomeText: DEFAULT_WELCOME_TEXT,
    images: [],
    adress: "",
    phone: "",
    name: ""
  },
  reducers: {
    saveHomeData: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.adress = action.payload.adress;
      state.images = action.payload.organizationImages;
      state.welcomeText = action.payload.welcomeText;
      state.facebook = action.payload.media[0].facebook;
      state.instagram = action.payload.media[0].instagram;
      state.linkedin = action.payload.media[0].linkedin;
    },
    saveOrganizationData: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.adress = action.payload.adress;
    },
    saveSocialMedia: (state, action) => {
      state.facebook = action.payload.facebook;
      state.instagram = action.payload.instagram;
      state.linkedin = action.payload.linkedin;
    }
  }
})

export const { saveHomeData, saveOrganizationData, saveSocialMedia } = homeSlice.actions;

export default homeSlice.reducer;