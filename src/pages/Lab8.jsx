import './page.css'

export default function ShowLab8() {
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №8</h1>
                <button>Тема. Мета.</button>
            </div>
        </sidebar>
        <div className="info">
            {<ShowLabInfo />}
        </div>
        </>
    )
}

function ShowLabInfo(){
    const codeJS = `
    import {
        useState,
        useRef
      } from "react"; 
      import "./App.css";
      
      function App() { 
        const inputRef = useRef(null); 
        const resultRef = useRef(null); 
        const [result, setResult] = useState(0); 
       
        function plus(e) { 
          e.preventDefault(); 
          setResult((result) => result + Number(inputRef.current.value)); 
          console.log(result);
        }; 
       
        function minus(e) { 
          e.preventDefault(); 
          setResult((result) => result - Number(inputRef.current.value)); 
        };
       
        function times(e) { 
          e.preventDefault(); 
          setResult((result) => result * Number(inputRef.current.value)); 
        }; 
       
        function divide(e) { 
          e.preventDefault(); 
          setResult((result) => result / Number(inputRef.current.value)); 
        };
       
        function resetInput(e) { 
          e.preventDefault();
          inputRef.current.value = 0;
        }; 
       
        function resetResult(e) { 
          e.preventDefault();
          setResult(0);
        }; 
       
        return ( 
          <div className="App"> 
            <div> 
              <h1>Simplest Working Calculator</h1> 
            </div> 
            <form> 
              <p ref={resultRef}> 
                {result} 
              </p> 
              <input
                pattern="[0-9]" 
                ref={inputRef} 
                type="number" 
                placeholder="Type a number" 
              />
              <button onClick={plus}>add</button> 
              <button onClick={minus}>minus</button> 
              <button onClick={times}>times</button> 
              <button onClick={divide}>divide</button> 
              <button onClick={resetInput}>resetInput</button> 
              <button onClick={resetResult}>resetResult</button> 
            </form> 
          </div> 
        ); 
      } 
       
      export default App; 
      `
    return(
        <>
            <h1>Інформація про лабораторну №8</h1>
            <p><strong>Тема</strong>: Створення інтерфейсів WEB-застосувань з використанням React</p>
            <p><a href="https://www.coursera.org/programs/program-natsional-nii-tiekhnichnii-univiersitiet-ukrayini-kiyivs-kii/learn/react-basics" target="_blank">Курс &#34;React Basics&#34;</a></p>

            <p><strong>Місце розташування лабораторної №8:</strong></p>
            <ol>
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Репозиторій сайту</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">Репозиторій HTML-документу</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_Lab8" target="_blank">Репозиторій курсу</a></li>
            </ol>

            <img  src="/img/Lab8-9/Lab8.PNG" alt=""/>

            <h1>Код:</h1>
            <pre>
                {codeJS}
            </pre>

        </>
        )
}