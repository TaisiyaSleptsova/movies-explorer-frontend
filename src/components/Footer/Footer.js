import './Footer.css';

export default function Footer () {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__information">
        <p className="footer__year">© 2023</p>
        <nav className="footer__navigator">
          <ul className="footer__links">
            <li className="footer__item">
              <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="https://github.com/TaisiyaSleptsova" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}