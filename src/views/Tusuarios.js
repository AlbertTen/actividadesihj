import React, {Component} from 'react';

//View for Users

class Tusuarios extends Component{
    render(){
        return(
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-10">
                        <h3 align="center"> <strong>Usuarios</strong> </h3> <br></br>
            
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Area</th>
                                        <th scope="col">Nivel</th>
                                        <th scope="col">Fecha de registro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
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

                            <div class style={{textAlign:"right"}}>
                                <button type="button" class="btn btn-success">Agregar</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tusuarios;