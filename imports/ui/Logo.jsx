import React, { Component } from 'react';



export default class Logo extends Component {

    render() {
        return (<div>

                <h1>PAYE TA CLOPE</h1>
                <img src="http://68.media.tumblr.com/e0abfccdfdafc46b0d94b6ccbb135871/tumblr_ngz04auOBf1tr0o2xo1_500.gif" />



                {this.props.children}
            </div>

        );
    }
}