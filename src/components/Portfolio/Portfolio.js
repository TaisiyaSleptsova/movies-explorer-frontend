import './Portfolio.css';
import arrow from '../../images/pointer.svg';

export default function Portfolio () {
  return (
    <dev className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/TaisiyaSleptsova/how-to-learn" target="_blank"rel="noreferrer" >
            <p className="portfolio__name">Статичный сайт</p>
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="Указатель на ссылку"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://taisiyasleptsova.github.io/mesto/" target="_blank" rel="noreferrer" >
            <p className="portfolio__name">Адаптивный сайт</p>          
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="Указатель на ссылку"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://taisiyasleptsova.github.io/russian-travel/" target="_blank" rel="noreferrer" >
            <p className="portfolio__name">Одностраничное приложение</p>          
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