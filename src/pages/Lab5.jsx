import { useState } from 'react';
import './page.css'
import './Lab6.css'

export default function ShowLab5() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №5</h1>
                <h2>Лабораторна 5.2:</h2>
                <button onClick={() => setPage(1)}>Тема. Мета.</button>
                <button onClick={() => setPage(2)}>Завдання №1</button>
                <button onClick={() => setPage(3)}>Завдання №2</button>
                <div className='subButtons'>
                <button onClick={() => setPage(4)}>Результат</button>
                <button onClick={() => setPage(5)}>Html</button>
                <button onClick={() => setPage(6)}>JavaScript</button>
                </div>
                <br /><br />
                <h2>Лабораторна 5.1:</h2>
                <button onClick={() => setPage(7)}>Тема. Мета.</button>

                <button onClick={() => setPage(8)}>Код</button>
                <button onClick={() => setPage(9)}>Результат виконання</button>
                <br /><br />
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo1 />}
            {page===2&&<ShowTask1 />}
            {page===3&&<ShowTask2 />}
            {page===4&&<ShowPage />}
            {page===5&&<ShowHtml />}
            {page===6&&<ShowJS />}
            {page===7&&<ShowLabInfo2 />}
            {page===8&&<ShowLab_Code />}
            {page===9&&<ShowLab_Result />}
        </div>
        </>
    )
}

function ShowLabInfo1(){
    return(
        <>
            <h1>Інформація про лабораторну №5.2</h1>
            <p><strong>Тема</strong>: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
                    сторінок</li>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX</li>
            </ul>

            <p><strong>Місце розташування лаби №5:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Репозиторій сайту</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">Репозиторій HTML-документу</a></li>
                <li><a href="https://odarkabruh.github.io/WEB_Lab5/" target="_blank">Жива сторінка з виконаним завданням</a></li>
            </ol>

        </>
        )
}
/*
                                    =======
                                    LAB 5.2
                                    =======
*/


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
                <button className="openPageButton"><a  target="_blank" href='https://odarkabruh.github.io/WEB_Lab5/'>Жива сторінка з виконаним завданням</a></button>
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

/*
                                    =======
                                    LAB 5.1
                                    =======
*/


function ShowLabInfo2(){
    return(
        <>
            <h1>Інформація про лабораторну №5.1</h1>
            <p><strong>Тема</strong>: ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.</li>
                <li>Реалізація програм засовами мови JAVASCRIPT</li>
            </ul>

            <p><strong>Місце розташування лаби №5:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Репозиторій сайту</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">Репозиторій HTML-документу</a></li>
                <li><a href="https://odarkabruh.github.io/WEB_Lab5.1/" target="_blank">Жива сторінка з виконаним завданням</a></li>
            </ol>
        </>
        )
}

function ShowLab_Code(){
    const HTML_code = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <title>Lab5.1</title>
</head>
<body id="root">
    <h1>Залікова книжка: 1511</h1>
    <h3>1, 3, 5, 7, 9, 10</h3>
    <div onclick="createProduct(product, logProduct)" class="TaskDiv">
        <h1>Завдання №1</h1>
        <p>Напишіть наступні функції:<br>
            createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
            <br><br>
            logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
            logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
        </p>
    </div>
    <div onclick="getMedicineNames()" class="TaskDiv">
        <h1>Завдання №3</h1>
        <p> З об'єкту medicines потрібно отримати масив в якому будуть лише назви препаратів.<br><br>

            З масиву  потрібно прибрати медикаменти , в яких строк зберігання  уже пройшов. У новому масиві відсортувати медикаменти  у хронологічному порядку.
              Результат вивести у консоль.<br>
            Застосувати стрілочні функції
            
        </p>
    </div>

    <div onclick="task5()" class="TaskDiv">
        <h1>Завдання №5</h1>
        <p> Напишіть функцію, яка приймає массив об'єктів і повертає новий массив <br>Зробіть знижку 20 % на всі фрукти у масиві <br>Надайте ід для кожного продукту 
        </p>
    </div>

    <div onclick="task7()" class="TaskDiv">
        <h1>Завдання №7</h1>
        <p> Напиши клас Client який створює об'єкт
            з властивостями login email<br>
            Оголоси приватні властивості #login #email,
           доступ до яких зроби через геттер та сеттер login email
           
        </p>
    </div>

    <div onclick="task9()" class="TaskDiv">
        <h1>Завдання №9</h1>
        <p>Поверніть об'єкт, в якому вказано кількість тегів.<br><br>
            Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
        </p>
    </div>

    <div onclick="task10()" class="TaskDiv">
        <h1>Завдання №10</h1>
        <p>Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)  і перевіряє правильність закриття дужок () {} []<br><br>
            Якщо рядок містить коректний код функція повертає true.
            В іншому випадку повертає false
          
        </p>
    </div>
</body>   
</html>    

    `

    const JS_code = `
    /*
                              ==========
                                TASK 1
                              ==========
*/
const products = []
var product = {
}
function hulloJS(){
    console.log("hullo");
}

function createProduct(obj, callback){
    const myProduct = Object.create(obj)
    myProduct.id = products.length;
    myProduct.price = 4;
    myProduct.title = "Carrot";
    products.push(myProduct);
    callback(myProduct);
    
}

function logProduct(product) {
    console.log("Your product is: "+ product.title);
    console.log("It's id: "+ product.id);
    logTotalPrice(product);
}

function logTotalPrice(product){
    console.log("It's price: "+ product.price);
}

/*
                              ==========
                                TASK 3
                              ==========
*/

const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    АльфахолінНовіший: new Date("2026-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

function getMedicineNames(){
    console.log("Назви всіх препаратів: "+ Object.keys(medicines))
    getValidMedicineNames();
}

function getValidMedicineNames(){
    const currentDate = new Date();
    Object.filter = (obj, predicate) => 
        Object.keys(obj)
              .filter( key => predicate(obj[key]) )
              .reduce( (res, key) => (res[key] = obj[key], res), {} );
    
    var filteredMedicines = Object.filter(medicines, date => date > currentDate);  
    console.log("Назви не просрочених препаратів (не сортовано): "+ Object.keys(filteredMedicines))
    
    const sortedMedicines = Object.fromEntries(
        Object.entries(filteredMedicines).sort(([,a],[,b]) => a- b)
    );
    console.log("Назви не просрочених препаратів (сортовано): "+ Object.keys(sortedMedicines))
}

/*
                              ==========
                                TASK 5
                              ==========
*/

function task5(){
    const fruits = [
        { name: "apple", price: 200 },
        { name: "orange", price: 300 },
        { name: "grapes", price: 750 },
    ];

    console.log("Продукти до: ")
    printFruits(fruits, false);
    console.log("          ")
    console.log("Продукти зі знижкою: ")
    printFruits(createFruits(fruits), true);
}

function createFruits(f){
    var newFruits = f;
    newFruits.forEach((fruit, i) => {
        fruit.id = i + 1;
        fruit.price = fruit.price / 100 * 80;
    });
    return (newFruits);
}

function printFruits(object, toggle){
    object.forEach((fruit) => {
        console.log(fruit.name + "\n")
        if(toggle){
            console.log("ID: " + fruit.id + "\n")
        }
        console.log("Price: " + fruit.price + "\n")
        console.log("     =====     ")
    })
}

/*
                              ==========
                                TASK 7
                              ==========
*/

function task7(){
    class Clients {
        #email
        #login
        constructor() {
        }
        
        getEmail() {
            return this.#email;
        }

        setEmail(email) {
           this.#email = email;
        }

        getLogin() {
            return this.#login;
        }

        setLogin(login) {
            this.#login = login;
         }
    }

    const person1 = new Clients("123@gmail.com", "456");
    person1.setEmail("123@gmail.com");
    person1.setLogin("456");
    console.log("Email: "+ person1.getEmail());
    console.log("Login: "+ person1.getLogin());
}

/*
                              ==========
                                TASK 9
                              ==========
*/

function task9(){
    const allTags = {};
    createTag = (name) => {
        const myTag = Object.create({});
        myTag.name = name;
        myTag.amount = 1;
        console.log(myTag)
        tags.push(myTag);
    }
    const tweets = [
        { id: "000", likes: 5, tags: ["js", "nodejs"] },
        { id: "001", likes: 2, tags: ["html", "css"] },
        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
        { id: "003", likes: 8, tags: ["css", "react"] },
        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];
    
    tweets.forEach((e) => {
        e.tags.forEach((t) =>{
            allTags[t] = (allTags[t] || 0) + 1;
        })
        
    })

    console.log(allTags)

}

/*
                              ===========
                                TASK 10
                              ===========
*/

function task10(){
    var text = "{[usллцу вц цу{}]}"
    if (checkBrackets(text)){
        console.log("Дужки закриті правильно.")
    }
    else {
        console.log("Ой! Дужки закриті неправильно!")
    }
}

function checkBrackets(text){
    let mapOfBrc = {
        ")" : "(",
        "}": "{",
        "]" : "["
    }

    let tagsCheckingStack = [];
    for (let i = 0; i < text.length; i++){
        if (text[i] === "(" || text[i] === "{" || text[i] === "["){
            tagsCheckingStack.push(text[i])
        }
        else if (tagsCheckingStack[tagsCheckingStack.length-1] === mapOfBrc[text[i]]){
            tagsCheckingStack.pop()
        };
    }
    return (tagsCheckingStack.length ? false : true)
}
    `
    return(<>
    <h1>Html: </h1>
    <pre>{HTML_code}</pre>
    <br /> <br />

    <h1>JavaScript: </h1>
    <pre>{JS_code}</pre>
    </>)
}

function ShowLab_Result(){
    return(<>
        <h1>Завдання №1</h1>
        <div className='resultImg'>
            <img src="../img/Lab5/task1.PNG" alt=""/>
        </div>
        
        <h1>Завдання №3</h1>
        <p> Примітка: для перевірки було додано АнальнігНовіший з датою кінцевою в 2026, щоб перевірити що воно сортує саме за датою</p>
        <div className='resultImg'>
            <img src="../img/Lab5/task3.PNG" alt=""/>
        </div>

        <h1>Завдання №5</h1>
        <div className='resultImg'>
            <img src="../img/Lab5/task5_1.PNG" alt=""/>
            <img src="../img/Lab5/task5_2.PNG" alt=""/>
        </div>
        
        <h1>Завдання №7</h1>
        <div className='resultImg'>
            <img src="../img/Lab5/task7.PNG" alt=""/>
        </div>

        <h1>Завдання №9</h1>
        <div className='resultImg'>
            <img src="../img/Lab5/task9.PNG" alt=""/>
        </div>

        <h1>Завдання №10</h1>
        <div className='resultImg'>
            <img src="../img/Lab5/task10_1.PNG" alt=""/>
            <img src="../img/Lab5/task10_2.PNG" alt=""/>
            <img src="../img/Lab5/task10_3.PNG" alt=""/>
        </div>
    </>)
}