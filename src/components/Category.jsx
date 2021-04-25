import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Category extends Component {
    render() {
        return (
            <div className='category'>
                <nav className="navbar navbar-expand-md navbar_custom">

                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-dark font-weight-bold" to="/" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ALL CATEGORIES<span className="mx-1 fa fa-chevron-down"></span>
                                    </Link>
                                    <div className="dropdown-menu catMenu" aria-labelledby="navbarDropdown">
                                        <div className="container-fluid">
                                            <div className="row navbar-dropdown-child">
                                                <div className="col-md-3 col-sm-6 col-xsm-6">
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Vehicles</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Tractors &amp; Trailers</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Boats</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Rickshaw &amp; Chingchi</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Buses, Vans &amp; Trucks</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Spare Parts</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Cars Accessories</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Cars on Installments</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Cars</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Vehicles</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Mobiles</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Mobile Phones</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Accessories</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Tablets</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Electronics &amp;Home Appliances</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Washing Machines &amp; Dryers</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Fridges &amp; Freezers</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">AC &amp; Coolers</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Kitchen Appliances</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Generators, UPS &amp; PowerSolutions</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Home Appliances</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Games &amp; Entertainment</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Cameras &amp; Accessories</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Computers &amp; Accessories</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Electronics &amp;Property for Sale</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Portions &amp; Floors</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Shops - Offices - CommercialSpace</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Apartments &amp; Flats</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Houses</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Land &amp; Plots</Link>
                                                </div>
                                                <div className="col-md-3 col-sm-6 col-xsm-6">
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Animals</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Animals</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Pet Food &amp; Accessories</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Horses</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Livestock</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Dogs</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Cats</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Hens &amp; Aseel</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Birds</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Fish &amp; Aquariums</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Furniture &amp;Home Decor</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Household Items</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Office Furniture</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Curtains &amp; Blinds</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Rugs &amp; Carpets</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Painting &amp; Mirrors</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Garden &amp; Outdoor</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Tables &amp; Dining</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Home Decoration</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Beds &amp; Wardrobes</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Sofa &amp; Chairs</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Business,Industrial &amp; Agriculture</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Medical &amp; Pharma</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Business &amp; Industry</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Agriculture</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Construction &amp; Heavy Machinery</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Trade &amp; Industrial</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Food &amp; Restaurants</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Business for Sale</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Bikes</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Scooters</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">ATV &amp; Quads</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Bicycles</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Spare Parts</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Motorcycles</Link>
                                                </div>
                                                <div className="col-md-3 col-sm-6 col-xsm-6">
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Fashion &amp; Beauty</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Fashion</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Couture</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Lawn &amp; Pret</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Wedding</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Watches</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Skin &amp; Hair</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Make Up</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Jewellery</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Footwear</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Clothes</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Accessories</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Property for Rent</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Land &amp; Plots</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Vacation Rentals - Guest Houses</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Roommates &amp; Paying Guests</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Rooms</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Shops - Offices - Commercial Space</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Portions &amp; Floors</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Apartments &amp; Flats</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Houses</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Jobs</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Jobs</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Part - Time</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Domestic Staff</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Medical</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Manufacturing</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Accounting &amp; Finance</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Human Resources</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Clerical &amp; Administration</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Hotels &amp; Tourism</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">IT &amp; Networking</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Sales</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Customer Service</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Education</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Advertising &amp; PR</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Marketing</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Online</Link>
                                                </div>
                                                <div className="col-md-3 col-sm-6 col-xsm-6">
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Services</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Farm &amp; Fresh Food</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Catering &amp; Restaurant</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Home &amp; Office Repair</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Movers &amp; Packers</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Maids &amp; Domestic Help</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Health &amp; Beauty</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Event Services</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Electronics &amp; Computer Repair</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Services</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Web Development</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Drivers &amp; Taxi</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Car Rental</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Travel &amp; Visa</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Education &amp; Classes</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Books, Sports &amp; Hobbies</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Other Hobbies</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Gym &amp; Fitness</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Sports Equipment</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Musical Instruments</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Books &amp; Magazines</Link>
                                                    <Link className="dropdown-item nav-link-text font-weight-bold" to="/">Kids</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Kids Accessories</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Kids Bikes</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Swings &amp; Slides</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Prams &amp; Walkers</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Toys</Link>
                                                    <Link className="dropdown-item nav-link-text" to="/">Kids Furniture</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/" className="nav-link nav-link-text">Mobile Phones</Link></li>
                                <li><Link to="/" className="nav-link nav-link-text">Cars</Link></li>
                                <li><Link to="/" className="nav-link nav-link-text">Motorcycles</Link></li>
                                <li><Link to="/" className="nav-link nav-link-text">Houses</Link></li>
                                <li><Link to="/" className="nav-link nav-link-text">Tv-Video-Audio</Link></li>
                                <li><Link to="/" className="nav-link nav-link-text">Tablets</Link></li>
                                <li><Link to="/" className="nav-link nav-link-text">Land &amp; Plots</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Category;
