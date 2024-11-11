import { createSlice } from "@reduxjs/toolkit";

// 데이터 불러오기
const initialState = JSON.parse(localStorage.getItem("dashboardCards")) || [];

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    deleteCard: (state, action) => {
      return state.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addCard, deleteCard } = listSlice.actions;
export default listSlice.reducer;
