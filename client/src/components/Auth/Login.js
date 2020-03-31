import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../Actions/authAction';

const Login = ({getUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        
        console.log({
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

});

export default connect(mapStateToProps, {getUser})(Login);
