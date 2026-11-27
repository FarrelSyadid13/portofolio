const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// 1. Cek apakah user sebelumnya sudah memilih dark mode di localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = 'light_mode'; // Ikon matahari dari Google Fonts
}

// 2. Event listener saat tombol diklik
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Ubah ikon dan simpan preferensi ke localStorage
    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = 'dark_mode'; // Ikon bulan dari Google Fonts
        localStorage.setItem('theme', 'light');
    }
});