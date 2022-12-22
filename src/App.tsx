import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [toggle,changeToggle]=useState<boolean>(true)
  return (
    <div className="App">
      <h1>DNS Playground for Andrew</h1>
      {toggle?<h5>Now you see me</h5>:<h5>Now you dont</h5>}
      <button onClick={()=>{changeToggle(!toggle)}}>Change me</button>
    </div>
  );
}

export default App;
