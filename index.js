/*alert('Привет, мир!'); 

let a = 10;
a = 20;
alert(a);

const iphone = 2007;
alert(iphone);

const creatorJavaScript = "Brendan Eich";
alert(creatorJavaScript);

let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

let c = 2;
let result = 2**5;
alert(result);

let a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

const age = prompt("Сколько вам лет?");
alert(age);

const user = {
    name: "Maks",
    age: 25,
    isAdmin: true,
}
user.cityofresidence="Tomsk";
user.age=15;
delete user.cityofresidence;
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
console.log(user);

let user = prompt("Ваше имя?");
alert(`Привет, ${user}!`);*/

/*let password = 'лягушка';
let message = String (prompt ('Введите пароль'));
message === password ? alert ('Пароль введен верно') : alert ('Пароль введен неправильно');

let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
};

let d = 5;
let e = 9;
if (d > 100 || e >100) {
    console.log('Верно');
} else {
    console.log('Неверно');
};

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert (Number (a) + Number (b));

let monthNumber = Number (prompt ('Введите номер месяца'));
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
    alert ('Неверное значение')};*/

/*let i = 0;

while (i < 2) {
	console.log('Привет!');
	i++;
};


let w = 0;

while (w < 6) {
	console.log(w);
	w++;
};

let c = 7;

while (c <= 22) {
	console.log(c);
	c++;
};

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
}

for (const key in obj) {
        alert (`${key}: зарплата ${obj[key]} долларов`)
    }

let n = 1000;
let a = 0;
while (n > 50) {
    n /= 2;
    a++;
}
console.log (a);
console.log(n);


for (let day = 5; day < 32; day+=7) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}*/

/*const user = {
    name: 'Сергей',
	city: 'Екатеринбург',
	age: '29 лет',
    getInfo () {
        console.log(`Пользователь ${this.name}, возраст ${this.age}, проживает в городе ${this.city}`); 
    }
};

user.getInfo();

function getRectangleArea() {
    return this.width * this.height;
};

function getRectanglePerimeter() {
     return 2 * this.width + this.height;    
}

const square1 = {
    width: 35,
    height: 40,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
}

const square2 = {
    width: 4,
    height: 5,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
}

console.log(square1.getRectangleArea());
console.log(square1.getRectanglePerimeter());
console.log(square2.getRectangleArea());
console.log(square2.getRectanglePerimeter());*/

//1

/*function lesserNumber(a, b) {
    if (a <= b) {
        return a;
    }    else {
        return b;
    }
}

console.log(lesserNumber(8, 4));
console.log(lesserNumber(6, 6));

//2

function Number(n) {
    if (n % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(Number(7));

//3.1

function square(d) {
    let square = d ** 2;
    console.log(`${square}`);
}
square(5);

//3.2

function square(c) {
    return c ** 2;
}

console. log(square(6));

//4

function age() {
    let age = prompt('Сколько вам лет?');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0, age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

age();

//5

const test = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return x * y;
    }
}

console.log(test(5, 6));

//6

const chekNum = (n) => {
    n = prompt('Введите число');
    if (!isNaN(n)) {
        return `${n} в кубе равняется ${n ** 3}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}
 console.log(chekNum());

//7

function getPerimeter() {
    return 2 * 3.14 * this.radius; 
}

function getArea() {
    return 3.14 * this.radius **2;
}

const circle1 = {
    radius: 30,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 14,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());*/
 







    

    


























