import { createSlice } from "@reduxjs/toolkit";

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    name: "",
    content: "",
    image: "",
    id:""
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setContent(state, action) {
      state.content = action.payload;
    },

    setImage(state, action) {
      state.image = action.payload;
    },
    setId(state, action) {
        state.id = action.payload;
      },
  },
});
export const { name, setName, setContent, setImage, setId} =
  testimonialsSlice.actions;
export default testimonialsSlice.reducer;
