import React from 'react';
import BlogPost from './SingleBlog/BlogPost';
import PropTypes from 'prop-types'

const Blogs = ({blogs}) => {

    return (
        <div className='blog-div'>
            {blogs.map(blog => 
                <div key={blog._id} >
                    <BlogPost blog={blog} />
                </div>
            )}
        </div>
    )
}

Blogs.propTypes = {
    blogs: PropTypes.array.isRequired,
}

export default Blogs
