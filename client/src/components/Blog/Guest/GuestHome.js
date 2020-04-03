import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getBlogs} from '../../../Actions/guestActions';

const GuestHome = ({guest: {blogs, loading, error}, getBlogs}) => {

    useEffect(() => {
        getBlogs();

    }, []);

    if(blogs === null) {
        return <h4>Loading....</h4>
    }

    return (
        <div>
            {blogs && blogs.map(blog => 
                <Fragment key={blog._id}>
                    <img src={blog.image} height='auto' width='80%' style={{margin: 'auto'}} />
                    <h2>{blog.title}</h2>    
                    <h5>{blog.body}</h5>
                    <p>{blog.author}</p>
                    <p>{blog.date}</p>
                </Fragment>
            )
            }
        </div>
    )
}

GuestHome.propTypes = {
    getBlogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ 
    guest: state.guest
})

export default connect(mapStateToProps, {getBlogs})(GuestHome);