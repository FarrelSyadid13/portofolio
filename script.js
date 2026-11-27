const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;


const form = document.querySelector("#form-kontak");
const popupModal = document.querySelector("#popup-modal");
const popupPesan = document.querySelector("#popup-pesan");
const btnSelesai = document.querySelector("#btn-selesai");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nama = document.querySelector("#nama").value;
    
    
    popupPesan.textContent = "Halo " + nama + ", pesan Anda berhasil terkirim!";
    popupModal.classList.add("show");
    
    
    form.reset();
});


btnSelesai.addEventListener("click", () => {
    popupModal.classList.remove("show");
});


popupModal.addEventListener("click", (event) => {
    if (event.target === popupModal) {
        popupModal.classList.remove("show");
    }
});


const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = 'light_mode'; 
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
    }
});