import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getBlogs, clearError} from '../../../Actions/guestActions';
import {setAlert} from '../../../Actions/alertAction';

import Moment from 'react-moment';

const GuestHome = ({guest: {blogs, loading, error}, clearError, getBlogs, setAlert}) => {

    useEffect(() => {
        getBlogs();

        if(error) {
            setAlert(error, 'danger');
            clearError();
        }


    }, [error, getBlogs]);

    if(blogs === null) {
        return <h4>Loading....</h4>
    }

    return (
        <div>
            {blogs && blogs.map(blog => 
                <div key={blog._id}>
                    <img src={blog.image} height='auto' width='80%' style={{margin: 'auto'}} />
                    <h2>{blog.title}</h2>    
                    <h5>{blog.body}</h5>
                    <p>{blog.author}</p>
                    <Moment format='Do MMMM YYYY, h:mm:ss a'>{blog.date}</Moment>
                    <br />
                </div>
            )
            }
        </div>
    )
}

GuestHome.propTypes = {
    getBlogs: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
    guest: state.guest
})

export default connect(mapStateToProps, {getBlogs, clearError, setAlert})(GuestHome);