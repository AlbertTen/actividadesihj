import React, {Component} from 'react';
import { NEW_AREA_ACTION } from '../redux/actions/AreaAction';
import { connect } from 'react-redux';
class AreaRegistro extends Component {
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
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewArea.success === "OK"){
            window.location.href = "/Area";
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
        if(this.state.name === undefined ||
            this.state.descripcion === undefined ||
            this.state.telefono === undefined ||
            this.state.abreviacion === undefined){
                this.setState({
                    showAlert: true
                });
        }else {
            this.props.sendArea(
            this.state.name,
            this.state.descripcion,
            this.state.telefono,  
            this.state.abreviacion);
        }
    }
    render(){
        return(
            <section className="container">
            <div className="limiter">
                <div className="container-login100">
                    <div className="row wrap-login100">
                        <div className="login100-form-title">
                            <span className="login100-form-title-1">Registra Área</span>
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
                                    id="name" name="name" required
                                    placeholder="El nombre del área ..."
                                    onChange={this.handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Por favor ingresa el nombre de la área
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="descripcion">Descripción: </label>
                                <input 
                                    type="text" className="form-control" 
                                    id="descripcion" name="descripcion" required
                                    placeholder="La descripción aqui ..."
                                    onChange={this.handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Por favor ingresa una descripción del área
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="telefono" name="telefono" required
                                        placeholder="Tu telefono aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu telefono
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="abreviacion">Abreviacion: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="abreviacion" name="abreviacion" required
                                        placeholder="Tu abreviación aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu abreviación
                                    </div>
                                </div>

                            <div className="col-12 mt-3">
                                <button className="btn btn-success login100-form-btn" onClick={this.handleSubmit.bind(this)}>
                                    Registrar
                                </button>
                                <div style={{marginTop: "20px", textAlign: "center"}}>
                                    <a class="btn btn-primary" href="./Area" role="button">Cancelar</a>
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
const mapStateToProps = ({responseNewArea}) => {
    return {
        responseNewArea: responseNewArea
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        sendArea: (name,descripcion,telefono,abreviacion) => dispatch(NEW_AREA_ACTION(name,descripcion,telefono,abreviacion))
    }
}
 const ConnectAreas = connect(mapStateToProps, mapDispatchToProps)(AreaRegistro);
 export default ConnectAreas;

