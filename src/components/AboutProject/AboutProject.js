import './AboutProject.css';

export default function AboutProject () {
  return (
    <section className="about-project" id="about-project">
      <h2 className="title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__information">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__information">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__scheme">
        <div className="about-project__back">
          <p className="about-project__duration about-project__duration_theme_green">
            1 неделя
          </p>
          <p className="about-project__name ">Back-end</p>
        </div>
        <div className="about-project__front">
          <p className="about-project__duration about-project__duration_theme_gray">
            4 недели
          </p>
          <p className="about-project__name">Front-end</p>
        </div>
      </div>
    </section>
  )
}