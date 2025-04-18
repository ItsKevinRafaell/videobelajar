const CategoryButtons = () => (
  <div className='flex overflow-x-auto'>
    {['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'].map(
      (category, index) => (
        <button
          key={index}
          className={`ml-5 dm-sans text-sm whitespace-nowrap font-semibold ${
            index === 0
              ? 'text-red-500 border-b-4 border-red-500'
              : 'text-gray-500'
          }`}
        >
          {category}
        </button>
      )
    )}
  </div>
);
export default CategoryButtons;
