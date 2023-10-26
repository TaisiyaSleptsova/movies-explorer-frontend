import './FilterCheckbox.css'
export default function FilterCheckbox () {
  return (
    <div className="checkbox">
      <form className="checkbox__form">
        <label className="checkbox__switch" htmlFor="checkbox">
          <input className="checkbox__input" type="checkbox" id="checkbox" placeholder="checkbox" />
          <div className="checkbox__slider checkbox__round" />
        </label>
      </form>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  )
}