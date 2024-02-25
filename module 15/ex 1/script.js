const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    btn.querySelector('span').classList.toggle('icon-1');
    btn.querySelector('span').classList.toggle('icon-2');
});

