import { useState, useMemo } from "react"

const useInput = (validateValue, successText="", wrongText="", defaultText="") => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value)
  }
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  }
  const reset = (e) => {
    setEnteredValue('');
    setIsTouched(false);
  }
  const helper = useMemo(() => {
    if (valueIsValid) {
        return {
            text: successText,
            color: ""
        }
    }
    if (hasError) {
        return {
            text: wrongText,
            color: "error"
        }
    }
    return {
        text: defaultText,
        color: "",
    }

  }, [successText, wrongText, defaultText, hasError, valueIsValid]);
  
  return {
    value: enteredValue,
    isValid: valueIsValid,
    helper,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
}

export default useInput;

