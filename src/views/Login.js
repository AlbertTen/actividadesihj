import React , {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="container">
                 <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-6">
            
            <form>
            <div className="form-group">
              <label  for="exampleInputEmail1" >Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo electrónico con alguien más.</small>
            </div>
            <div className="form-group" >
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Login</button>
          </form>

                    </div>
                </div>
            </div>

        );
    }
        
}

export default Login;