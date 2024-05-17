import { useState } from 'react';
import './page.css'
import './Lab2.css'

export default function ShowLab2() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №2</h1>
                <button onClick={() => setPage(1)}>Інформація про лабораторну №2</button>
                <button onClick={() => setPage(2)}>Способи підключення стилів</button>
                <button onClick={() => setPage(3)}>Селектори</button>
                <div className='subButtons'>
                <button onClick={() => setPage(4)}>Селектори тегу</button>
                <button onClick={() => setPage(5)}>Селектори класу</button>
                <button onClick={() => setPage(6)}>Селектори ідентифікаторів</button>
                <button onClick={() => setPage(7)}>Інші селектори</button>
                </div>
                <button onClick={() => setPage(8)}>CSS</button>
                <button onClick={() => setPage(9)}>Висновки</button>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo />}
            {page===2&&<ShowLabClass />}
            {page===3&&<ShowSelector />}
            {page===4&&<ShowSelectorTag />}
            {page===5&&<ShowSelectorClass />}
            {page===6&&<ShowSelectorID />}
            {page===7&&<ShowSelectorOther />}
            {page===8&&<ShowCSS />}
            {page===9&&<ShowConclusion />}
        </div>
        </>
    )
}

function ShowLabInfo(){
    return(
        <>
            <h1>Інформація про лабораторну №2</h1>
            <p><strong>Тема</strong>: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>
            <p><strong>Мета</strong>: придбати практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів</p>
            
            <p><strong>Місце розташування лаби №2:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_Resume.git" target="_blank">Резюме</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">HTML-документ</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Застосунок</a></li>
            </ol>

        </>
        )
}

function ShowLabClass(){
    const css_link1=`<link rel="stylesheet" href="mystyle.css">`
    const css_link2=`
        <head>
            <style>
                .sideNav {
                    background-color: #E0EBFE;
                    border-radius: 30px;
                    display:flex;
                    justify-content: flex-start;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 60px;
                    min-width: 500px;
                    min-height: 500px;
                }
            </style>
        </head>
    `
    const css_link3=`<p style="color:blue;font-size:20px;"> Тест </p>`
    const css_link4=`import './page.css'`
    return(
        <>
            <h1>Способи підключення стилей</h1>
            <h2>Зовнішня таблиця стилів</h2>
            <p>Можна піключити через тег link в &#60;head&#62;</p>
            <pre>{css_link1}</pre>

            <h2>Внутрішня таблиця стилів</h2>
            <p>Можна також в &#60;style&#62;, прописаному в &#60;head&#62;, прописуються каскадні стилі</p>
            <pre>{css_link2}</pre>

            <h2>Вбудовані стилі</h2>
            <p>В самих тегах також можна вказувати їх властивості</p>
            <pre>{css_link3}</pre>

            <hr />
            <p>Так як мій код написаний з допомогою React, то тут зовнішні таблиці підключені зверху документу наступним чином:</p>
            <pre>{css_link4}</pre>
        </>
        )
}

function ShowSelector(){
    return(
        <>
            {ShowSelectorTag()}
            <hr />
            {ShowSelectorClass()}
            <hr />
            {ShowSelectorID()}
            <hr />
            {ShowSelectorOther()}
        </>
        )
}

function ShowSelectorTag(){
    const HTML_code = `
        <div className='CertainTaskTop'>
            <h1>{IsTaskFinished(task)} {task.name}</h1>
        </div>
    `
    const CSS_code = `
    .CertainTaskTop h1{
        margin: 0px;
        font-size: 35px;
        padding: 8px;
        color: white;
    }
    `
    return(
        <>
            <h1>Селектори тегу</h1>
            <p><strong>Html:</strong></p>
            <pre>{HTML_code}</pre>
            <p><strong>CSS</strong>:</p>
            <pre>{CSS_code}</pre>
            <br />
            <img  src="/img/Lab2/img_scr_tag.PNG" alt="Картинка селектору тегу"/>
        </>
        )
}

function ShowSelectorClass(){
    const HTML_code = `
        <div className='CertainTaskTop'>
            <h1>{IsTaskFinished(task)} {task.name}</h1>
        </div>
    `
    const CSS_code = `
    .CertainTaskTop {
        width: 100%;
        border-radius: 25px 25px 0px 0px;
        background-color: #B0C2FF;
    }
    `
    return(
        <>
            <h1>Селектори класу</h1>
            <p><strong>Html:</strong></p>
            <pre>{HTML_code}</pre>
            <p><strong>CSS</strong>:</p>
            <pre>{CSS_code}</pre>
            <br />
            <img  src="/img/Lab2/img_scr_tag.PNG" alt="Картинка селектору класу"/>
        </>
        )
}

function ShowSelectorID(){
    const HTML_code = `
    <textarea id="desc" placeholder="Describe task..." maxLength="100"></textarea>
    `
    const CSS_code = `
    .CertainTaskInfo #desc {
        background-color: red;
    }
    `
    return(
        <>
            <h1>Селектори ідентифікаторів</h1>
            <p><strong>Html:</strong></p>
            <pre>{HTML_code}</pre>
            <p><strong>CSS</strong>:</p>
            <pre>{CSS_code}</pre>
            <br />
            <img  src="/img/Lab2/img_scr_ID.PNG" alt="Картинка селектору ID"/>
        </>
        )
}

function ShowSelectorOther(){
    const HTML_code = `
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
    const CSS_code = `
    .choosenFullTask {
        background-color: #F4F7FF;
    }
    `
    return(
        <>
            <h1>Інші селектори</h1>
            <h2>Селектор групування</h2>
            <p><strong>Html:</strong></p>
            <pre>{HTML_code}</pre>
            <p><strong>CSS</strong>:</p>
            <pre>{CSS_code}</pre>
            <br />
            <div className="image_preview">
            <img  src="/img/Lab2/img_scr_other.PNG" alt="Картинка селектор групування" />
            </div>
            
        </>
        )
}

function ShowCSS(){
    const CSS1 = `
    .example_code #eFont{
        font-family: fantasy, "Bradley Hand", cursive;
        font-size: 25px;
    }
    `
    const CSS2 = `
    .example_code #eBorder {
        border: 3px salmon dotted;
        padding: 20px;
    }
    `
    const CSS3 = `
    .example_code #eBackground{
        background-color: bisque;
        padding: 20px;
    }
    `
    const CSS4 = `
    .example_code #eTextColor{
        color:darkred;
    }
    `
    const CSS5 = `
    .example_code #eTable table{
        margin:auto;
        width: 70%;
        border-collapse: collapse;
    }
    
    .example_code #eTable table, th, td {
        border: 1px solid darkseagreen;
        color: chocolate;
    }
    `

    const CSS6 = `
    .example_code .firstList {
        background-color: bisque;
    }
    
    .example_code .firstList li{
        font-size: 25px;
    }
    
    .example_code .secondList {
        background-color: white;
        border-radius: 10px;
        list-style-type: square;
        padding: 5px;
        margin: 5px;
    }
    
    .example_code .secondList li {
        font-size: 20px;
        font-style: oblique;
    }
    `

    const CSS7 = `
    .example_code eCorners {
        background-color: bisque;
        border-radius: 10px;
    }
    `
    const CSS8 = `
    .example_code #eAnimation h2 {
        padding:30px;
        margin: auto;
        background-color: darkblue;
        width:200px;
        border-radius: 20px;
        color:white;
    }
    
    .example_code #eAnimation h2:hover {
        animation-name: anim;
        animation-duration: 4s;
    }
    
    @keyframes anim {
        from {background-color: darkblue;}
        to {background-color: gainsboro;}
    }
    `
    const CSS9 = `
    .example_code #eList {
        position: relative;
        display: inline-block;
        background-color: bisque;
        width: 300px;
        justify-self: center;
    }
    
    .example_code #eList,#eList-content {
        border-radius: 10px;
    }
    .example_code #eList-content {
        display: none;
        background-color: white;
        width: 80%;
        padding:10px;
        margin:auto;
        margin-bottom: 10px;
    }
    
    .example_code #eList:hover #eList-content {
        display: block;
    }
    
    `
    return(
        <>
            <div className='example_code'>
            <h1 id="eFont">Шрифти</h1>
            <pre>{CSS1}</pre>
            <br />
            <h1 id="eBorder">Контури</h1>
            <pre>{CSS2}</pre>
            <br />
            <h1 id="eBackground">Фон</h1>
            <pre>{CSS3}</pre>
            <br />
            <h1 id="eTextColor"> Колір тексту</h1>
            <pre>{CSS4}</pre>
            <br />
            <h1 id="eTable">Таблиці</h1>
            <table>
                <tr>
                    <th>Стовпчик №1</th>
                    <th>Стовпчик №2</th>
                </tr>
                <tr>
                    <td>&#91;0,0&#93;</td>
                    <td>&#91;0,1&#93;</td>
                </tr>
            </table>
            <pre>{CSS5}</pre>
            <br />
            <h1>Багаторівневий список</h1>
            <ul className='firstList'>
                <li>Один</li>
                <li>Два
                    <ul className='secondList'>
                        <li>Під-два</li>
                        <li>Під-два номер два</li>
                    </ul>
                </li>
                <li>Три</li>
                <li>Чотири</li>
            </ul>
            <pre>{CSS6}</pre>
            <br />
            <h1>CSS Просунутий</h1>
            <h2 id="eCorners">Заокруглені кути</h2>
            <pre>{CSS7}</pre>
            <br />
            <div id="eAnimation">
                <h2> Анімація (Наведи)</h2>
            </div>
            <pre>{CSS8}</pre>
            <br />
            <h2>Випадаючий список</h2>
            <div id="eList">
                <p>Наведи сюди</p>
                <div id="eList-content">
                    <p>Тиць тиць</p>
                </div>
            </div>
            <pre>{CSS9}</pre>
            <br />
            </div>
        </>
        )
}

function ShowConclusion(){
    return(
        <>
            <h1>Висновки</h1>
            <p><strong>Висновок:</strong><br />&emsp;Були додані CSS стилі до застосунку. Додатково були створенні CSS стилі для цього застосунку. Були отриманні навички по CSS такі як: вибір кольору тексту та фону, закруглення кутів, прописування базової анімації через CSS та keyframes, створення випадаючих стилів</p>
        </>
        )
}