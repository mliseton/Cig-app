import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Logo from '../Logo'


export default class Auth_app extends Component {

    render() {
        return (<div>


                {this.props.children}
            </div>

        );
    }
}