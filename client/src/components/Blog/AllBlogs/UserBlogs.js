import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserBlogs, removeUserBlog, clearErrors} from '../../../Actions/blogActions';
import {setAlert} from '../../../Actions/alertAction';

import Moment from 'react-moment';

const UserBlogs = props => {
    const {getUserBlogs, removeUserBlog, blog: {userblogs, error}, clearErrors, setAlert} = props;

    useEffect(() => {
        getUserBlogs(props.match.params.id);

        if(error) {
            setAlert(error, 'danger');
            clearErrors();
        }

        return() => {
            removeUserBlog();
        };

    } ,[getUserBlogs, removeUserBlog, error]);

    if(userblogs === null) {
        return <h4>Loading....</h4>
    }

    return (
        <div className='blog-div'>
            {userblogs.map(blog => 
               <div key={blog._id} className='blog-main'>
                    <h2 className='title'>{blog.title}</h2>
                    <div className='blog-auth-date'>
                        <p className='author'><span style={{color: '#000'}}>by </span>{blog.author}</p>
                        <Moment format='Do MMMM YYYY, h:mm:ss a' className='date'>{blog.date}</Moment>
                    </div>
                    <img src={blog.image} className='blog-image'/>
                    <div dangerouslySetInnerHTML={{__html: blog.body.substring(0, 350) + '...'}} className='body'></div>
                </div> 
            )}
        </div>
    )
}

UserBlogs.propTypes = {
    getUserBlogs: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ 
    blog: state.blog
});

export default connect(mapStateToProps, {getUserBlogs, removeUserBlog, clearErrors, setAlert})(UserBlogs);