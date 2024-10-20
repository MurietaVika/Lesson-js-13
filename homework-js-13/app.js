// Функция для переключения текста (раскрыть/свернуть)
function toggleText() {
    let moreText = document.getElementById('moreText');
    let buttonText = document.getElementById('toggleButton');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        buttonText.textContent = 'Показать меньше';
    } else {
        moreText.style.display = 'none';
        buttonText.textContent = 'Показать больше';
    }
}

document.getElementById('toggleButton').addEventListener('click', toggleText);

// Функция для изменения цвета фона на случайный
document.getElementById('changeColorButton').addEventListener('click', function() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Обработка нажатий клавиш вверх (открыть текст) и вниз (закрыть текст)
document.addEventListener('keydown', function(event) {
    let moreText = document.getElementById('moreText');
    let buttonText = document.getElementById('toggleButton');

    if (event.key === 'ArrowUp') {
        // Клавиша вверх: раскрываем текст
        moreText.style.display = 'inline';
        buttonText.textContent = 'Показать меньше';
    } 
     if (event.key === 'ArrowDown') {
        // Клавиша вниз: скрываем текст
        moreText.style.display = 'none';
        buttonText.textContent = 'Показать больше';
    }
});
// Обработчик события для ввода имени
document.getElementById('usernameInput').addEventListener('input', function() {
    let username = document.getElementById('usernameInput').value;
    let greetingMessage = document.getElementById('greetingMessage');

    if (username.trim() === "") {
        greetingMessage.textContent = "Привет!";
    } else {
        greetingMessage.textContent = "Привет, " + username + "!";
    }
});
