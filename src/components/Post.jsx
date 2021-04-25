import React, { Component } from 'react';
import Header from './Header.jsx';
import Category from './Category.jsx';
import { Modal } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../config/firebase';
import Footerup from './upFooter.jsx';
import Footercat from './Footercat.jsx';
import Footer from './Footer.jsx';

class Post extends Component {
    state = {
        url: '',
        show: false,
        currentPost: '',
        authUser: '',
        chat: [],
        message: '',
        id: ''
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
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


        let id = this.props.match.params.id;
        let currentPost = []
        firebase.auth().onAuthStateChanged((user) => {

            firebase.database().ref('Items').on('value', (data) => {
                for (var key in data.val()) {
                    if (data.val()[key].id === id) {
                        currentPost.push(data.val()[key])
                    }
                }
            })
        })
        setTimeout(() => {
            this.setState({
                currentPost: currentPost[0],
                id: id
            })
        }, 2000)
    }
    openModal = () => {
        this.setState({
            show: true,
        })
        let authUser = this.state.authUser;
        let currentPost = this.state.currentPost;
        let mergeUid = this.uidMerge(authUser.uid, currentPost.authUser.uid);
        this.getMessages(mergeUid)
    }
    uidMerge(uid1, uid2) {
        if (uid1 != uid1) {
            return uid1 + uid2
        }
    }
    getMessages = (uid) => {
        firebase.database().ref('/').child(`chats/${uid}`).on('child_added', (messages) => {
            this.state.chat.push(messages.val())
            this.setState({
                chat: this.state.chat
            })
            console.log(messages.val())
        })
    }
    closeModal = () => {
        this.setState({
            show: false,
        })
    }
    sendMessage = () => {
        let authUser = this.state.authUser;
        let currentPost = this.state.currentPost;
        let mergeUid = this.uidMerge(authUser.uid, currentPost.authUser.uid);
        firebase.database().ref('/').child(`chats/${mergeUid}`).push({
            message: this.state.message,
            sender: authUser.name,
            seller: currentPost.authUser.name,
            uid: authUser.uid,
            selleruid: currentPost.authUser.uid
        })
        this.setState({
            message: ''
        })
    }
    render() {
        let { currentPost } = this.state;
        return (
            <div>
                <Header />
                <Category />
                {currentPost ? <div>
                    <div className='postDiv'>
                        <div className='postImageDiv'><img src={currentPost ? currentPost.url : ''} className="imgPost shadow" width='600' alt="Responsive" /></div>
                        <div className='postSeller'>
                            <h4>Seller Description</h4>
                            <div className='userProf'>
                                <div className='postProfileDiv'>
                                    <img className='avatar' name='image' src={currentPost ? currentPost.authUser.profile : ''} width="50" alt="" loading="lazy" />
                                </div>
                                <div className='postName'><h6>Name:</h6><span>{currentPost ? currentPost.authUser.name : ''}</span></div>
                            </div>
                            <div className='userDetail'>
                                <h6 className='postContact'>Email:</h6><span>{currentPost ? currentPost.authUser.email : ''}</span>
                                <h6 className='postContact'>Contact No:</h6><span>{currentPost ? currentPost.contact : ''}</span>
                                <h6 className='postContact'>Country:</h6><span>{currentPost ? currentPost.country : ''}</span>
                                <h6 className='postContact'>Address:</h6><span>{currentPost ? currentPost.adress : ''}</span>
                            </div>

                            <button type="button" onClick={() => this.openModal()} className="btn btn-primary postChatBtn btn-dark btn-block">Chat With Seller</button>


                            <div>
                                <Modal className='chatModal' show={this.state.show} onHide={() => this.closeModal()}>

                                    <Modal.Header closeButton className='modalChatHeader' >
                                        <div>
                                            <h5>
                                                <span className='sellerModal'>Seller:</span>  &nbsp;
                                            <img className='avatar' name='image' src={currentPost ? currentPost.authUser.profile : ''} width="30" alt="" loading="lazy" />
                                            &nbsp;
                                            <span className='chatSeller'>{currentPost ? currentPost.authUser.name : ''}</span>
                                            </h5>
                                            <h5>
                                                <span className='sellerModal'>Product:</span>&nbsp;
                                            <span className='chatSeller'>{currentPost ? currentPost.adTitle : '0'}</span>
                                            </h5>
                                            <h5>
                                                <span className='sellerModal'>Price: </span>&nbsp;
                                            <span className='chatSeller'>RS {currentPost ? currentPost.price : '0'}</span>
                                            </h5>
                                        </div>
                                    </Modal.Header>

                                    <Modal.Body className='modalChatBody'>
                                        <ul style={{ margin: '0px', padding: '0px' }}>
                                            {this.state.chat.map((v, i) => {
                                                return <li style={
                                                    { margin: '5px', borderRadius: '10px', listStyleType: 'none', padding: '10px', backgroundColor: v.uid === currentPost.authUser.uid ? "lightGreen" : "lightBlue", textAlign: v.uid === currentPost.authUser.uid ? "right" : "left" }

                                                } key={i}>{v.message}</li>
                                            })}
                                        </ul>
                                    </Modal.Body>

                                    <Modal.Footer className='modalChatFooter'>
                                        <div className="input-group mb-3">
                                            <input type="text" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} className="form-control" placeholder='Type your message...' autoComplete='off' aria-describedby="button-addon2" />
                                            <div className="input-group-append">
                                                <button onClick={() => this.sendMessage()} className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                        </div>
                    </div>
                    <div className='priceDiv'>

                        <div className='row postPrice'>
                            <div className='col postTitle'><h4>Item:</h4><span>{currentPost ? currentPost.adTitle : '0'}</span></div>
                            <div className='col'><h4>Price:</h4><span>RS {currentPost ? currentPost.price : '0'} </span></div>
                        </div>

                        <div className='postDes'>
                            <h4>Details:</h4><p>{currentPost ? currentPost.condition : ''}</p>
                            <h4>Description:</h4>  <p>{currentPost ? currentPost.description : ''}</p>
                        </div>

                    </div>
                </div>
                    :
                    <div className='logoPostDiv'>
                        <div className='logoPost'>
                            <img className='logoPostImg' src="/images/olxLogo.png" width="500" alt="" loading="lazy" />
                        </div>
                    </div>
                }
                <Footerup />
                <Footercat />
                <Footer />
            </div >

        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
})

// const mapDispatchToProps = (dispatch) => ({
//     productData: () => dispatch(productData())
// })

export default connect(mapStateToProps, null)(withRouter(Post));
