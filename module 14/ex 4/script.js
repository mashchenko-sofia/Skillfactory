const MIN_IMAGE_SIZE = 100;
const MAX_IMAGE_SIZE = 300;


let btn = document.querySelector('.button');

btn.addEventListener('click', async () => {
    const widthImageValue = parseInt(document.querySelector('.input-1').value);
    const heightImageValue = parseInt(document.querySelector('.input-2').value);

    if (!validateInput(widthImageValue, MIN_IMAGE_SIZE, MAX_IMAGE_SIZE) || 
    !validateInput(heightImageValue, MIN_IMAGE_SIZE, MAX_IMAGE_SIZE)) {
        document.querySelector('.output').innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await makeRequest(widthImageValue, heightImageValue);

        document.querySelector('.output').innerHTML += `<img src="${requestResult.url}">`;  
    }
});

const validateInput = (value, minValue, maxValue) => {
    return value >= minValue && value <= maxValue;
}

const makeRequest = (value1, value2) => {
    return fetch(`https://dummyimage.com/${value1}x${value2}/`)
    .then((response) => { 
        return response;
    })
    .catch(() => { 
        document.querySelector('.output').innerHTML = 'Error';
        console.log('error');
    });
}