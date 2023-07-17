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
 

//2.6

//1

/*const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 0) break;
	console.log(numbs[i]);
};

//2

const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));

//3

let value = [1, 3, 5, 10, 20];
value = value.join('');
console.log(value);

//4

let product = [];

for (let i = 0; i < 3; i++) {
	product[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		product[i].push(1);
	}
}

console.log(product);

//5

let day = [1, 1, 1];
day.push(2, 2, 2);
console.log(day);

//6

let temp = [9, 8, 7, 'a', 6, 5];
temp = temp.sort();
temp.pop(); 
console.log(temp);

//7

const numbs = [9, 8, 7, 6, 5];
let userNumbs = prompt('Угадай число');
if (userNumbs >= 5 && userNumbs <= 9) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//8

let greetings = 'abcdef';
let arrayGreetings = greetings.split('');
arrayGreetings = arrayGreetings.reverse();
console.log(arrayGreetings.join(''));

//9

let calk = [[1, 2, 3,],[4, 5, 6]];
let result = [].concat(...calk);
console.log(result);

//10

const arr = [2, 5, 6, 7, 9];
for (let index = 0; index < arr.length -1; index++) {
    console.log(arr[index] + arr[index+1]);
}

//11

const nums = (arr) => {
    const trans = arr.map((num) => num ** 2);
    return trans;
}

console.log(nums([10, 4, 6, 3, 8]));

//12 

function getLengthWords(array) {

    const numberArray = [];

    for (let item of array) {
        numberArray.push(item.length);
    }
     return numberArray;
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//13

/*function filterPositive(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            result.push(array[index]);
        }
    }
    return result;
  }

  console.log(filterPositive([-1, 0, 5, -10, 56])); 
  console.log(filterPositive([-25, 25, 0, -1000, -2]));*/


//2.7 
//1
/*
    let str = 'js';
    console.log(str.toUpperCase());

//2

    function searchStart(array) {
        const newArray = [];
        const str = 'ко';

        for (let item of array) {
        if (item.toLowerCase().startsWith(str.toLowerCase())) {
            newArray.push(item);
        }  
    }
    return newArray;
    }
    console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//3

    let num = 32.58884;
    console.log(Math.floor(num));
    console.log(Math.ceil(num));
    console.log(Math.round(num));

//4

    console.log(Math.max(52, 53, 49, 77, 21, 32));
    console.log(Math.min(52, 53, 49, 77, 21, 32));

//5

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }
    
    console.log(getRandom(10));

//6 

    function getRandomArrNumbers(num) {
        let randomMassivNumbers = [];
        let randNumbs = Math.floor(num / 2);
        for (i = 0; i < randNumbs; i++) {
            randomMassivNumbers.push(Math.ceil(Math.random(num) * num));
        }
         return randomMassivNumbers;
    }

    console.log(getRandomArrNumbers(8));

//7

    const getRandomInt = (x, y) => {
        return Math.round(Math.random() * (y - x)) + x;
    }

    console.log(getRandomInt(3, 12));

//8

    let currentDate = new Date();
    console.log(currentDate);

//9 

    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 73);
    console.log(currentDate);

//10

    function getReturnDate(Date) {
        const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        let myDate = new Date();
        
        return "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " " + "- это" + " " + days[myDate.getDay()] + " " + "Время: " +  myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
        
    }

    console.log(getReturnDate(Date));*/


/*const fibonacci = [1, 1, 2, 3, 5, 8];
const onlyBigFib = fibonacci.filter(item=> item > 3);
console.log(onlyBigFib);

const fibonacci = [1, 1, 2, 3, 5, 8];
const multipleByTwoFib = fibonacci.map(item=> (item * 2));
console.log(multipleByTwoFib);

const fibonacci = [1, 1, 2, 3, 5, 8];
const plusTenFib = fibonacci.map(item=> (item + 10));
console.log(plusTenFib);*/


///2.8
//1
/*const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort(function(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
 });

 console.log(people.sort());

 //2 
    function filter(array, ruleFunction) {
        let result = [];
        for (i = 0; i < array.length; i++) {
            if (ruleFunction(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    }
    
    function isPositive(number) {
     return number > 0;
    }
    function isMale(genus) {
     return genus.gender === 'male';
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

    //3 

    let currentDate = new Date();
    let timerId = setInterval(() => console.log(currentDate), 3000);
    setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

    //4 

    function delayForSecond(callback) {
    setTimeout(callback, 1000);
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   })

   //5

    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
                    if(cb) { 	cb(); }

        }, 1000)
    }

    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }

    delayForSecond(() => sayHi('Глеб'));*/

