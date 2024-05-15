import { useState } from 'react';
import './page.css'

export default function ShowLab5() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №5</h1>
                <button onClick={() => setPage(1)}>Тема. Мета.</button>
                <button onClick={() => setPage(2)}>Завдання №1</button>
                <button onClick={() => setPage(3)}>Завдання №2</button>
                <div className='subButtons'>
                <button onClick={() => setPage(4)}>Результат</button>
                <button onClick={() => setPage(5)}>Html</button>
                <button onClick={() => setPage(6)}>JavaScript</button>

                </div>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo />}
            {page===2&&<ShowTask1 />}
            {page===3&&<ShowTask2 />}
            {page===4&&<ShowPage />}
            {page===5&&<ShowHtml />}
            {page===6&&<ShowJS />}
        </div>
        </>
    )
}

function ShowLabInfo(){
    return(
        <>
            <h1>Інформація про лабораторну №5</h1>
            <p><strong>Тема</strong>: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
                    сторінок</li>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX</li>
            </ul>

            <p><strong>Місце розташування лаби №5:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Програма</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">HTML-документ</a></li>
                <li><a href="https://odarkabruh.github.io/WEB_Lab5/" target="_blank">Завдання</a></li>
            </ol>

        </>
        )
}


function ShowTask1(){
    return(
        <>
            <h1>Номер залікової: 1511</h1>
            <p>Завдання №1</p>
            <p>1.Створити одновимірний масив, кількість елементів якого задана користувачем. Знайти максимальний серед парних елементів та мінімальний серед елементів з парними індексами. В масиві поміняти місцями знайдені максимальний та мінімальний елементи, надрукувати вхідний та вихідний масиви.
            <br /><br />2. Виконати сортування вихідного масиву за зростанням методом вставки.
            <br /><br />Застосувати функції
            </p>
        </>
        )
}

function ShowTask2(){
    return(
        <>
            <h1>Номер залікової: 1511</h1>
            <p>Завдання №1: Валідація HTML-форми реєстрації користувача</p>
            <p>Забезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число, дата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та перевірочне).<br /><br /> Крім того, забезпечити перевірку введення обов‘язкових полів, помічених (*).
            <br /><br />Застосувати функції
            </p>
        </>
        )
}

function ShowPage(){
    return(
        <>
            <div className='infoDiv'>
                <button><a  target="_blank" href='https://odarkabruh.github.io/WEB_Lab5/'>Відкрити сторінку</a></button>
                    <br />
                    <hr />
                    <br />
                    {ShowHtml()}
                    <br />
                    <hr />
                    <br />
                    {ShowJS()}
            </div>
        </>
    )
}

function ShowHtml(){
    const HTMLCode= `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="MainCSS.css">
            <script src="MainScript.js"></script>
            <title>Time right now is: </title>
        </head>
        <body id="root">
            <h1>Лабораторна робота №5</h1>
            <h3>Завдання №1</h3> 
            <p>Створити одновимірний масив, кількість елементів якого задана користувачем. 
                <br/><br/> 
                Знайти максимальний серед парних елементів та мінімальний серед елементів з парними індексами. В масиві поміняти місцями знайдені максимальний та мінімальний елементи, надрукувати вхідний та вихідний масиви.
                <br/><br/>  
                Виконати сортування вихідного масиву за зростанням методом вставки.
                Застосувати функції 
            </p>      
            <br/>  

            <input type="number" min="1" max='200' id="arraySize" placeholder="Введіть розмір масиву" />
            <button onclick="createArray()">Створити масив</button>
            <p>Розмір:  <span id="printSizeOfArr"></span></p>
            <div class="startArray">
                <p id="printArr"></p>       
            </div>       
            <p> Максимум серед парних: <span id="arrayMax"> </span></p>  
            <p> Мінімум серед непарних: <span id="arrayMin"></span> </p>
            <div class="startArray">
                <p id="swapArr"></p>       
            </div>
            <br />
            <p>Відсортований: </p>
            <div class="startArray">
                <p id="sortArr"></p>        
            </div>
            <br /><br /><hr /><br /><br />
            <h3>Завдання №2</h3>
            <p>Валідація HTML-форми реєстрації користувача</p>
            <p>Забезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число, дата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та перевірочне). Крім того, забезпечити перевірку введення обов‘язкових полів, помічених (*). </p>
            <form action="" onsubmit="submitPage()">
                <div>
                    <input id="checkInt" type="number" required></input>
                    <button onclick="checkIfInteger()" type="button">Перевірити чи ціле *</button>
                </div> 
                <br />
                
                <div>
                    <input id="checkNum" required></input>
                    <button onclick="checkIfNum()" type="button">Перевірити чи число *</button>
                </div>
                <br />
                <div>
                    <input id="checkDate"></input>
                    <button onclick="checkIfDate()"type="button">Перевірити чи дата</button>
                </div>  

                <br /><hr /><br />

                <div>
                    <label>Введіть пароль:</label><br />
                    <input type="password" id="password" minlength="2">
                    <br /><br />
                    <label>Введіть пароль знову:</label><br />
                    <input type="password" id="passwordCheck" minlength="2"><br /><br />
                    <button onclick="checkPasswords()" type="button">Перевірити праролі</button>
                </div>
                <br />
                <br />
                <input type="submit">
            </form>
        
            <div id="submitPage"></div>
        </body>   
        </html>    
    `

    return(<>
            <pre>
                {HTMLCode}
            </pre>
        </>)
} 

function ShowJS(){
    const JSCode= `
    var sizeOfArr;
    var min = 0;
    var max = 500;
    
    var minIndex;
    var maxIndex;
    
    var answerIsTrue = "#adf09c";
    var answerIsFalse = "#f09c9c";
    
    function checkSize(a, max, min){
        if (a > max){
            return(max);
        }
        else if (a < min){
            return (min);
        }
        else {
            return(a);
        }
    }
    
    function getRndInteger() {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    function getSizeOfArray(){
        sizeOfArr = document.getElementById("arraySize").value;
        sizeOfArr = checkSize(sizeOfArr, 200, 1);
        document.getElementById("printSizeOfArr").innerHTML = sizeOfArr;
        return(sizeOfArr);
    }
    
    function fillArray(item){
        item = "B";
    }
    
    function findMin(array){
        let localMin = max;
        for (let i = 0; i < array.length; i+=2) {
            if (array[i] < localMin){
                minIndex = i;
                localMin = array[i]
            }
        }
        
        return(localMin);
    }
    
    function findMax(array){
        let localMax = min;
        for (let i = 1; i < array.length; i+=2) {
            if (array[i] > localMax){
                maxIndex = i;
                localMax = array[i]
            }
        }
        return(localMax);
    }
    
    function swapMinMax(array){
        let a;
        a = array[minIndex];
        array[minIndex] = array[maxIndex];
        array[maxIndex] = a;
    }
    
    function insertSort(array) {
        for (let i = 1; i < array.length; i++) {
            let currentValue = array[i];
            let j;
            for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
                array[j + 1] = array[j]
            }
            array[j + 1] = currentValue
        }
        return array;
      }
    
    function createArray(){
        sizeOfArr = getSizeOfArray();
        let srcArr = [];
        srcArr.length = sizeOfArr;
        for (let i = 0; i < srcArr.length; i++) {
            srcArr[i] = getRndInteger();
        }
        let arrayDiv = document.getElementById("printArr");
        let swapArrayDiv = document.getElementById("swapArr");
        let sortArrayDiv = document.getElementById("sortArr");
        arrayDiv.innerHTML = "";
        swapArrayDiv.innerHTML = "";
        srcArr.forEach((element) => arrayDiv.innerHTML+=" "+element);
        var localMin = findMin(srcArr);
        document.getElementById("arrayMin").innerHTML = localMin;
        var localMax = findMax(srcArr);
        document.getElementById("arrayMax").innerHTML = localMax;
    
        let swappedArr = srcArr;
        swapMinMax(swappedArr);
        swappedArr.forEach((element) => swapArrayDiv.innerHTML+=" "+element);
    
        let sortArr = srcArr;
        sortArr = insertSort(sortArr);
        sortArr.forEach((element) => sortArrayDiv.innerHTML+=" "+element);
    }
    
    function checkIfInteger(){
        num = document.getElementById("checkInt").valueAsNumber;
        if (Number.isInteger(num)){
            document.getElementById("checkInt").style.backgroundColor = answerIsTrue;
        }
        else {
            document.getElementById("checkInt").style.backgroundColor = answerIsFalse;
        }
    }
    
    function checkIfNum(){
        num = document.getElementById("checkNum").value;
        if (!isNaN(num)){
            document.getElementById("checkNum").style.backgroundColor = answerIsTrue;
        }
        else {
            document.getElementById("checkNum").style.backgroundColor = answerIsFalse;
        }
    }
    
    function checkIfDate(){
        let dateObj = new Date(document.getElementById("checkDate").value);
        if (dateObj != "Invalid Date"){
            document.getElementById("checkDate").style.backgroundColor = answerIsTrue;
        }
        else {
            document.getElementById("checkDate").style.backgroundColor = answerIsFalse;
        }
    }
    
    function checkPasswords(){
        let password1 = document.getElementById("password").value;
        let password2 = document.getElementById("passwordCheck").value;
        if (password1 ==  password2){
            document.getElementById("password").style.backgroundColor = answerIsTrue;
            document.getElementById("passwordCheck").style.backgroundColor = answerIsTrue;
        }
        else {
            document.getElementById("password").style.backgroundColor = answerIsFalse;
            document.getElementById("passwordCheck").style.backgroundColor = answerIsFalse;
        }
    }
    
    function submitPage(){
        
    }
    `

    return(<>
            <p>
                <pre>{JSCode}</pre>
            </p>
        </>)
} 