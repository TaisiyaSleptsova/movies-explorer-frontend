import './Techs.css';
import '../AboutProject/AboutProject.css'

export default function Techs () {
  return (
    <section className="techs" id="techs">
      <h2 className="title title_theme_black">Технологии</h2>
      <div className="techs__block">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs-items">
          <li className="techs-item">HTML</li>
          <li className="techs-item">CSS</li>
          <li className="techs-item">JS</li>
          <li className="techs-item">React</li>
          <li className="techs-item">Git</li>
          <li className="techs-item">Express.js</li>
          <li className="techs-item">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}
