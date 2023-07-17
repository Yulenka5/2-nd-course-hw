const gameSeasons = (monthNumber) => {
if (monthNumber > 0 && monthNumber <= 12) {
    switch (monthNumber) {
        case 1: case 2: case 12:
            alert('Зима');
            break;
        case 3: case 4: case 5:
            alert('Весна');
            break;    
        case 6: case 7: case 8:
            alert('Лето');
            break;
        case 9: case 10: case 11:
            alert('Осень');
            break;    
    };
}

else { 
    alert ('Неверное значение')}
};

function gameMemorizeWords() {
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    array = array.sort(() => Math.random() - 0.5);
    alert(array);
    let firstAnswer = prompt('Чему равнялся первый элемент массива?');
    let secondAnswer = prompt('Чему равнялся последний элемент массива?');
    const arrFirst = array.shift();
    const arrSecond = array.pop();
    
    if (arrFirst.toLowerCase() === firstAnswer.toLowerCase() && arrSecond.toLowerCase() === secondAnswer.toLowerCase()) {
        alert('Молодец! Ты справился с заданием!');
    } else if (arrFirst.toLowerCase() === firstAnswer.toLowerCase() || arrSecond.toLowerCase() === secondAnswer.toLowerCase()) {
        alert('Вы были близки к победе! Попробуй снова');
    } else {
        alert('Увы :(! Ты ответил не верно! Попробуй еще раз!');
    };
}


