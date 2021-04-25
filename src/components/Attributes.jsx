import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../config/firebase';
import { storage } from '../config/firebase';
import { connect } from 'react-redux';
import Footerup from './upFooter.jsx';
import Footercat from './Footercat.jsx';
import Footer from './Footer.jsx';

class Attributes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            red: false,
            authUser: '',
            image: null,
            url: '',
            progress: 0
        }
        this.imageChange = this.imageChange.bind(this);
        this.imageUpload = this.imageUpload.bind(this);
    }


    imageChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    imageUpload = () => {
        if (this.state.image === null) {
            alert('Please Attach an Image')
        } else {
            const { image } = this.state;
            const uploadImage = storage.ref(`images/${image.name}`).put(image);
            uploadImage.on('state_changed',
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({ progress });
                },
                (error) => {
                    console.log(error)

                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        firebase.database().ref('url/').set({ url: url })
                        this.setState({ url })
                    })
                });
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                firebase.database().ref('users').on('value', (data) => {
                    for (var key in data.val()) {
                        if (user.email === data.val()[key].email) {
                            this.setState({
                                authUser: data.val()[key]
                            })
                        }
                    }
                })
            }
        })
    }
    setItemsState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getValues = () => {
        if (this.state.adTitle === '' || this.state.adTitle === ' ' || this.state.adTitle === undefined) {
            alert('Please Enter Ad Title')
        } else if (this.state.condition === '' || this.state.condition === ' ' || this.state.condition === undefined) {
            alert("Please Enter Product's Condition")
        } else if (this.state.description === '' || this.state.description === ' ' || this.state.description === undefined) {
            alert("Please Enter Product's Description")
        } else if (this.state.price === '' || this.state.price === ' ' || this.state.price === undefined) {
            alert("Please Enter Product's Price")
        } else if (this.state.country === '' || this.state.country === ' ' || this.state.country === undefined) {
            alert("Please Enter Your Country")
        } else if (this.state.adress === '' || this.state.adress === ' ' || this.state.adress === undefined) {
            alert("Please Enter Your Adress")
        } else if (this.state.contact === '' || this.state.contact === ' ' || this.state.contact === undefined) {
            alert("Please Enter Your Contact No.")
        } else {

            let id = firebase.database().ref('Items').push().key

            firebase.database().ref('Items').child(id).set({
                ...this.state,
                id: id
            })
                .then(() => {
                    this.setState(
                        { red: true }
                    )
                    alert('Your Ad Posted Succesfully')
                }
                )
        }
    }

    render() {
        let { authUser } = this.state
        return (
            this.state.red ? <Redirect to='/' />
                :
                <div className='postAdd'>
                    <nav className="navbar navbar-light bg-light">
                        <Link className="navbar-brand" to='/'>
                            <img className='logoOther' src="/images/olxLogo.png" width="50" alt="" loading="lazy" />
                        </Link>
                    </nav>
                    <h3 className='postHeading'>POST YOUR AD</h3>
                    <div className='attBox'>
                        <div className='attBoxHead'><h5>Please Fill Up This Form:</h5></div>
                        <div className='attDetail'>
                            <h5 className='includeSome'>INCLUDE SOME DETAILS</h5>
                            <div className='adTitle'>
                                <p className='adtile' >Ad Title *</p>
                                <input type="text" autoComplete='off' name='adTitle' onChange={(e) => this.setItemsState(e)} className="form-control title" aria-describedby="button-addon2" />
                                <p className='mention'>Mention the key features of your item (e.g. brand, model, age, type) &nbsp; (0 / 70)</p>
                                <p>Condition *</p>
                                <input name='condition' autoComplete='off' onChange={(e) => this.setItemsState(e)} type="text" className="form-control title" aria-describedby="button-addon2" />
                                <p className='desc'>Description *</p>
                                <textarea name='description' autoComplete='off' onChange={(e) => this.setItemsState(e)} className='textArea' cols="50" rows="5"></textarea>      <br />
                                <p className='mention'>Include condition, features and reason for selling 0 / 4096</p>
                            </div>
                        </div>

                        <div className='setPrice'>
                            <h4>SET A PRICE</h4>   <br />
                            <p className='mention'>Price *</p>
                            <div className="input-group price flex-nowrap">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="addon-wrapping">Rs</span>
                                </div>
                                <input name='price' type="text" autoComplete='off' onChange={(e) => this.setItemsState(e)} className="form-control priceInput" aria-describedby="addon-wrapping" />
                            </div>
                            <br />
                        </div>

                        <div className='urLocation'>
                            <h4>ENTER YOUR LOCATION</h4>
                            <p className='desc'>Your Country *</p>
                            <input type="text" autoComplete='off' name='country' onChange={(e) => this.setItemsState(e)} className="form-control title" aria-describedby="button-addon2" />
                            <p className='desc'>Your Address *</p>
                            <input type="text" autoComplete='off' name='adress' onChange={(e) => this.setItemsState(e)} className="form-control title" aria-describedby="button-addon2" />
                        </div>


                        <div className='chooseFiles'>
                            <h4>UPLOAD UP TO 6 PHOTOS</h4>
                            <label className='files'>Select files:</label> <br />
                            <input type="file" id="files" name="files" multiple onChange={this.imageChange} />  <br />
                            <button className='btn btn-dark' onClick={this.imageUpload}>Upload</button> <br /> <br />
                            <progress value={this.state.progress} max='100' />  <br />
                            <img src={this.state.url || 'https://via.placeholder.com/150'} className="img-thumbnail" alt='iamgeUpload' height='160' width='160' />
                            <p className='mandRed'>This field is mandatory</p>
                        </div>

                        <div className='reviewDetails'>
                            <span>REVIEW YOUR DETAILS</span>    <br /><br />
                            <div className='userImage'>
                                <img className='avatar' name='image' src={authUser ? authUser.profile : ''} width="100" alt="" loading="lazy" />
                            </div>
                            <p className='mention'>Name *</p>
                            <input value={authUser ? authUser.name : ''} readOnly type="text" name='name' className="form-control title mar" placeholder="User Name" />
                            <p className='mention'>Email *</p>
                            <input value={authUser ? authUser.email : ''} readOnly type="text" name='email' className="form-control title mar" placeholder="User Email" />
                            <p className='mention'>Contact No. *</p>
                            <input type="text" autoComplete='off' name='contact' onChange={(e) => this.setItemsState(e)} className="form-control title mar" placeholder="Contact No." />   <br />

                            <button type="button" className="btn btn-success" onClick={() => this.getValues()}>POST NOW</button>

                        </div>

                    </div>
                    <Footerup />
                    <Footercat />
                    <Footer />
                </div>

        )
    }
}




const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
})

// const mapDispatchToProps = (dispatch) => ({
//     facebookLogin: () => dispatch(facebookLogin())
// })


export default connect(mapStateToProps, null)(Attributes);


