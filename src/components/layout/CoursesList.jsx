import CourseCard from '../ui/CourseCard';

const CoursesList = ({ courses }) => (
  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-2 md:p-4'>
    {courses.map((course, index) => (
      <CourseCard key={index} {...course} />
    ))}
  </div>
);
export default CoursesList;
