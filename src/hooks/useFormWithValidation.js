import { useCallback, useState } from "react";

export default function useFormWithValidation () {
  const [values, setValues] = useState({})
  const [error, setError] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [isInputValid, setIsImputValid] = useState({})
  const [formError, setFormError] = useState('') //стейт для вывода сообщени об ошибке при отправке формы


  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const validationMessage = event.target.validationMessage
    const valid = event.target.validity.valid
    const form = event.target.form

    setValues((data) => {
      return { ...data, [name]: value}
    })

    setError((data) => {
      return { ...data, [name]: validationMessage}
    })

    setIsImputValid((data) => {
      return { ...data, [name]: valid}
    })

    setIsValid(form.checkValidity())

    setFormError('')
  };

  const reset = useCallback((data={}) => {
    setValues(data)
    setError({})
    setIsValid(false)
    setIsImputValid({})
  }, [])

  const setValue = useCallback((name, value) => {
    setValues((data) => {
      return { ...data, [name]: value}
    })
  }, [])

  return { values, error, setError, isValid, setIsValid, isInputValid, handleChange, reset, setValue, formError, setFormError }

}