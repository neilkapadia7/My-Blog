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
        <div className='blog-div'>
            {blogs && blogs.map(blog => 
                <div key={blog._id} className='blog-main'>
                    <h2 className='title'>{blog.title}</h2>
                    <div className='blog-auth-date'>
                        <p className='author'><span style={{color: '#000'}}>by </span>{blog.author}</p>
                        <Moment className='date' format='Do MMMM YYYY, h:mm:ss a'>{blog.date}</Moment>  
                    </div>
                    <img src={blog.image} className='blog-image'/>  
                    <h5 className='body'>{blog.body}</h5>
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