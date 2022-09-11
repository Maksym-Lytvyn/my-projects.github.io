import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './my-sass.scss';
import App from './App';
import { useState, useEffect} from "react"; 
import reportWebVitals from './reportWebVitals';

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const clear = ''

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p className='count'>Count: {count}</p>
      <p className='calculation'>Calculation: {calculation}</p>
      <div className='btns'>
      <button  className='btn1'onClick={() => setCount((c) => c + 1)}>Збільшити</button>
      <button className='btn1' onClick={() => setCount((c) => c = 0 ) }>Очистити</button>
      <button className='btn1' onClick={() => setCount((c) => c - 1)}>Зменшити</button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
