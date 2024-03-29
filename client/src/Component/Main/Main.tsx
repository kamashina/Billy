import * as React from "react";
import "./Main.css";

const Main: React.FC = () => (
  <div>
    <title>Главное</title>
    <div className="container2">
      <h1>Резюме</h1>
      <span className="rez">
        Изучаю Frontend Developer последние 7 месяцев , есть проект на{" "}
        <a href="https://github.com/kamashina/Billy">github</a>. Навыки:
        JavaScript, CSS, HTML, redux, React JS, умею работать с git, писать HTTP
        запросы , имею общее представление о backend`е и работе с базами данных.
        Все мои навыки вы можете посмотреть на проекте githhub:
        https://github.com/kamashina/Billy Зп не важно.
      </span>
    </div>
  </div>
);
export default Main;
