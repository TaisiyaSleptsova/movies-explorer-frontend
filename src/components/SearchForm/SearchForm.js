import { useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'
import { useLocation } from 'react-router-dom';



export default function SearchForm ({ searchMovies, searchFormMovie, isFilter, turnOnShort, savedMovies }) {
  const location = useLocation()
  const { values, error, setError, handleChange, reset } = useFormWithValidation()

  useEffect(() => {
    if ((location.pathname === '/saved-movies' && savedMovies.length === 0)) {
      reset({search: ''})
    } else {
      reset({search: searchFormMovie})
    }
    setError(false)
  }, [searchFormMovie, reset, setError, location.pathname, savedMovies])

  function handleSubmit (e) {
    e.preventDefault(); 
    if (values.search) {
      searchMovies(values.search)
      setError(false)
    } else {
      setError(true)
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
            value={values.search}
            onChange={handleChange}
          />
          <button
            className="search-form__button"
            aria-label="Начать поиск по фильмам"
            type="submit"
          />
          </div>
          <span className="search-form__error">{error.search}</span>
        </form>
      </div>
      <FilterCheckbox
        isFilter = {isFilter}
        turnOnShort = {turnOnShort}
      />
    </section>
  )
}