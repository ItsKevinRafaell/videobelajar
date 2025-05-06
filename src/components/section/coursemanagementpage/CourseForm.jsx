import React from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const CourseForm = ({
  formData,
  handleChange,
  handleSubmit,
  error,
  isEdit,
}) => {
  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* First Column */}
        <div className='space-y-4'>
          <Input
            label='Judul Kursus'
            type='text'
            id='title'
            value={formData.title}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-md'
          />
          <Input
            label='Perusahaan Instruktur'
            type='text'
            id='instructorCompany'
            value={formData.instructorCompany}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-md'
          />
          <Input
            label='Harga Kursus'
            type='text'
            id='price'
            value={formData.price}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-md'
          />
        </div>

        {/* Second Column */}
        <div className='space-y-4'>
          <Input
            label='Deskripsi Kursus'
            type='text'
            id='description'
            value={formData.description}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-md'
          />
          <Input
            label='Nama Instruktur'
            type='text'
            id='instructorName'
            value={formData.instructorName}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-md'
          />
          <Input
            label='Pekerjaan Instruktur'
            type='text'
            id='instructorRole'
            value={formData.instructorRole}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-md'
          />
        </div>
      </div>

      {error && <div className='text-red-500 text-sm'>{error}</div>}

      <Button
        variant='primary'
        type='submit'
        className='w-full py-3 bg-blue-500 text-white rounded-md'
      >
        {isEdit ? 'Update Course' : 'Add Course'}
      </Button>
    </form>
  );
};

export default CourseForm;
