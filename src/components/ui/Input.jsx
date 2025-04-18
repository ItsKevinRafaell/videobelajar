import React from 'react';

const Input = ({ label, type = 'text', required, ...props }) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700 dm-sans'>
        {label}
        {required && <span className='text-red-500'> *</span>}
      </label>
      <input
        type={type}
        className='mt-1 block w-full border border-gray-300 rounded-md p-2 dm-sans focus:ring-2 focus:ring-green-500 focus:border-green-500'
        {...props}
      />
    </div>
  );
};

export default Input;
