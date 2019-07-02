import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_USERS_ACTION } from  '../redux/actions/UserAction';

//View for Users

class Tusuarios extends Component{

    componentDidMount(){
        this.props.getUsers();
    }

    _renderItems = () => {
        return this.props.stateUsers.map((row,index) => {
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.area}</td>
                    <td>
                        <button type="button" class="btn btn-danger">Eliminar</button>
                        <button type="button" class="btn btn-warning">Editar</button>
                    </td>
                </tr>
            );
        })
    }

    render(){
        console.log(this.props.stateUsers);
        return(
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-10">
                        
                        <div class style={{marginTop:'30px'}}>
                            <h3 align="center"> <strong>Usuarios</strong> </h3> 
                        </div> <br></br>
            
                            <div class style={{textAlign:"center"}}>
                                <button type="button" class="btn btn-success">Agregar</button>
                            </div> <br></br>
            
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre Completo</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Área</th>
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
        );
    }
} 

const mapStateToProps = ({stateUsers}) => {
    return {
        stateUsers: stateUsers
    };
}

const mapDispatchToProps = ( dispatch) => {
    return {
        getUsers: () => dispatch(GET_USERS_ACTION())
    };
};

 const ConnectUsers = connect(mapStateToProps, mapDispatchToProps)(Tusuarios);
 export default ConnectUsers;

