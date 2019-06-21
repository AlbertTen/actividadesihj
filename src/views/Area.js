import React, {Component} from 'react';

//View 

class Area extends Component{
    render(){
        return(
        
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
        </div>
        );
    }
}

export default Area;