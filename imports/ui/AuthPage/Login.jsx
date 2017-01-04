import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'




import { Utilisateur } from '../../api/Utilisateur'



import Logo from '../Logo'





export default class Login extends Component {


    HandleSubmit( event ){
        event.preventDefault();
        let pseudo = $('[name=pseudo]').val();

        let user = Utilisateur.findOne({email: pseudo});
        console.log(user)
    }

    render() {
        return (<div>
                    <Logo />
                <div className="content">
                    <form className="register" onSubmit={this.HandleSubmit.bind(this)}>
                        <label>Email
                            <input type="text" id="email" name="pseudo"/>
                        </label>
                        <label>Mot de passe
                            <input type="password" id="password" name="password" />
                        </label>
                            <button className="button-connect">Se connecter</button>
                            <button className="button-register"><Link to={'/register'}>S'enregistrer</Link></button>
                    </form>
                    </div>
                </div>
        );
    }










}