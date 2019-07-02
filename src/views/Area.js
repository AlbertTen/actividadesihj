import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_AREAS_ACTION } from  '../redux/actions/AreaAction';

//View for Área

class Area extends Component{

    componentDidMount(){
        this.props.getAreas();
    }

    _renderItems = () => {
        return this.props.stateAreas.map((row,index) => {
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.descripcion}</td>
                    <td>{row.telefono}</td>
                    <td>
                        <button type="button" class="btn btn-danger">Eliminar</button>
                        <button type="button" class="btn btn-warning">Editar</button>
                    </td>
                </tr>
            );
        })
    }

    render(){
        console.log(this.props.stateAreas);
        return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-10">
        
                    <div>
                        <div class style={{marginTop:'30px'}}>
                            <h3 align="center"> <strong>Áreas</strong> </h3> </div> <br></br>
            
                        <div class style={{textAlign:"center"}}>
                            <button type="button" class="btn btn-success">Agregar</button>
                        </div> <br></br>
            
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre de área</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Teléfono</th>
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

const mapStateToProps = ({stateAreas}) => {
    return {
        stateAreas: stateAreas
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAreas: () => dispatch(GET_AREAS_ACTION())
    };
};

 const ConnectAreas = connect(mapStateToProps, mapDispatchToProps)(Area);
 export default ConnectAreas;
