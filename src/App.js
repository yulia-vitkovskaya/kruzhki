import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let Name='';

  const onChange =(e)=>{
    Name=e.target.value;
  }

  const onClick =(e)=>{
      Name=e.target.value;
  }
  return (
    <div className="App">
      <div classNmae="app-title">
        Информационная система для поиска кружков и секций для детей
      </div>
      <div classNmae="app-body">
        Поиск курса
        <input type='text' onChange={onChange}/>
        <button onClick={onClick}>Поиск</button>
      </div>
    </div>
  );
}

export default App;
