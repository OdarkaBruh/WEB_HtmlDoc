import { useState } from 'react';
import './page.css'
import './Lab6.css'

export default function ShowLab5() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №6</h1>
                <button onClick={() => setPage(1)}>Тема. Мета.</button>
                <button onClick={() => setPage(2)}>Завдання №1</button>
                <button className='codeButton' onClick={() => setPage(9)}>Завдання №1: код і результат</button>
                <button onClick={() => setPage(3)}>Завдання №3</button>
                <button className='codeButton' onClick={() => setPage(10)}>Завдання №3: код і результат</button>
                <button onClick={() => setPage(4)}>Завдання №5</button>
                <button className='codeButton' onClick={() => setPage(11)}>Завдання №5: код і результат</button>
                <button onClick={() => setPage(5)}>Завдання №7</button>
                <button className='codeButton' onClick={() => setPage(12)}>Завдання №7: код і результат</button>
                <button onClick={() => setPage(6)}>Завдання №8</button>
                <button className='codeButton' onClick={() => setPage(13)}>Завдання №8: код і результат</button>
                <button onClick={() => setPage(7)}>Завдання №9</button>
                <button className='codeButton' onClick={() => setPage(14)}>Завдання №9: код і результат</button>
                <button onClick={() => setPage(8)}>Завдання №10</button>
                <button className='codeButton' onClick={() => setPage(15)}>Завдання №10: код і результат</button>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo />}
            {page===2&&<ShowTask1 />}
            {page===3&&<ShowTask3 />}
            {page===4&&<ShowTask5 />}
            {page===5&&<ShowTask7 />}
            {page===6&&<ShowTask8 />}
            {page===7&&<ShowTask9 />}
            {page===8&&<ShowTask10 />}

            {page===9&& ShowCode(1)}
            {page===10&&ShowCode(2)}
            {page===11&&ShowCode(3)}
            {page===12&&ShowCode(4)}
            {page===13&& ShowCode(5)}
            {page===14&&ShowCode(6)}
            {page===15&&ShowCode(7)}
        </div>
        </>
    )
}

function ShowLabInfo(){
    return(
        <>
            <h1>Інформація про лабораторну №6</h1>
            <p><strong>Тема</strong>: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
                    сторінок</li>
                <li>Придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX</li>
            </ul>

            <h1>Номер залікової: 1511</h1>
            <h2>№варіантів : 1 ,3, 5, 7, 8, 9,10</h2>

            <p><strong>Місце розташування лаби №5:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Програма</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">HTML-документ</a></li>
            </ol>

        </>
        )
}


function ShowTask1(){
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №1</p>
                <p>У звітному HTML-документі створити html-розміту, яка складається з наступних елементів : текст, кнопка, поле введення .
                <br /><br />
                Натискання на кнопку SHOW ME має виводити значення з поля введення у консолі.
                </p>

                <button onClick={()=>{
                    console.log(document.getElementById("inputFieldTask1").value);
                }}>SHOW ME</button>

                <input id = "inputFieldTask1"></input>
            </div>
        </>
        )
}

function ShowTask3(){
    const [button, setButton] = useState("Приховати");
    function getInput(){
        if (document.getElementById("inputFieldTask3").type == "text"){
            document.getElementById("inputFieldTask3").type = "password";
            setButton("Розкрити");
        }
        else {
            document.getElementById("inputFieldTask3").type = "text";
            setButton("Приховати");
        }

    }
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №1</p>
                <p>У звітному HTML-документі створити html-розміту, яка складається з наступних елементів : текст, кнопка, інпут (поле введення ) 
                <br /><br />
                Кнопка "Приховати" ховає текст , виводячи зірочки замість введеної інформації, замінює назву кнопки на "Розкрити", при повторному натисканні текст знову стає доступним і кнопка набуває початкового вигляду.
                <br /><br />
                </p>

                <input type="text" id = "inputFieldTask3"></input>
                <button onClick={()=>{
                    getInput()}}>{button}</button>
            </div>
        </>
        )
}

function ShowTask5(){
    const [clicking, setClicking] = useState("");
    const codeList = `
                document.getElementById("place").addEventListener('click', () => clicked());
                    function clicked(){
                        console.log("Click!")
                        document.getElementById("showClick").value += "Click! "
    `

    function clicked(){
        console.log("Click!")
        setClicking((prevState) => (prevState + "Click! "));
    }
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №1</p>
                <p>У звітному HTML-документі створити html-розміту, яка складається з наступних елементів :
                    <br /><br />- текст, з використанням селектора класу   (class="taskTitle" ) ,
                    <br /><br />- div, з використанням селектора ідентифікатора (id="place”)
                </p>

                <button></button>
                <p className="taskTitle"> Завдання №5
                    <div id="place" onClick={() => clicked()}>
                    </div>
                </p>
            </div>

            <label id="showClick">{clicking}</label>

            <p>Примітка: Реакт не дуже хоче додавати listener, тому було реалізовано через react за домогою "onClick". В JS команда виглядала б приблизно: <br />
                <pre>{codeList}</pre>
            </p>
        </>
        )
}

function ShowTask7(){
    function task7(){
        task7_task1();
        task7_task2();
    }

    function task7_task1(){
        var element = document.getElementById("categories");
        console.log("Всього категорій: " + element.childElementCount)
    }

    function task7_task2(){
        var elementStack = [];
        //var element = document.getElementById("categories").innerHTML.trim().split("<li class=\"item\">");
        document.getElementById("categories").querySelectorAll('.item').forEach((e)=>{elementStack.push(e)})
        elementStack.forEach((e)=>{
            var amountOfLi = e.querySelectorAll("li").length;
            console.log("В категорії " + e.getElementsByTagName("h2")[0].innerHTML + ": " + amountOfLi + " елементів.")
            console.log("")
        })
    }
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №7</p>
                <p>Напиши скрипт, який:<br /><br />
                1.	Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
                <br /><br />
                2.	Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента 
                (тегу &#60;h2&#62;) і кількість елементів в категорії (усіх &#60;li&#62;, вкладених в нього).
                Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
                </p>

                <ul id="categories">
                    <li className="item">
                        <h2>Animals</h2>
                        <ul>
                        <li>Cat</li>
                        <li>Hamster</li>
                        <li>Horse</li>
                        <li>Parrot</li>
                        </ul>
                    </li>
                    <li className="item">
                        <h2>Products</h2>
                        <ul>
                        <li>Bread</li>
                        <li>Prasley</li>
                        <li>Cheese</li>
                        </ul>
                    </li>
                    <li className="item">
                        <h2>Technologies</h2>
                        <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        </ul>
                    </li>
                    </ul>
                <button onClick={() => task7()}>Виконати</button>
            </div>
        </>
)}

function ShowTask8(){
    var checkErr = false;
    function handleSubmit(event) {
        event.preventDefault();
        checkErr = false;
        console.log("Submited! Is checking....");
        var form = document.getElementsByClassName("login-form");
        CheckSubmit(form)
        if (!checkErr){
            SaveSubmit(form);
        }
        ReloadSubmit(form);
    }

    function CheckSubmit(form) {
        form[0].querySelectorAll("input").forEach((e)=> {
            if(e.value == ""){
                alert("All form fields must be filled in");
                checkErr = true;
            }
        })
    }

    function SaveSubmit(form) {
        const inputLogs = {
            email: "",
            password: "",
        };

        const newInput = Object.create(inputLogs);
        const inputs = form[0].elements;

        newInput.email = inputs["email"]
        newInput.password = inputs["password"]
        console.log("Email: " + newInput.email.value + "; " + "Password: " + newInput.password.value);
    }
    
    function ReloadSubmit(form) {
        form[0].reset();
        console.log("Cleared!")
    }

    function fillForm(){
        var form = document.getElementsByClassName("login-form");
        form[0].querySelectorAll("input").forEach((e)=>{
            e.value = "asrqwe@fw"
        })
    }
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №8</p>
                <p>Напиши скрипт управління формою логіна.
                    <br /><br />1.	Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
                    <br /><br />2.	Під час відправлення форми сторінка не повинна перезавантажуватися.
                    <br /><br />3.	Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. 
                    Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
                    <br /><br />4.	Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, 
                    а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
                    <br /><br />5.	При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
                </p><br /><br /> <hr /> <br />
                <form className="login-form" onSubmit={() => handleSubmit(event)}>
                    <label>
                        Email
                        <input type="email" name="email" />
                    </label><br />
                    <label>
                        Password
                        <input type="password" name="password" />
                    </label><br />
                    <button type="submit">Log in</button><br /><br />
                </form>
            <button onClick={() => fillForm()}>Fill form</button><br /><br />
            </div>
        </>
)}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function ShowTask9(){
    function changeColor(color){
        document.getElementsByTagName("body")[0].style.backgroundColor = color;
        document.getElementsByClassName("color")[0].innerHTML = " - " + color;
        document.getElementsByClassName("color")[0].style.color = color;
    }
      
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №9</p>
                <p>Напиши скрипт, який змінює колір фону елемента &#60;body&#62; через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
                </p>

                <div className="widget">
                    <p>Background color: <span className="color">-</span></p>
                    <button type="button" className="change-color" onClick={()=>changeColor(getRandomHexColor())}>Change color</button>
                    <button type="button" className="change-color" onClick={()=>changeColor("#ffffff")}>Reset color</button>
                
                </div>

            </div>
        </>
)}

function ShowTask10(){
    var marginStep = 10;
    var topStep = 0;
    var SideStep = 0;
    var LadderStep = 0;

    function Create(){
        var elInput = document.getElementById("controls").getElementsByTagName("input")[0];
        var boxes = document.getElementById("boxes");
        var varInput = CheckInt (elInput)

        if (document.getElementById('boxes').innerHTML !== ""){
            LadderStep++;
            SideStep +=10;
            topStep = LadderStep*10;
        }

        createBoxes(varInput);

        if (boxes.offsetHeight < topStep){
            boxes.style.height = topStep + marginStep*2 + "px";
        }
    }

    function createBoxes(am){
        for (let i = 0; i < am; i++) {
            CreateDiv(30 + i*10);
        }
    }

    function CheckInt(elInput){
        var varInput = elInput.value
        if(varInput > 100){
            varInput = 100;
        } else if (varInput < 1){
            varInput = 1;
        }
        elInput.value = "";
        return(varInput);
    }

    function CreateDiv(width){
        var element = document.createElement("div");
        element.style.backgroundColor = getRandomHexColor();
        element.style.width = width + "px";
        element.style.height = width + "px";
        element.style.right = SideStep+"px";
        element.style.top = topStep+"px";

        topStep += width + marginStep

        var body = document.getElementById("boxes");
        body.appendChild(element);
    }

    function DestroyBoxes(){
        document.getElementById('boxes').innerHTML = "";
        document.getElementById("boxes").style.height = "200px";
        topStep = 0;
        SideStep = 0;
        LadderStep = 0;
    }
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №10</p>
                <p>Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.<br />
                Є input, у який користувач вводить бажану кількість елементів. 
                Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. 
                При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
                <br /><br />
                Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. 
                Тільки якщо воно задоволяє умову, мають додаватися нові &#60;div&#62; елементи в DOM.
                <br /><br />
                Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. 
                Функція має створювати стільки &#60;div&#62; елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
                <br /><br />
                1.	Розміри першого &#60;div&#62; елемента мають бути 30px на 30px.<br />
                2.	Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.<br />
                3.	Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
                <br /><br />
                Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, 
                у такий спосіб видаляючи всі створені елементи.
                </p>
                <div id="controls">
                    <input type="number" min="1" max="100" step="1" />
                    <button type="button" data-create onClick={() => Create()}>Create</button>
                    <button type="button" data-destroy onClick={()=> DestroyBoxes()}>Destroy</button>
                </div>

                <div id="boxes">

                </div>
                
            </div>
        </>
)}

function ShowCode(numLab){
    var HTMLCode= `
    `
    function lab1(){
        HTMLCode = `
        <button onClick={()=>{
            console.log(document.getElementById("inputFieldTask1").value);
        }}></button>

        <input id = "inputFieldTask1"></input>
        `
        return(<>
            <div className='resultImg'>
                <img src="../img/Lab6/task1.PNG" alt=""/>
            </div>
            <p><pre>{HTMLCode}</pre></p>
            </>)
    }

    function lab3(){
        HTMLCode = `
        const [button, setButton] = useState("Приховати");
    function getInput(){
        if (document.getElementById("inputFieldTask3").type == "text"){
            document.getElementById("inputFieldTask3").type = "password";
            setButton("Розкрити");
        }
        else {
            document.getElementById("inputFieldTask3").type = "text";
            setButton("Приховати");
        }

    }
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №1</p>
                <p>У звітному HTML-документі створити html-розміту, яка складається з наступних елементів : текст, кнопка, інпут (поле введення ) 
                <br /><br />
                Кнопка "Приховати" ховає текст , виводячи зірочки замість введеної інформації, замінює назву кнопки на "Розкрити", при повторному натисканні текст знову стає доступним і кнопка набуває початкового вигляду.
                <br /><br />
                </p>

                <input type="text" id = "inputFieldTask3"></input>
                <button onClick={()=>{
                    getInput()}}>{button}</button>
            </div>
        </>
        )
        `
        return(<>
            <div className='resultImg'>
                <img src="../img/Lab6/task3_1.PNG" alt=""/>
                <img src="../img/Lab6/task3_2.PNG" alt=""/>
            </div>
            <p><pre>{HTMLCode}</pre></p>
            </>)
    }

    function lab5(){
        HTMLCode = `
        const [clicking, setClicking] = useState("");
    const codeList = 
                document.getElementById("place").addEventListener('click', () => clicked());
                    function clicked(){
                        console.log("Click!")
                        document.getElementById("showClick").value += "Click! "
    

    function clicked(){
        console.log("Click!")
        setClicking((prevState) => (prevState + "Click! "));
    }
    return(
        <>
            <div className='TaskDiv'>
                <p>Завдання №1</p>
                <p>У звітному HTML-документі створити html-розміту, яка складається з наступних елементів :
                    <br /><br />- текст, з використанням селектора класу   (class="taskTitle" ) ,
                    <br /><br />- div, з використанням селектора ідентифікатора (id="place”)
                </p>

                <button></button>
                <p className="taskTitle"> Завдання №5
                    <div id="place" onClick={() => clicked()}>
                    </div>
                </p>
            </div>

            <label id="showClick">{clicking}</label>

            <p>Примітка: Реакт не дуже хоче додавати listener, тому було реалізовано через react за домогою "onClick". В JS команда виглядала б приблизно: <br />
                <pre>{codeList}</pre>
            </p>
        </>
        )
        `
        return(<>
            <div className='resultImg'>
                <img src="../img/Lab6/task5_1.PNG" alt=""/>
                <img src="../img/Lab6/task5_2.PNG" alt=""/>
            </div>
            <p><pre>{HTMLCode}</pre></p>
            </>)
    }

    function lab7(){
        HTMLCode = `
        function task7(){
            task7_task1();
            task7_task2();
        }
    
        function task7_task1(){
            var element = document.getElementById("categories");
            console.log("Всього категорій: " + element.childElementCount)
        }
    
        function task7_task2(){
            var elementStack = [];
            //var element = document.getElementById("categories").innerHTML.trim().split("<li class=\"item\">");
            document.getElementById("categories").querySelectorAll('.item').forEach((e)=>{elementStack.push(e)})
            elementStack.forEach((e)=>{
                var amountOfLi = e.querySelectorAll("li").length;
                console.log("В категорії " + e.getElementsByTagName("h2")[0].innerHTML + ": " + amountOfLi + " елементів.")
                console.log("")
            })
        }



        В return:
        <button onClick={() => task7()}>Виконати</button>
        `
        return(<>
            <div className='resultImg'>
                <img src="../img/Lab6/task7.PNG" alt=""/>
            </div>
            <p><pre>{HTMLCode}</pre></p>
            </>)
    }

    function lab8(){
        HTMLCode = `
            var checkErr = false;
            function handleSubmit(event) {
                event.preventDefault();
                checkErr = false;
                console.log("Submited! Is checking....");
                var form = document.getElementsByClassName("login-form");
                CheckSubmit(form)
                if (!checkErr){
                    SaveSubmit(form);
                }
                ReloadSubmit(form);
            }

            function CheckSubmit(form) {
                form[0].querySelectorAll("input").forEach((e)=> {
                    if(e.value == ""){
                        alert("All form fields must be filled in");
                        checkErr = true;
                    }
                })
            }

            function SaveSubmit(form) {
                const inputLogs = {
                    email: "",
                    password: "",
                };

                const newInput = Object.create(inputLogs);
                const inputs = form[0].elements;

                newInput.email = inputs["email"]
                newInput.password = inputs["password"]
                console.log("Email: " + newInput.email.value + "; " + "Password: " + newInput.password.value);
            }
            
            function ReloadSubmit(form) {
                form[0].reset();
                console.log("Cleared!")
            }

            function fillForm(){
                var form = document.getElementsByClassName("login-form");
                form[0].querySelectorAll("input").forEach((e)=>{
                    e.value = "asrqwe@fw"
                })
            }

            В return:
            <button onClick={() => fillForm()}>Fill form</button><br /><br />
        `
        return(<>
            <div className='resultImg'>
                <img src="../img/Lab6/task8_1.PNG" alt=""/>
                <img src="../img/Lab6/task8_2.PNG" alt=""/>
                <img src="../img/Lab6/task8_3.PNG" alt=""/>
            </div>
            <p><pre>{HTMLCode}</pre></p>
            </>)
    }

    function lab9(){
        HTMLCode = `
        function changeColor(color){
            document.getElementsByTagName("body")[0].style.backgroundColor = color;
            document.getElementsByClassName("color")[0].innerHTML = " - " + color;
            document.getElementsByClassName("color")[0].style.color = color;
        }

        в return:
        <div className="widget">
            <p>Background color: <span className="color">-</span></p>
            <button type="button" className="change-color" onClick={()=>changeColor(getRandomHexColor())}>Change color</button>
            <button type="button" className="change-color" onClick={()=>changeColor("#ffffff")}>Reset color</button>
        
        </div>
        `
        return(<>
            <div className='resultImg'>
                <img src="../img/Lab6/task9.PNG" alt=""/>
            </div>
            <p><pre>{HTMLCode}</pre></p>
            </>)
    }

    function lab10(){
        HTMLCode = `
            var marginStep = 10;
            var topStep = 0;
            var SideStep = 0;
            var LadderStep = 0;

            function Create(){
                var elInput = document.getElementById("controls").getElementsByTagName("input")[0];
                var boxes = document.getElementById("boxes");
                var varInput = CheckInt (elInput)

                if (document.getElementById('boxes').innerHTML !== ""){
                    LadderStep++;
                    SideStep +=10;
                    topStep = LadderStep*10;
                }

                createBoxes(varInput);

                if (boxes.offsetHeight < topStep){
                    boxes.style.height = topStep + marginStep*2 + "px";
                }
            }

            function createBoxes(am){
                for (let i = 0; i < am; i++) {
                    CreateDiv(30 + i*10);
                }
            }

            function CheckInt(elInput){
                var varInput = elInput.value
                if(varInput > 100){
                    varInput = 100;
                } else if (varInput < 1){
                    varInput = 1;
                }
                elInput.value = "";
                return(varInput);
            }

            function CreateDiv(width){
                var element = document.createElement("div");
                element.style.backgroundColor = getRandomHexColor();
                element.style.width = width + "px";
                element.style.height = width + "px";
                element.style.right = SideStep+"px";
                element.style.top = topStep+"px";

                topStep += width + marginStep

                var body = document.getElementById("boxes");
                body.appendChild(element);
            }

            function DestroyBoxes(){
                document.getElementById('boxes').innerHTML = "";
                document.getElementById("boxes").style.height = "200px";
                topStep = 0;
                SideStep = 0;
                LadderStep = 0;
            }

            в return: 
            <div id="controls">
                    <input type="number" min="1" max="100" step="1" />
                    <button type="button" data-create onClick={() => Create()}>Create</button>
                    <button type="button" data-destroy onClick={()=> DestroyBoxes()}>Destroy</button>
                </div>

                <div id="boxes">

            
                Примітка: якщо сгенерувати n кількість коробок, а потім сгенерувати ще одну кількість коробот, 
                то наступний сет коробок буде зі зміщенням щоб зрічніше бачити. 
        `
        return(<>
        <div className='resultImg'>
            <img src="../img/Lab6/task10_1.PNG" alt=""/>
            <img src="../img/Lab6/task10_2.PNG" alt=""/>
            <img src="../img/Lab6/task10_3.PNG" alt=""/>
        </div>
        <p><pre>{HTMLCode}</pre></p>
        </>)
    }

    return(
    <p>
        {numLab == 1 && lab1()}
        {numLab == 2 && lab3()}
        {numLab == 3 && lab5()}
        {numLab == 4 && lab7()}
        {numLab == 5 && lab8()}
        {numLab == 6 && lab9()}
        {numLab == 7 && lab10()}
    </p>)
} 