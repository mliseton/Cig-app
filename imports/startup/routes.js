import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../ui/container/App'
import App_Register from '../ui/container/App_register'
import Auth_app from '../ui/container/Auth_app'
import Login from '../ui/AuthPage/Login'
import Index from '../ui/Index'
import Register from '../ui/AuthPage/Register'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="login" component={Login}/>
        </Route>
        <Route path="/" component={App_Register}>
            <Route path="Register" component={Register}/>
        </Route>
        <route path="/" component={Auth_app} >
            <route path="index" component={Index} />
        </route>
    </Router>
);
