//import { Fragment } from 'react';
import ShowLab1 from "./pages/Lab1";
import './App.css'

function App() {
  return (
    <>
      <div className="titleText">
        <h1>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ &quot;WEB-ОРІЄНТОВАНІ ТЕХНОЛОГІЇ. ОСНОВИ FRONTEND ТА BACKEND РОЗРОБОК&quot;</h1>
        <h2>Студентки групи ІО-15 Нохріної Дар&apos;ї Андріївни</h2>
      </div>
      <div className="panelPage">
        <ShowLab1 />
      </div>
    </>
  )
}

export default App;
