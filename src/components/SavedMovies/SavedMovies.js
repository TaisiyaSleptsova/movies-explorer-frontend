import { Navigate } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useCallback, useEffect, useState } from "react";

export default function SavedMovies ({ savedMovies, loggedIn, onFavorite, newMoviasList }) {
  //фильмы, попадающие в результат поиска
  const [filterMovies, setFilterMovies] = useState(savedMovies)

  //строка поиска из импута
  const [searchFormMovie, setSearchFormMovie] = useState('')

  //переключение на короткометражные фильмы
  const [isFilter, setIsFilter] = useState(false)


  //поиск фильмов и запиь состояния в локалСторадж
  const selection = useCallback((searchForm, isFilter, allMovies) => {
    setSearchFormMovie(searchForm)
    setFilterMovies(allMovies.filter((movie) => {
      const findName = movie.nameRU.toLowerCase().includes(searchForm.toLowerCase())
      return isFilter ? (findName && movie.duration <= 40) : findName
    }))
  }, [])

  //поиск фильмов
  function searchMovies (searchForm) {
    selection(searchForm, isFilter, savedMovies)
  }

  useEffect(() => {
    selection(searchFormMovie, isFilter, savedMovies)
  }, [selection, savedMovies, isFilter, searchFormMovie ])

  function turnOnShort () {
    if (isFilter) {
      setIsFilter(false)
      selection(searchFormMovie, false, savedMovies)
    } else {
      setIsFilter(true)
      selection(searchFormMovie, true, savedMovies)
    }
  }

  return (
    loggedIn ? 
    <main>
      <SearchForm
      searchMovies={searchMovies}
      searchFormMovie={searchFormMovie}
      isFilter = {isFilter}
      turnOnShort = {turnOnShort}
      savedMovies={savedMovies}
      />
      <MoviesCardList
        movies={filterMovies}
        savedMovies={savedMovies}
        onFavorite={onFavorite}
        newMoviasList={newMoviasList}
      />
    </main>
    : <Navigate to={'/singin'} replace />
  )
}