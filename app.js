// Задание1

var Name = prompt('Введите ваше имя');
var currentYear = +prompt('Введите сегоднешний год');
var myYear = +prompt('Введите ваш год рождения');

console.log(Year(myYear, currentYear, Name));

function Year(a, b, c = '') {
    return c + ', Ваш возраст ' + (b - a) ;
}

// Задание2

let que = +prompt('Введите колличество примеров');

function Example(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function symbolExample() {
    return Math.floor(Math.random() * (5 - 1) + 1);
}

for(let i = 0; i < que; i++) {
    let exampleNum1 = Example(1, 10), exampleNum2 = Example(1, 10), exampleSymbol = symbolExample(), example = 0;
    if(exampleSymbol == 1) {
        example = exampleNum1 + exampleNum2;
        exampleSymbol = '+';
    }else if(exampleSymbol == 2){
        example = exampleNum1 - exampleNum2;
        exampleSymbol = '-';
    }else if(exampleSymbol == 3){
        example = exampleNum1 * exampleNum2;
        exampleSymbol = '*';
    }else if(exampleSymbol == 4){
        example = exampleNum1 / exampleNum2;
        exampleSymbol = '/';
    }
    let answer = +prompt(exampleNum1 + exampleSymbol + exampleNum2);
    console.log(example == answer ? 'Ваш ответ верный - ' + answer : 'Ваш ответ не верный -' + answer  + '!' + ' Правильный ответ - ' + example  + '!'); 
}