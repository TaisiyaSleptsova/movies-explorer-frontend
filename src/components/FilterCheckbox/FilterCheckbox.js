import './FilterCheckbox.css'
export default function FilterCheckbox ({ isFilter, turnOnShort}) {


  return (
    <div className="checkbox">
      <form className="checkbox__form">
        <label className="checkbox__switch" htmlFor="checkbox">
          <input className="checkbox__input" type="checkbox" id="checkbox" placeholder="checkbox" checked={isFilter ? true : false} onChange={() => turnOnShort()}/>
          <div className={`checkbox__slider checkbox__round `} />
        </label>
      </form>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  )
}