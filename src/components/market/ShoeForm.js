import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import FileInput from '../common/FileInput'

const ShoeForm = ({shoe, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Post your shoe for sale!</h1>  
      <div className="row">
      <TextInput  
        type="text"
        classes="col s8"
        placeholder="What you're selling"
        name="shoe"
        value={shoe.shoe}
        onChange={onChange} 
        error={errors}/>

      <TextInput
        type="number"
        classes="col s2"
        placeholder="Size"
        name="size"
        value={shoe.size}
        onChange={onChange}
        error={errors}/>      

        <TextInput
        type="number"
        classes="col s2"
        placeholder="Condition out of 10"
        name="condition"
        value={shoe.condition}
        onChange={onChange}
        error={errors}/>
      </div>   

      <textarea 
        classes="col s8"
        className="materialize-textarea col s8"
        placeholder="Details of the shoe"
        name="details" 
        value={shoe.details} 
        onChange={onChange}
        cols="30" 
        rows="10" 
        error={errors}>
        </textarea>

      <FileInput
        name="files"
        value={'sosodfasd'}
        onChange={onChange}/>

      <input 
        type="submit"
        disabled={saving}
        value={saving ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ShoeForm.propTypes = {
  shoe: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ShoeForm;


