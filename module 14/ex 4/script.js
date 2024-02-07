const value1 = parseInt(document.querySelector('.input-1').value);
const value2 = parseInt(document.querySelector('.input-2').value);

const makeRequest = () => {
    return fetch(`https://dummyimage.com/${value1}x${value2}/`)
    .then((response) => { 
        console.log('response', response);
        return response.json;
    })
    .then((json) => { 
        console.log(json); 
        return json;
    })
    .catch(() => { 
        document.querySelector('.output').innerHTML = 'Error';
        console.log('error');
    });
}

let btn = document.querySelector('.button');

btn.addEventListener('click', async () => {
    if (!(100 <= value1 <= 300) || !(100 <= value2 <= 300)) {
        document.querySelector('.output').innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await makeRequest();

        const img = await requestResult.blob(); // браузер не видит blob и выдает 'blob is not a function'
        const imgURL = URL.createObjectURL(img); 

        document.querySelector('.output').innerHTML += `<img src="${imgURL}">`;  
    }
});