import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { register, clearErrors } from '../../Actions/authAction';

const Register = props => {

    const { auth: {isAuthenticated, error}, register, clearErrors} = props;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

    }, [isAuthenticated]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        register({
            firstName,
            lastName,
            email,
            password
        });

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input type='text' value={firstName} placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} required />
                <input type='text' value={lastName} placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} required />
                <input type='email' value={email} placeholder='Enter Email ID' onChange={(e) => setEmail(e.target.value)} required/>
                <input type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required/>
                <input type='submit' value='Register' />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {register, clearErrors})(Register);
