const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    btn.querySelector('.icon').classList.toggle('icon-1');
    btn.querySelector('.icon').classList.toggle('icon-2');
});

