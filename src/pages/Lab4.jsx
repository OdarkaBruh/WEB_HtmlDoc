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
                <button onClick={() => setPage(3)}>Приклади коду</button>
                <button onClick={() => setPage(4)}>Результат</button>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo />}
            {page===2&&<ShowLabDetails />}
            {page===3&&<ShowCode />}
            {page===4&&<ShowExamples />}
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
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Репозиторій сайту</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">Репозиторій HTML-документу</a></li>
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

function ShowCode(){
    const code1 = `
    function toggleState(){
        if (window.innerWidth > mobileVersion){
            setToggle(!toggle);
            sidebarToggle = !sidebarToggle;
        }
        else {
            if (toggle){
                setPageNum(1);
            }
            else {
                setToggle(true);
                sidebarToggle = true;
            }
        }
    }

    function mobileDisplay(){
        if (window.innerWidth<=mobileVersion && pageNum !== 2){
            return {
                display: 'none'
            }
        }
        else if (window.innerWidth<=TabletVersion && toggle){
            return {
                
            }
        }
    `
    const code2 = `
    <section className='Sidebar' id="ID_Sidebar" 
                style={{
                    width: toggle ? '30%' 
                    : (window.innerWidth > TabletVersion) ? '5%' 
                    : '10%',
                    display: (window.innerWidth<mobileVersion &&  pageNum !== 0) && 'none' }}>
            {toggle
                ? <FullSidebar setPageNum={setPageNum} toggleState={toggleState}/>
                : <ShortSidebar toggleState={toggleState}/> }
            </section>
            `

    const codeCSS1 = `
    @media only screen and (max-width: 425px) {
        .show-all-tasks-top {
            display: inline-flex;
            justify-content: space-around;
            padding-left: 5px;
        }
    
        .show-all-tasks-top img{
            width: 100%;
        }
        .show-all-tasks-top .ButtonMobile{
            padding: 10px;
            width: 10%;
            margin: auto 0px;
            display: block;
        }
    }
    
    `

    const codeCSS2 = `
    @media only screen and (max-width: 425px) {
        #ID_Sidebar {
            width: 100% !important;
        }
    
        .full-sidebar img {
            margin: 3% auto;
            width: 10%;
        }
    
    }
    `
    return(<>
        <h2>Функції в реакті, щоб відслідковувати зміни стану і які елементи відображати:</h2>
        <pre>{code2}</pre>
        <br/><br/>
        <pre>{code1}</pre>
        <br/><br/><hr /><br/><br/>
        <h2>CSS:</h2>
        <pre>{codeCSS1}</pre>
        <br/><br/>
        <pre>{codeCSS2}</pre>
        <br/><br/><hr /><br/><br/>
    </>)}

function ShowExamples(){
    return(<>
        <h2>Десктопна</h2>
        <div className='resultImg'>
            <img src="../img/Lab4/desc1.PNG" alt=""/>
            <img src="../img/Lab4/desc2.PNG" alt=""/>
        </div>
        <h2>Планшетна</h2>
        <div className='resultImg'>
            <img src="../img/Lab4/tabl1.PNG" alt=""/>
            <img src="../img/Lab4/tabl2.PNG" alt=""/>
        </div>
        <h2>Мобільна</h2>
        <div className='resultImg'>
            <img src="../img/Lab4/mob1.PNG" alt=""/>
            <img src="../img/Lab4/mob2.PNG" alt=""/>
            <img src="../img/Lab4/mob3.PNG" alt=""/>
        </div>
        </>)}

