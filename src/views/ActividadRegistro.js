import React, {Component} from 'react';
import {municipios,hidalgo} from '../components/data/data';

class ActividadRegistro extends Component {

    constructor(props) {
        super(props);
        this.state = {
          zips:[],
          colonias:[]
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;

        if(NewProps.responseNewUser.success === "OK"){
            window.location.href = "/";
        }
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name + ": ",value);

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
        console.log(this.state);
        
        this.props.sendUser(
            this.state.numact,
            this.state.dia,
            this.state.hora,
            this.state.lugar,
            this.state.folio);    
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

                            <form className="needs-validation login100-form" noValidate>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="numact">Número de Actividad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="numact" name="numact" required
                                        placeholder="El número de actividad aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el número de actividad
                                    </div>
                                </div>

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

                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-success login100-form-btn" onClick={this.handleSubmit.bind(this)}>
                                        Registrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default ActividadRegistro;