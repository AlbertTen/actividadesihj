import React, {Component} from 'react';
import { connect } from 'react-redux';
import {municipios, hidalgo} from '../components/data/data';
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
          zips:[],
          colonias:[],
          showAlert: false
          
        };
    }
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("actividadId"));
        this.props.getActividad(id);
    }

    _renderZips = (municipio) => {
        var zips =[];
        var newZips = [];

        hidalgo.map((item) => {
            if(item.nombre === municipio){
                zips.push(item.cp);
            }
        })
        newZips = zips.filter(function(item,index,array){
            return array.indexOf(item) === index;
        })
        return newZips;
    }

    _renderCols = (cp) => {
        var newCols =[];
        hidalgo.map((item)=>{
            if(item.cp === cp){
                newCols.push(item.asentamiento);
            }
        })
        return newCols;
    }
    
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseUpdateActividad.success === "OK"){
            window.location.href = "/Tactividad";
        }
    } 
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(name === "municipio"){
            var zips = [];
            var newZips = [];
            hidalgo.map((item,index) => {
                if(item.nombre === value){
                    zips.push(item.cp);
                }
            })
            newZips = zips.filter(function(item, index, array) {
                return array.indexOf(item) === index;
            })
            this.setState({
                zips: [...newZips]
            });  
        } else if(name === "cp"){
            var newCols = [];
            hidalgo.map((item,index) => {
                if(item.cp === value){
                    newCols.push(item.asentamiento);
                }
            })
            this.setState({
                colonias: [...newCols]
            });
        }
    }
    
    handleSubmit() {
       
        if(this.refs.dia.value === "" ||
            this.refs.hora.value === "" ||
            this.refs.lugar.value === "" ||
            this.refs.folio.value === "" ||
            this.refs.area.value === "" ||
            this.refs.numAsis.value === "" ||
            this.refs.municipio.value === "" ||
            this.refs.cp.value === "" ||
            this.refs.colonia.value === "" ||
            this.refs.calle1.value === "" ||
            this.refs.calle2.value === "" ||
            this.refs.callePost.value === "" ||
            this.refs.numExt.value === "" ||
            this.refs.letraNumExt.value === "" ||
            this.refs.numInt.value === "" ||
            this.refs.letraNumInt.value === "" ||
            this.refs.latitud.value === "" ||
            this.refs.longitud.value === "" 
            )
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
                this.refs.numAsis.value,
                this.refs.municipio.value,
                this.refs.cp.value,
                this.refs.colonia.value,
                this.refs.calle1.value,
                this.refs.calle2.value,
                this.refs.callePost.value,
                this.refs.numExt.value,
                this.refs.letraNumExt.value,
                this.refs.numInt.value,
                this.refs.letraNumInt.value,
                this.refs.latitud.value,
                this.refs.longitud.value
                
                );
        }
    }
    render(){
        let{dia,hora,lugar,folio,area,numAsis,municipio,cp,colonia,calle1,calle2,callePost,numExt,letraNumExt,numInt,letraNumInt,latitud,longitud}=this.props.stateActividad;
        let zips = [], cols = [];

        if(this.state.zips.length === 0 && cp !== undefined) {
            zips = this._renderZips(municipio);
        } else if(this.state.zips.length !==0){
            zips = [...this.state.zips];
        }

        if(this.state.colonias.length === 0 && colonia !== undefined) {
            cols = this._renderCols(cp);
        } else if(this.state.colonias.length !==0){
            cols = [...this.state.colonias];
        }

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

                                   <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="municipio">Municipio: </label>
                                        <select className="custom-select" id="municipio" ref="municipio" >
                                        <option defaultValue={municipio || ""}> {municipio || ""}</option>
                                            {municipios.map((item,index) => {
                                                return(<option value={item.name} key={index}>{item.name}</option>);
                                            })}
                                        </select>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="cp">Codigo Postal: </label>
                                        <select className="custom-select" id="cp" ref="cp">
                                        <option defaultValue={cp || ""}> {cp || ""}</option>
                                            {this.state.zips.map((item,index) => {
                                                return(<option value={item} key={index}>{item}</option>);
                                            })}
                                        </select>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="colonia">Colonia: </label>
                                        <select className="custom-select" id="colonia" ref="colonia" >
                                        <option defaultValue={colonia || ""}> {colonia || ""}</option>
                                            {this.state.colonias.map((item,index) => {
                                                return(<option value={item} key={index}>{item}</option>);
                                            })}
                                        </select>
                                </div>

                                   <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="calle1">Calle 1: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="calle1" ref="calle1" 
                                        placeholder="La calle 1 aquí ..."
                                        defaultValue={calle1 || ""}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="calle2">Calle 2: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="calle2" ref="calle2" 
                                        placeholder="La calle 2 aquí ..."
                                        defaultValue={calle2 || ""}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="callePost">Calle Posterior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="callePost" ref="callePost" 
                                        placeholder="La calle posterior aquí ..."
                                        defaultValue={callePost || ""}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numExt">Número Exterior: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numExt" ref="numExt" 
                                        placeholder="El número exterior aquí ..."
                                        defaultValue={numExt || ""}
                                    />
                                   
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="letraNumExt">Letra Número Exterior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="letraNumExt" ref="letraNumExt" 
                                        placeholder="La letra del número exterior aquí ..."
                                        defaultValue={letraNumExt || ""}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numInt">Número Interior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="numInt" ref="numInt"
                                        placeholder="El número interior aquí ..."
                                        defaultValue={numInt || ""}
                                    />
                                   
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="letraNumInt">Letra del número Interior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="letraNumInt" ref="letraNumInt"
                                        placeholder="La letra del número interior aquí ..."
                                        defaultValue={letraNumInt || ""}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="latitud">Latitud: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="latitud" ref="latitud" 
                                        placeholder="Ingresa la latitud aquí ..."
                                        defaultValue={latitud || ""}
                                    />   
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="longitud">Longitud: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="longitud" ref="longitud" 
                                        placeholder="Ingresa la longitud aquí ..."
                                        defaultValue={longitud || ""}
                                    />   
                                </div>

                

                                   <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Tactividad";
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
        updateActividad: (id, dia,hora,lugar,folio,area,numAsis,municipio,cp,colonia,calle1,calle2,callePost,numExt,letraNumExt,numInt,letraNumInt,latitud,longitud)=>dispatch(UPDATE_ACTIVIDAD_ACTION(id, dia,hora,lugar,folio,area,numAsis,municipio,cp,colonia,calle1,calle2,callePost,numExt,letraNumExt,numInt,letraNumInt,latitud,longitud))
    }
}
 const ConnectActividad = connect(mapStateToProps, mapDispatchToProps)(ModActividad);
 export default ConnectActividad;
