import React, {Component} from 'react';
import { GET_USER_ACTION } from '../redux/actions/UserAction';
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
    /* componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewUser.success === "OK"){
            window.location.href = "/Tusuarios";
        }
    } */
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
        let{name,email,password,area,level,active}=this.props.stateUser;
        let valActive="SI";
        if(active !== undefined && active){
            valActive="SI";
        }else{
            valActive="NO";
        }
        console.log(this.props.stateUser);
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
                                        id="name" ref="name" required
                                        placeholder="Tu nombre completo aqui ..."
                                        defaultValue={name || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="email">Email: </label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="email" ref="email" required
                                        placeholder="Tu email aqui ..."
                                        defaultValue={email || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="password">Contraseña: </label>
                                    <input 
                                        type="password" className="form-control" 
                                        id="password" ref="password" required
                                        placeholder="Tu contraseña aqui ..."
                                        defaultValue={password || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                        <select className="custom-select" id="area" name="area" onChange={this.handleInputChange} required>
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
                                        <select className="custom-select" id="level" name="level" onChange={this.handleInputChange} required>
                                        <option defaultValue={level || ""}>{level || ""}</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Usuario">Usuario</option>
                                        </select>
                                        
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="active">Activo: </label>
                                        <select className="custom-select" id="active" name="active" onChange={this.handleInputChange} required>
                                        <option defaultValue={active || ""}>{active || ""}</option>
                                        <option value={true}>SI</option>
                                        <option value={false}>NO</option>
                                        </select>
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="btn btn-success login100-form-btn" onClick={this.handleSubmit.bind(this)}>
                                        Registrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="btn btn-primary" href="./Principal" role="button">Atrás</a>
            </section>
        );
    }
}
const mapStateToProps = ({stateUser}) => {
    return {
        stateUser: stateUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        getUser: (id) => dispatch(GET_USER_ACTION(id))
        }
}
 const ConnectUsers = connect(mapStateToProps, mapDispatchToProps)(ModUsers);
 export default ConnectUsers;