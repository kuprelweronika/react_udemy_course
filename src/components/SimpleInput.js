import { useState } from "react";
import useInput from "../hooks/use-input";

//mozna tez ustawic ref na inpucie i czytac wartosc tego refa
//kiedy potrzebujemy

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  //const nameInputRef = useRef("");
  const [enteredEmail, setEnteredEmail] = useState("");
  //state dla walidacji
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    /*&& enteredAgeIsValid)*/ formIsValid = true;
  }

  //const nameChangeHandler = (event) => {
  // setEnteredName(event.target.value);
  //event dla kazdej wpisanej litery
  //};

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // const nameBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //musimy dac zeby nie wysylalo HTTP requesta

    //robimy if zeby user nie mogl wrzucic empty form
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    //to samo ale z uzyciem Ref, to nie jest zbyt dobre
    //const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);
    resetNameInput();
    //resetowanie zawartosci
    //setEnteredName("");
    setEnteredEmail("");
    //setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  //wyzej jest warunek do zmiany klasy wzgledem tego czy input jest valid czy nie

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email:</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}> Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
