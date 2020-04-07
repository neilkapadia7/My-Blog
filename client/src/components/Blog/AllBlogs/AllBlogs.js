import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllBlogs, clearErrors} from '../../../Actions/blogActions';
import { Link } from 'react-router-dom';
import {setAlert} from '../../../Actions/alertAction';

import Moment from 'react-moment';

const AllBlogs = ({blog: {allblogs, error}, getAllBlogs, clearErrors, setAlert}) => {
    
    useEffect(() => {
        getAllBlogs();

        if(error) {
            setAlert(error, 'danger');
            clearErrors();
        }

    }, [getAllBlogs, error]);

    if(allblogs === null) {
        return <h4>Loading...</h4>
    }

    return (
        <div className='blog-div'>
            {allblogs.map(blog =>
                <div key={blog._id} className='blog-main'>
                    <h2 className='title'>{blog.title}</h2>
                    <div className='blog-auth-date'>
                        <Link to={`/user/blogs/${blog.user}`} className='author'><span style={{color: '#000'}}>by </span>{blog.author}</Link>
                        <Moment className='date' format='Do MMMM YYYY, h:mm:ss a'>{blog.date}</Moment>
                    </div>
                    <img src={blog.image} className='blog-image'/>
                    <div dangerouslySetInnerHTML={{__html: blog.body.substring(0, 350) + '...'}} className='body'></div>
                </div>
            )}
        </div>
    )
}

AllBlogs.propTypes = {
    blog: PropTypes.object.isRequired,
    getAllBlogs: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
    blog: state.blog
});

export default connect(mapStateToProps, {getAllBlogs, clearErrors, setAlert})(AllBlogs);