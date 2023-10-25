import { Link } from 'react-router-dom'
import './Profile.css'

export default function Profile () {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" noValidate="">
        <fieldset className="profile__form-container">
          <label className="profile__label" htmlFor="name">
            Имя
            <input
            id="name-input"
            className="profile__form-imput"
            type="text"
            name="name"
            defaultValue="Виталий"
            minLength={2}
            maxLength={40}
            required=""
            />
          </label>
          <span className="name-input-error profile__error" />
          <label className="profile__label" htmlFor="email">
            E-mail
            <input
            id="email-input"
            className="profile__form-imput"
            type="email"
            name="email"
            defaultValue="pochta@yandex.ru"
            minLength={2}
            maxLength={40}
            required=""
            />
          </label>
          <span className="email-input-error form__error" />
        </fieldset>
      </form>
      <div className="profile__buttons">
        <button
        className="profile__button profile__button_type_submit-button"
        aria-label="Сохранить форму редактирования формы"
        type="submit"
        >
        Редактировать
        </button>
        <Link
        to="/signup"
        className="profile__button profile__button_type_exit-button"
        aria-label="выйти из аккаунта"
        type="button"
        >
        Выйти из аккаунта
        </Link>
      </div>
    </section>
  )
}