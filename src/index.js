import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exam1 from './Exam1';
import Exam2 from './Exam2';
import Exam3 from './Exam3';
import Exam4 from './Exam4';
import Exam5 from './Exam5';
import Exam6 from './Exam6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
