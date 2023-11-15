import MoviesCard from '../MoviesCard/MoviesCard'
import mainApi from '../utils/MainApi'
import './MoviesCardList.css'
import { useLocation } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'

export default function MoviesCardList ({ isLoading, movies, saveMovie, isLike, setIsLike, onSave, savedMovies, onFavorite, setSavedMovies, newMoviasList, errorMessage, firstEmpty, movieCards, count, handleMore }) {

  const location = useLocation()

  function canselSave (data) {
      mainApi.deleteMovie (data._id, localStorage.jwt)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((deleteFilmId) => data._id !== deleteFilmId._id))
      })
      .catch(err => {
        console.error(`Ошибка при удалении фильма из сохраненных ${err}`)
      })
    }

  function canselSaveOnFavorite (data) {
    const newSavedMovies = savedMovies.filter((film) => data._id !== film._id);
    newMoviasList(newSavedMovies)
    canselSave(data)
  }

  return (
    <section className="movies">
      <ul className="movies__items">
        {isLoading ? <Preloader/> :
        (location.pathname === '/movies' && movieCards.length > 0) ?
        movieCards.map((item) => { 
            return (
              <MoviesCard 
                key={item._id} 
                movie={item} 
                saveMovie={saveMovie}
                isLike={isLike}
                setIsLike={setIsLike}
                onSave={onSave}
                savedMovies={savedMovies}
                canselSave={canselSave}
                onFavorite={onFavorite}
                canselSaveOnFavorite={canselSaveOnFavorite}
              />
        )}) : movies.length > 0 ?
        movies.map((item) => { 
          return (
            <MoviesCard 
                key={item._id} 
                movie={item} 
                saveMovie={saveMovie}
                isLike={isLike}
                setIsLike={setIsLike}
                onSave={onSave}
                savedMovies={savedMovies}
                canselSave={canselSave}
                onFavorite={onFavorite}
                canselSaveOnFavorite={canselSaveOnFavorite}
              />)
          }) :
        errorMessage ? 
        <p className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> :         
        !firstEmpty ?
        <p className="movies__error">Ничего не найдено</p> :
        ''
          }
      </ul>
       
      {(location.pathname === '/movies' && (movieCards.length === count) ) ? 
      <div className="movies__more">
        <button className="movies__more-films" onClick={handleMore}>Еще</button>
      </div>:
      ''
      }
      
    </section>
  )
}