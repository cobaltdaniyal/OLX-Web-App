import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footerup extends Component {
    render() {
        return (
            <div>
                <div className='footerImages'>
                    <img src="/images/payoneerAdd.png" className="img-fluid payoneer" alt="" />
                </div>
                <div className='upFooter'>
                <img src="/images/phone-app.png" className="img-fluid phoneApp" alt="" />
                    <div className='adjust'>
                        <div className='tryOLX'>TRY THE OLX App</div>
                        <div className='buySell'>Buy, sell and find just about anything using <br /> the app on your mobile.</div>
                    </div>
                    <div className='getYourdiv'>
                        <div className='getYour'>
                            GET YOUR APP TODAY
                        </div>
                        <div className='store'>
                        <Link to="/" ><img className='appStore' width='130px' src="/images/appstore.png" alt="" /></Link>
                        <Link to="/" ><img className='appStore' width='130px' src="/images/playstore.png" alt="" /></Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footerup;
