const HeroSection = () => (
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
          pembelajaran berkualitas tinggi.
        </p>
        <button className='bg-green-500 hover:bg-green-600 text-white xl:font-semibold py-3 px-4 sm:font-normal rounded-md dm-sans transition-colors duration-300 text-sm md:text-base'>
          Temukan Video Course untuk Dipelajari!
        </button>
      </div>
    </div>
  </div>
);
export default HeroSection;
