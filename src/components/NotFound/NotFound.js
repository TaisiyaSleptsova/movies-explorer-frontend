import './NotFound.css'
import { Link } from "react-router-dom";

export default function NotFound () {
  return (
    <section className='not-found'>
      <h2 className="not-found__title">404</h2>
      <p className='not-found__info'>Cтраница не найдена</p>      
      <Link className="not-found__button" to="/">Назад</Link>
    </section>
  )
}