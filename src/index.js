import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exam1 from './Exam/Exam1';
import Exam2 from './Exam/Exam2';
import Exam3 from './Exam/Exam3';
import Exam4 from './Exam/Exam4';
import Exam5 from './Exam/Exam5';
import Exam6 from './Exam/Exam6';
import TodoApp from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
    <Exam6 />
    <Exam5 />
    <Exam4 />
    <Exam3 />
    <Exam1 />
    <Exam2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
