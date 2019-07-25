import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_AREAS_ACTION, DELETE_AREA_ACTION } from  '../redux/actions/AreaAction';

//View for Área

class Area extends Component{

    componentDidMount(){
        this.props.getAreas();
    }

    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseDeleteArea.success === "OK"){
            this.props.getAreas();
        }
    }

    _renderItems = () => {
        return this.props.stateAreas.map((row,index) => {
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.descripcion}</td>
                    <td>{row.telefono}</td>
                    <td>{row.abreviacion}</td>
                    <td>{row.responsable}</td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={this.props.deleteArea.bind(this,row._id)}>Eliminar</button>
                        <button type="button" className="btn btn-warning"onClick={() =>{
                            let areaId=[];
                            areaId.push(row._id);
                            localStorage.setItem("areaId",JSON.stringify(areaId));
                            window.location.href="./ModArea";
                            }}>Editar</button>
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
        
                    <div>
                        <div style={{marginTop:'30px'}}>
                            <h3 align="center"> <strong>Áreas</strong> </h3> </div> 
            
                        <div className="text-center" style={{marginBottom:"30px"}}>
                            <button className="btn btn-success" onClick={() => {
                                window.location.href="/AreaRegistro";
                                }}>
                                Agregar
                            </button>
                        </div> <br></br>
            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre de área</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Teléfono</th>
                                        <th scope="col">Abreviacion</th>
                                        <th scope="col">Responsable</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this._renderItems()}
                                </tbody>
                            </table>
                            <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Principal";
                                            }}>
                                            Salir
                            </button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({stateAreas, responseDeleteArea}) => {
    return {
        stateAreas: stateAreas,
        responseDeleteArea: responseDeleteArea
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAreas: () => dispatch(GET_AREAS_ACTION()),
        deleteArea: (id) => dispatch(DELETE_AREA_ACTION(id))
    };
};

 const ConnectAreas = connect(mapStateToProps, mapDispatchToProps)(Area);
 export default ConnectAreas;

