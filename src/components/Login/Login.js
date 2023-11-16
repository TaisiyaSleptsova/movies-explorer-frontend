import '../Register/Register.css'
import Greetings from "../Greetings/Greetings";
import { Link, useNavigate } from 'react-router-dom';
import mainApi from '../../components/utils/MainApi.js';
import { useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import Preloader from '../Preloader/Preloader';

export default function Login ({ handleLoggedin, handleInLoading, handleLoading, isLoading }) {
  
  const { values, error, isValid, isInputValid, handleChange, setValue, formError, setFormError } = useFormWithValidation()
  
  const navigate = useNavigate();

  useEffect (() => {
    setValue({email: '', password: ''})
  },[setValue])  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoading();
    if (!values.email || !values.password){
      return;
    }
    mainApi.authorize(values.password, values.email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setValue({email: '', password: ''});
          handleLoggedin();            
          navigate ('/movies', {replace:true});
        } 
      })
      .catch(res => {      
        setFormError(res.data.message)
      })
      .finally(() => {
        handleInLoading()
      })
  }

  return (
    <main>
      {!isLoading ?
        <section className="login">
          <Greetings 
            title='Рады видеть!'
          />
          <form className="register__form" onSubmit={handleSubmit}>
            <fieldset className="register__inputs">
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
                defaultValue=""
                placeholder="Пароль"
                minLength={2}
                maxLength={40}
                required
                value={values.password ? values.password : ''}
                onChange={handleChange}
              />
              <span className="register__error">{error.password}</span>
            </fieldset>
            <span className={`register__form-error register__form-error_login ${formError ? 'register__form-error_active' : ''}`}>{formError}</span>
            <button className={`register__button register__button_login ${isValid ? '' : 'register__button_disabled'}`} type="submit">Войти</button>
          </form>
          <p className="register__question">Ещё не зарегистрированы?<Link className="register__link" to="/signup"> Регистрация</Link></p>
        </section> 
      : <Preloader/> 
      }
    </main>
  )
}