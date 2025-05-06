import React from 'react';

const CourseList = ({ courses, handleEditCourse, handleDeleteCourse }) => {
  if (!Array.isArray(courses)) {
    return <p className='text-center text-gray-500'>Invalid data format</p>;
  }

  return (
    <div className='mt-6 space-y-4'>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div
            key={course.id}
            className='bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center'
          >
            <div>
              <div className='text-lg font-medium'>{course.title}</div>
              <div className='text-sm text-gray-500'>{course.description}</div>
              <div className='text-sm text-gray-500'>
                Instructor: {course.instructorName}
              </div>
            </div>
            <div className='space-x-4 flex justify-end'>
              <button
                onClick={() => handleEditCourse(course)}
                className='px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 transition duration-200'
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCourse(course.id)}
                className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition duration-200'
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500'>No courses available</p>
      )}
    </div>
  );
};

export default CourseList;
