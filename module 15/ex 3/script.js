const chat = document.querySelector('.chat');

const webSocket = new WebSocket('wss://echo-ws-service.herokuapp.com');

webSocket.onopen = function() {console.log('Connected to server');};
webSocket.onmessage = function(event) { 
    const recievedMessage = event.data;
    createMessage(recievedMessage,'recieved-message');
};
webSocket.onclose = function() {console.log('Disconnected from server')};



const btnSent = document.getElementById('btn-sent');
btnSent.addEventListener('click', () => {
    const messageInput = document.getElementById('chatbox__input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        createMessage(messageText, 'send-message');
        webSocket.send(messageText);
        messageInput.value = '';
    } else {
        console.log('Сообщение не может быть пустым');
        alert('Сообщение не может быть пустым');
    }
    
});

const btnGeo = document.getElementById('btn-geo');
btnGeo.addEventListener('click', async () => {
    if ('geolocation' in navigator) {
       navigator.geolocation.getCurrentPosition((position) => {
            const {coords} = position;

            const geoUrl = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`

            const geoLink = `
                <a href="${geoUrl}">Гео-локация</a>
            `
            createMessage(geoLink, 'send-message');
        });
    } else {
        console.log('Геолокация не доступна');
        alert('Геолокация не доступна');
    }
});




function createMessage(messageText, messageType) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message');
    messageBox.classList.add(messageType);
    chat.appendChild(messageBox);
    messageBox.innerHTML = messageText;
};

