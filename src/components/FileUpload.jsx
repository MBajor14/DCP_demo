import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [projectID, setprojectID] = useState('');
    const [uploaded, setUploaded] = useState(false);


    const handleFileChange = event => {
        setFile(event.target.files[0]);
    };

    const handleTextChange = event => {
        setprojectID(event.target.value)
    };

    const onSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('projectID', projectID);


        try{
            fetch("http://localhost:3000/projects/demoUpload", {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Result:', JSON.stringify(data));
                    setUploaded(true);
                })
                .catch(error => console.error('Error:', error))

        }
        catch(err){
            if(err.response.status === 500){
                console.log('There was a problem with server');
            } else{
                console.log(err.response.data.msg);
            }
        }
    };


    return (
        <form className="demo-container" onSubmit={onSubmit}>
            <h3 className="demo-title">File Upload Demo</h3>
            <input type="text" name="projectID" onChange={handleTextChange}/>
            <input type="file" name="file" onChange={handleFileChange}/>
            <button>Upload</button>
            {
                uploaded && <h4>Uploaded</h4>
            }
        </form>
    );
};

export default FileUpload;
