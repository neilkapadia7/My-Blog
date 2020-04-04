import React, {useEffect, Fragment} from 'react';
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
        <div>
            {userblogs.map(blog => 
               <Fragment key={blog._id}>
                    <img src={blog.image} height='auto' width='75%' style={{margin: 'auto'}}/>
                    <h2>{blog.title}</h2>
                    <h5>{blog.body}</h5>
                    <Moment format='Do MMMM YYYY, h:mm:ss a'>{blog.date}</Moment>
                </Fragment> 
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