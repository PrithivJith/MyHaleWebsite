import React from 'react';

const Checkbox = ({
  label,
  type = 'checkbox',
  value,
  onChange,
  placeholder = '',
  name,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className={`check-wrapper ${className}`}>
      {label && (
        <label htmlFor={id || name} className="check-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        checked={value}
        onChange={onChange}
        placeholder={placeholder}
        className="check-field"
        {...props}
      />
    </div>
  );
};

export default Checkbox;
