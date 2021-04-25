import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Footercat extends Component {
    render() {
        return (
            <div className='footerCat'>
                <div className='catDown'>
                    <span className='fcbig'>POPULAR CATEGORIES <br /></span>
                    <Link className='fcsmall' to="/">Cars </Link> <br />
                    <Link className='fcsmall' to="/">Flats for rent </Link> <br />
                    <Link className='fcsmall' to="/">Jobs </Link>   <br />
                    <Link className='fcsmall' to="/">Mobile Phones </Link>
                </div>
                <div className='catDown'>
                    <span className='fcbig'>Trending Searches <br /></span>
                    <Link className='fcsmall' to="/">Bikes </Link> <br />
                    <Link className='fcsmall' to="/">Watches </Link> <br />
                    <Link className='fcsmall' to="/">Books </Link>   <br />
                    <Link className='fcsmall' to="/">Dogs </Link>
                </div>
                <div className='catDown'>
                    <span className='fcbig'>About US <br /></span>
                    <Link className='fcsmall' to="/">About OLX Group </Link> <br />
                    <Link className='fcsmall' to="/">OLX Blog </Link> <br />
                    <Link className='fcsmall' to="/">Contact Us </Link>   <br />
                    <Link className='fcsmall' to="/">OLX for Buisnesses </Link>
                </div>
                <div className='catDown'>
                    <span className='fcbig'>OLX <br /></span>
                    <Link className='fcsmall' to="/">Help </Link> <br />
                    <Link className='fcsmall' to="/">Sitemap </Link> <br />
                    <Link className='fcsmall' to="/">Legal &amp; Privacy information </Link>   <br />
                    <br />
                </div>
                <div className='follow'>
                    <span className='followUs'>FOLLOW US</span>
                    <br />
                    <Link className='fa fa-facebook foll follFb' to="/"></Link>
                    <Link className='fa fa-twitter foll' to="/"></Link>
                    <Link className='fa fa-youtube-play foll' to="/"></Link>
                    <Link className='fa fa-instagram foll' to="/"></Link>
                    <div className='followStore'>
                    <Link to="/" ><img className='appStore' width='90px' src="/images/appstore.png" alt="" /></Link>
                    <Link to="/" ><img className='appStore' width='90px' src="/images/playstore.png" alt="" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footercat;