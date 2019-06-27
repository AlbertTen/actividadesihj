import React, {Component} from 'react';

//View for Área

class Area extends Component{
    render(){
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
                                        <th scope="col">Responsable</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
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
        </div>
        );
    }
}

export default Area;