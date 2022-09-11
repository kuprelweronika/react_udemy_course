import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }
//   return state;
// };

//drugi export dla wysłania akcji
export default authSlice.reducer;
export const authActions = authSlice.actions;
