import { useLocation } from 'react-router-dom';
import { baseUrl } from '../utils/Constants.js'
import './MoviesCard.css'


export default function MoviesCard ({ movie, saveMovie, isLike, setIsLike, onSave, savedMovies, canselSave, onFavorite, canselSaveOnFavorite }) {

    // отбираем фильм для удаления из массива сохраненных, т.к. у него есть свойство: _id
  const isSave = savedMovies.find((item) => {
    return movie.id === item.movieId
  });
  
    //для отрисоыки нужной кнопки + выбора функции - удалить или сохранить
  const isLiked = savedMovies.some((item) => {
    return movie.id === item.movieId
  });
  
  const location = useLocation();

  function handleSaveOrDeleteClick() {
    if (!isLiked) {
      saveMovie (movie)
    } else {
      canselSave(isSave)
    }    
  }

  function handleDeleteClick() {
    canselSaveOnFavorite (movie)
  }

  function translateOfTime (duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }


  return (
    <>
    <li className="movie__list">
      <a className="movie__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__img" src={onFavorite ? movie.image : baseUrl + movie.image.url} alt={movie.nameRU} />   
      </a>   
      <div className="movie__container">
        <h2 className="movie__name">{movie.nameRU}</h2>
        <span className="movie__duration">{translateOfTime(movie.duration)}</span>
      </div>
      <button className={onFavorite? 'movie__delete' :(`movie__save ${isLiked ? 'movie__save-active' : ''}`)} onClick={location.pathname === "/movies" ? handleSaveOrDeleteClick : handleDeleteClick}>Сохранить</button>
    </li>
     </>
  )
}