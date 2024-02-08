const makeRequest = (value1, value2) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos?_page=${value1}&_limit=${value2}`)
    .then(response => response.json())
    .then(data => {
        return localStorage.setItem('lastRequest', JSON.stringify(data));
    })
    .catch(() => {
        console.log('error');
        return renderOutput('Error');
    })
}

const renderOutput = (output) => {
    document.querySelector('.output').innerHTML += output;
}

const btn = document.querySelector('.button');

btn.addEventListener('click', async () => {
    const value1 = parseInt(document.querySelector('.input-1').value);
    const value2 = parseInt(document.querySelector('.input-2').value);

    if ((value1 <= 1 || value1 >= 10 || isNaN(value1)) && (value2 <= 1 || value2 >= 10 || isNaN(value2))) {
        return renderOutput('Номер страницы и лимит вне диапазона от 1 до 10');
    } 
    if (isNaN(value1) || (value1 <= 1 || value1 >= 10)) {
        return renderOutput('Номер страницы вне диапазона от 1 до 10');
    } 
    if (isNaN(value2) || (value2 <= 1 || value2 >= 10)) {
        return renderOutput('Лимит вне диапазона от 1 до 10');
    }
        
    const requestResult = await makeRequest(value1, value2);
    const lastRequest = JSON.parse(localStorage.getItem('lastRequest'))
    
    lastRequest.forEach(el => {
        const imgInStorage = `<img src="${el.thumbnailUrl}">`;

        renderOutput(imgInStorage)
    })

    requestResult.forEach(el => {
        const img = `<img src="${el.thumbnailUrl}">`;

        renderOutput(img);  
    });
});