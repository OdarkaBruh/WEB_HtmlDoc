import { useState } from 'react';
import './page.css'
import './Lab4.css'

export default function ShowLab4() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №4</h1>
                <button onClick={() => setPage(1)}>Тема. Мета.</button>
                <button onClick={() => setPage(2)}>Інформація про лабораторну</button>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo />}
            {page===2&&<ShowLabDetails />}
        </div>
        </>
    )
}

function ShowLabInfo(){
    return(
        <>
            <h1>Інформація про лабораторну №4</h1>
            <p><strong>Тема</strong>: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</li>
            </ul>

            <p><strong>Місце розташування лаби №4:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Програма</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">HTML-документ</a></li>
            </ol>

        </>
        )
}

function ShowLabDetails(){
    return(
        <>
            <p>Було розробленно три версії для сайту:</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>Для телефонів - &lt; 425</li>
                <li>Для планшетів - 425-768</li>
                <li>Для пк - &gt; 768</li>
            </ul>

            <p>Пк версія підтримує всі три віконця паралельно, для планшетів - до двох і телефон лише по одному віконцю для зручності перегляду.</p>
        </>
        )
}

