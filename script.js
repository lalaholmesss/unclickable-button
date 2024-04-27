const buttonHeight = 50;
const buttonWidth = 150;

const maxHeight = window.innerHeight - buttonHeight;
const maxWidth = window.innerWidth - buttonWidth;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
});
