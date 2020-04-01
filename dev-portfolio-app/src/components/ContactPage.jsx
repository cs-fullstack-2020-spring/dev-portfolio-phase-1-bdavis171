import React, { Component } from 'react';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='contact-container'>
                <div id="contact-header">
                    <h2>Contact</h2>
                </div>
                <div id="contact-email">
                    
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdD_TBCBOY9ncdFlasOohlb55PACURC7NwfMG22wKxD966Mdw/viewform?embedded=true" width="640" height="729" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
         );
    }
}
 
export default ContactPage;