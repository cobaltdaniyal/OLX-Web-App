import React, { Component } from 'react'
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { facebookLogin } from '../store/action';
import GoogleLogin from './GoogleLogin';
import LoginPage from './LoginMod';
import firebase from '../config/firebase';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            authUser: {},
            signout: false,
            red: false

        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                authUser: user
            })
            if (user) {

                firebase.database().ref('users').on('value', (data) => {
                    for (var key in data.val()) {
                        if (user.email === data.val()[key].email) {
                            this.setState({
                                authUser: data.val()[key]
                            })
                        } else {
                            this.setState({ signout: true })
                        }
                    }
                    console.log(this.state.authUser)
                })
            }
        })
    }

    openModal() {
        this.setState({ show: !this.state.show })
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.setState({ signout: false, show: false })
            alert('User Signed Out Successfully')
        }).catch(function (error) {
            alert(error.message)
        });
    }

    searchBar = (e) => {
        console.log(e.target.value)
    }

    render() {
        let { authUser } = this.state
        return (
            <div className='header'>
                <Link className="navbar-brand" to='/'>
                    <img className='logoOther' src="/images/olxLogo.png" width="50" alt="" loading="lazy" />
                </Link>
                <div className='locationBox'>
                    <i className="fa fa-search searchImage" aria-hidden="true"></i>
                    <input className="locationInput form-control" placeholder="Serch city, area or locality" />
                    <button className='fa fa-chevron-down btnDown'></button>
                </div>
                <div className="form-row">

                    <input type="search" className="form-control searchInput" onChange={(e) => this.searchBar(e)} placeholder='Find Cars, Mobile Phones and more...' />

                    <button className='fa fa-search btnSearch'></button>
                </div>

                <div className='loginBtnContent'>
                    <Modal show={this.state.show} onHide={() => this.openModal()}>
                        <Modal.Header closeButton className='modalHeader' ></Modal.Header>
                        <Modal.Body>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" align="center">
                                        <img src="/images/loginOne.webp" className="d-block modalSlider" alt="..." />
                                        <span className='modalslideText'>Help make OLX safer place to buy and sell</span>
                                    </div>
                                    <div className="carousel-item" align="center">
                                        <img src="/images/loginTwo.webp" className="d-block modalSlider" alt="..." />
                                        <span className='modalslideText'>Contact and close deals faster</span>
                                    </div>
                                    <div className="carousel-item" align="center">
                                        <img src="/images/loginThree.webp" className="d-block modalSlider" alt="..." />
                                        <span className='modalslideText'>Save all your favourite items in one place</span>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                            <button type="button" className="btn btn-outline-primary btn-lg btn-block"><i className="fa fa-phone" aria-hidden="true"></i> Continue with Phone</button>
                            <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => this.props.facebookLogin()} ><i className="fa fa-facebook" aria-hidden="true"></i> Continue with Facebook</button>
                            <GoogleLogin />
                            <LoginPage />
                            <span className='modalText'>We won't share your personal details with anyone</span>


                        </Modal.Body>
                    </Modal>
                </div>
                {this.state.authUser ?
                    <div className="dropdown">
                        <Link to='/chat'>
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                        </Link>
                        <button className="btn btn-secondary headbtn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className='avatar' name='image' src={authUser ? authUser.profile : ''} width="30" alt="" loading="lazy" />
                        </button>
                        <div className="dropdown-menu hello" aria-labelledby="dropdownMenuButton">
                            <span>Hello,</span>
                            <div className='headUser'>
                                <img className='avatar' name='image' src={authUser ? authUser.profile : ''} width="50" alt="" loading="lazy" />
                                <span> {authUser ? authUser.name : ''}</span>
                            </div>
                            <div><button className='signoutBtn' onClick={() => this.signOut()} ><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</button></div>

                        </div>
                    </div>
                    :
                    <button className='btnLogin' onClick={() => this.openModal()}>Login</button>

                }
                <Link to={this.state.authUser ? `/addpost` : '/'} className='btnSell'>
                    <button onClick={() => this.state.authUser ? '' : this.openModal()} className='btnsel'><i className="fa fa-plus" aria-hidden="true"></i> SELL</button>
                </Link>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    facebookLogin: () => dispatch(facebookLogin())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);