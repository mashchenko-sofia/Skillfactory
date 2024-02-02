

// // `https://jsonplaceholder.typicode.com/photos?_limit=${value}`


// 1

// function makeRequest(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = function() {
//         if (xhr.status != 200) {
//             console.log('Статус ответа: ', xhr.status);
//           } else {
//             console.log('Результат: ', JSON.parse(xhr.response));
//           }
//     };
//     xhr.onprogress = function(event) {
//         console.log(`Загружено ${event.loaded} из ${event.total}`)
//     };
//     xhr.onerror = function() {
//         console.log('Ошибка запроса! Статус ответа: ', xhr.status);
//     };
//     xhr.send();
// };
// 
// let btn = document.querySelector('.button');
// btn.addEventListener('click', () => {
//     if (1 <= limitValue <= 10) {
//         makeRequest(`https://jsonplaceholder.typicode.com/photos?_limit=${limitValue}`);
//     } else {
//         alert('Число вне диапазона от 1 до 10')
//     }
// });


// 2


// function handleClick() {   
//         const limitValue = document.querySelector('.input').value;
//         // let limitValue = document.getElementById('number').value;      
//         if(limitValue < 1 || limitValue > 10) {     
//             document.querySelector('.output').innerHTML = 'число вне диапазона от 1 до 10';   
//         } else {       
//             const xhr = new XMLHttpRequest();     
//             xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?_limit=' + limitValue);     
//             xhr.onload = function() {       
//                 document.querySelector('.output').innerHTML = xhr.responseText;    
//             }     
//             xhr.onprogress = function(event) {
//                 console.log(`Загружено ${event.loaded} из ${event.total}`)
//             };
//             xhr.onerror = function() {
//                 console.log('Ошибка запроса! Статус ответа: ', xhr.status);
//             };
//             xhr.send();   
//         } 
// } 


// 3

// function handleClick() {   
//     let number = document.getElementById('number').value;      
//     if(number < 1 || number > 10) {    
//          document.getElementById('output').innerHTML = 'число вне диапазона от 1 до 10';   
//     } else {       
//         let xhr = new XMLHttpRequest();     
//         xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?_limit=' + number);     
//         xhr.onload = function() {       
//             document.getElementById('output').innerHTML = xhr.responseText;     
//         }     
//         xhr.send();  
//     } 
// } 