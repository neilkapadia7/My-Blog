import React, {useState} from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    onSubmit = e => {
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
                <input type='text' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required/>
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Login;
