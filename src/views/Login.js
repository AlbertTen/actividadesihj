import React , {Component} from 'react';

//View for Login

class Login extends Component{

  handleSubmit() {
    console.log(this.state);
    
    this.props.sendUser(
        this.state.email,
        this.state.password);
        
}
    render(){
        return(
          <section className="container">
            <div className="limiter">
              <div className="container-login100">
                <div className="row wrap-login100">
                  <div className="login100-form-title">
                    <span className="login100-form-title-1">INICIA SESIÓN</span>
                  </div>
                  <div className="text-center w-100" style={{paddingTop:"15px"}}>
                    <img className="rounded hidalgo" src="../images/logo_hidalgo.png" alt="IHJ Logo"/>
                  </div>
                
                  <form className="needs-validation login100-form" noValidate>

                    <div className="col-12 col-lg-6 mb-3">
                      <label htmlFor="email">Email: </label>
                        <input 
                          type="email" className="form-control" 
                          id="email" name="email" required
                          placeholder="Por favor ingresa tu correo"
                          onChange={this.handleInputChange}
                        />
                        <div className="invalid-feedback">
                          Por favor ingresa tu correo
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 mb-3">
                      <label htmlFor="password">Contraseña: </label>
                        <input 
                          type="password" className="form-control" 
                          id="password" name="password" required
                          placeholder="Tu contraseña aqui"
                          onChange={this.handleInputChange}
                        />
                        <div className="invalid-feedback">
                          Por favor ingresa tu contraseña
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-success login100-form-btn">
                            Inicia Sesión
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }       
}

export default Login;