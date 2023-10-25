import './Greetings.css'
import logo from '../../images/logo.svg';

export default function Greetings ({ title }) {
  return (
    <div className="greetings">
      <img className="greetings__logo" src={logo} alt="Логотип проекта" />
      <h2 className="greetings__title">{title}</h2> 
    </div>
  )
}