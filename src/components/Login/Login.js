import '../Register/Register.css'
import Greetings from "../Greetings/Greetings";
import { Link } from 'react-router-dom';

export default function Login () {
  return (
    <>
      <Greetings 
        title='Рады видеть!'
      />
      <form className="register__form">
        <fieldset className="register__inputs">
          <label className="register__label" htmlFor="email">
            E-mail
          </label>
          <input
            id="email-input"
            className="register__input"
            type="email"
            name="email"
            defaultValue="pochta@yandex.ru"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="email-input-error register__error" />
          <label className="register__label" htmlFor="password">
            Пароль
          </label>
          <input
            id="password-input"
            className="register__input register__input_password"
            type="password"
            name="password"
            defaultValue=""
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="password-input-error register__error"></span>
        </fieldset>
        <button className="register__button register__button_login" type="submit">Войти</button>
      </form>
      <p className="register__question">Ещё не зарегистрированы?<Link className="register__link" to="/signin"> Регистрация</Link></p>
    </>
  )
}