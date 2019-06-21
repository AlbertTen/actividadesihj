import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import Principal from './views/Principal';
import Registro from './views/Registro';
import Beneficiarios from './views/Beneficiarios';
import BeneficiariosRegistro from './views/BeneficiariosRegistro';
import Area from './views/Area';
import Tactividad from './views/Tactividad';


class Router extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login}/>
                
                <Route path="/principal" component={Principal}/>
                <Route path="/registro" component={Registro}/>

                <Route path="/beneficiarios" component={Beneficiarios}/>
                <Route path="/beneficiariosRegistro" component={BeneficiariosRegistro}/>

                <Route path="/area" component={Area}/>

                <Route path="/tactividad" component={Tactividad}/>

                
                
            </Switch>
        );
    }
}

export default Router;