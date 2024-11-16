import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../slices/listSlice";
import musicReducer from "../slices/musicSlice";

// 피드백!
// listSlice 라고 값을 주면, list 슬라이스 객체 전체를 가리키는 것처럼 보인다.
// reducer 만 참조하기 때문에, listReducer 로 명명하는 것이 좋다.
// 코드 가독성을 위해 명확하게 역할을 표현해야 된다.

const store = configureStore({
  reducer: {
    list: listReducer,
    music: musicReducer,
  },
});

export default store;
