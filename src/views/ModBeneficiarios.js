import React, {Component} from 'react';
import {municipios, hidalgo} from '../components/data/data';
import { GET_BENEFICIARIO_ACTION, UPDATE_BENEFICIARIO_ACTION } from '../redux/actions/BeneficiariosAction';
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

    /* componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewBeneficiario.success === "OK"){
            window.location.href = "/Beneficiarios";
        }
    } */

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
            this.refs.numExt.value === ""){
                this.setState({
                    showAlert: true
                });
        }else {
            let id = JSON.parse(localStorage.getItem("actividadId"));
            let active = null; 
            if(this.refs.active.value === "SI"){
                active = true;
            } else {
                active=false;
            }
                this.props.updateBeneficiario(
                    this.state.nombre.value,
                    this.state.app.value,
                    this.state.apm.value,
                    this.state.edad.value,
                    this.state.sexo.value,
                    this.state.telefono.value,
                    this.state.email.value,
                    this.state.curp.value,
                    this.state.fechaNac.value,
                    this.state.municipio.value,
                    this.state.cp.value,
                    this.state.colonia.value,
                    this.state.calle.value,
                    this.state.numExt.value);
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
                                        id="nombre" ref="nombre" required
                                        placeholder="Tu nombre aqui ..."
                                        defaultValue={nombre || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="app">Apellido Paterno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="app" ref="app" required
                                        placeholder="Tu apellido aqui ..."
                                        defaultValue={app || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="apm">Apellido Materno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="apm" ref="apm" required
                                        placeholder="Tu apellido aqui ..."
                                        defaultValue={apm || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="edad">Edad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="edad" ref="edad" required
                                        placeholder="Tu edad aqui ..."
                                        defaultValue={edad || ""}
                                        required pattern="[0-9]{2}"
                                        min="18" max="29"
                                        maxLength="2" minLength="2"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                        <select className="custom-select" id="sexo" name="sexo" onChange={this.handleInputChange} required>
                                        <option defaultValue={sexo || ""}> {sexo || ""}</option>
                                        <option defaultValue="Masculino">Masculino</option>
                                        <option defaultValue="Femenino">Femenino</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona tu sexo</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="string" className="form-control" 
                                        id="telefono" ref="telefono" required
                                        placeholder="Tu telefono aqui ..."
                                        defaultValue={telefono || ""}
                                        maxLength="10" minLength="10" pattern="[0-9]{10}"    
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
                                    <label htmlFor="curp">Curp: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="curp" ref="curp" required
                                        placeholder="Tu CURP aqui ..."
                                        defaultValue={curp || ""}
                                        maxLength="18" minLength="18"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="Fecha de Nacimiento">Fecha de Nacimiento: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="fechaNac" ref="fechaNac" required
                                        placeholder="Tu fecha de nacimiento aqui ..."
                                        defaultValue={fechaNac || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="municipio">Municipio: </label>
                                        <select className="custom-select" id="municipio" name="municipio" onChange={this.handleInputChange} required>
                                        <option defaultValue={municipio || ""}> {municipio || ""}</option>
                                            {municipios.map((item,index) => {
                                                return(<option value={item.name} key={index}>{item.name}</option>);
                                            })}
                                        </select>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="cp">Codigo Postal: </label>
                                        <select className="custom-select" id="cp" name="cp" onChange={this.handleInputChange} required>
                                        <option defaultValue={cp || ""}> {cp || ""}</option>
                                            {this.state.zips.map((item,index) => {
                                                return(<option value={item} key={index}>{item}</option>);
                                            })}
                                        </select>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="colonia">Colonia: </label>
                                        <select className="custom-select" id="colonia" name="colonia" onChange={this.handleInputChange} required>
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
                                        id="calle" ref="calle" required
                                        placeholder="Tu calle aqui ..."
                                        defaultValue={calle || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numExt">Número Exterior: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numExt" ref="numExt" required
                                        placeholder="Tu numero aqui ..."
                                        defaultValue={numExt || ""}
                                        min="0" pattern="[0-9]{1,4}"
                                    />
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="btn btn-success login100-form-btn" onClick={this.handleSubmit.bind(this)}>
                                        Registrar
                                    </button>
                                    <div style={{marginTop: "20px", textAlign: "center"}}>
                                        <a className="btn btn-primary" href="./Beneficiarios" role="button">Cancelar</a>
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
const mapStateToProps = ({stateBeneficiario, responseBeneficiario}) => {
    return {
        stateBeneficiario: stateBeneficiario,
        responseBeneficiario: responseBeneficiario
    };
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        getBeneficiario: (id) => dispatch(GET_BENEFICIARIO_ACTION(id)),
        updateBeneficiario: (id, nombre,app,apm,edad,sexo,telefono,email,curp,fechaNac,municipio,cp,colonia,calle,numExt) => dispatch(UPDATE_BENEFICIARIO_ACTION(id, nombre,app,apm,edad,sexo,telefono,email,curp,fechaNac,municipio,cp,colonia,calle,numExt))
        }
}
 const ConnectBeneficiarios = connect(mapStateToProps, mapDispatchToProps)(ModBeneficiarios);
 export default ConnectBeneficiarios;
