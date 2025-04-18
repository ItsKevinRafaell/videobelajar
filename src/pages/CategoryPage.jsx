import React from 'react';
import { LoggedInNavbar } from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CategoryPageTitle from '../components/section/categorypage/CategoryPageTitle';
import CoursesList from '../components/layout/CoursesList';

const CategoryPage = () => {
  const courses = [...Array(9)].map((_, i) => ({
    image: `/assets/images/card-images/card-${i + 1}.jfif`,
    title: 'Big 4 Auditor Financial Analyst',
    description:
      'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
    instructor: {
      avatar: `/assets/images/avatar/avatar-${i + 1}.png`,
      name: 'Jenna Ortega',
      role: 'Senior Accountant',
      company: 'Gojek',
    },
    rating: {
      stars: '★★★★☆',
      score: '3.5',
      reviews: '86',
    },
    price: 'Rp 300K',
  }));

  return (
    <div className='bg-[#F9F9F6]'>
      <LoggedInNavbar />
      <div className='container mx-auto p-4'>
        <CategoryPageTitle />
        <CoursesList courses={courses} />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
