import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   //tutaj będą zawsze przechowywane najbardziej aktualne stany

//   const dispatch = useDispatch();
//   const incerementHandler = () => {
//     dispatch({ type: "increment" });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incerementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decerement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };
// export default Counter;

///to samo ale dla class component
class Counter extends Component {
  incrementHandler() {}
  decrementHandler() {}
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.counter}</div>
        <div>
          <button onClick={this.incerementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decerement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "increment" });
    },
    decrement: () => {
      dispatch({ type: "decrement" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
