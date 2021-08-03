import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "Usuario",
    roleId: 0,
    imageUrl: ""
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.lastname = action.payload.lastname;
      state.role = action.payload.role.role;
      state.roleId = action.payload.roleId;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.id = 0; 
      state.name = '';
      state.lastname = '';
      state.email = '';
      state.password = '';
      state.token = '';
      state.role = '';
      state.roleId = 0;
      state.imageUrl = '';  
    },
    editUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.lastname = action.payload.lastname;
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, editUser } = userSlice.actions

export default userSlice.reducer