import { Link } from 'react-router-dom'
import './Profile.css'
import Header from '../Header/Header';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import mainApi from '../utils/MainApi';
import Preloader from '../Preloader/Preloader';

export default function Profile ({ handleInLoggedin, loggedIn, setCurrentUser, handleLoggedin, handleInLoading, handleLoading, isLoading }) {
  const currentUser = useContext(CurrentUserContext)
  const { values, error, isValid, setIsValid, isInputValid, handleChange, setValue, formError, setFormError } = useFormWithValidation()

  const [isSave, setIsSave] = useState(false) //Стейт для отображения кнопки Сохранения
  const [success, setSuccess] = useState(false) //стейт для сообщения об успехе
  
  useEffect(() => {
    setValue("name", currentUser.name)
    setValue("email", currentUser.email)
  }, [currentUser, setValue])

  useEffect(() => {
    if(currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false) 
    } else {
      setIsValid(true)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleLoading();
    mainApi.changeProfileInfo(values, localStorage.jwt)
      .then((data) => {
        console.log(data)
        setCurrentUser(data)
        setIsValid(false)
        setSuccess(true)
        setIsSave(false)
        handleLoggedin()
      })
      .catch((res) => {
        setFormError(res.data.message)
        setIsValid(false)
      })
      .finally(() => {
        handleInLoading()
      })   
  }

  function editProfile () {
    setIsSave(true)
    setSuccess(false)
  }

  function accauntExit () {
    localStorage.clear()
    handleInLoggedin()
  }

  return (
    <>
      {!isLoading ?
        <>
          <Header
            loggedIn={loggedIn}
          />
          <main>
            <section className="profile">
              <h1 className="profile__title">Привет, {currentUser.name}!</h1>
              <form className="profile__form" noValidate="">
                <fieldset className="profile__form-container">
                  <label className="profile__label" htmlFor="name">
                    Имя
                    <input
                      id="name-input"
                      className={`profile__form-imput ${isInputValid.name === undefined || isInputValid.name ? '' : 'profile__form-imput_error'}`}
                      type="text"
                      name="name"
                      disabled={isSave ? false : true}
                      pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                      minLength={2}
                      maxLength={40}
                      required
                      value={values.name ? values.name : ''}
                      onChange={handleChange}
                    />
                  </label>
                  <span className="profile__error">{error.name}</span>
                  <label className="profile__label" htmlFor="email">
                    E-mail
                    <input
                      id="email-input"
                      className="profile__form-imput"
                      type="email"
                      name="email"
                      disabled={isSave ? false : true}
                      pattern="^[\w.]+@([A-z0-9]+\.)+[A-z]{2,4}$"
                      minLength={2}
                      maxLength={40}
                      required
                      value={values.email ? values.email : ''}
                      onChange={handleChange}
                    />
                  </label>
                  <span className="profile__error">{error.email}</span>
                </fieldset>
              </form>
              {!isSave ?
                <div className="profile__buttons">
                  <span className={`profile__form-message ${success ? 'profile__form-message_active' : ''}`}>Данне успешно обновлены.</span>
                  <button
                    className="profile__button profile__button_type_submit-button"
                    aria-label="Сохранить форму редактирования формы"
                    type="submit"
                    onClick={editProfile}
                  >
                    Редактировать
                  </button>
                  <Link
                    to="/"
                    className="profile__button profile__button_type_exit-button"
                    aria-label="выйти из аккаунта"
                    // type="button"
                    onClick={accauntExit}
                  >
                    Выйти из аккаунта
                  </Link>
                </div>
                : <>
                  <span className={`profile__form-message ${formError ? 'profile__form-message_active' : ''}`}>{formError}</span>
                  <button
                    className={`profile__button-save ${!isValid ? 'profile__button_disabled' : ''}`}
                    type="submit"
                    disabled={isValid ? false : true}
                    onClick={handleSubmit}
                  >
                    Сохранить
                  </button>
                  <Link
                    to="/"
                    className="profile__button profile__button_type_exit-button"
                    aria-label="выйти из аккаунта"
                    onClick={accauntExit}
                  >
                    Выйти из аккаунта
                  </Link>
                </>
              }
            </section>
          </main>
        </>
        : <Preloader />
      }
    </>
  )
}