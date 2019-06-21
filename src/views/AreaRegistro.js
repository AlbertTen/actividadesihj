import React, {Component} from 'react';

class AreaRegistro extends Component {

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
            this.state.nomarea,
            this.state.responsable);
            
    }

    render(){
        return(

            <section className="container">
            <div className="limiter">
                <div className="container-login100">
                    <div className="row wrap-login100">
                        <div className="login100-form-title">
                            <span className="login100-form-title-1">Registra Área</span>
                        </div>

                        <div className="text-center" style={{paddingTop:"15px"}}>
                            <img className="rounded hidalgo" src="../images/logo_hidalgo.png" alt="IHJ Logo"/>
                        </div>

                        <form className="needs-validation login100-form" noValidate>

                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="nomarea">Nombre del Área: </label>
                                <input 
                                    type="text" className="form-control" 
                                    id="nomarea" name="nomarea" required
                                    placeholder="El nombre del área ..."
                                    onChange={this.handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Por favor ingresa el nombre de la área
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="app">Responsable: </label>
                                <input 
                                    type="text" className="form-control" 
                                    id="responsable" name="responsable" required
                                    placeholder="El responsable aqui ..."
                                    onChange={this.handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Por favor ingresa el nombre del responsable del área
                                </div>
                            </div>

                            <div className="col-12 mt-3">
                                <button type="submit" className="btn btn-success login100-form-btn">
                                    Registrar
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

export default AreaRegistro;