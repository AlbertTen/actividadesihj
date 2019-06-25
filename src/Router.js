import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import Principal from './views/Principal';
import Registro from './views/Registro';
import Beneficiarios from './views/Beneficiarios';
import BeneficiariosRegistro from './views/BeneficiariosRegistro';
import Area from './views/Area';
import AreaRegistro from './views/AreaRegistro';
import Tactividad from './views/Tactividad';
import ActividadRegistro from './views/ActividadRegistro';
import Tusuarios from './views/Tusuarios';
import RegistroUsers from './views/RegistroUsers';

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
                <Route path="/areaRegistro" component={AreaRegistro}/>

                <Route path="/tactividad" component={Tactividad}/>
                <Route path="/actividadRegistro" component={ActividadRegistro}/>

                <Route path="/tusuarios" component={Tusuarios}/>
                <Route path="/registroUsers" component={RegistroUsers}/>
                
            </Switch>
        );
    }
}

export default Router;