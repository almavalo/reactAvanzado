import React from 'react';
import { connect } from 'react-redux';
import {auth, provider} from '../utils/firebase';
import { setUser, setLogin } from '../actions/index';

const Login = (props) => {

    const loginFacebook = () => {
        auth().signInWithPopup(provider)
        .then(({user}) => {
            props.setUser(user);
            props.setLogin(true);
            props.history.push('/panel');
            console.log(user);
        });
    }

    return(
        <div className="Login">
            <div className="Login-container">
                <div className="Login-content">
                    <h2>Crear cuenta o Iniciar sesion</h2>
                    <button onClick={loginFacebook}>
                        <i className="fab fa-facebook-square"/>
                        <span>Iniciar sesion con facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    setUser,
    setLogin,
}
export default connect(null, mapDispatchToProps)(Login);