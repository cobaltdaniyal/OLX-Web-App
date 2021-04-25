import { Modal } from "react-bootstrap";
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../config/firebase';






class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            mod: false,
            red: false,
        }
    }

    openModal() {
        this.setState({ show: !this.state.show })
    }
    openMod() {
        this.setState({ mod: !this.state.mod })
    }
    setItemsState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signUp = () => {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                console.log(response)
                alert('User signed up  Successfully')
                firebase.database().ref('users').push(this.state)
            })
            .catch((error) => {
                alert(error.message)
            })

    }
    logIn = () => {
        if (this.state.name === '' || this.state.name === ' ' || this.state.name === undefined) {
            alert('Please Enter Your Name')
        } else if (this.state.email === '' || this.state.email === ' ' || this.state.email === undefined) {
            alert("Please Enter Your Email")
        } else if (this.state.password === '' || this.state.password === ' ' || this.state.password === undefined) {
            alert("Please Enter Your Password")
        } else (
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((response) => {
                    console.log(response)
                    alert('User Logged in Successfully')
                    this.setState(
                        { red: true }
                    )

                })
                .catch((error) => {
                    alert(error.message)
                })
        )

    }
    render() {
        return (
            this.state.red ? <Redirect to='/' />
                :
                <div className='loginBtnContent'>
                    <button type="button" onClick={() => this.openModal()} className="btn btn-outline-primary btn-lg btn-block" ><i className="fa fa-envelope" aria-hidden="true"></i> Continue with Mail</button>
                    <Modal show={this.state.show} onHide={() => this.openModal()}>
                        <Modal.Header closeButton className='modalHeader' ></Modal.Header>
                        <Modal.Body>
                            <div align='center'>
                                <Link className="navbar-brand" to='/'>
                                    <img src="/images/olxLogo.png" width="50" alt="" loading="lazy" />
                                </Link>
                                <h4 className='logModal'>Enter Your Detail</h4>
                                <input type="text" autoComplete='off' name='name' onChange={(e) => this.setItemsState(e)} className="form-control emailLog" placeholder='Name' aria-describedby="button-addon2" />
                                <input type="email" autoComplete='off' name='email' onChange={(e) => this.setItemsState(e)} className="form-control emailLog" placeholder='Email' aria-describedby="button-addon2" />
                                <input type="password" autoComplete='off' name='password' onChange={(e) => this.setItemsState(e)} className="form-control emailLog" placeholder='password' aria-describedby="button-addon2" />
                                <button type="button" onClick={() => this.signUp()} className="btn btn-primary btn-dark btn-block">Sign Up</button>
                                <button type="button" onClick={() => this.openMod()} className="btn btn-primary btn-dark btn-block">Log In</button>
                                <p className='logModPara'>We won't reveal your email to anyone else nor use it to send you spam</p>
                            </div>
                        </Modal.Body>
                    </Modal>


                    <Modal show={this.state.mod} onHide={() => this.openMod()}>
                        <Modal.Header closeButton className='modalHeader' ></Modal.Header>
                        <Modal.Body>
                            <div align='center'>
                                <Link className="navbar-brand" to='/'>
                                    <img src="/images/olxLogo.png" width="50" alt="" loading="lazy" />
                                </Link>
                                <h4 className='logModal'>Enter Your Detail</h4>
                                <input type="text" autoComplete='off' name='name' onChange={(e) => this.setItemsState(e)} className="form-control emailLog" placeholder='Name' aria-describedby="button-addon2" />
                                <input type="email" autoComplete='off' name='email' onChange={(e) => this.setItemsState(e)} className="form-control emailLog" placeholder='Email' aria-describedby="button-addon2" />
                                <input type="password" autoComplete='off' name='password' onChange={(e) => this.setItemsState(e)} className="form-control emailLog" placeholder='password' aria-describedby="button-addon2" />
                                <button type="button" onClick={() => this.logIn()} className="btn btn-primary btn-dark btn-block">Next</button>
                                <p className='logModPara'>We won't reveal your email to anyone else nor use it to send you spam</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
        )
    }
}

export default LoginPage;