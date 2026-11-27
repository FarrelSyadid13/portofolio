const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;


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