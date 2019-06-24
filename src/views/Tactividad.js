import React, {Component} from 'react';

//View 

class Tactividad extends Component{
    render(){
        return(
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-10">

                    <div>
                        <h3 align="center"> <strong>Actividades</strong> </h3> <br></br>
            
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No. Actividad</th>
                                    <th scope="col">Día</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Lugar</th>
                                    <th scope="col">Folio</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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
        </div>
        );
    }
}

export default Tactividad;