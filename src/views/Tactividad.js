import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_ACTIVIDADES_ACTION, DELETE_ACTIVIDAD_ACTION } from  '../redux/actions/ActividadAction';
//View 
class Tactividad extends Component{
    componentDidMount(){
        this.props.getActividades();
    }
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseDeleteActividad.success === "OK"){
            this.props.getActividades();
        } 
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
                        <td>{row.municipio}, {row.cp} , {row.colonia} </td>
                        <td>{row.calle1}</td>
                        <td>{row.calle2}</td>
                        <td>{row.callePost}</td>
                        <td>{row.numExt} , {row.letraNumExt}</td>
                        <td>{row.numInt} , {row.letraNumInt}</td>
                        <td>{row.latitud} , {row.longitud}</td>
                        <td>
                            <button type="button" className="btn btn-danger" onClick={this.props.deleteActividad.bind(this,row._id)}>Eliminar</button>
                            <button type="button" className="btn btn-warning" onClick={() =>{
                            let actividadId=[];
                            actividadId.push(row._id);
                            localStorage.setItem("actividadId",JSON.stringify(actividadId));
                            window.location.href="./ModActividad";
                            }}> Editar</button>
                        </td>
                    </tr>
                );
            })
        }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div style={{marginTop:'30px'}}>
                            <h3 align="center"> <strong>Actividades</strong> </h3> 
                        </div>
                        <div className="text-center" style={{marginBottom:"30px"}}>
                            <button className="btn btn-success" onClick={() => {
                                window.location.href="/ActividadRegistro";
                                }}>
                                Agregar
                            </button>

                            <div className="col-lg-3">
                             <div className="input-group">
                                 <input type="text" className="form-control"/>
                                 <span className="input-group-btn">

                                   <button className="btn btn-default" type="button">Buscar</button>
                                 </span>
                             </div>
                            </div>

                            
                        </div>
                        <div className = "table-responsive">                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Día</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Lugar</th>
                                    <th scope="col">Folio</th>
                                    <th scope="col">Área</th>
                                    <th scope="col">Número de Asistentes</th>
                                    <th scope="col">Domicilio</th>
                                    <th scope="col">Calle 1</th>
                                    <th scope="col">Calle 2</th>
                                    <th scope="col">Calle Posterior</th>
                                    <th scope="col">Número y Letra Exterior</th>
                                    <th scope="col">Número y Letra Interior</th>
                                    <th scope="col">Coordenadas</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this._renderItems()}
                            </tbody>
                        </table> 
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            window.location.href="/Principal";
                            }}>
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({stateActividades, responseDeleteActividad}) => {
    return {
        stateActividades: stateActividades,
        responseDeleteActividad: responseDeleteActividad
    };
}
const mapDispatchToProps = ( dispatch) => {
    return {
        getActividades: () => dispatch(GET_ACTIVIDADES_ACTION()),
        deleteActividad: (id) => dispatch(DELETE_ACTIVIDAD_ACTION(id))
    };
};
 const ConnectActividades = connect(mapStateToProps, mapDispatchToProps)(Tactividad);
 export default ConnectActividades;