function toggleTheme() {
    var themeLink = document.getElementById('theme-style');
    var themeButton = document.getElementById('theme-button');
    var themeIcon = themeButton.querySelector('i');

    if (themeLink.getAttribute('href') === 'light-theme.css') {
        themeLink.setAttribute('href', 'dark-theme.css');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeLink.setAttribute('href', 'light-theme.css');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

var themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', toggleTheme);