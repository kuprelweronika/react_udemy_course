import { useRef, useState } from "react";

//mozna tez ustawic ref na inpucie i czytac wartosc tego refa
//kiedy potrzebujemy

const SimpleInput = (props) => {
  const nameInputRef = useRef("");
  const [enteredName, setEnteredName] = useState("");
  //state dla walidacji
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //event dla kazdej wpisanej litery
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //musimy dac zeby nie wysylalo HTTP requesta

    //robimy if zeby user nie mogl wrzucic empty form
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    //to samo ale z uzyciem Ref, to nie jest zbyt dobre
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };
  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";
  //wyzej jest warunek do zmiany klasy wzgledem tego czy input jest valid czy nie

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
