import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QuizState from './Context/QuizState';

ReactDOM.render(
  
    <QuizState>
      <App />
    </QuizState>
  ,
  document.getElementById('root')
);


