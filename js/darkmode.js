// JavaScript to toggle dark mode
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';

toggleButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

});

document.body.appendChild(toggleButton);
