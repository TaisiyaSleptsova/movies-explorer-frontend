import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList () {
  return (
    <section className="movies">
      <ul className="movies__items">
        <MoviesCard/>
      </ul>
      <div className="movies__more">
        <button className="movies__more-films">Еще</button>
      </div>
    </section>
  )
}