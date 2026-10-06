// Kamus data untuk terjemahan
const translations = {
    'id': {
      'lang-btn': 'English',
      'subtitle': 'Mahasiswa',
      'nav-tentang': 'Tentang',
      'nav-pengalaman': 'Pengalaman',
      'nav-kontak': 'Kontak',
      'tentang-judul': 'Tentang Saya',
      'tentang-p1': 'Halo, perkenalkan saya Dimas Artha Harfianto.',
      'tentang-p2': 'Saya mahasiswa dari jurusan Teknik Informatika di Politeknik Negeri Bandung.',
      'tentang-p3': 'Saya memiliki minat dalam pemrograman dan pengembangan web.',
      'pengalaman-judul': 'Pengalaman',
      'pengalaman-1': 'Ketua POLSIS SMAN 6 Bandung | 2021-2022',
      'pengalaman-2': 'Medali Perak Olimpiade Matematika Tridaya Jawa Barat | 2022',
      'fakta-judul': 'Fakta Menarik',
      'fakta-p': 'Saya suka bermain sepak bola atau futsal.',
      'kontak-judul': 'Hubungi Saya'
    },
    'en': {
      'lang-btn': 'Indonesia',
      'subtitle': 'Informatics Student',
      'nav-tentang': 'About',
      'nav-pengalaman': 'Experience',
      'nav-kontak': 'Contact',
      'tentang-judul': 'About Me',
      'tentang-p1': 'Hello, my name is Dimas Artha Harfianto.',
      'tentang-p2': 'I am an Informatics Engineering student at Politeknik Negeri Bandung.',
      'tentang-p3': 'I have a keen interest in programming and web development.',
      'pengalaman-judul': 'Experience',
      'pengalaman-1': 'President of POLSIS SMAN 6 Bandung | 2021-2022',
      'pengalaman-2': 'Silver Medalist at Tridaya West Java Math Olympiad | 2022',
      'fakta-judul': 'Fun Fact',
      'fakta-p': 'I like playing football or futsal.',
      'kontak-judul': 'Contact Me'
    }
  };
  
  // Variabel untuk melacak bahasa saat ini
  let currentLang = 'id';
  
  // Fungsi yang dipanggil saat tombol diklik
  function toggleLanguage() {
    // Ubah status bahasa
    currentLang = currentLang === 'id' ? 'en' : 'id';
    
    // Ganti teks pada setiap ID yang ada di kamus
    for (const key in translations[currentLang]) {
      const element = document.getElementById(key);
      if (element) {
        element.innerText = translations[currentLang][key];
      }
    }
  }