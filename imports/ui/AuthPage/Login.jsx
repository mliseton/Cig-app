import React, { Component } from 'react';
import { Utilisateur } from '../../api/Utilisateur'





export default class Login extends Component {


    HandleSubmit( event ){
        event.preventDefault();
        let pseudo = $('[name=pseudo]').val();

        let user = Utilisateur.findOne({email: pseudo});
        console.log(user)
    }

    render() {
        return (<div>
                <h1>login</h1>
                <form className="login" onSubmit={this.HandleSubmit.bind(this)}>
                    <p>Email: <input type="text" name="pseudo"/></p>
                    <p>Password: <input type="password" name="password"/></p>
                    <p><input type="submit"  value="Register"/></p>
                </form>
            </div>
        );
    }
}