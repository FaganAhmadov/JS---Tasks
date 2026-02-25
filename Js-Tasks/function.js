// task 4,11,15,16

//-------------------------------------- task-1 function
// function myFunc(USName) {
//     console.log(USName, 'salam');
// }
// myFunc('Fagan')
// myFunc('Ali')
// myFunc('Aga')

// -----------------------------------------task-2
// function maxFunc(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     } else {
//         console.log('deyer yanlisdir');
//     }
// }
// maxFunc(10, 20, 30)
// maxFunc(3, 2, 1)
// maxFunc(10, 21, 11)

// --------------------------------------task-2 2ci usul
// function maxFunc(a, b, c) {
//     console.log(Math.max(a, b, c));
// }
// maxFunc(10, 20, 30)
// maxFunc(3, 2, 1)
// maxFunc(10, 21, 11)

// ------------------------------------task-3
// function myfunc(rubl, usd) {
//     let sum = rubl + (usd * 75)
//     console.log(`Bütün depozitlər üzrə məbləğ: ${sum} rubl.`);

// }

// myfunc(1200, 20)

//------------------------------------ task-4
// let value = '23'
// function oneDigits(num) {
//     switch (num) {
//         case '1':
//             return 'Bir'
//         case '2':
//             return 'İki'
//         case '3':
//             return 'Üç'
//         case '4':
//             return 'dord'
//         case '5':
//             return 'Bes'
//         case '6':
//             return 'alti'
//         case '7':
//             return 'yeddi'
//         case '8':
//             return 'sekkiz'
//         case '9':
//             return 'doqquz'

//     }
// }
// function tenDigits(num) {
//     switch (num) {
//         case '1':
//             return 'on'
//         case '2':
//             return 'İyirmi'
//         case '3':
//             return 'Otuz'
//         case '4':
//             return 'qirx'
//         case '5':
//             return 'elli'
//         case '6':
//             return 'altmis'
//         case '7':
//             return 'yetmis'
//         case '8':
//             return 'seksen'
//         case '9':
//             return 'doksan'
//     }
// }
// function numberToText() {
//     if (value.length === 1) {
//         return (oneDigits(value));
//     } else if (value.length === 2 && value[1] === '0') {
//         return (tenDigits(value[0]));
//     } else if (value.length === 2 && value[1] !== '0') {
//         return (tenDigits(value[0]) + ' ' + oneDigits(value[1]));
//     } else {
//         return ('yanlish deyer');
//     }
// }
// console.log(numberToText());


//----------------------------------------------- task-5
// function myfunc(a, b) {
//     console.log(Math.min(a, b));
// }
// myfunc(10, 20)
// myfunc(1, 2)
//----------------------------------------------- task- 5 - -2 ci usul
// function myFunc(a, b) {
//     if (a < b && b > a) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }
// myFunc(100, 2000)
// myFunc(1, 2)


// ----------------------------------------------- task-6
// function calc(a, b, c) {
//     switch (c) {
//         case '+':
//             return a + b
//         case '-':
//             return a - b
//         case '*':
//             return a * b
//         case '/':
//             return a / b
//         default:
//             console.log('yanlish deyer');
//             break;
//     }
// }
// console.log(calc(10, 20, '*'));
// console.log(calc(10, 20, '+'));
// console.log(calc(10, 20, '-'));
// console.log(calc(10, 20, '/'));

// ---------------------------------------------------task-7
// function isLucky(num) {
//     let sum1 = 0
//     let sum2 = 0
//     for (let i = 0; i < num.length / 2; i++) {
//         sum1 += +num[i]
//         sum2 += +num[num.length - 1 - i]
//     }
//     return sum1 === sum2
// }
// console.log(isLucky('123'));


// ---------------------------------------------------task-8
// function capitalizeWords(txt) {
//     let words = txt.split(' ')
//     let result = ' '
//     for (let i = 0; i < words.length; i++) {
//          result += words[i][0].toUpperCase() + words[i].slice(1) + ' '
//     }
//     console.log(result);
// }
// capitalizeWords('Hello my name is Harry');


// ---------------------------------------------------task-9

// function isEven(num) {
//     return num % 2 === 0
// }
// console.log(isEven('2'));

//  ---------------------------------------------------task- 10
// function isvalidnumber(num) {
//     let firstTxt = '+7'
//     return num[0] + num[1] === firstTxt && num.length === 11
// }
// console.log(isvalidnumber('+7111111111'))

//--------------------------------------------------- task-11
// let sys = '15263538479359486(){[]}-=;:!@#$%^&*()'
// function numCounter(txt) {
//     let cnt = 0
//     let result = ''
//     for (const letter of txt) {
//         if (!sys.includes(letter)) {
//             result += letter
//             cnt++
//         }
//     }
//     return `${result} herflerin sayi- ${cnt}`
// }
// console.log(numCounter('dljasbfkasfb1asdhavdkha84129898-=-=p[p'));





// --------------------------------------------------- task-12
// function isPrime(num) {
//     let result = 0
//     for (let i = num; i > 0; i--) {
//         if (num % i === 0) {
//             result++
//         }
//     }
//     return result === 2
// }
// console.log(isPrime(7))

// --------------------------------------------------- task-13
// function sumOfDigits(num) {
//     let result = 0
//     for (let i = 0; i < num.length; i++) {
//         result += +num[i]
//     }
//     console.log(result);
// }
// sumOfDigits('1234')

// ---------------------------------------------------- task-14
// function isPalindrome(txt) {
//     for (let i = 0; i < txt.length / 2; i++) {
//         if (txt[i] !== txt[txt.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome('level'));

// ---------------------------------------------------- task-15
// function longestWord(txt) {
//     let words = txt.split(' ')
//     let result = ' '
//     for (const word of words) {
//         if (word.length > result.length) {
//             result = word
//         }
//     }
//     return result;
// }
// console.log(longestWord("Js is a powerful language"));


// ---------------------------------------------------- task-16
// function daysBetweenDates(date1, date2) {
//     let d1 = new Date(date1);
//     let d2 = new Date(date2);
//     let diffTime = d2 - d1;
//     let diffDays = diffTime / (1000 * 60 * 60 * 24);
//     return diffDays;
// }
// console.log(daysBetweenDates("2025-04-10", "2025-04-20"));

// ---------------------------------------------------- task-17
// function reverseArray(txt) {
//     let arr = txt.split(', ')
//     let result = ''
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result += arr[i] + ', '
//     }
//     return result.slice(0, -2)
// }
// console.log(reverseArray("1, 2, 3, 4, 5"));

// result += arr[i] + ', '
//     result.push(arr[i]); chat

// return result.slice(0, -2)            //|\/|\\
// return result.join(", ");  chat      ///|\/|\\\



// ---------------------------------------------------- task-18
// function userInfo(name, age) {
//     return `${name} is ${age} years old`;
// }
// console.log(userInfo("Fagan", 20));

// ---------------------------------------------------- task-19
// function charCodes(txt) {
//     let result = ''
//     for (let i = 0; i < txt.length; i++) {
//         result += txt.charCodeAt(i) + ' '
//     }
//     return result.slice(0, -1)
// }
// console.log(charCodes('ABC'));

// ---------------------------------------------------- task-20
// function factorial(num) {
//     let result = 1
//     for (let i = num; i > 0; i--) {
//         result *= i;
//     }
//     return result
// }
// console.log(factorial(6));


//------------------------------------------ tg task
// let n = 12
// let cnt = 0
// while (n > 1) {
//     if (n % 2 !== 0) {
//         n += 1
//     } else {
//         n /= 2
//     }
//     cnt++
// }
// console.log(cnt);


