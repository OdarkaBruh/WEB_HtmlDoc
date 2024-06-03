import './page.css'

export default function ShowLab9() {
    return(
        <>
        <sidebar>
            <div className='sideNav'>
                <h1>Лабораторна №9</h1>
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
    const code1 = `
    const mongoose = require('mongoose');
    const connectDB = async () => {
        try {
            await mongoose.connect('mongodb://localhost:27017/mydatabase', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Connected to MongoDB');
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            process.exit(1);
        }
    };

    module.exports = connectDB;
        `
        const code2 = `
        const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;
      `
    return(
        <>
            <h1>Інформація про лабораторну №9</h1>
            <p><strong>Тема</strong>: Створення інтерфейсів WEB-застосувань з використанням React</p>
            <p><a href="https://www.coursera.org/learn/restful-apis-with-node-and-express" target="_blank">Курс &#34;Building RESTful APIs with Node.js and Express&#34;</a></p>

            <p><strong>Місце розташування лабораторної №9:</strong></p>
            <ol>
                <li><strong><a href="https://drive.google.com/file/d/163RpAQ6SH3ONE3FfeeswEUeMXczfTzHr/view?usp=sharing" target="_blank">Звіт за лабораторну роботу №9 (сертифікат, відповіді на питання, т.д.)</a></strong></li>
                <br />
                <li><a href="https://github.com/OdarkaBruh/WEB_app.git" target="_blank">Репозиторій сайту</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_HtmlDoc.git" target="_blank">Репозиторій HTML-документу</a></li>
                <li><a href="https://github.com/OdarkaBruh/WEB_Lab9" target="_blank">Репозиторій курсу</a></li>
            </ol>

            <img  src="/img/Lab8-9/Lab8.PNG" alt=""/>

            <h1>Код:</h1>
            <pre>
                {code1}
            </pre>
            <br /> <hr /> <br />
            <pre>
                {code2}
            </pre>

        </>
        )
}