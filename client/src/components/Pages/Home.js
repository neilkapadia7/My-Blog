import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../Actions/authAction';

const Home = ({loadUser}) => {

    useEffect(() => {
        loadUser();
        
    }, []);

    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

export default connect(null, {loadUser})(Home);
