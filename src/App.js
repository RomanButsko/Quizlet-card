import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Что такое useState?',
    variants: ['Это функция для хранения данных компонента', 'Это глобальный стейт', 'Это когда на ты никому не нужен'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correctAnsw}) {
  return (
    <div className="result">
      <img alt='congratulation' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correctAnsw} ответа из {questions.length + 1}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step,queiston, increaseStep}) {
  const averageCount = Math.round(step / questions.length * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${averageCount}%` }} className="progress__inner"></div>
      </div>
          <h1>{queiston.title}</h1>
          <ul>
            {queiston.variants.map((examples, index) => <li key={examples} onClick={() => increaseStep(index)}>{examples}</li>)}
          </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correctAnsw, setCorrectAnsw] = useState(0);
  const queiston = questions[step]

  const increaseStep = (answ) => {
     setStep(step + 1)
      if (answ === queiston.correct) {
        setCorrectAnsw(correctAnsw + 1)
      }
      console.log(correctAnsw)
  }

  return (
    <div className="App">
          {(step !== questions.length) ? <Game step={step} queiston={queiston} increaseStep={increaseStep}/> :
          <Result correctAnsw={correctAnsw}/>
          }
    </div>
  );
}

export default App;