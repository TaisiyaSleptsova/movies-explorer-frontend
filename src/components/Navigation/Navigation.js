import { NavLink } from 'react-router-dom'
import './Navigation.css'

export default function Navigation () {

  const setActive = ({ isActive }) =>(isActive ? "navigator__link navigator__link_active" : "navigator__link");

  return (
    <nav className="navigator">
      <ul className="navigator__links">
        <li>
          <NavLink className={setActive} to="/movies">
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <button className="navigator__account-button">
      <NavLink className="navigator__account" to="/profile">
        Аккаунт
      </NavLink>
      </button>
    </nav>
  )
}