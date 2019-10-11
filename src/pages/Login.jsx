import React from 'react';
import {auth, provider} from '../utils/firebase';

const Login = (props) => {

    const loginFacebook = () => {
        auth().signInWithPopup(provider)
        .then(({user}) => {
            props.history.push('/panel');
            console.log(user);
        });
    }

    const logoutFacebook = () => {
        auth().signOut()
        .then(() => {
            props.history.push('/');
            console.log('cerrar sesion')
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
                    <button onClick={logoutFacebook}>
                        <span>Cerrar Sesion</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login;