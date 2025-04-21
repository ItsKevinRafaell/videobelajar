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
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline:
      'bg-white border border-green-300 text-green-500 hover:bg-green-50',
    ghost: 'bg-transparent text-green-500 hover:bg-green-50',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    profile_outline:
      'bg-white border border-yellow-300 text-yellow-500 bg-yellow-50 hover:bg-yellow-50',
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
