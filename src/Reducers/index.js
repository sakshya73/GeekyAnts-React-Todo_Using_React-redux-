import { createStore } from "redux";
const myreducer = (state = { filter: "", todoArray: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = {
        filter: state.filter,
        todoArray: [
          ...state.todoArray,
          { todocaption: action.todocaption, iscompleted: false }
        ]
      };
      break;
    case "DEL_TODO":
      state.todoArray.splice(action.id, 1);
      state = {
        filter: state.filter,
        todoArray: [...state.todoArray]
      };
      break;
    case "EDIT_TODO":
      state.todoArray[action.id].todocaption = action.todocaption;
      state = {
        filter: state.filter,
        todoArray: [...state.todoArray]
      };
      break;
    case "CHECK_TODO":
      state.todoArray[action.id].iscompleted = !state.todoArray[action.id]
        .iscompleted;
      state = {
        filter: state.filter,
        todoArray: [...state.todoArray]
      };
      break;
    default:
      break;
  }

  switch (action.filter) {
    case "SHOW_ACTIVE":
      state = {
        filter: "SHOW_ACTIVE",
        todoArray: [...state.todoArray]
      };
      break;
    case "SHOW_COMPLETED":
      state = {
        filter: "SHOW_COMPLETED",
        todoArray: [...state.todoArray]
      };
      break;
    case "SHOW_ALL":
      state = {
        filter: "SHOW_ALL",
        todoArray: [...state.todoArray]
      };
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(myreducer);

export default store;
