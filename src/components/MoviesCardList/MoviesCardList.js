import { useEffect, useState } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import mainApi from '../utils/MainApi'
import './MoviesCardList.css'
import { InitMaxWidth, InitMiddleWidth, InitMinWidth, MaxWidth, MiddleWidth, MinWidth, StepMaxWidth, StepMiddleWidth } from '../utils/Constants'
import { useLocation } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'

export default function MoviesCardList ({ isLoading, movies, saveMovie, isLike, setIsLike, onSave, savedMovies, onFavorite, setSavedMovies, newMoviasList, errorMessage }) {

  const [count, setCount] = useState('')
  const movieCards = movies.slice(0, count)

  const location = useLocation()

  function showCards() {
    const counter = { init: InitMaxWidth, step: StepMaxWidth}
    if (window.innerWidth < MaxWidth) {
      counter.init = InitMaxWidth
      counter.step = StepMaxWidth
    }
    if (window.innerWidth < MiddleWidth) {
      counter.init = InitMiddleWidth
      counter.step = StepMiddleWidth
    }
    if (window.innerWidth < MinWidth) {
      counter.init = InitMinWidth
      counter.step = StepMiddleWidth
    }
    return counter
  }

  useEffect(() => {
    if (location.pathname === '/movies') {
      setCount(showCards().init)
      function displayCardsBasedOnWidth() {
        if (window.innerWidth >= MaxWidth) {
          setCount(showCards().init)
        }
        if (window.innerWidth < MaxWidth) {
          setCount(showCards().init)
        }
        if (window.innerWidth < MiddleWidth) {
          setCount(showCards().init)
        }
        if (window.innerWidth < MinWidth) {
          setCount(showCards().init)
        }
      }
      window.addEventListener('resize', displayCardsBasedOnWidth)
      return () => window.removeEventListener('resize', displayCardsBasedOnWidth)
    }
  },[location.pathname])

  function handleMore() {
    setCount(count + showCards().step)
  }

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
        (movieCards.length > 0 && location.pathname === '/movies') ?
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
        <p className="movies__error">Ничего не найдено</p>
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