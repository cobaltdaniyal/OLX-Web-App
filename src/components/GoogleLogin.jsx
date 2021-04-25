import React, { Component } from 'react';
import { googleLogin } from '../store/action';
import { connect } from 'react-redux';


class GoogleLogin extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={() => this.props.googleLogin()} className="btn btn-outline-primary btn-lg btn-block" ><i className="fa fa-google" aria-hidden="true"></i> Continue with Google</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    googleLogin: () => dispatch(googleLogin())
})


export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin);