import './AboutMe.css';
import '../AboutProject/AboutProject.css'
import profileFoto from '../../images/foto.jpg'
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe () {
  return (
    <section className="about-me" id="about-me">
      <h2 className="title">Студент</h2>
      <dev className="about-me__table">
        <dev className="about-me__info">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__github" href="https://github.com/TaisiyaSleptsova" target="_blank" rel="noreferrer">
            Github
          </a>
        </dev>
        <img
          className="about-me__foto"
          src={profileFoto}
          alt="Фотография автора"
        />
      </dev>
      
      <Portfolio/>

    </section>
  )
}