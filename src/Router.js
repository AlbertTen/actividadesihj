import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Login from './views/Login';
//import Principal from './views/Principal';
import Registro from './views/Registro';
import Beneficiarios from './views/Beneficiarios';
import BeneficiariosRegistro from './views/BeneficiariosRegistro';



class Router extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login}/>
                
                <Route path="/registro" component={Registro}/>

                <Route path="/beneficiarios" component={Beneficiarios}/>
                <Route path="/beneficiariosRegistro" component={BeneficiariosRegistro}/>

                
                
            </Switch>
        );
    }
}

export default Router;