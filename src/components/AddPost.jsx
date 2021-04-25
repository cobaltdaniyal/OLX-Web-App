import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';



class AddPost extends Component {
    render() {
        return (
            <div className='postAdd'>
                <nav className="navbar navbar-light bg-light">
                    <Link className="navbar-brand" to='/'>
                        <img className='logoOther' src="/images/olxLogo.png" width="50" alt="" loading="lazy" />
                    </Link>
                </nav>
                <h3 className='postHeading'>POST YOUR AD</h3>
                <div className='postCat'>
                    <h6 className='chooseCatHEading'>CHOOSE A CATEGORY</h6>
                    <div className='btnGroup'>
                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mobiles <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Tablets</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Accessories</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Mobile Phones</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vehicles<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Cars</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Cars on Installments</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Cars Accessories</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Spare Parts</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Buses, Vans &amp; Trucks</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Rickshaw &amp; Chingchi</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Vehicles</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Boats</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Tractors &amp; Trailers</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Property for Sale<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Land &amp; Plots</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Houses</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Apartments &amp; Flats</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Shops - Offices - Commercial Space</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Portions &amp; Floors</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Property for Rent<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Houses</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Apartments &amp; Flats</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Portions &amp; Floors</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Shops - Offices - Commercial Space</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Rooms</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Roommates &amp; Paying Guests</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Vacational Rentals - Guest Houses</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Land &amp; Plots</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Electronics &amp; Home Appliances<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Computers &amp; Accessories</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>TV - Video - Audio</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Cameras &amp; Accessories</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Games &amp; Entertainment</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Home Appliances</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Generator, UPS &amp; Power Solutions</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Kitchen Appliances</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>AC &amp; Coolers</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Fridges &amp; Freezers</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Washing Machines &amp; Dryers</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bikes<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Motorcycles</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Spare Parts</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Bicycles</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>ATV &amp; Quads</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Scooters</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buisness, Industrial &amp; Agriculture<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Food &amp; Restaurants</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Trade &amp; Industrial</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Construction &amp; Heavy Machinery</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Agriculture</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Business &amp; Industry</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Medical &amp; Pharma</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Education &amp; Classes</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Travel &amp; Visa</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Car Rental</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Drivers &amp; Taxi</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Web Development</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Services</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Electronics &amp; Computer Repair</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Event Services</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Health &amp; Beauty</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Maids &amp; Domestic Help</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Movers &amp; Packers</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Home &amp; Office Repair</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Catering &amp; Restaurant</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Farm &amp; Fresh Food</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Jobs<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Online</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Marketing</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Advertising &amp; PR</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Education</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Customer Service</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Sales</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>IT &amp; Networking</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Hotels &amp; Tourism</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Clerical &amp; Administration</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Human Resources</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Accounting &amp; Finance</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Manufacturing</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Medical</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Domestic Staff</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Part - Time</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Jobs</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Animals<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Fish &amp; Aquariums</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Birds</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Hens &amp; Aseel</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Cats</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Dogs</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Livestock</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Horses</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Pet Food &amp; Accessories</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Animals</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Furniture &amp; Home Decor<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Sofa &amp; Chairs</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Beds &amp; Wardrobes</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Home Decoration</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Tables &amp; Dining</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Garden &amp; Outdoor</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Painting &amp; Mirrors</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Rugs &amp; Carpets</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Curtains &amp; Blinds</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Office Furniture</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Household Items</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fashion &amp; Beauty<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Accessories</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Clothes</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Footwear</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Jewellery</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Make Up</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Skin &amp; Hair</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Watches</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Wedding</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Lawn &amp; Pret</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Couture</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Fashion</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Books, Sports &amp; Hoddies<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Books &amp; Magazines</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Musical Instruments</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Sports Equipment</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Gym &amp; Fitness</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Other Hobbies</Link>
                            </div>
                        </div>

                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kids<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                            <div className="dropdown-menu">
                                <Link to='/addpost/attributes' className='dropdown-item'>Kids Furniture</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Toys</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Prams &amp; Walkers</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Swings &amp; Slides</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Kids Bikes</Link>
                                <Link to='/addpost/attributes' className='dropdown-item'>Kids Accessories</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
export default AddPost;
