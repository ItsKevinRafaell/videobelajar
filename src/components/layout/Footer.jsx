const Footer = () => {
  return (
    <footer className='bg-white py-8 shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mb-8'>
          <div className='mb-6 md:mb-0'>
            <img
              src='/assets/images/logo/logo.png'
              className='w-32 md:w-40'
              alt='Logo'
            />
            <p className='text-lg text-black font-bold dm-sans mb-2 mt-4'>
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className='text-md text-gray-500 dm-sans'>
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className='text-md text-gray-500 dm-sans'>+62–877–7123–1234</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h2 className='font-bold text-lg mb-2 dm-sans'>
                  {section.title}
                </h2>
                <ul className='space-y-2'>
                  {section.items.map((item, i) => (
                    <li key={i} className='dm-sans text-gray-500'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200'>
          <p className='dm-sans text-gray-500 mb-4 md:mb-0'>
            &copy; 2023 Gerobak Sayur All Rights Reserved.
          </p>
          <div className='flex space-x-4'>
            {['linkedin', 'facebook', 'instagram', 'twitter'].map(
              (social, i) => (
                <img
                  key={i}
                  src={`/assets/images/social-media/${social}.png`}
                  alt={social}
                  className='h-6 w-6'
                />
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerSections = [
  {
    title: 'Kategori',
    items: [
      'Digital & Teknologi',
      'Pemasaran',
      'Manajemen Bisnis',
      'Pengembangan Diri',
      'Desain',
    ],
  },
  {
    title: 'Perusahaan',
    items: [
      'Tentang Kami',
      'FAQ',
      'Kebijakan Privasi',
      'Ketentuan Layanan',
      'Bantuan',
    ],
  },
  {
    title: 'Komunitas',
    items: ['Tips Sukses', 'Blog'],
  },
];

export default Footer;
