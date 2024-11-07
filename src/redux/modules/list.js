// 1. reducer 라는 함수를 만든다.

// 초기상태값을 만들어 준다. 배열, 객체 초기값 상관 없다.
const initialState = [];

// 리듀서는 변화를 일으키는 함수이다. 변화의 종류는 action.type에 달려있다.
// action은 type을 갖고 있는 객체이다.
const list = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
    }

    export default list;