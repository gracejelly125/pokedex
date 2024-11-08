import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    // isPlaying 으로 음악의 재생여부를 확인한다. 재생중이면 true, 아니면 false
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
