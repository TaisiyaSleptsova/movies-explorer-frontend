import { useEffect, useState } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'
import { useLocation } from 'react-router-dom';

export default function SearchForm ({ searchMovies, searchFormMovie, isFilter, turnOnShort, savedMovies, getFirstState }) {
  const location = useLocation()
  const { values, handleChange, reset } = useFormWithValidation()
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if ((location.pathname === '/saved-movies' && savedMovies.length === 0)) {
      reset({search: ''})
    } else {      
      reset({search: searchFormMovie})
    }
  }, [searchFormMovie, reset, location.pathname, savedMovies])

  function handleSubmit (e) {
    e.preventDefault(); 
    if (values.search && values.search !== " " && location.pathname === '/movies') {
      searchMovies(values.search)
      setErrorMessage('')
      getFirstState()
    } else if (values.search && values.search !== " " && location.pathname === '/saved-movies'){
      searchMovies(values.search)
      setErrorMessage('')
    } else {
      setErrorMessage('Нужно ввести ключевое слово')
    }
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" noValidate="" onSubmit={handleSubmit}>
          <div className="search-form__form-container">
          <input
            className="search-form__imput"
            name="search"
            placeholder="Фильм"
            type="text"
            required
            value={values.search || " "}
            onChange={handleChange}
          />
          <button
            className="search-form__button"
            aria-label="Начать поиск по фильмам"
            type="submit"
          />
          </div>
          <span className="search-form__error">{errorMessage}</span>
        </form>
      </div>
      <FilterCheckbox
        isFilter = {isFilter}
        turnOnShort = {turnOnShort}
      />
    </section>
  )
}