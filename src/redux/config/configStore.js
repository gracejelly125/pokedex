import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../slices/listSlice";
import musicSlice from "../slices/musicSlice";

const store = configureStore({
  reducer: {
    list: listSlice,
    music: musicSlice,
  },
});

export default store;
