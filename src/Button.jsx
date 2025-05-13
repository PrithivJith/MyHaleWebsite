import React from 'react';

const Button = ({
  label = 'Click Me',
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
