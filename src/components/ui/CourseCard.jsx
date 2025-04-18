import React from 'react';

const CourseCard = ({
  image,
  title,
  description,
  instructor,
  rating,
  price,
}) => {
  return (
    <div className='course-card bg-white rounded-lg shadow-lg overflow-hidden'>
      <img
        src={image}
        alt='Course'
        className='w-full h-40 md:h-48 object-cover p-2 rounded-xl'
      />
      <div className='course-details p-3 md:p-4'>
        <h2 className='course-title text-base md:text-lg font-semibold poppins'>
          {title}
        </h2>
        <p className='course-description text-gray-600 text-xs md:text-sm mb-2 dm-sans'>
          {description}
        </p>
        <div className='instructor-info flex gap-2 items-center mt-2 md:mt-4'>
          <img
            src={instructor.avatar}
            alt='Instructor'
            className='rounded-md w-8 h-8 md:w-10 md:h-10'
          />
          <div className='learner-info'>
            <b className='instructor-name text-gray-600 dm-sans text-sm'>
              {instructor.name}
            </b>
            <p className='instructor-role text-gray-500 text-xs md:text-sm dm-sans'>
              {instructor.role} di <b>{instructor.company}</b>
            </p>
          </div>
        </div>
        <div className='course-rating-price flex justify-between items-center mt-2 md:mt-4'>
          <div className='rating flex items-center'>
            <span className='text-yellow-500 text-sm'>{rating.stars}</span>
            <span className='ml-2 text-gray-500 dm-sans text-xs md:text-sm'>
              {rating.score} ({rating.reviews})
            </span>
          </div>
          <p className='font-bold text-lg md:text-2xl text-green-500 poppins'>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
