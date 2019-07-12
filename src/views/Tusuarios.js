import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_USERS_ACTION, DELETE_USER_ACTION } from  '../redux/actions/UserAction';
//View for Users
class Tusuarios extends Component{
    componentDidMount(){
        this.props.getUsers();
    }
        componentWillReceiveProps(nextProps){
            //const ActualProps = this.props;
            const NewProps = nextProps;
            if(NewProps.responseDeleteUser.success === "OK"){
                this.props.getUsers();
            } 
        }
    _renderItems = () => {
        return this.props.stateUsers.map((row,index) => {
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.area}</td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={this.props.deleteUser.bind(this,row._id)}>Eliminar</button>
                        <button type="button" className="btn btn-warning"onClick={() =>{
                            let userId=[];
                            userId.push(row._id);
                            localStorage.setItem("userId",JSON.stringify(userId));
                            window.location.href="./ModUsers";
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
                        <div style={{marginTop:'30px'}}>
                            <h3 align="center"> <strong>Usuarios</strong> </h3> 
                        </div>
                        <div className="text-center" style={{marginBottom:"30px"}}>
                            <button className="btn btn-success" onClick={() => {
                                window.location.href="/RegistroUsers";
                                }}>
                                Agregar
                            </button>
                        </div> 
                            <table className="table">
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
                            <button className="btn btn-primary" onClick={() => {
                                            window.location.href="/Principal";
                                            }}>
                                            Cancelar
                            </button>
                    </div>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = ({stateUsers, responseDeleteUser}) => {
    return {
        stateUsers: stateUsers,
        responseDeleteUser: responseDeleteUser
    };
}
const mapDispatchToProps = ( dispatch) => {
    return {
        getUsers: () => dispatch(GET_USERS_ACTION()),
        deleteUser: (id) => dispatch(DELETE_USER_ACTION(id))
    };
};
 const ConnectUsers = connect(mapStateToProps, mapDispatchToProps)(Tusuarios);
 export default ConnectUsers;

