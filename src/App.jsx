//import { Fragment } from 'react';
import ShowLab1 from "./pages/Lab1";
import { useState } from 'react';
import './App.css'

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="titleText">
        <h1>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ &quot;WEB-ОРІЄНТОВАНІ ТЕХНОЛОГІЇ. ОСНОВИ FRONTEND ТА BACKEND РОЗРОБОК&quot;</h1>
        <h2>Студентки групи ІО-15 Нохріної Дар&apos;ї Андріївни</h2>

        <h3>{count}</h3>
      </div>
      <div className="panelPage">
        <button onClick={() => setCount(1)}>Лабораторна робота №1</button>
        <button onClick={() => setCount(2)}>Лабораторна робота №2</button>
        <button onClick={() => setCount(3)}>Лабораторна робота №3</button>
      </div>
      <div className="infoContent">
      {count===1&&<ShowLab1 />}
      </div>
    </>
  )
}
