import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GET_ACTIVIDAD_ACTION, UPDATE_ACTIVIDAD_ACTION }  from '../redux/actions/ActividadAction';

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
    
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseUpdateActividad.success === "OK"){
            window.location.href = "/Tactividad";
        }
    }   
    
    handleSubmit() {
        if(this.refs.dia.value === "" ||
            this.refs.hora.value === "" ||
            this.refs.lugar.value === "" ||
            this.refs.folio.value === "" ||
            this.refs.area.value === "" ||
            this.refs.numAsis.value === "" ||
            this.refs.nCambios.value === "")
            {
                this.setState({
                    showAlert: true
                });

        } else {

            let id = JSON.parse(localStorage.getItem("actividadId"));

            this.props.updateActividad(
                id,
                this.refs.dia.value,
                this.refs.hora.value,
                this.refs.lugar.value,
                this.refs.folio.value,
                this.refs.area.value,
                this.refs.numAsis.value
                );
        }
    }
    render(){
        let{dia,hora,lugar,folio,area,numAsis}=this.props.stateActividad;

        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Modifica una Actividad</span>
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
                                        id="dia" ref="dia" 
                                        placeholder="El día aqui ..."
                                        defaultValue={dia || ""}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="hora">Hora: </label>
                                    <input 
                                        type="time" className="form-control" 
                                        id="hora" ref="hora" 
                                        placeholder="La hora aqui ..."
                                        defaultValue={hora || ""}
                                    />
                                                                   </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="lugar">Lugar: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="lugar" ref="lugar"
                                        placeholder="El lugar aqui ..."
                                        defaultValue={lugar || ""}
                                    />
                                  
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="folio">Folio: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="folio" ref="folio"
                                        placeholder="El folio aqui ..."
                                        defaultValue={folio || ""}
                                    />
                                   
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                        <select className="custom-select" id="area" ref="area">
                                        <option defaultValue={area || ""}> {area || ""}</option>
                                        <option defaultValue="Salud Juvenil Realizada">Salud Juvenil Realizada</option>
                                        <option defaultValue="Jóvenes Emprendedores del Estado Beneficiados ">Jóvenes Emprendedores del Estado Beneficiados </option>
                                        <option defaultValue="Vinculación de Jóvenes con Instituciones Públicas y Privadas Concertada">Vinculación de Jóvenes con Instituciones Públicas y Privadas Concertada</option>
                                        <option defaultValue="Espacios de Expresión Artística para la Juventud Aperturados">Espacios de Expresión Artística para la Juventud Aperturados</option>
                                        <option defaultValue="Participación Juvenil en Organizaciones Beneficiadas">Participación Juvenil en Organizaciones Beneficiadas</option>
                                        <option defaultValue="Servicios de Consulta en Centros Poder Joven Otorgados ">Servicios de Consulta en Centros Poder Joven Otorgados </option>
                                        <option defaultValue="Programas Televisivos de Expresión Elaborados ">Programas Televisivos de Expresión Elaborados </option>
                                        <option defaultValue="Programas Poder Joven Producidos ">Programas Poder Joven Producidos </option>
                                        <option defaultValue="Espacios Informativos de Apoyos Gubernamentales para Jóvenes Aperturados ">Espacios Informativos de Apoyos Gubernamentales para Jóvenes Aperturados </option>
                                        <option defaultValue="Jóvenes Emprendedores en la Casa del Emprendedor Poder Joven Hidalgo Aperturados">Jóvenes Emprendedores en la Casa del Emprendedor Poder Joven Hidalgo Aperturados</option>
                                        </select>
                                       
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numAsis">Número de Asistentes: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numAsis" ref="numAsis"
                                        placeholder="El número de asistentes aquí ..."
                                        defaultValue={numAsis || ""}
                                    />
                                   </div> 
                                   <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Tactividad";
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
            </section>
        );
    }
}
const mapStateToProps = ({stateActividad, responseUpdateActividad}) => {
    return {
        stateActividad: stateActividad,
        responseUpdateActividad: responseUpdateActividad
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        getActividad: (id) => dispatch(GET_ACTIVIDAD_ACTION(id)),
        updateActividad: (id, dia,hora,lugar,folio,area,numAsis,nCambios)=>dispatch(UPDATE_ACTIVIDAD_ACTION(id, dia,hora,lugar,folio,area,numAsis,nCambios))
    }
}
 const ConnectActividad = connect(mapStateToProps, mapDispatchToProps)(ModActividad);
 export default ConnectActividad;
