import React,{Component} from "react";

class Footer extends Component{
    render(){
        return(
            <footer id="footer" className="main-footer">
                <div className="container">
                    <div className="row justify-content-center align-items-center row-gob">
                        <div className="col-12 col-md-4 text-center align-items-center">
                            <a href="http://www.hidalgo.gob.mx/">
                                <img className="logo_gobhidalgo gobmx-footer" alt="logotipo hidalgo.gob.mx" src="http://cdn.hidalgo.gob.mx/logo_gobhidalgo.svg" width="226" height="39"/>
                            </a>
                        </div>
                        <div className="imgfoot col-12 col-md-4">
                            <img className="escudo_blanco" alt="escudo gob.mx" src="http://cdn.hidalgo.gob.mx/escudo_blanco.svg"/>
                            <p style={{textAlign: "center"}}>&copy; 2019 Gobierno del Estado de Hidalgo</p>
                        </div>
                        <div className="col-12 col-md-4 redes text-center">
                            <p>
                                <strong style={{fontSize: "20px"}}>Contacto</strong>
                                <br></br>Calle General Ignacio Mejía, Colonia Morelos
                                <br></br>Pachuca de Soto, Hidalgo, México
                                <br></br>+52 (771) 107 0707
                            </p>
                            <div>
                                <center>
                                    <a style={{fontSize: "30px", padding: "10px"}} href="https://www.facebook.com/CulturaHidalgo/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a style={{fontSize: "30px", padding: "10px"}} href="https://twitter.com/CulturaHidalgo" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter-square"></i>
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;