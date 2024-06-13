import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Saludo from './Saludo';
import Componente from './Componente';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Componentedos from './componentedos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saludo danza="ballet" pais="peru" academia="perudance" imagen="logo192.png"/> 
    <Saludo danza="ballet" pais="peru" academia="perudance" imagen="images.jpg"/> 
    <Saludo danza="ballet" pais="peru" academia="perudance" imagen="images.jpg"/>
    <Componente/>  
    <Componentedos/>

  </React.StrictMode>   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
