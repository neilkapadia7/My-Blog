import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { login, clearErrors } from '../../Actions/authAction';
import {setAlert} from '../../Actions/alertAction';

const Login = props => {
    const { auth: {isAuthenticated, error}, login, clearErrors, setAlert } = props;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error) {
            setAlert(error, 'danger');
            clearErrors();
        }

    }, [isAuthenticated, props.history, error]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        
        if( email === '' || password === '' ){
            setAlert('Please Enter All Fields!', 'danger');
        }

        login({
            email,
            password
        });

        setEmail('');
        setPassword('');
    }

    return (
        <div className='auth-div'>
            <h1 className='auth-head'>Login</h1>
            <form onSubmit={onSubmit} className='auth-form'>
                <input type='email' value={email} placeholder='Enter Email ID' onChange={(e) => setEmail(e.target.value)} required className='auth-fields' />
                <input type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required className='auth-fields' />
                <input type='submit' value='Login' className='auth-button'/>
            </form>
        </div>
    )
}

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {login, clearErrors, setAlert})(Login);
