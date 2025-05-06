import React from 'react';

const getRandomImage = () => {
  const images = [
    '/assets/images/card-images/card-1.jfif',
    '/assets/images/card-images/card-2.jfif',
    '/assets/images/card-images/card-3.jfif',
    '/assets/images/card-images/card-4.jfif',
    '/assets/images/card-images/card-5.jfif',
    '/assets/images/card-images/card-6.jfif',
    '/assets/images/card-images/card-7.jfif',
    '/assets/images/card-images/card-8.jfif',
    '/assets/images/card-images/card-9.jfif',
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const getRandomAvatar = () => {
  const avatars = [
    '/assets/images/avatar/avatar-1.png',
    '/assets/images/avatar/avatar-2.png',
    '/assets/images/avatar/avatar-3.png',
    '/assets/images/avatar/avatar-4.png',
    '/assets/images/avatar/avatar-5.png',
    '/assets/images/avatar/avatar-6.png',
    '/assets/images/avatar/avatar-7.png',
    '/assets/images/avatar/avatar-8.png',
    '/assets/images/avatar/avatar-9.png',
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

const CourseCard = ({
  title,
  description,
  instructorName,
  instructorRole,
  instructorCompany,
  ratingStars = '★★★★☆',
  ratingScore = '3.5',
  ratingReviews = '86',
  price,
}) => {
  // Randomly pick image and avatar on render
  const image = getRandomImage();
  const instructorAvatar = getRandomAvatar();

  return (
    <div className='course-card bg-white rounded-lg shadow-lg overflow-hidden'>
      <img
        src={image}
        alt='Course'
        className='w-full h-40 md:h-48 object-cover p-2 rounded-xl'
      />
      <div className='course-details p-3 md:p-4'>
        <h2 className='course-title text-base md:text-lg font-semibold poppins overflow-hidden text-ellipsis whitespace-nowrap'>
          {title}
        </h2>
        <p className='course-description text-gray-600 text-xs md:text-sm mb-2 dm-sans overflow-hidden -webkit-line-clamp-2course-description text-gray-600 text-xs md:text-sm mb-2 dm-sans'>
          {description}
        </p>
        <div className='instructor-info flex gap-2 items-center mt-2 md:mt-4'>
          <img
            src={instructorAvatar}
            alt='Instructor'
            className='rounded-md w-8 h-8 md:w-10 md:h-10'
          />
          <div className='learner-info'>
            <b className='instructor-name text-gray-600 dm-sans text-sm'>
              {instructorName}
            </b>
            <p className='instructor-role text-gray-500 text-xs md:text-sm dm-sans'>
              {instructorRole} di <b>{instructorCompany}</b>
            </p>
          </div>
        </div>
        <div className='course-rating-price flex justify-between items-center mt-2 md:mt-4'>
          <div className='rating flex items-center'>
            <span className='text-yellow-500 text-sm'>{ratingStars}</span>
            <span className='ml-2 text-gray-500 dm-sans text-xs md:text-sm'>
              {ratingScore} ({ratingReviews})
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
