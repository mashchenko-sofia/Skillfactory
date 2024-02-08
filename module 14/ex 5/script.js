const makeRequest = (value1, value2) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos?_page=${value1}&_limit=${value2}`)
    .then(response => response.json())
    .then(data => data)
    .catch(() => {
        console.log('error');
        return document.querySelector('.output').innerHTML = 'Error';
    })
}

const btn = document.querySelector('.button');

btn.addEventListener('click', async () => {
    const value1 = parseInt(document.querySelector('.input-1').value);
    const value2 = parseInt(document.querySelector('.input-2').value);

    if ((1 <= value1 <= 10) && (1 <= value2 <= 10)) {
        const requestResult = await makeRequest(value1, value2);
        return document.querySelector('.output').innerHTML += `<img src="${requestResult.thumbnailUrl}">`;  
    } else if (isNaN(value1) || !(1 <= value1 <= 10)) {
        return document.querySelector('.output').innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (isNaN(value2) || !(1 <= value2 <= 10)) {
        return document.querySelector('.output').innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else {
        return document.querySelector('.output').innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
});