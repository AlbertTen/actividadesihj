import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './views/Login';
// import Actividades from './views/Actividades';
// import Beneficiarios from './views/Beneficiarios';

function App() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/> 
    </div>
  );
}

export default App;
