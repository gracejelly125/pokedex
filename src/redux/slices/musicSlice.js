import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    playMusic: (state) => {
      state.isPlaying = true;
    },
    stopMusic: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { playMusic, stopMusic } = musicSlice.actions;
export default musicSlice.reducer;
