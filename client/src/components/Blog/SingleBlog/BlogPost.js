import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { setCurrent, deleteBlog } from '../../../Actions/blogActions';
import {connect} from 'react-redux';

import Moment from 'react-moment';

const BlogPost = ({blog, setCurrent, deleteBlog}) => {

    const {_id, title, body, image, author} = blog;

    const Click = () => {
        setCurrent(blog);
    }

    const Delete = () => {
        deleteBlog(_id);
    }

    return (
        <div key={_id} className='blog-main'>
            <h3 className='title'>{title}</h3>
            <div className='blog-auth-date'>
                <p className='author'><span style={{color: '#000'}}>by </span>{author}</p>
                <Moment format='Do MMMM YYYY, h:mm:ss a' className='date'>{blog.date}</Moment>
            </div>
            <img src={image} className='blog-image'/>
            <div dangerouslySetInnerHTML={{__html: body}} className='body'></div>
            <div className='blog-button-div'>
                <Link to={`/update`} onClick={Click} className='blog-update'>Update</Link>
                <p onClick={Delete} className='blog-delete'>Delete</p>
            </div>
        </div>
    )
}

BlogPost.propTypes = {
    blog: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, {setCurrent, deleteBlog})(BlogPost);
