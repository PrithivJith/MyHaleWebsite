import React from 'react';

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  name,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
        {...props}
      />
    </div>
  );
};

export default Input;
