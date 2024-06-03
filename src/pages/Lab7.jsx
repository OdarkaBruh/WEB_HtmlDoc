import { useState } from 'react';
import './page.css'

export default function ShowLab7() {
    const [page, setPage] = useState(0);
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №7</h1>
                <button onClick={() => setPage(1)}>Тема. Мета.</button>
                <button onClick={() => setPage(2)}>Завдання №1</button>
                <button className='codeButton' onClick={() => setPage(4)}>Завдання №1: код і результат</button>
                <button onClick={() => setPage(3)}>Завдання №2</button>
                <button className='codeButton' onClick={() => setPage(5)}>Завдання №2: код і результат</button>
            </div>
        </sidebar>
        <div className="info">
            {page===1&&<ShowLabInfo />}
            {page===2&&<ShowTask1 />}
            {page===3&&<ShowTask2 />}

            {page===4&& ShowCode1()}
            {page===5&& ShowCode2()}
        </div>
        </>
    )
}

function ShowLabInfo(){
    return(
        <>
            <h1>Інформація про лабораторну №7</h1>
            <p><strong>Тема</strong>: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.</p>
            <p><strong>Мета</strong>: </p>
            <ul>
                <li>придбати практичні навички роботи створення модального вікна; </li>
                <li>повторити процес створення макету, зокрема створення макету галереї довільних зображень; </li>
                <li>закріпити навички роботи з делегуванням подій.</li>
            </ul>

            <p><strong>Місце розташування лабораторної №7:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Репозиторій сайту</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">Репозиторій HTML-документу</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_Lab7-1" target="_blank">Перше завдання</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_Lab7-2" target="_blank">Друге завдання</a></li>
            </ol>

        </>
        )
}


function ShowTask1(){
    return(
        <>
            <div className='TaskDiv'>
                <h1>Завдання №1: галерея</h1>
                <p>Результат виконання:</p>
                <img  src="/img/Lab7/task1_1.PNG" alt=""/>
                <img  src="/img/Lab7/task1_2.PNG" alt=""/>

                <p><strong>Місце розташування завдання 1:</strong></p>
                <ol>
                    <li><a href="https://github.com/OdarkaBruh/WEB_Lab7-1" target="_blank">Ґітхаб</a></li>
                    <li><a href="https://odarkabruh.github.io/WEB_Lab7-1/" target="_blank">Жива сторінка</a></li>
                </ol>
            </div>
        </>
        )
}

function ShowTask2(){
    return(
        <>
            <div className='TaskDiv'>
                <h1>Завдання №2: Форма</h1>
                <p>Результат виконання:</p>
                <img  src="/img/Lab7/task2_1.PNG" alt=""/>
                <img  src="/img/Lab7/task2_2.PNG" alt=""/>
                <img  src="/img/Lab7/task2_3.PNG" alt=""/>

                <p><strong>Місце розташування завдання 2:</strong></p>
                <ol>
                    <li><a href="https://github.com/OdarkaBruh/WEB_Lab7-2" target="_blank">Ґітхаб</a></li>
                    <li><a href="https://odarkabruh.github.io/WEB_Lab7-2/" target="_blank">Жива сторінка</a></li>
                </ol>

            </div>
        </>
        )
}

function ShowCode1(){
    const codeHTML = `
    <!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>LAB7</title>
    <link rel="stylesheet" href="./CSS/style.css">
    <link rel="stylesheet" href="dist/basicLightbox.min.css">
  </head>
  <body>
    <ul class="gallery">
    </ul>
    <button id="button">!!!</button>

    <script src="dist/basicLightbox.min.js"></script>
    <script src="./JS/gallery.js"></script>
  </body>
</html>
    `
    const codeJS =
    `
    const images = [
        {
          preview: 
            'https://images.unsplash.com/photo-1717160111930-b1a7ba2baf52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          original:
            'https://images.unsplash.com/photo-1717160111930-b1a7ba2baf52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: ' a row of wooden benches next to a pool ',
        },
        {
            preview:
            'https://images.unsplash.com/photo-1716154220479-8caffe787065?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
            'https://images.unsplash.com/photo-1716154220479-8caffe787065?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' a close up of a pink flamingo on a black background ',
        },
        {
            preview:
            'https://images.unsplash.com/photo-1716339140080-be256d3270ce?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
            'https://images.unsplash.com/photo-1716339140080-be256d3270ce?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' a group of sliced oranges sitting on top of a table ',
        },
        {
            preview:
            'https://images.unsplash.com/photo-1716647516446-93c62abe3ba2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
                'https://images.unsplash.com/photo-1716647516446-93c62abe3ba2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' a close up of a plant with green leaves ',
        },
        {
            preview:
            'https://images.unsplash.com/photo-1716369416215-202c195d58a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
            'https://images.unsplash.com/photo-1716369416215-202c195d58a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' a person standing in front of a fire ',
        },
        {
            preview:
            'https://images.unsplash.com/photo-1596984358985-bf4b2faba9e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
                'https://images.unsplash.com/photo-1596984358985-bf4b2faba9e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' blue and white water surface ',
        },
        {
            preview:
            'https://plus.unsplash.com/premium_photo-1673913966868-fda3eaf236fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
                'https://plus.unsplash.com/premium_photo-1673913966868-fda3eaf236fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' a close up of a cell phone with bubbles on it ',
        },
        {
            preview:
            'https://images.unsplash.com/photo-1716847214623-c45b2db2d569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
                'https://images.unsplash.com/photo-1716847214623-c45b2db2d569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' a mountain covered in snow under a cloudy sky ',
        },
        {
            preview:
            'https://plus.unsplash.com/premium_photo-1692641346423-7a0578e80ae3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            original:
                'https://plus.unsplash.com/premium_photo-1692641346423-7a0578e80ae3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: ' mountains ',
        }
    ]
    
    window.addEventListener("load", () => {showAllImages();});
    
    const imgPressed = e => {
        var id = e.target.id;
        console.log(id);
        id = id.slice(6);
        console.log(images[id].description);
        showContent(images[id])
    }
    
    function showAllImages(){
        for (let i = 0; i < images.length; i++) {
            const elem = document.createElement("img");
            elem.setAttribute('src', images[i].preview);
            elem.setAttribute('alt', images[i].description);
            elem.setAttribute('id', "image-"+i);
            elem.addEventListener("click", imgPressed);
            const ul = document.createElement("ul");
            ul.appendChild(elem);
            document.getElementsByClassName("gallery")[0].appendChild(ul);
        }
    
    }
    var instance;
    
    function showContent(img) {
        instance = basicLightbox.create(&#180;
        <div class="frameImg">
            <img src="\${img.original}">
            <h1>\${img.description}</h1>
            </img>
        </div>
        &#180;)
        instance.show();
    }
    
    document.addEventListener("keydown", ()=> {instance.close();})
    `

    return (
        <>
            <h3>HTML код:</h3>
                <pre>
                    {codeHTML}
                </pre>
                <br /><br /><hr /><br /><br />
            <h3>JS код:</h3>
                <pre>
                    {codeJS}
                </pre>
        </>
    )
}

function ShowCode2(){
    const codeHTML = `
    <!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>LAB7</title>
    <link rel="stylesheet" href="./CSS/2-form.css">
    <link rel="stylesheet" href="dist/basicLightbox.min.css">
  </head>
  <body>
    <div class="mainBody">
      <form class="feedback-form" autocomplete="off" action="">
        <label>
          Email <br />
          <input type="email" name="email" autofocus/>
        </label>
        <label>
          Message <br />
        <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div class="buttonPanel">
        <button id="fillLocalTest">fill local Storage</button>
        
        <button id="clearLocalTest">clear local Storage</button>
      </div>
    </div>
    <script src="dist/basicLightbox.min.js"></script>
    <script src="./JS/2-form.js"></script>
  </body>
</html>
    `
    const codeJS =
    `
    const submitBlank =
{
    email:"",
    message: ""
}

let form = document.getElementsByClassName("feedback-form")[0];
document.addEventListener("load", checkLocalStorage());
form.addEventListener('change', () => {submitChanged()});
form.addEventListener("submit", (e) => {handleSubmit(e)});

checkErr = false;

function handleSubmit(event) {
    event.preventDefault();
    checkErr = false;
    console.log("Submited! Is checking....");
    if (!CheckSubmit(form)){
        SaveSubmit(form);
    }
}

function CheckSubmit(form) {
    for (var i = 0; i < 2; i++){
        if(form.elements[i].value == ""){
            alert("Fill please all fields");
            return(true);
        }
    }
    return(false);
}

function checkLocalStorage(){
    const formLocal = JSON.parse(window.localStorage.getItem("feedback-form-state"));
    if (formLocal != null){
        form.elements["email"].value = formLocal.email;
        form.elements["message"].value = formLocal.message;
    }
}

function SaveSubmit() {
    const formLocal = JSON.parse(window.localStorage.getItem("feedback-form-state"));
    console.log("Submit is saved! Email: " + formLocal.email + "; " + "message: " + formLocal.message);
    clearInputAndStorage();
}

function submitChanged(){
    const newInput = Object.create(submitBlank);
    const inputs = form.elements;

    newInput.email = inputs[0].value
    newInput.message = inputs[1].value

    window.localStorage.clear();
    window.localStorage.setItem("feedback-form-state", JSON.stringify(newInput));
    console.log("Changed!");
}

document.getElementById("fillLocalTest").addEventListener("click", ()=>{fillForm()});

function fillForm(){
    const email =  'abc@gmail.com';
    const message =  '123 Hi hullo!';
    form.elements["email"].value = email;
    form.elements["message"].value = message;
    submitChanged();
}

document.getElementById("clearLocalTest").addEventListener("click", ()=>{clearStorage()});
function clearStorage(){
    clearInputAndStorage();
    console.log("Clean!");
}

function clearInputAndStorage(){
    window.localStorage.clear();
    form.elements["email"].value = "";
    form.elements["message"].value = "";
}
    `

    return (
        <>
            <h3>HTML код:</h3>
                <pre>
                    {codeHTML}
                </pre>
                <br /><br /><hr /><br /><br />
            <h3>JS код:</h3>
                <pre>
                    {codeJS}
                </pre>
        </>
    )
}