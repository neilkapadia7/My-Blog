import React, {useState} from 'react';
import axios from 'axios';

const Testing = () => {
  const [file, setFile] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const onChange = e => {
    setFile(e.target.files[0]);
  }

  const fileUploadHandler = async e => {
    e.preventDefault();

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
    catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err);
      }
    }
  }

    return (
        <div>
            <h1>Upload An Image</h1>
            <input type='file' onChange={onChange} required/>
            <button onClick={fileUploadHandler}>Upload</button>

            {uploadedFile 
                ? <img src={uploadedFile.filePath} width='90%' height='auto' style={{margin: 'auto'}}/>
                : null
            }
        </div>
    )
}

export default Testing
