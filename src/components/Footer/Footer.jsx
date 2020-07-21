import React, { Component } from 'react';
import logo from './../images/mint_logo.jpg';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer-main">
                <div className="Footer-logo">
                    <img className="Footer-logo-image" src={logo} />
                </div>
                <div className="Footer-social">
                    <SocialMediaIconsReact icon="facebook" iconSize="5" /> | 
                    <SocialMediaIconsReact icon="twitter" iconSize="5" /> | 
                    <SocialMediaIconsReact icon="instagram" iconSize="5" /> | 
                    <SocialMediaIconsReact icon="rss" iconSize="5" />
                </div>
            </div>
        );
    }
}

export default Footer;
