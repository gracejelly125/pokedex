import { createSlice } from "@reduxjs/toolkit";

// 데이터 불러오기
const initialState = JSON.parse(localStorage.getItem("dashboardCards") || "[]");

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const newCard = action.payload;
      state.push(newCard);
      localStorage.setItem("dashboardCards", JSON.stringify(state));
    },
    deleteCard: (state, action) => {
      const deletedCard = action.payload.id;
      const updatedCards = state.filter((card) => card.id !== deletedCard);
      localStorage.setItem("dashboardCards", JSON.stringify(updatedCards));
      return updatedCards;
    },
  },
});

export const { addCard, deleteCard } = listSlice.actions;
export default listSlice.reducer;
