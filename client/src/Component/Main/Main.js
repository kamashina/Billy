import './Main.css';

const Main = () => (
  <div>
    <title>Главное</title>
    <div className="container">
      <h1>Резюме</h1>
      <span className="rez">
        Учусь на втором курсе университета в IT направлении(прикладная информатика).
        Изучаю Frontend Developer последние 5 месяцев , есть проект на
        {' '}
        <a href="https://github.com/kamashina/Billy">github</a>
        .
        Навыки: JavaScript, CSS, HTML, redux, React JS, умею работать с git, писать HTTP запросы , имею общее представление о beckend`е и работе с базами данных. Все мои навыки вы можете посмотреть на проекте githhub: https://github.com/kamashina/Billy
        Рассчитываю на стажировку в направлении
        Frontend Developer под руководством опытного наставника
        , с возможностью дальнейшего
        продвижения, готов уделять на это максимум времени и сил. Зп не важно.
      </span>
    </div>
  </div>
); export default Main;
