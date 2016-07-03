import React, {PropTypes} from 'react';

const FileInput = ({name, value, onChange}) => {
  return (
      <div className="file-field input-field">
        <div className="btn">
          <span>File</span>
          <input type="file" 
                 multiple
                 name={name}
                 onChange={onChange}/>
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" 
                 type="text" 
                 placeholder="Upload pictures"/>
        </div>
      </div>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};


export default FileInput;