let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
minValue = minValue || -999;
maxValue = maxValue || 999;
minValue < -999 ? minValue = -999 : minValue;
maxValue > 999 ? maxValue = 1000 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2); // среднеарифметическое с округлением
let orderNumber = 1; // номер вопроса
let gameRun = true; // игра запущена

let orderNumberField = document.getElementById('orderNumberField');
let answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;// изменение текста номера вопроса

    function Choice() {
        const phraseRandom = Math.round( Math.random() * 2);
        switch (phraseRandom) {
            case 0:
                answertext = "Да это легко! Ты загадал";
                break;
            case 1:
                answertext = "Наверное, это число";
            break;
            case 2:
                answertext = "Возможно это число";
            break;
        }
        return answertext;
    }

    answerField.innerText = `${Choice()} ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;

    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    minValue = minValue || -999;
    maxValue = maxValue || 999;
    minValue < -999 ? minValue = -999 : minValue
    maxValue > 999 ? maxValue = 1000 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerNumber  = Math.floor((minValue + maxValue) / 2); // среднеарифметическое с округлением
    orderNumber = 1; // номер вопроса
    gameRun = true; // игра запущена

    orderNumberField = document.getElementById('orderNumberField');
    answerField.innerText = `${Choice()} ${answerNumber}?`;

    orderNumberField.innerText = orderNumber;// изменение текста номера вопроса
       
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue)// если минимальное совпадает с максимальным
        {
            const phraseRandom = Math.round( Math.random()); // генерируем случайное число от 0 до 1 в зависимости от этого будет выведена фраза 0 или 1 ну и условие соответственно для выбора 
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase; // изменение текста об ошибки
            gameRun = false; // игра завершается
        } else {
            minValue = answerNumber  + 1; // 50 + 1  // потому что  мы выбрали, что число больше, поэтому нижняя граница становится  answerNumber
            answerNumber  = Math.floor((minValue + maxValue) / 2); // (51 + 100) / 2 = 75 ... вычисляем заново загаданное число
            orderNumber++; // плюсуем порядок вопроса
            orderNumberField.innerText = orderNumber; // меняем номер вопроса в вопросе 
            answerField.innerText = `${Choice()} ${answerNumber}?`;
        }
    }
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue)
        {
            const phraseRandom = Math.round( Math.random()); 
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1; 
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++; 
            orderNumberField.innerText = orderNumber; 
            answerField.innerText = `${Choice()} ${answerNumber}?`;
        }
    }
})
// сценарий вслучае найденного числа 
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2);
        switch (phraseRandom) {
            case 0:
                answertext = "Ну ты и загадал";
                break;
            case 1:
                answertext = "Ура! Это оно!";
            break;
            case 2:
                answertext = "Я всегда угадываю";
            break;
        }
        answerField.innerText = `${answertext}\n\u{1F60E}`;
        gameRun = false;
    }
})

