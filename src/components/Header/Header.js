import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default function Header ({ loggedIn }) {
  
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  function handleMenuClick() {
    setIsBurgerMenuOpen(true)
  }

  function closeMenu() {
    setIsBurgerMenuOpen(false)
  }

  return (
    <header className="header">
    <Link to="/">
      <img className="logo" src={logo} alt="Логотип проекта, переход на главную страницу" />
    </Link>

    { loggedIn ? 
    <>
    <Navigation/>
    <button className="header__menu-button" onClick={handleMenuClick}></button>
    <HeaderMenu isOpen={isBurgerMenuOpen} onClose={closeMenu}/>
    </>
    :     
    <div className="header__menu header__menu_opened">
      <Link to="/signup" className="header__singup">
        Регистрация
      </Link>
      <button className="header__singin-button">
        <Link to="/signin" className="header__singin">
          Войти
        </Link>
      </button>
      </div>
      }
  </header>
  )
}