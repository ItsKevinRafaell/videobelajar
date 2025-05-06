import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from '../../ui/CourseCard';
import { fetchCourses } from '../../../store/redux/courseReducer';

const CourseSection = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courseData);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className='container mx-auto mt-10 px-4 md:px-8'>
      <h1 className='text-xl md:text-3xl font-bold mb-2 poppins'>
        Koleksi Video Pembelajaran Unggulan
      </h1>
      <p className='mb-8 text-sm md:text-lg text-gray-600 dm-sans'>
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <div className='flex overflow-x-auto'>
        {[
          'Semua Kelas',
          'Pemasaran',
          'Desain',
          'Pengembangan Diri',
          'Bisnis',
        ].map((category, index) => (
          <button
            key={index}
            className={`ml-5 dm-sans text-sm whitespace-nowrap font-semibold ${
              index === 0
                ? 'text-red-500 border-b-4 border-red-500 '
                : 'text-gray-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading && <p>Loading courses...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-2 md:p-4'>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              instructorAvatar={course['instructor-avatar']}
              instructorName={course['instructor-name']}
              instructorRole={course['instructor-role']}
              instructorCompany={course['instructor-company']}
              price={course.price}
            />
          ))
        ) : (
          <p className='text-gray-500'>Tidak ada kursus</p>
        )}
      </div>
    </div>
  );
};

export default CourseSection;
