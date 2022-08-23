import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

//podajemy aktualny stan
const emailReducer = (state, action) => {
  //dodajemy if względem tego co user wprowadza w funkcji emailHandler
  //jesli jest wprowadzone cos w USER INPUT funkcja zwraca to co jest wprowadzone
  // i true lub false dla zawierania @
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  //dodaje drugiego if'a dla input blur
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
    //przyjmuje wartosci z aktualnego stanu, nie resetuje do pustego
  }
  return { value: "", isValid: false };
};

//dodaje funkcje passwordReducer
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  //komentuje dwa pierwsze stany bo zamieniłam je na emailReducer
  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [emailIsValid, setEmailIsValid] = useState();
  //komentuje dwa kolejne stany i zmieniam je na passwordReducer
  // const [enteredPassword, setEnteredPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  //uzywamy useReducer zeby zebrac kilka stanow w jeden bardziej zaawansowany

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    //zamiast tej funkcji powyzej wywolujemy funkcje z useReducera
    //dodajemy do niej wartość tego, co user wprowadza do inputa, nadajemy temu jakas
    //nazwe czyli USER_INPUT i wartosc val <- wprowadzone znaki
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    //setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    //setFormIsValid(
    //emailState.isValid && passwordState.isValid
    //zmienilam na passwordState
    //zamiast sprawdzac czy zawiera @ daje parametr isValid
    //emailState.value.includes("@") && event.target.value.trim().length > 6

    //podmieniam enteredEmail na wartosc emailState
    //enteredEmail.includes("@") && event.target.value.trim().length > 6
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" }); //tutaj nie ma wartosci

    //zamiast setEmailIsValid daje ^^
    //setEmailIsValid(emailState.isValid);
    // zamiast sprawdzac czy zawiiera daje parametr
    //setEmailIsValid(emailState.value.includes("@"));

    //podmieniam tak samo jak wyzej
    //setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
    //zmieniam na dispatchPassword
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
    //zamiast enteredEmail daje nasz nowy emailState.value
    //props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
            //zamiast emailIsValid daje emailState.isValid
            //emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            //zamiast enteredEmail podmieniam na emailState.value
            //value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            //zmienilam enteredPassword na passwordState
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
