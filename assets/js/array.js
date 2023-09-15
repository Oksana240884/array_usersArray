
/*0 Створити числовий масив та проініціалізувати його (*випадковими числами).
1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
2 Вивести розмір масиву.
3 Зробити копію масиву.*/

/*const numbers = [5, 6, 10, 27];
console.log('numbers :>>', numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(40);
console.log(numbers);

numbers[4] = 70;
console.log(numbers);

numbers.push(90);
console.log(numbers);


numbers.splice(5, 6);
console.log(numbers);

console.log(numbers.length);


const masivCopy = Array.from(numbers);
const masivCopy1 = [...numbers];

console.log(masivCopy);
console.log(masivCopy1);

/*4 Вивести елементи з парними індексами.
5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
6 Вивести індекси нульових елементів (елемент дорівнює нулю).
7 Підрахувати кількість нульових елементів (елемент дорівнює нулю).*/

/*const numbers2 = [2, 5, 10, 17, 18, 20];
for (let i = 0; i < numbers2.length; i += 2) {
  
    console.log(numbers2[i]);
  
}

const numbers1 = [2, 6, 27, 58, -4];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 == 0) {
    console.log(numbers1[i]);
  }
}

const numbers3 = [3, 7, 8, 0, 9];
for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] === 0) {
    console.log(i);
  }
}


const numbers4 = [5, 7, 8, 0, 10];

let sum = 0;
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] === 0) {
    sum +=1;
    console.log(i);
  }
}

console.log(sum);
*/

//Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter

const numbers5 = [-1, 5, 0, 9, -10];
function isNumbers(item) {
  return item !== 0;
}

const arrNumber = numbers5.filter(isNumbers);

console.log(arrNumber);

//9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map

const elements = [99, 5, 0, 9, 30];
function division(item) {
  return item / 100;
}

const arrDivision = elements.map(division);
console.log(arrDivision);

//10 Вивести елементи масиву, зведені у куб. // forEach

function printPow(elem) {
  console.log(elem ** 3);
}

elements.forEach(printPow);


//11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex


function isNumberSqr(item) {
  return item * item === 100;
}

const foundIndex = elements.findIndex(isNumberSqr);
console.log(foundIndex);

if (foundIndex !== -1) {
  elements.splice(foundIndex, 1);
}

