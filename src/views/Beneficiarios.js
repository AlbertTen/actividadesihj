import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_BENEFICIARIOS_ACTION, DELETE_BENEFICIARIO_ACTION } from  '../redux/actions/BeneficiariosAction';
//View para Beneficiarios
class Beneficiarios extends Component{
    componentDidMount(){
        this.props.getBeneficiarios();
    }
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseDeleteBeneficiario.success === "OK"){
            this.props.getBeneficiarios();
        }
    }
    _renderItems = () => {
        return this.props.stateBeneficiarios.map((row,index) => {
            return(
                <tr key={index}>
                    <td>{row.telefono}</td>
                    <td>{row.email}</td>
                    <td>{row.curp}</td>
                    <td>{row.municipio} {row.cp} , {row.colonia} , {row.calle} , {row.numExt} </td>
                    <td>{row.actividad}</td>
                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-warning" onClick={() =>{
                              let beneficiarioId=[];
                              beneficiarioId.push(row._id);
                              localStorage.setItem("beneficiarioId",JSON.stringify(beneficiarioId));
                              window.location.href="./modificarBeneficiario";
                              }}> Editar</button>
                        <button type="button" className="btn btn-danger" onClick={
                            this.props.deleteBeneficiario.bind(this,row._id)}>Eliminar</button>
                      </div>
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
                    <h3 align="center"> <strong>Beneficiarios</strong> </h3> </div> 
                        <div className="text-center" style={{marginBottom:"30px"}}>
                            <button className="btn btn-success" onClick={() => {
                                window.location.href="/beneficiarioRegistro";
                                }}>
                                Agregar
                            </button>
                        </div>
                <div className = "table-responsive"> 
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Curp</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">Actividad</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this._renderItems()}
                        </tbody>
                    </table>
                </div>  
                    <button className="btn btn-primary" onClick={() => {
                            window.location.href="/principal";
                            }}>
                            Salir
                    </button> 
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = ({stateBeneficiarios, responseDeleteBeneficiario}) => {
    return {
        stateBeneficiarios: stateBeneficiarios,
        responseDeleteBeneficiario: responseDeleteBeneficiario
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBeneficiarios: () => dispatch(GET_BENEFICIARIOS_ACTION()),
        deleteBeneficiario: (id) => dispatch(DELETE_BENEFICIARIO_ACTION(id))
    };
};
 const ConnectBeneficiarios = connect(mapStateToProps, mapDispatchToProps)(Beneficiarios);
 export default ConnectBeneficiarios;
