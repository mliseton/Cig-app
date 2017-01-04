import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Utilisateur } from '../../api/Utilisateur'



export default class Register extends Component {


    HandleSubmit( event ){
        event.preventDefault();
        let pseudo = $('[name=pseudo]').val();
        let password = $('[name=password]').val();



        Utilisateur.insert({
            email : pseudo,
            password : password
        });


        console.log('cool');
        browserHistory.push('/index');

    }

    render() {
        return (<div>
                <h1>Register</h1>
                <form className="register" onSubmit={this.HandleSubmit.bind(this)}>
                    <p>Email: <input type="text" name="pseudo"/></p>
                    <p>Password: <input type="password" name="password"/></p>
                    <p><input type="submit"  value="Register"/></p>
                </form>
            </div>
        );
    }
}