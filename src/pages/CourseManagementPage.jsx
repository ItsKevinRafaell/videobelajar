import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCourse } from '../hooks/useCourse'; // Hook to handle course CRUD operations
import Footer from '../components/layout/Footer';
import ProfileSidebar from '../components/section/profilepage/ProfileSidebar'; // Reuse sidebar
import CourseList from '../components/section/coursemanagementpage/CourseList';
import CourseForm from '../components/section/coursemanagementpage/CourseForm';

const CourseManagementPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    instructorAvatar: '',
    instructorName: '',
    instructorRole: '',
    instructorCompany: '',
    price: '',
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { fetchCourses, addCourse, editCourse, removeCourse } = useCourse();
  const courses = useSelector((state) => state.courseData.courses);

  useEffect(() => {
    if (!courses.length) {
      // Fetch courses only if they are not already available in Redux
      fetchCourses(); // Fetch courses only once
    }
  }, [courses, fetchCourses]);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (selectedCourse) {
      editCourse(selectedCourse.id, formData);
    } else {
      addCourse(formData);
      fetchCourses(); // Fetch courses again to update the list
    }
    setFormData({
      title: '',
      description: '',
      image: '',
      instructorAvatar: '',
      instructorName: '',
      instructorRole: '',
      instructorCompany: '',
      price: '',
    });
    setSelectedCourse(null);
  };

  const handleEditCourse = (course) => {
    setFormData({
      title: course.title,
      description: course.description,
      image: course.image,
      instructorAvatar: course['instructor-avatar'],
      instructorName: course['instructor-name'],
      instructorRole: course['instructor-role'],
      instructorCompany: course['instructor-company'],
      price: course.price,
    });
    setSelectedCourse(course);
  };

  const handleDeleteCourse = (id) => {
    removeCourse(id);
  };

  return (
    <div className='bg-[#FFFDF3] p-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
        <ProfileSidebar
          activeMenu={'course-management'}
          setActiveMenu={() => {}}
          title={'Manajemen Course'}
          description={'Manajemen Course Anda'}
        />{' '}
        <div className='col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md'>
          <h1 className='text-3xl font-semibold text-center mb-6'>
            {selectedCourse ? 'Perbarui Course' : 'Tambah Course'}
          </h1>
          <CourseForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSaveCourse}
            isEdit={selectedCourse}
            resetForm={() => setSelectedCourse(null)}
          />
          <CourseList
            courses={courses}
            handleEditCourse={handleEditCourse}
            handleDeleteCourse={handleDeleteCourse}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseManagementPage;
