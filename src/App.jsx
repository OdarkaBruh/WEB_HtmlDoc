//import { Fragment } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHDFqVOcebb1q2NM13xMiic3O54qRUdaQ",
  authDomain: "htmldoc-bee04.firebaseapp.com",
  projectId: "htmldoc-bee04",
  storageBucket: "htmldoc-bee04.appspot.com",
  messagingSenderId: "1543313109",
  appId: "1:1543313109:web:10262dbf965bbaac45b45c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import ShowLab1 from "./pages/Lab1";
import ShowLab2 from "./pages/Lab2";
import ShowLab3 from "./pages/Lab3";
import ShowLab4 from "./pages/Lab4";
import ShowLab5 from "./pages/Lab5";
import ShowLab6 from "./pages/Lab6";
import ShowLab7 from "./pages/Lab7";
import ShowLab8 from "./pages/Lab8";
import ShowLab9 from "./pages/Lab9";

import { useState } from 'react';
import './App.css'

export default function App() {
  const [count, setCount] = useState(4);
  const [nav, setNav] = useState(false);

  function leftNav(){
    return(
      <div>
        <button onClick={() => setCount(1)}>Лабораторна робота №1</button>
        <button onClick={() => setCount(2)}>Лабораторна робота №2</button>
        <button onClick={() => setCount(3)}>Лабораторна робота №3</button>
        <button onClick={() => setCount(4)}>Лабораторна робота №4</button>
        <button onClick={()=>setNav(false)}>=&#62;</button>
      </div>)
  }

  function rightNav(){
    return(
      <div>
        <button onClick={()=> setNav(true)}>&#60;=</button>
        <button onClick={() => setCount(5)}>Лабораторна робота №5</button>
        <button onClick={() => setCount(6)}>Лабораторна робота №6</button>
        <button onClick={() => setCount(7)}>Лабораторна робота №7</button>
        <button onClick={() => setCount(8)}>Лабораторна робота №8</button>
        <button onClick={() => setCount(9)}>Лабораторна робота №9</button>
      </div>)
  }
  return (
    <>
      <div className="titleText">
        <h1>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ &quot;WEB-ОРІЄНТОВАНІ ТЕХНОЛОГІЇ. ОСНОВИ FRONTEND ТА BACKEND РОЗРОБОК&quot;</h1>
        <h2>Студентки групи ІО-15 Нохріної Дар&apos;ї Андріївни</h2>
      </div>
      <div className="panelPage">
        {nav? leftNav() : rightNav()}
      </div>
      <div className="infoContent">
      {count===1&&<ShowLab1 />}
      {count===2&&<ShowLab2 />}
      {count===3&&<ShowLab3 />}
      {count===4&&<ShowLab4 />}
      {count===5&&<ShowLab5 />}
      {count===6&&<ShowLab6 />}
      {count===7&&<ShowLab7 />}
      {count===8&&<ShowLab8 />}
      {count===9&&<ShowLab9 />}
      </div>
    </>
  )
}
