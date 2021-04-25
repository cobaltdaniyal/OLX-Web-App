import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../config/firebase';
import { getUsers } from '../store/action';


class Chat extends Component {
    constructor() {
        super()
        this.state = {
            authUser: '',
        }
    }

    componentDidMount() {
        this.props.getUsers()

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
    }
    render() {
        let { authUser } = this.state
        return (<>
            <h5><span className='sellerModal'>Sending Message As:</span>  &nbsp;
             <img className='avatar' name='image' src={authUser ? authUser.profile : ''} width="30" alt="" loading="lazy" />{authUser ? authUser.name : ''}</h5>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
