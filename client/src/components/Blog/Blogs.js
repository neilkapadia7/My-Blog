import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Blogs = ({blogs}) => {

    return (
        <Fragment>
            {blogs.map(blog => 
                <div key={blog._id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <img src={blog.image} height='auto' width='70%' style={{margin: 'auto'}}/>
                    <p>{blog.author}</p>
                </div>
            )}
        </Fragment>
    )
}

Blogs.propTypes = {
    blogs: PropTypes.object.isRequired,
}

export default Blogs
