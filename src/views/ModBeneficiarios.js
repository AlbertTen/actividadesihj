import React, {Component} from 'react';
import {municipios, hidalgo} from '../components/data/data';
import { GET_BENEFICIARIO_ACTION, UPDATE_BENEFICIARIO_ACTION } from '../redux/actions/BeneficiariosAction';
import {GET_ACTIVIDADES_ACTION} from '../redux/actions/ActividadAction';
import { connect } from 'react-redux';

class ModBeneficiarios extends Component{
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

        _renderItem = () => {
            return this.props.stateActividades.map((row) =>{
                return(
                    <option>{row.folio} </option>
                );
            })
        }

    constructor(props) {
        super(props);
        this.state = {
          zips:[],
          colonias:[],
          showAlert: false
        
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("beneficiarioId"));
        this.props.getBeneficiario(id);
        this.props.getActividades();
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
        if(NewProps.responseUpdateBeneficiario.success === "OK"){
            window.location.href = "/Beneficiarios";
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
        let err =[];
        let edad = parseInt(this.state.edad);

        if(this.refs.nombre.value === "" ||
            this.refs.app.value === "" ||
            this.refs.apm.value === "" ||
            this.refs.edad.value === "" ||
            this.refs.sexo.value === "" ||
            this.refs.telefono.value === "" ||
            this.refs.email.value === "" ||
            this.refs.curp.value === "" ||
            this.refs.fechaNac.value === "" ||
            this.refs.municipio.value === "" ||
            this.refs.cp.value === "" ||
            this.refs.colonia.value === "" ||
            this.refs.calle.value === "" ||
            this.refs.numExt.value === "")  
            {
                this.setState({
                    showAlert: true
                });

        } else {
            let id = JSON.parse(localStorage.getItem("beneficiarioId"));
            
                this.props.updateBeneficiario(
                    id,
                    this.refs.nombre.value,
                    this.refs.app.value,
                    this.refs.apm.value,
                    this.refs.edad.value,
                    this.refs.sexo.value,
                    this.refs.telefono.value,
                    this.refs.email.value,
                    this.refs.curp.value,
                    this.refs.fechaNac.value,
                    this.refs.municipio.value,
                    this.refs.cp.value,
                    this.refs.colonia.value,
                    this.refs.calle.value,
                    this.refs.numExt.value
                    );
             }
    }
    render(){
        let{nombre,app,apm,edad,sexo,telefono,email,curp,fechaNac,municipio,cp,colonia,calle,numExt}=this.props.stateBeneficiario;
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
                                <span className="login100-form-title-1">Modificar Beneficiario</span>
                            </div>
                            <div className="text-center w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="../images/logo_hidalgo.png" alt="IHJ Logo"/>
                            </div>
                            <div className="needs-validation login100-form" noValidate>
                                {this._renderAlert()}
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="nombre">Nombre(s): </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="nombre" ref="nombre" 
                                        placeholder="Tu nombre aqui ..."
                                        defaultValue={nombre || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="app">Apellido Paterno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="app" ref="app" 
                                        placeholder="Tu apellido aqui ..."
                                        defaultValue={app || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="apm">Apellido Materno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="apm" ref="apm" 
                                        placeholder="Tu apellido aqui ..."
                                        defaultValue={apm || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="edad">Edad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="edad" ref="edad" 
                                        placeholder="Tu edad aqui ..."
                                        defaultValue={edad || ""}
                                        required pattern="[0-9]{2}"
                                        min="18" max="29"
                                        maxLength="2" minLength="2"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                        <select className="custom-select" id="sexo" ref="sexo" >
                                        <option defaultValue={sexo || ""}> {sexo || ""}</option>
                                        <option defaultValue="Masculino">Masculino</option>
                                        <option defaultValue="Femenino">Femenino</option>
                                        </select>
                                      
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="string" className="form-control" 
                                        id="telefono" ref="telefono" 
                                        placeholder="Tu telefono aqui ..."
                                        defaultValue={telefono || ""}
                                        maxLength="10" minLength="10" pattern="[0-9]{10}"    
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
                                    <label htmlFor="curp">Curp: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="curp" ref="curp" 
                                        placeholder="Tu CURP aqui ..."
                                        defaultValue={curp || ""}
                                        maxLength="18" minLength="18"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="Fecha de Nacimiento">Fecha de Nacimiento: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="fechaNac" ref="fechaNac" 
                                        placeholder="Tu fecha de nacimiento aqui ..."
                                        defaultValue={fechaNac || ""}
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
                                    <label htmlFor="calle">Calle: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="calle" ref="calle"
                                        placeholder="Tu calle aqui ..."
                                        defaultValue={calle || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numExt">Número Exterior: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numExt" ref="numExt" 
                                        placeholder="Tu numero aqui ..."
                                        defaultValue={numExt || ""}
                                        min="0" pattern="[0-9]{1,4}"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="actividad">Actividad: </label>
                                        <select className="custom-select" id="actividad" ref="actividad" >
                                        
                                            {this._renderItem()}
                                        </select>
                                </div>
                                <div className="col-12 mt-3">
                                <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Beneficiarios";
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
const mapStateToProps = ({stateBeneficiario, responseUpdateBeneficiario, stateActividades}) => {
    return {
        stateBeneficiario: stateBeneficiario,
        responseUpdateBeneficiario: responseUpdateBeneficiario,
        stateActividades: stateActividades
    };
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        getBeneficiario: (id) => dispatch(GET_BENEFICIARIO_ACTION(id)),
        updateBeneficiario: (id, nombre,app,apm,edad,sexo,telefono,email,curp,fechaNac,municipio,cp,colonia,calle,numExt) => dispatch(UPDATE_BENEFICIARIO_ACTION(id, nombre,app,apm,edad,sexo,telefono,email,curp,fechaNac,municipio,cp,colonia,calle,numExt)),
        getActividades: ()=> dispatch(GET_ACTIVIDADES_ACTION())
        }
}
 const ConnectBeneficiarios = connect(mapStateToProps, mapDispatchToProps)(ModBeneficiarios);
 export default ConnectBeneficiarios;
