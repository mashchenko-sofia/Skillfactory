let btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    const limitValue = parseInt(document.querySelector('.input').value);

    if (isNaN(limitValue) || limitValue < 1 || limitValue > 10) {
        document.querySelector('.output').innerHTML = 'Введите корректное число в диапазоне от 1 до 10';
    } else {
        const xhr = new XMLHttpRequest();
      
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?_limit=' + limitValue);
        xhr.onload = function() {
            const response = JSON.parse(xhr.response);
            const outputContainer = document.querySelector('.output');
            
            response.forEach(photo => {
                const cards = `
                <div class="card">
                    <img src="${photo.thumbnailUrl}" class="card-image"/>
                </div>
                `;

                outputContainer.innerHTML += cards;            
            });
            
        };

        xhr.onerror = function() {
            document.querySelector('.output').innerHTML = 'Ошибка запроса! Пожалуйста, повторите позже.';
            console.log('Ошибка запроса! Статус ответа: ', xhr.status);
        };

        xhr.send();
    }
});