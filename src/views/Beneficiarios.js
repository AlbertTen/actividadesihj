import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_BENEFICIARIOS_ACTION } from  '../redux/actions/BeneficiariosAction';

//View para Beneficiarios

class Beneficiarios extends Component{
    componentDidMount(){
        this.props.getBeneficiarios();
    }
    render(){
        console.log(this.props.stateBeneficiarios);
        return(
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-10">

                    <div class style={{marginTop:'30px'}}>
                    <h3 align="center"> <strong>Beneficiarios</strong> </h3> </div> <br></br>
            
                    <div class style={{textAlign:"center"}}>
                        <button type="button" class="btn btn-success">Agregar</button>
                    </div> <br></br>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Curp</th>
                                <th scope="col">Municipio</th>
                        
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn btn-danger">Eliminar</button>
                                    <button type="button" class="btn btn-warning">Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>     
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({stateBeneficiarios}) => {
    return {
        stateBeneficiarios: stateBeneficiarios
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBeneficiarios: () => dispatch(GET_BENEFICIARIOS_ACTION())
    };
};

 const ConnectBeneficiarios = connect(mapStateToProps, mapDispatchToProps)(Beneficiarios);
 export default ConnectBeneficiarios;
