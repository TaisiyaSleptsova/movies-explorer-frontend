import './Register.css'
import Greetings from "../Greetings/Greetings";
import { Link } from 'react-router-dom';

export default function Register () {
  return (
    <main>
      <section className="register">
        <Greetings
          title='Добро пожаловать!'
        />
        <form className="register__form">
          <fieldset className="register__inputs">
            <label className="register__label" htmlFor="name">
              Имя
            </label>
            <input
              id="name-input"
              className="register__input"
              type="text"
              name="name"
              defaultValue="Виталий"
              placeholder="Имя"
              minLength={2}
              maxLength={40}
              required=""
            />
            <span className="name-input-error register__error" />
            <label className="register__label" htmlFor="email">
              E-mail
            </label>
            <input
              id="email-input"
              className="register__input"
              type="email"
              name="email"
              defaultValue="pochta@yandex.ru"
              placeholder="Email"
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
              defaultValue="••••••••••••••"
              placeholder="Пароль"
              minLength={2}
              maxLength={40}
              required=""
            />
            <span className="password-input-error register__error">Что-то пошло не так...</span>
          </fieldset>
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="register__question">Уже зарегистрированы?<Link className="register__link" to="/signup"> Войти</Link></p>
      </section>
    </main>
  )
}