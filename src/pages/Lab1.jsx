import { useState } from 'react';
import './page.css'
import './Lab1.css'

export default function ShowLab1() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №1</h1>
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

function ShowDescription(){
    return(
        <>
            <h1>Опис предметного середовища</h1>
            <h2>Планувальник задач</h2>
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
            <p><strong>Тема</strong>: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ В HTML-ДОКУМЕНТІ.</p>
            <p><strong>Мета:</strong>: придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. <br />Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.</p>
            <p><strong>Місце розташування лаби №1:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_Resume.git" target="_blank">Резюме</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">HTML-документ</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Застосунок</a></li>
            </ol>
        </>
        )
}

function ShowStructure(){
    return(
        <>
            <h1>Структура документу</h1>
            {ShowTable()}
            <hr color="blue"/>
            {ShowForm()}
            <hr color="blue" />
            {ShowImage()}

        </>
        )
}

function ShowTable(){
    const codeText = `
    <table>
    <tr>
        <th>Стовпчик №1</th>
        <th>Стовпчик №2</th>
        <th>Стовпчик №3</th>
    </tr>
    <tr>
        <td>&#91;0,0&#93;</td>
        <td>&#91;0,1&#93;</td>
        <td>&#91;0,2&#93;</td>
    </tr>
    <tr>
        <td>&#91;1,0&#93;</td>
        <td>&#91;1,1&#93;</td>
        <td>&#91;1,2&#93;</td>
    </tr>
    <tr>
        <td>Ім&#39;я</td>
        <td>Фамілія</td>
        <td>По-Батькові</td>
    </tr>
</table>
    `
    return(
        <>
            <h2>HTML-Код таблиць</h2>
            <table>
                <tr>
                    <th>Стовпчик №1</th>
                    <th>Стовпчик №2</th>
                    <th>Стовпчик №3</th>
                </tr>
                <tr>
                    <td>&#91;0,0&#93;</td>
                    <td>&#91;0,1&#93;</td>
                    <td>&#91;0,2&#93;</td>
                </tr>
                <tr>
                    <td>&#91;1,0&#93;</td>
                    <td>&#91;1,1&#93;</td>
                    <td>&#91;1,2&#93;</td>
                </tr>
                <tr>
                    <td>Ім&#39;я</td>
                    <td>Фамілія</td>
                    <td>По-Батькові</td>
                </tr>
            </table>
            <hr />
            <pre>{codeText}</pre>
            
        </>
        )
}

function ShowForm(){
    const codeText = `
    <form>
                <label>Ваше ім&#39;я:</label><br />
                <input type="text" id="fname"></input><br />

                <label>Ваш вік:</label><br />
                <input type="number" id="fage"></input><br /><br />

                <label>Відмідьте за які мови програмування ви чули:</label><br />

                <input type="checkbox" id="langCode1"/>
                <label>Java</label><br />
                <input type="checkbox" id="langCode2"/>
                <label>C</label><br />
                <input type="checkbox" id="langCode3"/>
                <label>Python</label><br />
                <input type="checkbox" id="langCode4"/>
                <label>MeowMeow</label><br /><br />

                <input type="submit" value="Submit"></input>
            </form>
    `
    return(
        <>
            <h2>HTML-Код форми</h2>
            <form>
                <label>Ваше ім&#39;я:</label><br />
                <input type="text" id="fname"></input><br />

                <label>Ваш вік:</label><br />
                <input type="number" id="fage"></input><br /><br />

                <label>Відмідьте за які мови програмування ви чули:</label><br />

                <input type="checkbox" id="langCode1"/>
                <label>Java</label><br />
                <input type="checkbox" id="langCode2"/>
                <label>C</label><br />
                <input type="checkbox" id="langCode3"/>
                <label>Python</label><br />
                <input type="checkbox" id="langCode4"/>
                <label>MeowMeow</label><br /><br />

                <input type="submit" value="Submit"></input>
            </form>
            <hr />
            <pre>{codeText}</pre>
        </>
        )
}

function ShowImage(){
    const codeText = `  <img src="../img/qr.png" alt="Лінк на монобанку"/>`
    return(
        <>
            <h2>HTML-Код зображення</h2>
            <a href="https://send.monobank.ua/jar/yzzi7qW5w" target="_blank"><img src="../img/qr.png" alt="Лінк на монобанку"/></a>
            <h2>Донат на Авдіївський напрямок</h2>
            <p>Ось вас і піймав сьогоднішній донат</p>

            <hr />
            <pre>{codeText}</pre>
        </>
        )
}

function ShowConclusion(){
    return(
        <>
            <h1>Висновки</h1>
            <p><strong>Висновок:</strong><br />&emsp;Було створенно три макети в Figma: макет резюме, макет застосунку та тестові завдання по відео. Також був розроблений HTML-код застосунку, резюме та цього HTML-документу з використанням React.</p>
        </>
        )
}