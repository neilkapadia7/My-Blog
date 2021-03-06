import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateBlog, removeCurrent, clearErrors} from '../../Actions/blogActions';
import {setAlert} from '../../Actions/alertAction';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const UpdateBlog = ({ blog: {current, loading, error}, updateBlog, removeCurrent, clearErrors, setAlert }) => {
    
    const [title2, setTitle] = useState('');
    const [body2, setBody] = useState('');

    useEffect(() => {   
        if(current !== null) {
            setTitle(current.title);
            setBody(current.body)
        }

        if(error) {
            setAlert(error, 'danger');
            clearErrors();
        }

        return() => {
            removeCurrent();
        }
    }, [current, error]);

    if(current === null && loading === true) {
        return <h4>Loading....</h4>
    }
    if(current === null  && loading === false) {
        return <h4>No Blog Selected</h4>
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(title2 === '' || body2 === '') {
            setAlert('Please Fill both Title and Body', 'danger');
        }
        else{
            updateBlog({
                _id: current._id, 
                title: title2, 
                body: body2, 
                image: current.image, 
                author: current.author
            });

            setAlert('Blog Updated Successfully', 'success');
        }
        
    }

    return (
        <div className='auth-div'>
        {current !== null
            ? 
            <form onSubmit={onSubmit}>
                <h1 className='auth-head'>Update Blog</h1>
                <input type='text' value={title2} onChange={(e) => setTitle(e.target.value)} className='auth-fields' />
                {/* <input type='text' value={body2} onChange={(e) => setBody(e.target.value)} className='auth-fields' /> */}
                <ReactQuill theme="snow" value={body2} onChange={setBody} className='quill-editor'/>
                <input type='submit' value='Update Blog' className='auth-button' />
            </form>
            : <h3>No Blog Selected For Update</h3>
        }
        </div>
    )
}

UpdateBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    updateBlog: PropTypes.func.isRequired,
    removeCurrent: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    blog: state.blog
})

export default connect(mapStateToProps, {updateBlog, removeCurrent, clearErrors, setAlert})(UpdateBlog);
