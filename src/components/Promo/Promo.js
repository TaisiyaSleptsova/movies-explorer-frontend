import NavTab from '../NavTab/NavTab';
import './Promo.css';

export default function Promo () {
  return (
    <section className="promo">
      <div className="promo__block">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        
        <NavTab />
        
      </div>
    </section>
  )
}