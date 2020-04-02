import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addBlog} from '../../Actions/blogActions';

const AddBlog = ({ blog :{loading} ,addBlog }) => {
    const [file, setFile] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    // const Image = React.lazy(() => import('../../uploads/0.1027282132260352.jpg'));
      
    const formSubmit = e => {
        e.preventDefault();
        if(uploadedFile === null || title === '' || body === '') {
            console.log('No Image Added');
        }
        else{
            addBlog({
                title,
                body,
                image: uploadedFile.filePath,
                author: 'Neil Kapadia'
            })
    
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
            console.log('No File Added!');
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

    return (
        <div>
            Add Blog
            <form onSubmit={formSubmit}>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <input type='text' placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} required/>
                <input type='text' placeholder='Author' value='Neil Kapadia' readOnly required/>
                <input type='submit' value='Publish Blog' />
            </form>
            <input type='file' onChange={onChange} />
            <button onClick={fileUploadHandler}>Submit Image</button>
            {uploadedFile !== null ? 
                <img src={uploadedFile.filePath} height='auto' width='70%' style={{margin: 'auto'}}/>         
            : '' }
        </div>
    )
}

const mapStateToProps = state => ({
    blog: state.blog
});

export default connect(mapStateToProps, {addBlog})(AddBlog);
