import React from 'react';

const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle =
    'w-full font-bold py-2 rounded-md dm-sans flex items-center justify-center transition-colors duration-200';

  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-green-100 text-green-600 hover:bg-green-200',
    outline: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
