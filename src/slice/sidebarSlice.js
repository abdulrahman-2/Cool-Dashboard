// sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    setSidebarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { setSidebarOpen, setSidebarClose } = sidebarSlice.actions;
export default sidebarSlice.reducer;
