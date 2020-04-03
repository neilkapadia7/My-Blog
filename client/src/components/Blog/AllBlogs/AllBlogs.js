import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllBlogs} from '../../../Actions/blogActions';
import { Link } from 'react-router-dom';

const AllBlogs = ({blog: {allblogs}, getAllBlogs}) => {
    
    useEffect(() => {
        getAllBlogs();
    }, []);

    if(allblogs === null) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            {allblogs.map(blog =>
                <Fragment key={blog._id}>
                    <img src={blog.image} height='auto' width='75%' style={{margin: 'auto'}}/>
                    <h2>{blog.title}</h2>
                    <h5>{blog.body}</h5>
                    <p><Link to={`/user/blogs/${blog.user}`}>{blog.author}</Link></p>
                    <p>{blog.date}</p>
                </Fragment>
            )}
        </div>
    )
}

AllBlogs.propTypes = {
    blog: PropTypes.object.isRequired,
    getAllBlogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
    blog: state.blog
});

export default connect(mapStateToProps, {getAllBlogs})(AllBlogs);