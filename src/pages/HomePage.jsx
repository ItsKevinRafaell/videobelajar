import React from 'react';
import CourseCard from '../components/ui/CourseCard';
import Footer from '../components/layout/Footer';
import { LoggedOutNavbar } from '../components/layout/Navbar';

const Homepage = () => {
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
    <div className='min-h-screen bg-[#FFFDF3]'>
      <LoggedOutNavbar />

      <div className='hero-section'>
        <div
          className='rounded-lg m-4 md:m-8 p-4 md:p-8 shadow-lg text-center'
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/assets/images/background/bg-1.jfif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className='max-w-4xl mx-auto py-8 md:py-12 px-4'>
            <h2 className='text-3xl md:text-5xl mb-4 text-white font-bold poppins leading-tight'>
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui
              <br />
              Platform Video Interaktif!
            </h2>

            <p className='text-sm md:text-lg mb-6 text-white dm-sans leading-relaxed max-w-2xl mx-auto'>
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Anda juga dapat berpartisipasi
              dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>

            <button className='bg-green-500 hover:bg-green-600 text-white xl:font-semibold py-3 px-4 sm:font-normal rounded-md dm-sans transition-colors duration-300 text-sm md:text-base'>
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </div>

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

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-2 md:p-4'>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <div className='newsletter-section px-4'>
        <div
          className='rounded-lg m-4 md:m-8 p-8 shadow-lg text-center'
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/assets/images/background/bg-1.jfif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='max-w-4xl mx-auto py-12 px-2 md:px-8'>
            <h2 className='text-center text-xl text-gray-300 dm-sans'>
              NEWSLETTER
            </h2>
            <h3 className='mt-4 text-center text-3xl md:text-2xl font-bold text-white poppins'>
              Mau Belajar Lebih Banyak?
            </h3>
            <p className='mt-2 text-center text-base md:text-md text-gray-200 dm-sans'>
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>

            <div className='mt-8 hidden sm:flex justify-center'>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Masukkan Emailmu'
                  className='px-8 py-4 border rounded-l-md dm-sans w-64 md:w-96 text-sm md:text-base'
                />
                <button className='bg-yellow-500 text-white px-8 py-4 rounded-r-md hover:bg-yellow-600 transition duration-300 poppins text-sm md:text-base'>
                  Subscribe
                </button>
              </div>
            </div>

            <div className='mt-8 flex flex-col sm:hidden'>
              <input
                type='email'
                placeholder='Masukkan Emailmu'
                className='mb-4 px-4 py-3 border rounded-md dm-sans text-sm'
              />
              <button className='bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300 poppins text-sm'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
