import React, {Component} from 'react';
import {municipios, hidalgo} from '../components/data/data';
import {entidades} from '../components/data/estados';
import { NEW_BENEFICIARIO_ACTION } from '../redux/actions/BeneficiariosAction';
import {GET_ACTIVIDADES_ACTION} from '../redux/actions/ActividadAction';
import { connect } from 'react-redux';

class BeneficiariosRegistro extends Component{
    _renderAlert =() => {
        if(this.state.showAlert){
           return this.state.errors.map((error,index) =>{
            return(

                <div className="col-12" key={index}>
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <p className="w-100 mb-0">{error}</p>
                    </div>
                </div>

              /* <div className="alert alert-danger alert-dismissible fade show" role="alert">
                   <strong>Atención </strong> Ingresa todos los datos solicitados
   
               </div> */
            );
        }) 
        }else {
            return null;
        }   
    }
    _renderItem = () => {
          return this.props.stateActividades.map((row,index) =>{
            return(
                <option key={index}>{row.nombre} </option>
            );
        })
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

    componentDidMount(){
        this.props.getActividades();
    }

    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewBeneficiario.success === "OK"){
            window.location.href = "/beneficiarios";
        }
    }

    _validatecurp = () => {
        const consonantes = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"];
        const vocales = ["A","E","I","O","U"];

        if(this.state.fechaNac  !== undefined &&
             this.state.sexo !== undefined && 
            this.state.entidad !== undefined &&
            this.state.nombre !== undefined && 
            this.state.app !== undefined &&
            this.state.apm !== undefined ){

                let nombre = this.state.nombre.toUpperCase();
                let app = this.state.app.toUpperCase();
                let apm = this.state.apm.toUpperCase();
                let fecha= this.state.fechaNac.split("-");
                let anio = fecha[0].slice(2);
                let mes = fecha[1];
                let dia = fecha[2];
                let consonanteSeleccionada = false, vocalSeleccionada = false;
                let pp = "", pm = "", nom = "", pp2 = "", pm2 = "", nom2 = "";

                pp = app.charAt(0);

                if(vocales.includes(app.charAt(0))){
                    for(let i=1;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!vocalSeleccionada){
                            if(vocales.includes(c)){
                                pp += c;
                                vocalSeleccionada = true;
                            }
                        }
                    }
                } else{
                    for(let i=0;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!vocalSeleccionada){
                            if(vocales.includes(c)){
                                pp += c;
                                vocalSeleccionada = true;
                                break;
                            } 
                        }
                    }
                }

                pm = apm.charAt(0);
                nom = nombre.charAt(0);

                consonanteSeleccionada = false;
                vocalSeleccionada = false;

                if(vocales.includes(app.charAt(0))){
                    for(let i=1;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    pp2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    pp2 = c;
                                    consonanteSeleccionada = true;
                                }
                            }
                        }
                    }
                } else{
                    for(let i=1;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    pp2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    pp2 = c;
                                    consonanteSeleccionada = true;
                                }
                            } 
                        }
                    }
                }

                consonanteSeleccionada = false;

                if(vocales.includes(apm.charAt(0))){
                    for(let i=1;i<apm.length;i++){
                        let c = apm.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    pm2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    pm2 = c;
                                    consonanteSeleccionada = true;
                                }
                            }
                        }
                    }
                } else{
                    for(let i=1;i<apm.length;i++){
                        let c = apm.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    pm2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    pm2 = c;
                                    consonanteSeleccionada = true;
                                }
                            } 
                        }
                    }
                }

                consonanteSeleccionada = false;

                if(vocales.includes(nombre.charAt(0))){
                    for(let i=1;i<nombre.length;i++){
                        let c = nombre.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    nom2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    nom2 = c;
                                    consonanteSeleccionada = true;
                                }
                            }
                        }
                    }
                } else{
                    for(let i=1;i<nombre.length;i++){
                        let c = nombre.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    nom2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    nom2 = c;
                                    consonanteSeleccionada = true;
                                } 
                            } 
                        }
                    }
                }

                console.log(pp + pm + nom + anio + mes + dia + this.state.sexo + this.state.entidad + pp2 + pm2 + nom2);
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
        this.setState({
          [name]: value
        });
    }
    handleSubmit() {
        let err =[];
        let edad = parseInt(this.state.edad);

        if(this.state.nombre === undefined ||
            this.state.app === undefined ||
            this.state.apm === undefined ||
            this.state.edad === undefined ||
            this.state.sexo === undefined ||
            this.state.telefono === undefined ||
            this.state.email === undefined ||
            this.state.curp === undefined ||
            this.state.entidad === undefined ||
            this.state.fechaNac === undefined ||
            this.state.municipio === undefined ||
            this.state.cp === undefined ||
            this.state.colonia === undefined ||
            this.state.calle === undefined ||
            this.state.numExt === undefined ||
            this.state.actividad === undefined){
                
                err.push("ingresa todos los datos solicitados")
        } else{

            if(this.state.edad.length !==2)
            err.push ("ingresa una edad valida")

            if(edad < 18 || edad > 29)
            err.push("Ingresa una edad valida")

            if(this.state.telefono.length !==10)
            err.push ("Ingresa un teléfono valido")

            if(this.state.curp.length !==18)
            err.push ("Ingresa una curp valida")

            if(this.state.numExt.length < 1 || this.state.numExt.length > 4)
            err.push("Ingresa un número exterior valido")

        }

        if(err.length !==0){
            this.setState({
                errors: err,
                showAlert: true
            });
        }
        else {
                this.props.sendBeneficiario(
                    this.state.nombre,
                    this.state.app,
                    this.state.apm,
                    this.state.edad,
                    this.state.sexo,
                    this.state.telefono,
                    this.state.email,
                    this.state.curp,
                    this.state.entidad,
                    this.state.fechaNac,
                    this.state.municipio,
                    this.state.cp,
                    this.state.colonia,
                    this.state.calle,
                    this.state.numExt,
                    this.state.actividad);
             }
    }
    render(){
        return(      
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Registrate como Beneficiario</span>
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
                                        id="nombre" name="nombre" required
                                        placeholder="Tu nombre aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu nombre
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="app">Apellido Paterno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="app" name="app" required
                                        placeholder="Tu apellido aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu apellido
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="apm">Apellido Materno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="apm" name="apm" required
                                        placeholder="Tu apellido aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu apellido
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="edad">Edad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="edad" name="edad" required
                                        placeholder="Tu edad aqui ..."
                                        onChange={this.handleInputChange}
                                        min="18" max="29"
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu edad
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                        <select className="custom-select" id="sexo" name="sexo" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona tu sexo</option>
                                        <option value="H">Hombre</option>
                                        <option value="M">Mujer</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona tu sexo</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="string" className="form-control" 
                                        id="telefono" name="telefono" required
                                        placeholder="Tu telefono aqui ..."
                                        onChange={this.handleInputChange}     
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu telefono
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
                                    <label htmlFor="curp">Curp: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="curp" name="curp" required
                                        placeholder="Tu CURP aqui ..."
                                        onChange={this.handleInputChange}
                                        
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu CURP
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="entidad">Estado de Nacimiento: </label>
                                        <select className="custom-select" id="entidad" name="entidad" onChange={this.handleInputChange} required>
                                            <option value="">Selecciona una entidad</option>
                                            {entidades.map((item,index) => {
                                                return(<option value={item.clave} key={index}>{item.nombre}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona una entidad</div>
                                </div>




                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="Fecha de Nacimiento">Fecha de Nacimiento: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="fechaNac" name="fechaNac" required
                                        placeholder="Tu fecha de nacimiento aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu fecha de nacimiento
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
                                    <label htmlFor="calle">Calle: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="calle" name="calle" required
                                        placeholder="Tu calle aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu calle
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numExt">Número Exterior: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numExt" name="numExt" required
                                        placeholder="Tu numero aqui ..."
                                        onChange={this.handleInputChange} 
                                        min="0" pattern="[0-9]{1,4}"
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu número
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="actividad">Actividad: </label>
                                        <select className="custom-select" id="actividad" name="actividad" onChange={this.handleInputChange} required>
                                            <option value="">Selecciona una actividad</option>
                                            {this._renderItem()}
                                        </select>
                                        <div className="invalid-feedback">Selecciona una actividad</div>
                                </div>
                                
                                <div className="col-12 mt-3">
                                    <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/beneficiarios";
                                        }}>
                                            Salir
                                        </button>
                                        <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>
                                            Guardar
                                        </button>
                                        <button className="btn btn-primary" onClick={this._validatecurp.bind(this)}>
                                            Validar CURP
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
const mapStateToProps = ({responseNewBeneficiario, stateActividades}) => {
    return {
        responseNewBeneficiario: responseNewBeneficiario,
        stateActividades: stateActividades
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        sendBeneficiario: (nombre,app,apm,edad,sexo,telefono,email,curp,entidad,fechaNac,municipio,cp,colonia,calle,numExt,actividad) => dispatch(NEW_BENEFICIARIO_ACTION(nombre,app,apm,edad,sexo,telefono,email,curp,entidad,fechaNac,municipio,cp,colonia,calle,numExt,actividad)),
        getActividades: ()=> dispatch(GET_ACTIVIDADES_ACTION())
    }
}
 const ConnectBeneficiarios = connect(mapStateToProps, mapDispatchToProps)(BeneficiariosRegistro);
 export default ConnectBeneficiarios;