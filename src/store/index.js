import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const initialCounterState = { counter: 0, showCounter: true };
//kazdy slice ma nazwe, initial state
//automatycznie jest polaczone z akcją
//tutaj mozna nadpisywac stany, bo toolkit wewnatrz sobie klonuje
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //tutaj potrzeba dodatkwych danych wiec dopisujemy action
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

//zamiast poprzedniego

//normlanie w wiekszych appkach to trzeba by zrobic combineReducers
//ale w toolkicie importujemy configureStore, on zastępuje createStore
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
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

//const store = createStore(counterReducer);

export default store;
//drugi export dla wysłania akcji
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
