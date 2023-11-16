import './Register.css'
import mainApi from '../../components/utils/MainApi.js';
import Greetings from "../Greetings/Greetings";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import Preloader from '../Preloader/Preloader';

export default function Register ({ handleInLoggedin, handleLoggedin, handleInLoading, handleLoading, isLoading }) {

  const { values, error, isValid, isInputValid, handleChange, setValue, formError, setFormError } = useFormWithValidation()

  const navigate = useNavigate();

  useEffect (() => {
    setValue({name: '', email: '', password: ''});
  },[setValue])  

  useEffect(() => setFormError(""), [setFormError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoading()
    console.log(values.name, values.email, values.password)
    mainApi.register(values.name, values.email, values.password)
    .then((res) => {
      console.log(res)
      if (res) {
        handleInLoggedin()
        console.log(values.password, values.email)
        mainApi.authorize(values.password, values.email)
        .then(res => {
          localStorage.setItem('jwt', res.token)
          console.log(res)
          handleLoggedin()
          navigate ('/movies', {replace:true});
          // window.scrollTo(0, 0)
        })
        .catch((res) => {
          setFormError(res.data.message)
        })
        .finally(() => {handleInLoading()})
      }        
    }) 
    .catch(res => {      
      setFormError(res.data.message)
    })
    .finally(() => {handleInLoading()})
  }

  return (
    <main>
      {!isLoading ? 
        <section className="register">
          <Greetings
            title='Добро пожаловать!'
          />
          <form className="register__form" onSubmit={handleSubmit}>
            <fieldset className="register__inputs">
              <label className="register__label" htmlFor="name">
                Имя
              </label>
              <input
                id="name-input"
                className={`register__input ${isInputValid.name === undefined || isInputValid.name ? '' : 'register__input_error'}`}
                type="text"
                name="name"
                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                placeholder="Имя"
                minLength={2}
                maxLength={40}
                required
                value={values.name ? values.name : ''}
                onChange={handleChange}
              />
              <span className="register__error">{error.name}</span>
              <label className="register__label" htmlFor="email">
                E-mail
              </label>
              <input
                id="email-input"
                className={`register__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'register__input_error'}`}
                type="email"
                name="email"
                pattern="^[\w.]+@([A-z0-9]+\.)+[A-z]{2,4}$"
                placeholder="Email"
                minLength={2}
                maxLength={40}
                required
                value={values.email ? values.email : ''}
                onChange={handleChange}
              />
              <span className="register__error">{error.email}</span>
              <label className="register__label" htmlFor="password">
                Пароль
              </label>
              <input
                id="password-input"
                className={`register__input ${isInputValid.password === undefined || isInputValid.password ? '' : 'register__input_error'}`}
                type="password"
                name="password"
                placeholder="Пароль"
                minLength={2}
                maxLength={40}
                required
                value={values.password ? values.password : ''}
                onChange={handleChange}
              />
              <span className="register__error">{error.password}</span>
            </fieldset>
            <span className={`register__form-error ${formError ? 'register__form-error_active' : ''}`}>{formError}</span>
            <button className={`register__button ${isValid ? '' : 'register__button_disabled'}`} type="submit">Зарегистрироваться</button>
          </form>
          <p className="register__question">Уже зарегистрированы?<Link className="register__link" to="/signin"> Войти</Link></p>
        </section>
      : <Preloader/>}
    </main>
  )
}