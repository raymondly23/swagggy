import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ShoeForm = ({shoe, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Post your shoe for sale!</h1>  
      <div className="row">
      <TextInput  
        style="col s8"
        name="Shoe"
        value={shoe.item}
        onChange={onChange} 
        error={errors}/>

      <TextInput
        style="col s4"
        name="Size"
        value={shoe.size}
        onChange={onChange}
        error={errors}/>
      </div>      
      
      <textarea 
        className="materialize-textarea"
        placeholder="Details of the shoe"
        name="Details" 
        value={shoe.details} 
        onChange={onChange}
        cols="30" 
        rows="10" 
        error={errors}>
        </textarea>

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


