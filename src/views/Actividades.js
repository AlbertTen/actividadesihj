import React, {Component} from 'react';

// View

class Actividades extends Component {
    render(){
        return(

        <div className="card" style={{width: '18em;'}}>
            <h1>Panel de Administrador</h1>
            <h4>Áreas</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Salud Juvenil Realizada
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </li>

                <li class="list-group-item">Jóvenes Emprendedores del Estado Beneficiados
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </li>

                <li class="list-group-item">Vinculación de Jóvenes con Instituciones Públicas y Privadas Concertada
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </li>

                <li class="list-group-item">Espacios de Expresión Artística para la Juventud Aperturados
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </li>

                <li class="list-group-item">Participación Juvenil en Organizaciones Beneficiadas
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

export default Actividades;