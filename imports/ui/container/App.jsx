import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import Login from '../AuthPage/Login'

export default class App extends Component {

    render() {
        return (<div>

                <Login truc={browserHistory} />
                {this.props.children}
            </div>

        );
    }
}