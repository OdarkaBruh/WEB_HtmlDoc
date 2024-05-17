import { useState } from 'react';
import './page.css'
import './Lab3.css'

export default function ShowLab3() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №3</h1>
                <button onClick={() => setPage(1)}>Тема. Мета.</button>
                <button onClick={() => setPage(2)}>Завдання №1</button>
                <button onClick={() => setPage(3)}>Завдання №2</button>
                <div className='subButtons'>
                <button onClick={() => setPage(4)}>Фіксована таблична верстка</button>
                <button onClick={() => setPage(5)}>Гумова таблична верстка</button>
                <button onClick={() => setPage(6)}>Фіксована блокова верства</button>
                <button onClick={() => setPage(7)}>Гумова блокова верства</button>
                </div>
                <button onClick={() => setPage(8)}>Завдання №3</button>
                <div className='subButtons'>
                <button onClick={() => setPage(9)}>Зовнішній вигляд сторінки</button>
                <button onClick={() => setPage(10)}>HTML-код</button>
                <button onClick={() => setPage(11)}>CSS-код</button>
                </div>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo />}
            {page===2&&<ShowTask1 />}
            {page===3&&<ShowTask2 />}
            {page===4&&<ShowTask2_FixedTabularLayout />}
            {page===5&&<ShowTask2_RubberTabularLayout />}
            {page===6&&<ShowTask2_FixedBlockLayout />}
            {page===7&&<ShowTask2_RubberBlockLayout />}
            {page===8&&<ShowTask3 />}
            {page===9&&<ShowTask3_pages />}
            {page===10&&<ShowTask3_HTML />}
            {page===11&&<ShowTask3_CSS />}
            {page===12&&<Conclusion />}
        </div>
        </>
    )
}

function ShowLabInfo(){
    return(
        <>
            <h1>Інформація про лабораторну №3</h1>
            <p><strong>Тема</strong>: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
                    сторінок</li>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX</li>
            </ul>

            <p><strong>Місце розташування лаби №3:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Репозиторій сайту</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">Репозиторій HTML-документу</a></li>
                <li><a href="https://odarkabruh.github.io/WEB_Lab3/" target="_blank">Завдання №3</a></li>
            </ol>

        </>
        )
}


function ShowTask1(){
    return(
        <>
            <h1>Інформація про лабораторну №3</h1>
            <p>Сайт розробляється за допомогою гумової блокової верстки з використанням flex-боксів, бо це є найзрічнішим і найбільш адаптивним варіантом.</p>
        </>
        )
}

function ShowTask2(){
    return(
        <>
            <p>Номер залікової: 1511</p>
            <p>Розмітка за допомогою таблиці:</p>
            <img  src="/img/Lab3/lab3_v1.PNG" alt="Варіант 1"/>
            <ShowTask2_FixedTabularLayout />
            <ShowTask2_RubberTabularLayout />
            <hr />
            <p>Розмітку за допомогою блоків:</p>
            <img  src="/img/Lab3/lab3_v2.PNG" alt="Варіант 2"/>
            <div className='BlockLayout'>
            <ShowTask2_FixedBlockLayout />
            <ShowTask2_RubberBlockLayout />
            </div>
        </>
        )
}

function ShowTask2_FixedTabularLayout(){
    return(
        <>
            <h2>Фіксована таблична верстка</h2>
            <div className="FixedTabularLayout">
                <table cellPadding={0} cellSpacing={0}>
                    <tr>
                        <td className='TableTop' colSpan={3}> 1 </td>
                    </tr>
                    <tr>
                        <td className='TableCenterSide'> 5 </td>
                        <td className='TableCenter'> 4 </td>
                        <td className='TableCenterSide'> 2 </td>
                    </tr>
                    <tr>
                        <td className='TableBottom' colSpan={3}> 3 </td>
                    </tr>
                </table>
            </div>
        </>
        )
}

function ShowTask2_RubberTabularLayout(){
    return(
        <>
            <h2>Гумова таблична верстка</h2>
            <div className="RubberTabularLayout">
                <table cellPadding={0} cellSpacing={0}>
                    <tr>
                        <td className='TableTop' colSpan={3}> 1 </td>
                    </tr>
                    <tr>
                        <td className='TableCenterSide'> 5 </td>
                        <td className='TableCenter'> 4 </td>
                        <td className='TableCenterSide'> 2 </td>
                    </tr>
                    <tr>
                        <td className='TableBottom' colSpan={3}> 3 </td>
                    </tr>
                </table>
            </div>
        </>
        )
}

function ShowTask2_FixedBlockLayout(){
    return(
        <>
            <h2>Фіксована блокова верства</h2>
            <section id="FixedBlockLayout">
            <div className="FixedBlockLayout">
            <div className="BlockLayout">
                <div className="TableTop"> 
                    <div className='SmallBox'> white </div>
                    <p>1</p>
                </div>
                <div className="Center">
                    <div className="CenterLeft"><p>2</p> </div>
                    <div className="CenterRight" id="InsideBox">
                        <div className="CenterR_Top"> red </div>
                        <div className="CenterR_Side">
                            <div className='CenterR_L'> <p>3</p> </div>
                            <div className="CenterR_R"><p>4</p> </div>
                        </div>
                    </div>
                </div>
                <div className="TableBottom">
                    <p>5</p>
                </div>
            </div>
            </div>
            </section>
        </>
        )
}

function ShowTask2_RubberBlockLayout(){
    return(
        <>
            <h2>Гумова блокова верстка</h2>
            <section id="RubberBlockLayout">
            <div className="RubberBlockLayout">
                <div className="BlockLayout">
                    <div className="TableTop"> 
                        <div className='SmallBox'> white </div>
                        <p>1</p>
                    </div>
                    <div className="Center">
                        <div className="CenterLeft"><p>2</p> </div>
                        <div className="CenterRight" id="InsideBox">
                            <div className="CenterR_Top"> red </div>
                            <div className="CenterR_Side">
                                <div className='CenterR_L'> <p>3</p> </div>
                                <div className="CenterR_R"><p>4</p> </div>
                            </div>
                        </div>
                    </div>
                    <div className="TableBottom">
                        <p>5</p>
                    </div>
                </div>
            </div>
            </section>
        </>
        )
}


function ShowTask3(){
    return(
        <>
            <h1>Завдання №3</h1>
            <div className="Task3_site">
            <img  src="/img/Lab3/task3.PNG" alt="Варіант 3"/>
            <hr />
            <ShowTask3_pages />
            <ShowTask3_HTML />
            <ShowTask3_CSS />
            </div>
        </>
        )
}

function ShowTask3_pages(){
    return(
        <>
            <h1>Завдання №3</h1>
            
                <img  src="/img/Lab3/site1.PNG" alt="Сайт скрін №1"/>
                <img  src="/img/Lab3/site2.PNG" alt="Сайт скрін №1"/>
                <img  src="/img/Lab3/site3.PNG" alt="Сайт скрін №1"/>
            
            <hr />
        </>
        )
}

function ShowTask3_HTML(){
    const HTML_code = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Lab3</title>
            <link rel="stylesheet" href="lab3_site.css">
        </head>
        <header>
            <ul class="menu">
                <li>Форми навчання</li>
                <li>Заходи</li>
                <li>Про академію</li>
                <li>Контакти</li>
                <select id="stateSelect" onchange="stateSelected();" class="selector">
                    <option value="Kyiv" selected="selected">Київ</option>
                    <option value="Lviv">Львів</option>
                    <option value="Odesa">Одеса</option>
                </select>
            </ul>
        </header>
        <body>
            <div id="root">
            <div class="subbody">
    
                <div class="body-title">
                    <p class="shadow-text-h1">Для кого</p>
                    <h1>Для кого розробленна програма</h1>
                </div>
                <section class="TopSection">
                    <div class="TopSection-main">
                        <h1>Школярі та випускники (15-18 років)</h1>
                        <p>отримають першу професію не відкладаючи на потім свою мрію стати програмістом</p>
                        <div class="square">
                            <img src="D:/github/WEB_HtmlDoc/img/Lab3/img (2).jpg" alt="Photo №2"/>
                            <div class="image-backgroung"></div>
                        </div>
                    </div>
                    <div class="TopSection-main">
                        <div class="square">
                            <img src="D:/github/WEB_HtmlDoc/img/Lab3/img (3).jpg" alt="Photo №2"/>
                            <div class="image-backgroung"></div>
                        </div>
                        <h1>Студенти ВНЗ (18-23 роки)</h1>
                        <p>освоять другу спеціальність паралельно з університетською освітою</p>
                    </div>
                    <div class="TopSection-main">
                        <h1>Представники інших професій (23-55 років)</h1>
                        <p>яких не влаштовує поточна кар'єрна і фінансова перспектива зможуть перевчитися на розробника ПЗ і отримати затребувану професію</p>
                        <div class="square">
                            <div class="image-backgroung"></div>
                            <img src="D:/github/WEB_HtmlDoc/img/Lab3/img (7).jpg" alt="Photo №2"/>
                        </div>
                    </div>
                    <div class="TopSection-main">
                        <div class="square">
                            <img src="D:/github/WEB_HtmlDoc/img/Lab3/img (7).jpg" alt="Photo №2"/>
                            <div class="image-backgroung"></div>
                        </div>
                        <h1>Всі бажаючі підвищити IT-кваліфікацію</h1>
                        <p>систематизують свої знання і отримають робочі навички, затребувані сучасному IT</p>
                    </div>
                </section>
                <div class="body-title">
                    <p class="shadow-text-h1">проходить навчання</p>
                    <h1>Як проходить навчання</h1>
                </div>
                <section class="image-middle">
                    <div class="square">
                        <img src="D:/github/WEB_HtmlDoc/img/Lab3/img (6).jpg" alt="Photo №2"/>
                        <div class="image-backgroung"></div>
                    </div>
                    <div class="square">
                        <img src="D:/github/WEB_HtmlDoc/img/Lab3/img (7).jpg" alt="Photo №2"/>
                        <div class="image-backgroung"></div>
                    </div>
                    <div class="square">
                        <img src="D:/github/WEB_HtmlDoc/img/Lab3/img (3).jpg" alt="Photo №2"/>
                        <div class="image-backgroung"></div>
                    </div>
                </section>
                <div class="body-title">
                    <p class="shadow-text-h1">Партнери</p>
                    <h1>Партнери Академії</h1>
                </div>
                <section class="partners-section">
                    <div class="square">
                        <img src="D:/github/WEB_HtmlDoc/img/Lab3/logo.png" alt="Logo"/>
                        <div class="image-backgroung"></div>
                    </div>
                    <div class="description">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </section>
            </div>
            </div>
        </body>
    </html>
    `
    return(
        <>
            <pre>{HTML_code}</pre>
        </>
        )
}
function ShowTask3_CSS(){
    const CSS_code = `
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
      
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: auto;
    }
    
    body {
        overflow: auto;
        display: block;
    }
    #root {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
    
    .subbody {
        width: 90%;
        background: radial-gradient(#EDEDED, #DBDBDB);
    }
    
    header {
        display: flex;
        flex-direction: row;
    }
    
    .menu {
        list-style: none;
        margin-left: 13%;
        width: 100%;
        height:10%;
        display: block;
    }
    
    .menu li{
        display: inline;
        background-color: black;
        padding: 10px;
        margin: 5px;
        font-size: 20px;
        color: #FFFFFF;
    }
    
    .menu select{
        width: 10%;
        min-height: 49px;
        background-color: black;
        padding: 0px;
        margin: 0px;
        font-size: 20px;
        color: #FFFFFF;
        font-size: 20px;
    }
    .square img {
        height:100%; 
        width:100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        object-fit: cover;
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0 0);
    }
    
    
    .TopSection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin-bottom: 60px;
        word-break: normal;
    }
    
    .TopSection div {
        margin: 10px;
        padding: 10px;
        height:auto;
    }
    
    .TopSection h1{
        font-size: 1.5em;
    }
    
    .TopSection p{
        font-size: 1.3em;
    }
    
    .TopSection-main div{
        padding:0px;
    }
    .square {
        display: inline;
        aspect-ratio: 3 / 2;
        margin: 0px;
        padding: 0px;
        width: 100%;
        transform: rotate(3deg);
        min-height: 50px;
    }
    
    .square .image-backgroung {
        position: relative;
        z-index:1;
        background-color: #055EA9;
        clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0% 20%);
        width: 100%;
        height: 100%;
        transform: rotate(-6deg);
        margin:0px;
    }
    
    .TopSection .square {
        left: -5%;
        position: relative;
    }
    .TopSection .TopSection-main {
        background-color: #FFFFFF;
        display: flex;
        flex-direction:column;
        justify-content: space-evenly;
        width: 20%;
    }
    
    .TopSection-img img {
        left:-10px;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0 0);
    }
    
    .image-middle {
        width: 100%;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
    
    .image-middle .square {
        aspect-ratio: 1;
        margin: 20px;
    }
    .image-middle img {
        min-width: 50px;
        width: 100%;
        height: 100%;
    }
    
    .image-middle div {
        display: block;
        transform: rotate(3deg);
        transition: transform 1s ease-in-out;
    }
    
    .image-middle div:hover, .image-middle div:hover > .image-backgroung{
        transform: rotate(0);
    }
    
    .partners-section {
        width: 90%;
        display: flex;
        flex-direction: row;
        margin: auto;
        align-items: center;
    }
    
    .partners-section .square {
        min-width: 40%;
        aspect-ratio: 3 / 2;
        height: fit-content;
    }
    
    .partners-section p {
        text-align: left;
    }
    
    .partners-section h2 {
        margin: 10px;
    }
    
    .partners-section div {
        display: flex;
        margin: 20px;
        flex-direction: column;
        transition: transform 1s ease-in-out;
    }
    .partners-section img {
        width: 100%;
        min-width: 40%;
        aspect-ratio: 3 / 2;
        height: auto;
    
    }
    .partners-section .description {
        margin-left: 20px;
    }
    .partners-section div:hover, .partners-section div:hover > .image-backgroung{
        transform: rotate(0);
    }
    
    .body-title {
        display: flex;
        position: relative;
        width: 100%;
        justify-content: center;
        flex-wrap: nowrap;
        align-items: center;
    }
    .body-title p{
        min-width: 100%;
        font-size: 6em;
        color: white;
        font-weight: bolder;
        position: absolute;
        margin: 0px;
        opacity: 20%;
        bottom: 10%;
    }
    
    .body-title h1{
        font-size: 3em;
        position: relative;
        z-index: 2;
    }
    `
    return(
        <pre>{CSS_code}</pre>
        )
}

function Conclusion(){
    return(
        <>
            <h1>Висновок:</h1>
            <p>Було вивчено теорію і розроблено фіксовані та гумові верстки, табличкі і блокові.<br />
            Фіксовані верстки дають неймовірно точний контроль за зовнішнім виглядом, але при цьому унеможливлюють зручне користування сайтом, якщо розширення девайсу не збігається з тим, під який розроблений сайт. <br />
            Гумова верстка ж вимагає більше зусиль, але дає змогу змінювати вигляд сайту в залежності від роздільної здатності девайсу, на якому він відкритий.<br /> <br />
            Таблична верстка не є зручною і код виходить задовгим, тому зараз часто використовують саме блокову верстку, яка є легкою, зрозумілою і її можна використати для багатьох цікавих стильових рішень.<br /><br />
            </p>
            <p>Також в процесі виконання був розроблений сайт за макетом з використанням flewbox</p>
            <hr />
        </>
        )
}
