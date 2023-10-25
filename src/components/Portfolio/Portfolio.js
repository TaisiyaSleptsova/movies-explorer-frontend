import './Portfolio.css';
import arrow from '../../images/pointer.svg';

export default function Portfolio () {
  return (
    <dev className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <p className="portfolio__name">Статичный сайт</p>
          <a className="portfolio__link" href="https://github.com/TaisiyaSleptsova/how-to-learn" target="_blank"rel="noreferrer" >
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="Указатель на ссылку"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__name">Адаптивный сайт</p>
          <a className="portfolio__link" href="https://taisiyasleptsova.github.io/mesto/" target="_blank" rel="noreferrer" >
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="Указатель на ссылку"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__name">Одностраничное приложение</p>
          <a className="portfolio__link" href="https://taisiyasleptsova.github.io/russian-travel/" target="_blank" rel="noreferrer" >
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="Указатель на ссылку"
            />
          </a>
        </li>
      </ul>
    </dev>
  )
}