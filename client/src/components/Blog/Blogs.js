import React, { Fragment } from 'react';
import BlogPost from './SingleBlog/BlogPost';
import PropTypes from 'prop-types'

const Blogs = ({blogs}) => {

    return (
        <Fragment>
            {blogs.map(blog => 
                <div key={blog._id}>
                    <BlogPost blog={blog} />
                </div>
            )}
        </Fragment>
    )
}

Blogs.propTypes = {
    blogs: PropTypes.array.isRequired,
}

export default Blogs
