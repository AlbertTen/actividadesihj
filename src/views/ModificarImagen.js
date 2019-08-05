import React, {Component} from 'react';
import { connect } from 'react-redux';

class ModificarImagen extends Component {
    render(){
        return(

            <section className="container">
            <div className="limiter">
                <div className="container-login100">
                    <div className="row wrap-login100">
                        <div className="login100-form-title">
                            <span className="login100-form-title-1">Modifica alguna imagen</span>
                        </div>
                        <div className="text-center w-100" style={{paddingTop:"15px"}}>
                            <img className="rounded hidalgo" src="../images/logo_hidalgo.png" alt="IHJ Logo"/>
                        </div>
                        <div className="needs-validation login100-form" noValidate>
                
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

export default ModificarImagen;