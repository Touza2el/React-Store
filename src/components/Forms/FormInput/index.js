import React from "react";
import "./styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-input">
      {label && <label>{label}</label>}
      <input className="input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
