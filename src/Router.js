import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Login from './views/Login';

class Router extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login}/>

                
            </Switch>
        );
    }
}

export default Router;