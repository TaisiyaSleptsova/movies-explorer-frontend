import './MoviesCard.css'
import fotoone from '../../images/фильм1.png' 
import fototwo from '../../images/фильм2.png' 
import fotothree from '../../images/фильм3.png' 


export default function MoviesCard () {
  return (
    <>
    <li className="movie__list">
      <img className="movie__img" src={fotoone} alt="Обложка фильма" />
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fototwo} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save-active">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fotothree} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__delete">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fotoone} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fototwo} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fotothree} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fotoone} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fototwo} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">
          Gimme Danger: История Игги и The Stooges
        </h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fotothree} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fotoone} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fototwo} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    <li className="movie__list">
      <img className="movie__img" src={fotothree} alt="Обложка фильма"/>
      <div className="movie__container">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <span className="movie__duration">1ч 17м</span>
      </div>
      <button className="movie__save">Сохранить</button>
    </li>
    </>
  )
}