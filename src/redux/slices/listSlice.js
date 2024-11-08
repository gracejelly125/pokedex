// 1. reducer 라는 함수를 만든다.

import { createSlice } from "@reduxjs/toolkit";

// 초기상태값을 만들어 준다. 배열, 객체 초기값 상관 없다.
// slice API 를 이용해서 만든다.
// 마찬가지로 useState()를 통해서 만들었던 로컬스토리지 기능을 초기값에 그려준다.
const initialState = JSON.parse(localStorage.getItem("dashboardCards")) || [];

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addCard: (state, action) => {
      // state에 직접 추가한다.
      // immer 라는 라이브러리가 내장돼있어서, 불변성이 유지된다.
      state = state.push(action.payload);
    },
    // 주어진 id와 다른 카드만 남긴다.
    deleteCard: (state, action) => {
      return state.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addCard, deleteCard } = listSlice.actions;
export default listSlice.reducer;

// 리듀서는 변화를 일으키는 함수이다. 
// 리듀서는 useState 대신 전역 상태 관리를 해준다.
// 변화의 종류는 action.type에 달려있다.
// action은 type을 갖고 있는 객체이다.
