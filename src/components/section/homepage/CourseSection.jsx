import CourseCard from '../../ui/CourseCard';

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

const CourseSection = () => {
  return (
    <>
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
    </>
  );
};

export default CourseSection;
