import React, { useRef, useEffect, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  //useEffect(() => {
  // inputRef.current.focus();
  //dodaje focus zeby sie podkreslal ten element ktory jest zle wprowadzony
  //}, []);

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
        //zamiast emailIsValid daje emailState.isVa lid
        //emailIsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        //zamiast enteredEmail podmieniam na emailState.value
        //value={enteredEmail}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
