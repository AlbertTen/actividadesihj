import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_ACTIVIDADES_ACTION } from  '../redux/actions/ActividadAction';

//View 

class Tactividad extends Component{
    componentDidMount(){
        this.props.getActividades();
    }
    _renderItems = () => {
        return this.props.stateActividades.map((row,index) => {
            return(
                    <tr key={index}>
                        <td>{row.dia}</td>
                        <td>{row.hora}</td>
                        <td>{row.lugar}</td>
                        <td>{row.folio}</td>
                        <td>{row.area}</td>
                        <td>{row.numAsis}</td>
                        <td>{row.nCambios}</td>
                        <td>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                            <button type="button" class="btn btn-warning">Editar</button>
                        </td>
                    </tr>
                );
            })
        }

    render(){
        console.log(this.props.stateActividades);
        return(
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-11 col-lg-11">

                    <div>
                        <div class style={{marginTop:'30px'}}>
                            <h3 align="center"> <strong>Actividades</strong> </h3> 
                        </div> <br></br>
            
                            <div class style={{textAlign:"center"}}>
                                <button href="./ActividadRegistro" type="button" class="btn btn-success">Agregar</button>
                            </div> <br></br>
            
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Día</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Lugar</th>
                                    <th scope="col">Folio</th>
                                    <th scope="col">Área</th>
                                    <th scope="col">Número de Asistentes</th>
                                    <th scope="col">Cambios hechos por:</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this._renderItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = ({stateActividades}) => {
    return {
        stateActividades: stateActividades
    };
}

const mapDispatchToProps = ( dispatch) => {
    return {
        getActividades: () => dispatch(GET_ACTIVIDADES_ACTION())
    };
};

 const ConnectActividades = connect(mapStateToProps, mapDispatchToProps)(Tactividad);
 export default ConnectActividades;