import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { setCurrent, deleteBlog } from '../../../Actions/blogActions';
import {connect} from 'react-redux';

const BlogPost = ({blog, setCurrent, deleteBlog}) => {

    const {_id, title, body, image, author} = blog;

    const Click = () => {
        setCurrent(blog);
    }

    const Delete = () => {
        deleteBlog(_id);
    }

    return (
        <div key={_id}>
            <h3>{title}</h3>
            <p>{body}</p>
            <img src={image} height='auto' width='70%' style={{margin: 'auto'}}/>
            <p>{author}</p>
            <p><Link to={`/update/${_id}`} onClick={Click}>Update</Link></p>
            <p onClick={Delete}>Delete</p>
        </div>
    )
}

BlogPost.propTypes = {
    blog: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, {setCurrent, deleteBlog})(BlogPost);
