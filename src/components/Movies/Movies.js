import '../../blocks/page/page.css'
import { Navigate, useLocation } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useCallback, useEffect, useState } from "react";
import moviesApi from "../utils/MoviesApi";
import mainApi from "../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import { InitMaxWidth, InitMiddleWidth, InitMinWidth, MaxWidth, MiddleWidth, MinWidth, StepMaxWidth, StepMiddleWidth } from '../utils/Constants'

export default function Movies ({ savedMovies, setSavedMovies, loggedIn, handleLoading, handleInLoading, isLoading, onFavorite }) {

  //весь массив фильмов
  const [movies, setMovies] = useState([])

  //фильмы, попадающие в результат поиска
  const [filterMovies, setFilterMovies] = useState([])

  //строка поиска из импута
  const [searchFormMovie, setSearchFormMovie] = useState('')

  //переключение на короткометражные фильмы
  const [isFilter, setIsFilter] = useState(false)

  //стейт для вывода сообщения об ошибке 
  const [errorMessage, setErrorMessage] = useState(false)

  //стейт для изменения состояния кнопки сохранить
  const [isLike, setIsLike] = useState(false)

  //стейт для первого входа (чтобы убрать надпись: ничего не найдено)
  const [firstEmpty, setFistEmpty] = useState(true)

  const [count, setCount] = useState('')
  const movieCards = filterMovies.slice(0, count)

  const location = useLocation()

  //поиск фильмов и запиь состояния в локалСторадж
  const selection = useCallback((searchForm, isFilter, allMovies) => {
    setSearchFormMovie(searchForm)
    localStorage.setItem('search', JSON.stringify(searchForm))
    localStorage.setItem('shortfilm', JSON.stringify(isFilter))
    localStorage.setItem('allmovies', JSON.stringify(allMovies))
    setFilterMovies(allMovies.filter((movie) => {
      const findName = movie.nameRU.toLowerCase().includes(searchForm.toLowerCase())
      return isFilter ? (findName && movie.duration <= 40) : findName
    }))
  }, [])

    //поиск фильмов
  function searchMovies (searchForm) {
    if (movies.length === 0) {
      handleLoading()
      moviesApi.getMovies() 
        .then((res) => {
          setErrorMessage(false)
          setIsFilter(false)
          setFistEmpty(false)
          setMovies(res)
          selection(searchForm, isFilter, res)
        })
        .catch(err => {
          console.error(`Ошибка при поиске фильмов ${err}`)
          setErrorMessage(true)
          })
        .finally(() => {
          handleInLoading()
        })
    } else {
      selection(searchForm, isFilter, movies)
    } 
  } 

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shortfilm && localStorage.search){
      const films = JSON.parse(localStorage.allmovies)
      const shortfilm = JSON.parse(localStorage.shortfilm)
      const search = JSON.parse(localStorage.search)
      setErrorMessage(false)
      setFistEmpty(false)
      setSearchFormMovie(search)
      setMovies(films)
      setIsFilter(shortfilm)
      selection(search, shortfilm, films)
    }
  }, [selection])

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

  function handleMore() {
    setCount(count + showCards().step)
  }

  function getFirstState() {
    setCount(showCards().init)
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

  function saveMovie (data) {
      mainApi.addMovie (data, localStorage.jwt)
      .then((film) => {
        setSavedMovies([film, ...savedMovies])
        setIsLike(true)
      })
      .catch(err => {
        console.error(`Ошибка при добалении фильма в сохраненные ${err}`)
      })
  }

  function turnOnShort () {
    if (isFilter) {
      setIsFilter(false)
      selection(searchFormMovie, false, movies)      
    } else {
      setIsFilter(true)
      selection(searchFormMovie, true, movies)      
    }
  }

  return (
    loggedIn ? 
    <main className="main">
      <SearchForm
        searchMovies={searchMovies}
        searchFormMovie={searchFormMovie}
        isFilter = {isFilter}
        turnOnShort = {turnOnShort}
        savedMovies = {savedMovies}
        getFirstState = {getFirstState}
      />
       {!isLoading ? 
        <MoviesCardList 
          isLoading={isLoading}
          movies={filterMovies}
          saveMovie={saveMovie}
          isLike={isLike}
          setIsLike={setIsLike}
          setSavedMovies={setSavedMovies}
          savedMovies={savedMovies}
          onFavorite={onFavorite}
          errorMessage={errorMessage}
          firstEmpty={firstEmpty}
          movieCards={movieCards}
          count={count}
          handleMore={handleMore}
        />
        : <Preloader/>
      }
    </main>
    : <Navigate to={'/singin'} replace />
  )
}