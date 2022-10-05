import React from "react";

export default function FormInput(props) {
  const { error_msg, error, onChange, ...inputProps } = props;
  return (
    <div className="formInput">
      <input {...inputProps} onChange={onChange} />
      {error && <p>{error_msg}</p>}
    </div>
  );
}
