import firebase from '../../config/firebase';




const facebookLogin = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                console.log('Facebook result ==>', result)

                let logUser = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`users/${user.uid}`).set(logUser)
                    .then(() => {
                        dispatch({
                            type: 'FACEBOOKUSER',
                            payload: logUser
                        })
                        alert('User Logged in Successfully!')
                    })
                console.log('Facebook User ==>', logUser)
            }).catch(function (error) {
                console.log('Facebook Error ==>', error)
            });
    }
}

const googleLogin = () => {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                console.log('Google result ==>', result)

                let googleUser = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`users/${user.uid}`).set(googleUser)
                    .then(() => {
                        dispatch({
                            type: 'GOOGLEUSER',
                            payload: googleUser
                        })
                        alert('User Logged in Successfully!')
                    })
                console.log('Google User ==>', googleUser)
            }).catch(function (error) {
                console.log('Facebook Error ==>', error)
            });
    }
}


const getUsers = () => {
    return (dispatch) => {
        firebase.database().ref('users').on('child_added', (data) => {
        })
    }
}


export {
    facebookLogin,
    googleLogin,
    getUsers,
   
}