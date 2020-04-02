import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateBlog} from '../../Actions/blogActions';

const UpdateBlog = ({ blog: {current, loading}, updateBlog }) => {
    
    const {_id, title, body, image, author} = current;

    const [title2, setTitle] = useState(title);
    const [body2, setBody] = useState(body);

    if(current === null && loading === true) {
        return <h4>Loading....</h4>
    }
    if(current === null  && loading === false) {
        return <h4>No Blog Selected</h4>
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(title2 === '' || body2 === '') {
            console.log('Please Fill both Title and Body');
        }
        else{
            updateBlog({
                _id, 
                title: title2, 
                body: body2, 
                image, 
                author
            });
        }
        
    }

    return (
        <Fragment>
        {current !== null
            ? 
            <form onSubmit={onSubmit}>
                <input type='text' value={title2} onChange={(e) => setTitle(e.target.value)}/>
                <input type='text' value={body2} onChange={(e) => setBody(e.target.value)}/>
                <input type='submit' value='Update Blog' />
            </form>
            : ''
        }
        </Fragment>
    )
}

UpdateBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    updateBlog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    blog: state.blog
})

export default connect(mapStateToProps, {updateBlog})(UpdateBlog);
