import React, {Component} from 'react';

//View 

class Beneficiarios extends Component{
    render(){
        return(

            <div className="card" style={{width: '18em;'}}>
            <h1>Panel de Administrador</h1>
            <h4>Beneficiarios</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Beneficiario 1
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </li>

                <li class="list-group-item">Beneficiairio 2
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </li>

                <li class="list-group-item">Beneficiario 3
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </li>

                
            </ul>
        </div>

        );
    }
}

export default Beneficiarios;
