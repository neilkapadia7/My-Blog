import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Testing = () => {

  const [value, setValue] = useState('');

  return (
    <div>
        Testing
        <ReactQuill theme="snow" value={value} onChange={setValue}/>
    </div>
  )
}

export default Testing;