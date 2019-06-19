import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';


// import Actividades from './views/Actividades';
// import Beneficiarios from './views/Beneficiarios';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Router/>
        <Footer/> 
      </div>
    );
  }
}


export default App;
