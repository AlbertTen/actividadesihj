import React, {Component} from 'react';
import { GET_USER_ACTION, UPDATE_USER_ACTION} from '../redux/actions/UserAction';
import { connect } from 'react-redux';
class ModUsers extends Component {
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
    }
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("userId"));
        this.props.getUser(id);
    }
     componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseUpdateUser.success === "OK"){
            window.location.href = "/Tusuarios";
        }
    } 
    
    handleSubmit() {
         if(this.refs.name.value === "" ||
            this.refs.email.value === "" ||
            this.refs.password.value === "" ||
            this.refs.area.value === "" ||
            this.refs.level.value === "" ||
            this.refs.active.value === ""
        ){
                this.setState({
                    showAlert: true
                });
        } else {
            
            let id= JSON.parse(localStorage.getItem("userId"));
            let active = null;

            if(this.refs.active.value === "SI"){
                active = true;
            } else { 
                active=false;
            }

            this.props.updateUser(
                id,
                this.refs.name.value,
                this.refs.email.value,
                this.refs.password.value,
                this.refs.area.value,
                this.refs.level.value,
                active
            );
        } 
    }
    render(){
        let{name,email,password,area,level,active}=this.props.stateUser;
        let valActive="SI";
        if(active !== undefined && active){
            valActive="SI";
        }else{
            valActive="NO";
        }
        
        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Modifica</span>
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
                                        id="name" ref="name" 
                                        placeholder="Tu nombre completo aqui ..."
                                        defaultValue={name || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="email">Email: </label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="email" ref="email" 
                                        placeholder="Tu email aqui ..."
                                        defaultValue={email || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="password">Contraseña: </label>
                                    <input 
                                        type="password" className="form-control" 
                                        id="password" ref="password" 
                                        placeholder="Tu contraseña aqui ..."
                                        defaultValue={password || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                        <select className="custom-select" id="area" ref="area">
                                        <option defaultValue={area || ""}> {area || ""}</option>
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
                                        
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="level">Nivel: </label>
                                        <select className="custom-select" id="level" ref="level">
                                        <option defaultValue={level || ""}>{level || ""}</option>
                                        <option defaultValue="Administrador">Administrador</option>
                                        <option defaultValue="Usuario">Usuario</option>
                                        </select>
                                        
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="active">Activo: </label>
                                        <select className="custom-select" id="active" ref="active" >
                                        <option defaultValue={active || ""}>{valActive || ""}</option>
                                        <option defaultValue={true}>SI</option>
                                        <option defaultValue={false}>NO</option>
                                        </select>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Tusuarios";
                                        }}>
                                            Salir
                                        </button>
                                        <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>
                                            Guardar
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
const mapStateToProps = ({stateUser, responseUpdateUser}) => {
    return {
        stateUser: stateUser,
        responseUpdateUser: responseUpdateUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        getUser: (id) => dispatch(GET_USER_ACTION(id)),
        updateUser: (id, name,email,password,area,level, active)=>dispatch(UPDATE_USER_ACTION(id, name,email,password,area,level, active))
        }
}
 const ConnectUsers = connect(mapStateToProps, mapDispatchToProps)(ModUsers);
 export default ConnectUsers;