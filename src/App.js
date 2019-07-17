import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import UpdateCRM from './components/UpdateCRM';
import './App.css';

function App() {
  const [demoType, setDemoType] = useState('');

  const handleSelectChange = event => {
    setDemoType(event.target.value);
  };

  return (
    <div className="App">
      <select className="demoSelector" name="demoSelect" id="demoSelect" onChange={handleSelectChange}>
        <option value="">---Select Demo Type---</option>
        <option value="fileUpload">File Upload</option>
        <option value="updateCRM">Update CRM</option>
      </select>

      {
        (demoType === 'fileUpload') && <FileUpload/>
      }

      {
        (demoType === 'updateCRM') && <UpdateCRM/>
      }
    </div>
  );
}

export default App;
