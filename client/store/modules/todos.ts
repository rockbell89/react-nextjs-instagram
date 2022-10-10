import { createAction, handleActions } from "redux-actions";
import produce from "immer";

export const CHANGE_INPUT = "todos/CHANGE_INPUT";
export const INSERT = "todos/INSERT";
export const TOGGLE = "todos/TOGGLE";
export const REMOVE = "todos/REMOVE";

const initialState = {
  input: "",
  todos: [
    { id: 1, text: "리덕스 기초배우기", done: true },
    { id: 2, text: "리액트와 리덕스 사용기", done: false },
  ],
};

// export const changeInput = (data) => ({
//   type: CHANGE_INPUT,
//   data,
// });

let id = 3;
// export const insert = (data) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     data,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

export const changeInput = createAction(CHANGE_INPUT, (data) => data);
export const insert = createAction(INSERT, (data) => ({
  id: id++,
  data,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         data: action.data,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: {
//           ...state.todos.concat(action.data),
//         },
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id
//             ? {
//                 ...todo,
//                 done: !todo.done,
//               }
//             : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft.data = data;
      }),
    [INSERT]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft.todos.push(data);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (dfraft) => {
        const index = dfraft.todos.findIndex((todo) => todo.id === id);
        dfraft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
