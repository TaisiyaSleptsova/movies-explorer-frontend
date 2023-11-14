import './NotFound.css'
import { Link, useNavigate } from "react-router-dom";

export default function NotFound () {
  const navigate = useNavigate()

  function back() {
    navigate(-1)
  }

  return (
    <main>
      <section className='not-found'>
        <h1 className="not-found__title">404</h1>
        <p className='not-found__info'>Cтраница не найдена</p>      
        <button className="not-found__button" onClick={back}>Назад</button>
      </section>
    </main>
  )
}