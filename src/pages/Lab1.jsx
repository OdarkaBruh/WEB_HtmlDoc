import { useState } from 'react';
import './page.css'

function ShowDescription(){
    return(
        <>
            <h1>Опис предметного середовища</h1>
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
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
        {page===1&&<ShowDescription />}
        </div>
        </>
    )
}