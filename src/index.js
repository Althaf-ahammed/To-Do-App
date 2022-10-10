import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ToDo from "./toDoContext";
import ToDos from "./toDosContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo>
      <ToDos>
    <App />
    </ToDos>
      </ToDo>
  </React.StrictMode>
);


