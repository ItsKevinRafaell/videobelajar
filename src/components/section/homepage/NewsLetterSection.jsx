const NewsletterSection = () => (
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
        <div className='mt-8 flex justify-center'>
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
      </div>
    </div>
  </div>
);
export default NewsletterSection;
