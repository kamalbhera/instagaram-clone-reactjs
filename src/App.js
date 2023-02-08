import './App.css';
import Home from './page/Home';
import { Routes,Route } from 'react-router-dom';
import {  useState } from 'react';

function App() {
  const [navbar,setNavbar] = useState("");

 

  return (
    <div className='App'>
    <Routes>
    <Route path="/" element = {<Home navbar={navbar} setNavbar={setNavbar} />} />
    <Route path={`/${navbar}`} element = {<Home navbar={navbar} setNavbar={setNavbar} />} />

    </Routes>
    </div>
  );
}

export default App;
