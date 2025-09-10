import {useState, useRef} from "react";

const Form = ({labelText, placeholderText, type}) => {
  const [holderText, setHolderText] = useState(placeholderText)
  const [errorMessage, setErrorMessage] = useState(false)

  const userInput = useRef()

  const handleValidation = ()=> {
    if ((userInput.current.value).trim() === "") {
      setHolderText("Input field cannot be empty")
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
    }
  }
 
  return (
    <form>
      <label>{labelText}</label>
      <input className={errorMessage ? "invalid" : null} ref={userInput} type={type} placeholder={holderText} onBlur={handleValidation} /> 
    </form>
  );
};

export default Form;
