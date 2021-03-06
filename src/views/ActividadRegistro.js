import React, {Component} from 'react';
import { connect } from 'react-redux';
import {municipios, hidalgo} from '../components/data/data';
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
          zips:[],
          colonias:[],
          showAlert: false,
          errors:[]
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewActividad.success === "OK"){
            window.location.href = "/actividades";
        }
    }
    handleInputChange(event) {
        let target = event.target;
        
        let value = null;
        let name = target.name;

        switch (target.type) {
            case "checkbox":
                value = target.checked;
                break;
                case "file":
                value = target.files[0];
                break;
            default:
                value = target.value;
                break;
        }

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


        this.setState({
          [name]: value
        });
    }
    handleSubmit() {
        let err =[];

        if(this.state.dia === undefined ||
            this.state.hora === undefined ||
            this.state.nombre === undefined ||
            this.state.lugar === undefined ||
            this.state.descripcion === undefined ||
            this.state.folio === undefined ||
            this.state.area === undefined ||
            this.state.numAsis === undefined ||
            this.state.municipio === undefined ||
            this.state.cp === undefined ||
            this.state.colonia === undefined ||
            this.state.calle1 === undefined ||
            this.state.calle2 === undefined ||
            this.state.callePost === undefined ||
            this.state.numExt === undefined ||
            this.state.letraNumExt === undefined ||
            this.state.numInt === undefined ||
            this.state.letraNumInt === undefined ||
            this.state.latitud === undefined ||
            this.state.longitud === undefined 
            ){
                    err.push("ingresa todos los datos solicitados")
            } else {
                if(this.state.numExt.length < 1 || this.state.numExt.length > 4)
                err.push("Ingresa un número exterior valido")

                if(this.state.numInt.length < 1 || this.state.numInt.length > 4)
                err.push("Ingresa un número interior valido")

                if(this.state.letraNumInt.length !==1)
                err.push ("ingresa una edad valida")
            }

            if(err.length !==0){
                this.setState({
                    errors: err,
                    showAlert: true
                });
        }else {
            let data = new FormData();
            data.append('title',this.state.title);
            data.append('dia',this.state.dia);
            data.append('hora',this.state.hora);
            data.append('nombre',this.state.nombre);
            data.append('lugar',this.state.lugar);
            data.append('descripcion',this.state.descripcion);
            data.append('folio',this.state.folio)
            data.append('area',this.state.area);
            data.append('numAsis',this.state.numAsis);
            data.append('municipio',this.state.municipio);
            data.append('cp',this.state.cp);
            data.append('colonia',this.state.colonia);
            data.append('calle1',this.state.calle1);
            data.append('calle2',this.state.calle2);
            data.append('callePost',this.state.callePost);
            data.append('numExt',this.state.numExt);
            data.append('letraNumExt',this.state.letraNumExt);
            data.append('numInt',this.state.numInt);
            data.append('letraNumInt',this.state.letraNumInt);
            data.append('latitud',this.state.latitud);
            data.append('longitud',this.state.longitud);
            data.append('img',this.state.img);
            data.append('img2',this.state.img2);
            data.append('img3',this.state.img3);
            this.props.sendActividad(data);
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
                                    <label htmlFor="nombre">Nombre: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="nombre" name="nombre" required
                                        placeholder="El nombre aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el nombre de la actividad
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
                                    <label htmlFor="descripcion">Descripción: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="descripcion" name="descripcion" required
                                        placeholder="Una breve descripción aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa una breve descripción
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
                                    <label htmlFor="municipio">Municipio: </label>
                                        <select className="custom-select" id="municipio" name="municipio" onChange={this.handleInputChange} required>
                                            <option value="">Selecciona un municipio</option>
                                            {municipios.map((item,index) => {
                                                return(<option value={item.name} key={index}>{item.name}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona un municipio</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="cp">Codigo Postal: </label>
                                        <select className="custom-select" id="cp" name="cp" onChange={this.handleInputChange} required>
                                            <option value="">Selecciona un municipio</option>
                                            {this.state.zips.map((item,index) => {
                                                return(<option value={item} key={index}>{item}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona un codigo postal</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="colonia">Colonia: </label>
                                        <select className="custom-select" id="colonia" name="colonia" onChange={this.handleInputChange} required>
                                            <option value="">Selecciona una colonia</option>
                                            {this.state.colonias.map((item,index) => {
                                                return(<option value={item} key={index}>{item}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona un colonia</div>
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
                                        placeholder="Letra del número exterior aquí ..."
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
                                        placeholder="Letra del número interior aquí ..."
                                        onChange={this.handleInputChange}
                                        maxLength="1" minLength="1"
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la letra del número interior
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="latitud">Latitud: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="latitud" name="latitud" required
                                        placeholder="Ingresa la latitud aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                    Ingresa la latitud  aquí ...
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="longitud">Longitud: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="longitud" name="longitud" required
                                        placeholder="Ingresa la longitud aquí ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                    Ingresa la longitud  aquí ...
                                    </div>
                                </div>
                    
                                <div className="col-12 mb-3">
                                    <input name="img" type="file" onChange={this.handleInputChange}/>
                                    <input type="hidden" name="MAX_FILE_SIZE" defaultValue="3000000"/>

                                    <input name="img2" type="file" onChange={this.handleInputChange}/>
                                    <input type="hidden" name="MAX_FILE_SIZE" defaultValue="3000000"/>

                                    <input name="img3" type="file" onChange={this.handleInputChange}/>
                                    <input type="hidden" name="MAX_FILE_SIZE" defaultValue="3000000"/>
                                </div>
                        
                                <div className="col-12 mt-3">
                                    <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/actividades";
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
        sendActividad: (datos) => dispatch(NEW_ACTIVIDAD_ACTION(datos))
    }
}
 const ConnectActividades = connect(mapStateToProps, mapDispatchToProps)(ActividadRegistro);
 export default ConnectActividades;
