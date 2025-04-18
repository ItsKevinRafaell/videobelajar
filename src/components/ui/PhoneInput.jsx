import React from 'react';

const PhoneInput = ({ label, required, ...props }) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700 dm-sans'>
        {label}
        {required && <span className='text-red-500'> *</span>}
      </label>
      <div className='flex border border-gray-300 rounded-md mt-1'>
        <div className='flex items-center pr-6 pl-2 bg-gray-100 border-r border-gray-300 rounded-l-md'>
          <img
            src='/assets/images/flag/indonesia-flag.png'
            alt='Indonesia Flag'
            className='h-5 mr-2'
          />
          <select
            id='country-code'
            className='border-none focus:ring-0 focus:outline-none bg-transparent dm-sans'
          >
            <option value='+62'>+62</option>
          </select>
        </div>
        <input
          type='tel'
          className='block w-full border-none p-2 focus:ring-2 focus:ring-green-500 focus:outline-none dm-sans rounded-r-md'
          placeholder='Nomor handphone'
          pattern='[0-9]*'
          inputMode='numeric'
          {...props}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
