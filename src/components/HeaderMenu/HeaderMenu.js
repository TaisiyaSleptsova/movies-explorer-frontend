import { NavLink } from 'react-router-dom'
import './HeaderMenu.css'

export default function HeaderMenu ({ isOpen, onClose}) {

  const setActive = ({ isActive }) =>(isActive ? "menu__link menu__link_active" : "menu__link");
  return (
    <div className={`page__overlay ${isOpen ? "page__overlay_visible" : ""}`}>
      <div className="menu">
        <button className="menu__close" onClick={onClose}></button>
        <nav className="menu__navigator">
          <ul className="menu__links">
            <li>
              <NavLink className={setActive} to="/" onClick={onClose}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink className={setActive} to="/movies" onClick={onClose}>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink className={setActive} to="/saved-movies" onClick={onClose}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <button className="menu__account-button">
            <NavLink className="menu__account" to="/profile" onClick={onClose}>
              Аккаунт
            </NavLink>
          </button>
        </nav>
      </div>
    </div>
  )
}