import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addBlog, clearErrors} from '../../Actions/blogActions';
import {setAlert} from '../../Actions/alertAction';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = ({ blog :{loading, error}, auth: {user} ,addBlog, clearErrors ,setAlert }) => {
    const [file, setFile] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    // const Image = React.lazy(() => import('../../uploads/0.1027282132260352.jpg'));

    useEffect(() => {
        if(error) {
            setAlert(error, 'danger');
            clearErrors();
        }
    }, [error]);

    const formSubmit = e => {
        e.preventDefault();
        if(uploadedFile === null || title === '' || body === '') {
            setAlert('Please Add All Required Fields', 'danger');
        }
        else{
            addBlog({
                title,
                body,
                image: uploadedFile.filePath,
                author: user && `${user.firstName} ${user.lastName}`
            })

            setAlert('New Blog Added Successfully!', 'success');
    
            setUploadedFile('');
            setTitle('');
            setBody('');
        }
    }

    const onChange = e => {
        setFile(e.target.files[0]);
    };   

    const fileUploadHandler = async () => {
        if(file === '') {
            setAlert('No File Added!', 'danger');
        }
        
        else {
            const fd = new FormData();
            fd.append('file', file);

            try {
                const res = await axios.post('/api/upload', fd, {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: progressEvent => {
                    console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')}
                });

                setFile('');
                
                const {fileName, filePath} = res.data;

                console.log(filePath);
                setUploadedFile({fileName, filePath});
            }
            catch(err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server');
                } 
                else {
                    console.log(err);
                }
            }
        }
    }

    const Replace = () => {
        setUploadedFile(null);
    }

    return (
        <div className='auth-div'>
            <h1 className='auth-head'>Add Blog</h1>
            {uploadedFile === null
                ? 
                  <Fragment>
                    <input type='file' onChange={onChange} />
                    <button onClick={fileUploadHandler}>Submit Image</button>
                  </Fragment>
                : ''
            }
            
            {uploadedFile !== null ? 
                <Fragment>
                    <img src={uploadedFile.filePath} className='add-blog-image'/>  
                    <p className='remove-pic' onClick={Replace}>Remove this Picture?</p> 
                </Fragment>      
            : '' }
            <form onSubmit={formSubmit}>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required className='auth-fields' />
                {/* <input type='text' placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} required className='auth-fields' /> */}
                <ReactQuill theme="snow" value={body} onChange={setBody} className='quill-editor'/>
                <input type='submit' value='Publish Blog' className='auth-button' />
            </form>
            
        </div>
    )
}

const mapStateToProps = state => ({
    blog: state.blog,
    auth: state.auth
});

export default connect(mapStateToProps, {addBlog, clearErrors, setAlert})(AddBlog);
