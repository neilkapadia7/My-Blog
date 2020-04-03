import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateBlog, removeCurrent} from '../../Actions/blogActions';

const UpdateBlog = ({ blog: {current, loading}, updateBlog, removeCurrent }) => {
    
    const {_id, title, body, image, author} = current;

    const [title2, setTitle] = useState('');
    const [body2, setBody] = useState('');

    useEffect(() => {   
        if(current !== null) {
            setTitle(title);
            setBody(body)
        }

        return() => {
            removeCurrent();
        }
    }, [current]);

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
            : <h3>No Blog Selected For Update</h3>
        }
        </Fragment>
    )
}

UpdateBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    updateBlog: PropTypes.func.isRequired,
    removeCurrent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    blog: state.blog
})

export default connect(mapStateToProps, {updateBlog, removeCurrent})(UpdateBlog);
