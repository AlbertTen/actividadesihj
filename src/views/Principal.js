import React , {Component} from 'react';

class  Principal extends Component{
    render(){
         return(
        <div className="container" style={{marginTop:30}}>
             <div className="row justify-content-center" >
                <div className="col-12 col-md-4">
                    <h1 className="text-center"><strong>BIENVENIDOS</strong></h1>
                </div>
             </div>
                <hr class="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    <div className="card"style={{marginBottom: 15}}>
                        <img src="./images/actividades.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <div align="center">
                                <a href="#" className="btn btn-primary">Actividades</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="card">
                        <img src="./images/areas.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body"style={{marginBottom: 15}}>
                            <div align="center">
                                <a href="#" className="btn btn-primary">Áreas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    <div className="card"style={{marginBottom: 15}}>
                        <img src="./images/BENEFICIARIO.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <div align="center">
                                <a href="#" className="btn btn-primary">Beneficiarios</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="card">
                        <img src="./images/usuarios.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body"style={{marginBottom: 15}}>
                            <div align="center">
                                <a href="#" className="btn btn-primary">Usuarios</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
    </div>
        );
    }
        
}

export default Principal;