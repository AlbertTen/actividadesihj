import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NEW_ACTIVIDAD_ACTION }  from '../redux/actions/ActividadAction';

class ActividadRegistro extends Component {
    _renderAlert =() => {
        if(this.state.showAlert){
            return this.state.errors.map((error,index) =>{
                return(
    
                    <div className="col-12" key={index}>
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <p className="w-100 mb-0">{error}</p>
                        </div>
                    </div>
                );
            })
        } else {
            return null;
        }    
    }
    constructor(props) {
        super(props);
        this.state = {
          showAlert: false,
          errors:[]
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewActividad.success === "OK"){
            window.location.href = "/Tactividad";
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
        let err =[];

        if(this.state.dia === undefined ||
            this.state.hora === undefined ||
            this.state.lugar === undefined ||
            this.state.folio === undefined ||
            this.state.area === undefined ||
            this.state.numAsis === undefined ||
            this.state.calle1 === undefined ||
            this.state.calle2 === undefined ||
            this.state.callePost === undefined ||
            this.state.numExt === undefined ||
            this.state.letraNumExt === undefined ||
            this.state.numInt === undefined ||
            this.state.letraNumInt === undefined ||
            this.state.cp === undefined ||
            this.state.coordenadas === undefined
            ){
                    err.push("ingresa todos los datos solicitados")
            }
    
            if(this.state.numExt.length < 1 || this.state.numExt.length > 4)
            err.push("Ingresa un número exterior valido")

            if(this.state.numInt.length < 1 || this.state.numInt.length > 4)
            err.push("Ingresa un número interior valido")
    
            if(err.length !==0){
                this.setState({
                    errors: err,
                    showAlert: true
                });
        }else {
            this.props.sendActividad(
                this.state.dia,
                this.state.hora,
                this.state.lugar,
                this.state.folio,
                this.state.area,
                this.state.numAsis,
                this.state.calle1,
                this.state.calle2,
                this.state.callePost,
                this.state.numExt,
                this.state.letraNumExt,
                this.state.numInt,
                this.state.letraNumInt,
                this.state.cp,
                this.state.coordenadas);
        }
    }
    render(){
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
                                        id="dia" name="dia" required
                                        placeholder="El día aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el día
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="hora">Hora: </label>
                                    <input 
                                        type="time" className="form-control" 
                                        id="hora" name="hora" required
                                        placeholder="La hora aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la hora
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="lugar">Lugar: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="lugar" name="lugar" required
                                        placeholder="El lugar aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el lugar
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="folio">Folio: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="folio" name="folio" required
                                        placeholder="El folio aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el folio
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
                                    <label htmlFor="numAsis">Número de Asistentes: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numAsis" name="numAsis" required
                                        placeholder="El número de asistentes aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el número de asistentes
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="calle1">Calle 1: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="calle1" name="calle1" required
                                        placeholder="La calle 1 aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la calle 1 
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="calle2">Calle 2: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="calle2" name="calle2" required
                                        placeholder="La calle 2 aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la calle 2 
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="callePost">Calle Posterior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="callePost" name="callePost" required
                                        placeholder="La calle posterior aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la calle posterior
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numExt">Número Exterior: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numExt" name="numExt" required
                                        placeholder="El número exterior aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el número exterior
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="letraNumExt">Letra Número Exterior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="letraNumExt" name="letraNumExt" required
                                        placeholder="La letra del número exterior aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la letra del número exterior
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numInt">Número Interior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="numInt" name="numInt" required
                                        placeholder="El número interior aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el número interior
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="letraNumInt">Letra del número Interior: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="letraNumInt" name="letraNumInt" required
                                        placeholder="La letra del número interior aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la letra del número interior
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="cp">Código Postal: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="cp" name="cp" required
                                        placeholder="El código postal aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el código postal
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="coordenadas">Coordenadas: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="coordenadas" name="coordenadas" required
                                        placeholder="Ingresa las coordenadas geográficas aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                    Ingresa las coordenadas geográficas aquí ...
                                    </div>
                                </div>
                <div className="text-center w-100" style={{paddingTop:"15px"}}>
                <form enctype="multipart/form-data" action="uploader" method="POST">
                <input name="uploadedfile" type="file" />
                <input type="submit" value="Subir archivo" />
                </form>
                </div>
                            
                                <div className="col-12 mt-3">
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
                </div>
            </section>
        );
    }
}
const mapStateToProps = ({responseNewActividad}) => {
    return {
        responseNewActividad: responseNewActividad
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        sendActividad: (dia, hora, lugar, folio, area, numAsis, calle1, calle2, callePost, numExt, letraNumExt, numInt, letraNumInt, cp, coordenadas) => dispatch(NEW_ACTIVIDAD_ACTION(dia, hora, lugar, folio, area, numAsis, calle1, calle2, callePost, numExt, letraNumExt, numInt, letraNumInt, cp, coordenadas))
    }
}
 const ConnectActividades = connect(mapStateToProps, mapDispatchToProps)(ActividadRegistro);
 export default ConnectActividades;
