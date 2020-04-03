import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserBlogs, removeUserBlog} from '../../../Actions/blogActions';

const UserBlogs = props => {
    const {getUserBlogs, removeUserBlog, blog: {userblogs}} = props;

    useEffect(() => {
        getUserBlogs(props.match.params.id);

        return() => {
            removeUserBlog();
        };

    } ,[]);

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
                    <p>{blog.date}</p>
                </Fragment> 
            )}
        </div>
    )
}

UserBlogs.propTypes = {
    getUserBlogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ 
    blog: state.blog
});

export default connect(mapStateToProps, {getUserBlogs, removeUserBlog})(UserBlogs);