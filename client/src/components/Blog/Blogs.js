import React from 'react'
import PropTypes from 'prop-types'

const Blogs = ({blogs}) => {
    console.log(blogs);

    return (
        <div>
            <h5>Blogs</h5>
        </div>
    )
}

Blogs.propTypes = {
    blogs: PropTypes.object.isRequired,
}

export default Blogs
