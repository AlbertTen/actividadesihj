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
import ModUsers from './views/ModUsers';
import ModArea from './views/ModArea';
import ModActividad from './views/ModActividad';
import ModBeneficiarios from './views/ModBeneficiarios';
import ActividadDetalle from './views/ActividadDetalle';
import ModificarImagen from './views/ModificarImagen';

class Router extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login}/>
                
                <Route path="/principal" component={Principal}/>
                <Route path="/registro" component={Registro}/>

                <Route path="/beneficiarios" component={Beneficiarios}/>
                <Route path="/beneficiarioRegistro" component={BeneficiariosRegistro}/>
                <Route path="/modificarBeneficiario" component={ModBeneficiarios}/>

                <Route path="/areas" component={Area}/>
                <Route path="/areaRegistro" component={AreaRegistro}/>
                <Route path="/modificarArea" component={ModArea}/>

                <Route path="/actividades" component={Tactividad}/>
                <Route path="/actividadRegistro" component={ActividadRegistro}/>
                <Route path="/actividadDetalle" component={ActividadDetalle}/>
                <Route path="/modificarActividad" component={ModActividad}/>

                <Route path="/usuarios" component={Tusuarios}/>
                <Route path="/usuarioRegistro" component={RegistroUsers}/>
                <Route path="/modificarUsuario" component={ModUsers}/>

                <Route path="/modificarImagen" component={ModificarImagen}/>
                
            </Switch>
        );
    }
}

export default Router;