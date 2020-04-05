import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../Actions/authAction';

import Blogs from '../Blog/Blogs';
import {getBlogs, clearErrors} from '../../Actions/blogActions';
import PropTypes from 'prop-types';

import {setAlert} from '../../Actions/alertAction';

const Home = ({loadUser, getBlogs, clearErrors, blog: {blogs, loading, error}, setAlert}) => {

    useEffect(() => {
        loadUser();
        getBlogs();

        if(error) {
            setAlert(error, 'danger');
            clearErrors();
        }

    }, [loadUser, getBlogs, error]);

    return (
        <div>
            <h2>My Blogs</h2>
            {blogs === null 
                ? <h5>Loading....</h5>
                : <Blogs blogs={blogs} key='1'/> 
            }
        </div>
    )
}

Home.propTypes = {
    loadUser: PropTypes.func.isRequired,
    getBlogs: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    blog: state.blog
});

export default connect(mapStateToProps, {loadUser, getBlogs, clearErrors, setAlert})(Home);