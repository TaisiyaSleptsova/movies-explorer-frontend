import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './SearchForm.css'

export default function SearchForm () {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <input
            className="search-form__imput"
            placeholder="Фильм"
            type="text"
            required=""
          />
          <button
            className="search-form__button"
            aria-label="Начать поиск по фильмам"
            type="submit"
          />
        </form>
      </div>
      <FilterCheckbox/>
    </section>
  )
}