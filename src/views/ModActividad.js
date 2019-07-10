import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GET_ACTIVIDAD_ACTION }  from '../redux/actions/ActividadAction';

class ModActividad extends Component {
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
        let id = JSON.parse(localStorage.getItem("actividadId"));
        this.props.getActividad(id);
    }
    /*
        componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewActividad.success === "OK"){
            window.location.href = "/Tactividad";
        }
    }*/    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleSubmit() {
        if(this.state.dia === undefined ||
            this.state.hora === undefined ||
            this.state.lugar === undefined ||
            this.state.folio === undefined ||
            this.state.area === undefined ||
            this.state.numAsis === undefined ||
            this.state.nCambios === undefined){
                this.setState({
                    showAlert: true
                });
        }else {
            this.props.sendActividad(
                this.state.dia,
                this.state.hora,
                this.state.lugar,
                this.state.folio,
                this.state.area,
                this.state.numAsis);
        }
    }
    render(){
        let{dia,hora,lugar,folio,area,numAsis,}=this.props.stateActividad;
        console.log(this.props.stateActividad);
        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Registra una Actividad</span>
                            </div>
                            <div className="text-center w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="../images/logo_hidalgo.png" alt="IHJ Logo"/>
                            </div>
                            <div className="needs-validation login100-form" noValidate>
                                {this._renderAlert()}
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="dia">Día: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="dia" ref="dia" required
                                        placeholder="El día aqui ..."
                                        defaultValue={dia || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="hora">Hora: </label>
                                    <input 
                                        type="time" className="form-control" 
                                        id="hora" ref="hora" required
                                        placeholder="La hora aqui ..."
                                        defaultValue={hora || ""}
                                    />
                                                                   </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="lugar">Lugar: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="lugar" ref="lugar" required
                                        placeholder="El lugar aqui ..."
                                        defaultValue={lugar || ""}
                                    />
                                  
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="folio">Folio: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="folio" ref="folio" required
                                        placeholder="El folio aqui ..."
                                        defaultValue={folio || ""}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el folio
                                    </div>
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
                                        <div className="invalid-feedback">Selecciona un area</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numAsis">Número de Asistentes: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numAsis" ref="numAsis" required
                                        placeholder="El número de asistentes aquí ..."
                                        defaultValue={numAsis || ""}
                                    />
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
                <a class="btn btn-primary" href="./Principal" role="button">Atrás</a>
            </section>
        );
    }
}
const mapStateToProps = ({stateActividad}) => {
    return {
        stateActividad: stateActividad
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        getActividad: (id) => dispatch(GET_ACTIVIDAD_ACTION(id))
    }
}
 const ConnectActividad = connect(mapStateToProps, mapDispatchToProps)(ModActividad);
 export default ConnectActividad;
