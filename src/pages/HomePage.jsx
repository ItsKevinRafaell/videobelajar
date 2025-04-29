import React from 'react';
import Footer from '../components/layout/Footer';
import NewsletterSection from '../components/section/homepage/NewsLetterSection';
import HeroSection from '../components/section/homepage/HeroSection';
import CourseSection from '../components/section/homepage/CourseSection';

const Homepage = () => {
  return (
    <div className='min-h-screen bg-[#FFFDF3]'>
      <HeroSection />
      <CourseSection />

      <NewsletterSection />

      <Footer />
    </div>
  );
};

export default Homepage;
