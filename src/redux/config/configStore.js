// config : 리덕스 설정과 관련된 파일들
// configStore : 리덕스 중앙 state 관리소
// modules 에는 state 그룹을 모아 놓은 파일
// 객체나 배열은 보통 item.js , list.js 로 짓는다.

import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../slices/listSlice";
import musicSlice from "../slices/musicSlice";

// import { combineReducers, createStore } from "redux";
// import list from "../modules/list";

// // 1. rootReducer를 만든다. {} 객체가 인풋으로 들어간다.
// // 2. store 를 조합한다. (더이상 유지보수되지 않음)
// // 3. 만든 store를 내보낸다. 
// // => main.jsx 로 이동! App 컴포넌트를 Provider로 감싸준다.
// //     <Provider store={store}>
// //      <App />
// //     </Provider>
// // modules 폴더에서 module을 만들어서 combineReducers의 인자로 넣는다.

// const rootReducer = combineReducers({
//     list,
// });

// const store = createStore(rootReducer);


const store = configureStore({
    reducer: {
        list: listSlice,
        music: musicSlice,
    }
})

export default store;