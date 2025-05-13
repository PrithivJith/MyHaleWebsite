import React from "react";

const Dropdown = ({
  label,
  name,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  className = "",
  ...props
}) => {
  return (
    <div className={`dropdown-wrapper ${className}`}>
      {label && (
        <label htmlFor={id || name} className="dropdown-label">
          {label}
        </label>
      )}
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        className="dropdown-select"
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
