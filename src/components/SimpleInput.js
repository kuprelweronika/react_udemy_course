import { useRef, useState } from "react";

//mozna tez ustawic ref na inpucie i czytac wartosc tego refa
//kiedy potrzebujemy

const SimpleInput = (props) => {
  const nameInputRef = useRef("");
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //event dla kazdej wpisanej litery
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //musimy dac zeby nie wysylalo HTTP requesta
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
