import React, { Component } from 'react';
import Header from './Header.jsx';
import Category from './Category.jsx'
import Footerup from './upFooter.jsx';
import Footercat from './Footercat.jsx';
import Footer from './Footer.jsx';
import firebase from '../config/firebase';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {

        url: '',
        items: []
    }

    componentDidMount() {
        let items = []
        firebase.auth().onAuthStateChanged((user) => {
            firebase.database().ref('Items').on('value', (data) => {
                for (var key in data.val()) {
                    items.push(data.val()[key])
                }
            })
            setTimeout(() => {

                this.setState({
                    items: items
                })
            }, 2000)
        })
    }

    render() {
        const { items } = this.state;
        return (
            <div className='homeMain'>
                <Header />
                <Category />
                <div className='catDropdown'>
                    <img src="/images/homeSlider.jpg" className="img-fluid homeSlider" alt="" />
                    <img src="/images/sliderDown.png" className="img-fluid sliderDown" alt="" />
                </div>
                <div className='homeAdMain'>
                    {
                        items ? items.map((item, index) => {
                            return <Link key={index} to={`/post/${item.id}`}>
                                <div className='homeAd'>
                                    <img src={item.url || 'https://via.placeholder.com/150'} className=" homeAdImage" alt='iamgeUpload' />
                                    <div className='homeAdDetails'>
                                        <span className='homeAdTitle'>{item.adTitle}</span>
                                        <span className='homeAdPrice'>Rs: {item.price}</span>
                                        <span className='homeAdCondition'>{item.condition}</span>
                                    </div>
                                </div>
                            </Link>
                        })
                            : <div>
                                {<h1>No Results To Show</h1>}
                            </div>
                    }
                </div>
                <Footerup />
                <Footercat />
                <Footer />
            </div>

        )
    }
}


export default Home;
