import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <div className='footer container-fluid'>
                <div className='footerCountry'>
                    <span className='other' to="/">Other Countries </span>
                    <Link className='footLink' to="/"> India - </Link>
                    <Link className='footLink' to="/"> South Africa - </Link>
                    <Link className='footLink' to="/"> Indonesia</Link>
                </div>
                <div className='footerText'>
                    <span>Free Classifieds in Pakistan. © 2006-2020 OLX</span>
                </div>
            </div>

        )
    }
}

export default Footer;
