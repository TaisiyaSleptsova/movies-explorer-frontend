import './Greetings.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Greetings ({ title }) {
  return (
    <div className="greetings">
      <Link to="/">
        <img className="greetings__logo" src={logo} alt="Логотип проекта" />
      </Link>
      <h1 className="greetings__title">{title}</h1> 
    </div>
  )
}