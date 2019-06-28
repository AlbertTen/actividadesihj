import React , {Component} from 'react';
import {municipios,hidalgo} from '../components/data/data';

//View for Login

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      zips:[],
      colonias:[]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
}

componentWillReceiveProps(nextProps){
    //const ActualProps = this.props;
    const NewProps = nextProps;

    if(NewProps.responseNewUser.success === "OK"){
        window.location.href = "/";
    }
}

handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name + ": ",value);

    if(name === "municipio"){
        var zips = [];
        var newZips = [];
        hidalgo.map((item,index) => {
            if(item.nombre === value){
                zips.push(item.cp);
            }
        })
        newZips = zips.filter(function(item, index, array) {
            return array.indexOf(item) === index;
        })

        this.setState({
            zips: [...newZips]
        });
        
    } else if(name === "cp"){
        var newCols = [];
        hidalgo.map((item,index) => {
            if(item.cp === value){
                newCols.push(item.asentamiento);
            }
        })

        this.setState({
            colonias: [...newCols]
        });
    }

    this.setState({
      [name]: value
    });
}

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

                    <div className="container" style={{marginTop:30}}>
                      <div className="row justify-content-center" >
                        <div className="col-6 mt-6">
                          <button type="submit" className="btn btn-success login100-form-btn">
                            Inicia Sesión
                          </button>
                        </div> 
                      </div> 
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