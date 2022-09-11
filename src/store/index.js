import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
//zamiast poprzedniego

//normlanie w wiekszych appkach to trzeba by zrobic combineReducers
//ale w toolkicie importujemy configureStore, on zastępuje createStore
//const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
