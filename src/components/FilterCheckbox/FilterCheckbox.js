import './FilterCheckbox.css'
export default function FilterCheckbox () {
  return (
    <div className="checkbox">
      <label className="checkbox__switch" htmlFor="checkbox">
        <input className="checkbox__input" type="checkbox" id="checkbox" />
        <div className="checkbox__slider checkbox__round" />
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  )
}