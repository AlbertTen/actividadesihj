import React, {Component} from 'react';
import { GET_AREA_ACTION } from '../redux/actions/AreaAction';
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
    /*componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;
        if(NewProps.responseNewArea.success === "OK"){
            window.location.href = "/Area";
        }
    } */
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
        let{name,descripcion,telefono,abreviacion}=this.props.stateArea;
        
        console.log(this.props.stateArea);
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
                                    id="name" ref="name" required
                                    placeholder="El nombre del área ..."
                                    defaultValue={name || ""}
                                />
                                
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="descripcion">Descripción: </label>
                                <input 
                                    type="text" className="form-control" 
                                    id="descripcion" ref="descripcion" required
                                    placeholder="La descripción aqui ..."
                                    defaultValue={descripcion || ""}
                                />
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="telefono" ref="telefono" required
                                        placeholder="Tu telefono aqui ..."
                                        defaultValue={telefono || ""}
                                    />
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="abreviacion">Abreviacion: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="abreviacion" ref="abreviacion" required
                                        placeholder="Tu abreviación aqui ..."
                                        defaultValue={abreviacion || ""}
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
            <a className="btn btn-primary" href="./Principal" role="button">Atrás</a>
        </section>
        );
    }
}
const mapStateToProps = ({stateArea}) => {
    return {
        stateArea: stateArea
    };
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        getArea:(id) => dispatch(GET_AREA_ACTION(id))
        }
}
 const ConnectAreas = connect(mapStateToProps, mapDispatchToProps)(ModArea);
 export default ConnectAreas;

