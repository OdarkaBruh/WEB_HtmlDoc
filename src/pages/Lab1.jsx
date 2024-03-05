import { useState } from 'react';
import './page.css'

function ShowDescription(){
    return(
        <>
            <h1>Опис предметного середовища</h1>
            <h3>Планувальник задач</h3>
            <ul>
                <li>Загальна сторінка з усіма завданнями</li>
                <li>Сторінка з завданнями на сьогодні</li>
                <li>Можливість створення підзадач</li>
                <li>Вказання дедлайнів задач</li>
                <li>Вказання пріорітетності задач</li>
            </ul>
        </>
        )
}

function ShowTheme(){
    return(
        <>
            <h1>Тема. Мета. Місце розташування лаби №1</h1>
        </>
        )
}

function ShowStructure(){
    return(
        <>
            <h1>Структура документу</h1>
        </>
        )
}

function ShowTable(){
    return(
        <>
            <h1>Структура документу</h1>
            <h2>HTML-Код таблиць</h2>
        </>
        )
}

function ShowForm(){
    return(
        <>
            <h1>Структура документу</h1>
            <h2>HTML-Код форми</h2>
        </>
        )
}

function ShowImage(){
    return(
        <>
            <h1>Структура документу</h1>
            <h2>HTML-Код зображення</h2>
        </>
        )
}

function ShowConclusion(){
    return(
        <>
            <h1>Висновки</h1>
        </>
        )
}

export default function ShowLab1() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>LAB 1</h1>
                <button onClick={() => setPage(1)}>Опис предметного середовища</button>
                <button onClick={() => setPage(2)}>Тема.Мета.Місце розташування лаби №1</button>
                <button onClick={() => setPage(3)}>Структура документу</button>
                <div className='subButtons'>
                <button onClick={() => setPage(4)}>HTML-код таблиць</button>
                <button onClick={() => setPage(5)}>HTML-код форми</button>
                <button onClick={() => setPage(6)}>HTML-код зображення</button>
                </div>
                <button onClick={() => setPage(7)}>Висновки</button>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowDescription />}
            {page===2&&<ShowTheme />}
            {page===3&&<ShowStructure />}
            {page===4&&<ShowTable />}
            {page===5&&<ShowForm />}
            {page===6&&<ShowImage />}
            {page===7&&<ShowConclusion />}
        </div>
        </>
    )
}