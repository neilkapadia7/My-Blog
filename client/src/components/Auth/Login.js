import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../Actions/authAction';

const Login = props => {
    const { auth: {isAuthenticated, error}, login, clearErrors } = props;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

    }, [isAuthenticated, props.history]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        
        login({
            email,
            password
        });

        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type='email' value={email} placeholder='Enter Email ID' onChange={(e) => setEmail(e.target.value)} required/>
                <input type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required/>
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {login, clearErrors})(Login);
