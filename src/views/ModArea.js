import React, {Component} from 'react';
import { GET_AREA_ACTION, UPDATE_AREA_ACTION} from '../redux/actions/AreaAction';
import { connect } from 'react-redux';

class ModArea extends Component {
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
        let id = JSON.parse(localStorage.getItem("areaId"));
        this.props.getArea(id);
    }
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseUpdateArea.success === "OK"){
            window.location.href = "/Area";
        }
    } 
    
    handleSubmit() {
        if(this.refs.name.value === "" ||
            this.refs.descripcion.value === "" ||
            this.refs.telefono.value === "" ||
            this.refs.abreviacion.value === ""){
                this.setState({
                    showAlert: true
                });
        }else {

            let id= JSON.parse(localStorage.getItem("areaId"));

            this.props.updateArea(
                id,
                this.refs.name.value,
                this.refs.descripcion.value,
                this.refs.telefono.value,  
                this.refs.abreviacion.value
            );
        }
    }
    render(){
        let{name,descripcion,telefono,abreviacion}=this.props.stateArea;
        
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
                        <div className="needs-validation login100-form" noValidate>
                            {this._renderAlert()}
                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="name">Nombre del Área: </label>
                                <input 
                                    type="text" className="form-control" 
                                    id="name" ref="name"
                                    placeholder="El nombre del área ..."
                                    defaultValue={name || ""}
                                />
                                
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="descripcion">Descripción: </label>
                                <input 
                                    type="text" className="form-control" 
                                    id="descripcion" ref="descripcion"
                                    placeholder="La descripción aqui ..."
                                    defaultValue={descripcion || ""}
                                />
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="telefono" ref="telefono"
                                        placeholder="Tu telefono aqui ..."
                                        defaultValue={telefono || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="abreviacion">Abreviacion: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="abreviacion" ref="abreviacion"
                                        placeholder="Tu abreviación aqui ..."
                                        defaultValue={abreviacion || ""}
                                    />
                                </div>

                            <div className="col-12 mt-3">
                                <div className="btn-group w-100 text-center" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Area";
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
            </div>
        </section>
        );
    }
}
const mapStateToProps = ({stateArea, responseUpdateArea}) => {
    return {
        stateArea: stateArea,
        responseUpdateArea: responseUpdateArea
    };
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        getArea:(id) => dispatch(GET_AREA_ACTION(id)),
        updateArea: (id, name, descripcion, telefono, abreviacion)=>dispatch(UPDATE_AREA_ACTION(id, name, descripcion, telefono, abreviacion))
        }
}
 const ConnectAreas = connect(mapStateToProps, mapDispatchToProps)(ModArea);
 export default ConnectAreas;

