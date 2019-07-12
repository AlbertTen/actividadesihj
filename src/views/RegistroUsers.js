import React, {Component} from 'react';
import {municipios,hidalgo} from '../components/data/data';
import { NEW_USER_ACTION } from '../redux/actions/UserAction';
import { connect } from 'react-redux';
class RegistroUsers extends Component {
     _renderAlert =() => {
         if(this.state.showAlert){
            return(
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Atención </strong> Ingresa todos los datos solicitados
                </div>
             );
         } else {
             return null;
         } 
     }
    constructor(props) {
        super(props);
        this.state = {
         showAlert: false
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewUser.success === "OK"){
            window.location.href = "/Tusuarios";
        }
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleSubmit() {
        if(this.state.name === undefined ||
            this.state.email === undefined ||
            this.state.password === undefined ||
            this.state.area === undefined ||
            this.state.level === undefined ||
            this.state.active === undefined){
                this.setState({
                    showAlert: true
                });
        }else {
            this.props.sendUser(
                this.state.name,
                this.state.email,
                this.state.password,
                this.state.area,
                this.state.level,
                this.state.active);
        }
    }
    render(){
        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Registrate</span>
                            </div>
                            <div className="text-center w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="../images/logo_hidalgo.png" alt="IHJ Logo"/>
                            </div>
                            <div className="login100-form">
                                {this._renderAlert()}
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="name">Nombre Completo: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="name" name="name" required
                                        placeholder="Tu nombre completo aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu nombre completo
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="email">Email: </label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="email" name="email" required
                                        placeholder="Tu email aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu email
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="password">Contraseña: </label>
                                    <input 
                                        type="password" className="form-control" 
                                        id="password" name="password" required
                                        placeholder="Tu contraseña aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu contraseña
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                        <select className="custom-select" id="area" name="area" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona una area</option>
                                        <option value="Salud Juvenil Realizada">Salud Juvenil Realizada</option>
                                        <option value="Jóvenes Emprendedores del Estado Beneficiados ">Jóvenes Emprendedores del Estado Beneficiados </option>
                                        <option value="Vinculación de Jóvenes con Instituciones Públicas y Privadas Concertada">Vinculación de Jóvenes con Instituciones Públicas y Privadas Concertada</option>
                                        <option value="Espacios de Expresión Artística para la Juventud Aperturados">Espacios de Expresión Artística para la Juventud Aperturados</option>
                                        <option value="Participación Juvenil en Organizaciones Beneficiadas">Participación Juvenil en Organizaciones Beneficiadas</option>
                                        <option value="Servicios de Consulta en Centros Poder Joven Otorgados ">Servicios de Consulta en Centros Poder Joven Otorgados </option>
                                        <option value="Programas Televisivos de Expresión Elaborados ">Programas Televisivos de Expresión Elaborados </option>
                                        <option value="Programas Poder Joven Producidos ">Programas Poder Joven Producidos </option>
                                        <option value="Espacios Informativos de Apoyos Gubernamentales para Jóvenes Aperturados ">Espacios Informativos de Apoyos Gubernamentales para Jóvenes Aperturados </option>
                                        <option value="Jóvenes Emprendedores en la Casa del Emprendedor Poder Joven Hidalgo Aperturados">Jóvenes Emprendedores en la Casa del Emprendedor Poder Joven Hidalgo Aperturados</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona un area</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="level">Nivel: </label>
                                        <select className="custom-select" id="level" name="level" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona un nivel</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Usuario">Usuario</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona un nivel</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="active">Activo: </label>
                                    <div className="form-group">
                                        <select className="custom-select" id="active" name="active" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona un estatus</option>
                                        <option value={true}>SI</option>
                                        <option value={false}>NO</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona un estatus</div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Tusuarios";
                                        }}>
                                            Cancelar
                                        </button>
                                        <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>
                                            Registrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = ({responseNewUser}) => {
    return {
        responseNewUser: responseNewUser
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        sendUser: (name,email,password, area, level,active) => dispatch(NEW_USER_ACTION(name,email,password, area, level,active))
    }
}
 const ConnectUsers = connect(mapStateToProps, mapDispatchToProps)(RegistroUsers);
 export default ConnectUsers;