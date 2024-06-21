import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  name: '',
  imageUrl: '',
  appointments: [],
  labTests: [],
  prescriptions: [],
  messages: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
      state.appointments = action.payload.appointments || [];
      state.labTests = action.payload.labTests || [];
      state.prescriptions = action.payload.prescriptions || [];
      state.messages = action.payload.messages || [];
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.name = '';
      state.imageUrl = '';
      state.appointments = [];
      state.labTests = [];
      state.prescriptions = [];
      state.messages = [];
    },
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, setUser } = userSlice.actions;
export default userSlice.reducer;