// let str = 'hello'
// let lastIndex = str.length - 1
// let result = ''
// for (let i = 0; i < str.length; i++) {
//     result += str[lastIndex - i]
// }
// console.log(result);

// let str = 'helloo'
// let result = 'reqem yoxdur'

// for (let i = 0; i < str.length; i++) {
//     if (Number(str[i]) && str[i] !== ' ') {
//         result = 'reqem var'
//         break;
//     }
// }
// console.log(result);

// ureimdeki ededi tapma
// let CpuNum = Math.floor(Math.random() * 100 + 1)
// let userNum = +prompt('eded daxil edin')
// let c = 1
// while (userNum !== CpuNum && c < 3) {
//     c++
//     if (userNum > CpuNum) {
//         userNum = +prompt('asagi')
//     } else {
//         userNum = +prompt('yuxari')
//     }
// }
// if (userNum === CpuNum) {
//     console.log(`${c} defeye duz tapdin`);
// } else {
//     console.log(`${c} defe sans verdik duz tapa bilmedin!!!`);
// }

// ==================================================js tasks

// ----------------------------------------------------------------task-1
// let UsNum = 10
// let i = 0
// while (UsNum < 100) {
//     UsNum += 7
//     i++
// }
// console.log(UsNum);

//-----------------------------------------------------------------task-2
// let text = ' «I know how to use cycles»'
// let i = 0
// let c = 5
// while (i < c) {
//     console.log(text);
//     i++
// }

// ------------------------------------------------------------------task - 3
// let i = 100
// let num = 1000
// while (i < num) {
//     console.log(i);
//     i += 10
// }

// -------------------------------------------------------------------task-4
// let i = 11
// let sum = 0
// while (i <= 99) {
//     sum += i
//     i += 2
// }
// console.log(sum);
//------------------------------------------------------------------- task-5
// let num = 500
// let i = 100
// let sum = 0
// while (i <= 999) {
//     if (i % num === 0) {
//         sum += i
//     }
//     i++
// }
// console.log(sum);

// task-6 ededin sade olub olmamasi
// let num = 11
// let result = 'Murekkebdir'
// let i = num
// let cnt = 0
// while (i > 0) {
//     if (num % i === 0) {
//         cnt++
//     }
//     i--
// }
// if (cnt === 2) {
//     result = 'sadedir'
// }
// console.log(result);
//------------------------------- -----------------------------------------Taks-6
// let num = 45
// while (num > 1) {
//     let i = num
//     let cnt = 0
//     while (i > 0) {
//         if (num % i === 0) {
//             cnt++
//         }
//         i--
//     }
//     if (cnt === 2) {
//         console.log(num);

//     }
//     num--
// }
// ---------------------------------------------------------------Task 07
// let result = 1
// for (let i = 1; i <= 10; i++) {
//     result *= i
// }
// console.log(result);

// --------------------------------------------------------------taks 08
// let str = 'hi world'
// let lastIndex = str.length - 1
// let result = ' '
// for (let i = lastIndex; i >= 0; i--) {
//     result += str[i]
// }
// console.log(result);

// --------------------------------------------------------------task -09x
// let txt = 'hi world'
// for (let i = 0; i < txt.length; i++) {
//     if (txt[i] === 'o') {
//         console.log(i);
//         break;
//     }

// }

// -----------------------------------------------------task-10
// let txt = "hello world";
// let result = "reqem yoxdur";
// for (let i = 0; i < txt.length; i++) {
//     if (txt[i] && Number(txt[i])) {
//         result = "reqem var";
//     }
// }
// console.log(result);


// -----------------------------------------------------task-11
// let txt = 'level'
// let result = 'palidromdur'
// for (let i = 0; i < txt.length / 2; i++) {
//     if (txt[i] !== txt[txt.length - 1 - i]) {
//         result = 'paldrom deyil'
//         break;
//     }
// }
// console.log(result);

// -----------------------------------------------------task-12
// for (let i = 100; i < 500; i++) {
//     if (i % 5 === 2) {
//         console.log(i);
//     }
// }
// -----------------------------------------------------task-13
// let UsNum = '16'
// let cem = 0
// for (let i = 0; i < UsNum.length; i++) {
//     cem += +UsNum[i]
// }
// console.log(cem);

// -----------------------------------------------------task-14
// let UsNum = 12
// for (let i = 0; i <= UsNum; i++) {
//     if (UsNum % i === 0) {
//         console.log(i);
//     }
// }

// -----------------------------------------------------task-15
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// -----------------------------------------------------task-16
// let txt = 'test'
// let result = ''
// for (let i = 0; i < txt.length; i++) {
//     if (i !== txt.length - 1) {
//         result += txt[i] + '-'
//     }else{
//         result += txt[i]
//     }
// }
// console.log(result);


// -----------------------------------------------------task-17
// let txt = 'hel  llo  '
// let c = 0
// for (let i = 0; i < txt.length; i++) {
//     if (txt[i] === ' ') {
//         c++
//     }
// }
// console.log(c);


//----------------------------------------------------- task-18);
// let num = '5 1'.split(' ')
// let num1 = +num[0]
// let num2 = +num[1]
// if (num1 > num2) {
//     num1 = +num[1]
//     num2 = +num[0]
// }
// for (let i = num1; i < num2; i++) {
//     console.log(i ** 2);

// }


// -------------------------------------------------Elave tasklar-TG
// ortancil ededi tapma
// let a = 11
// let b = 19
// let c = 12
// if (a > b && a < c || a > c && a < b) {
//     console.log(a);
// } else if (b > a && b < c || b < a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }
// task-loorrreeeemmmmm
// let txt = 'lorem'
// let result = ' '
// for (let i = 0; i < txt.length; i++) {
//     for (let k = 0; k <= i; k++) {
//         console.log(txt[i]);
//     }
// }
// task-tg
// let num = '333'
// let cem = 1
// for (let i = 0; i < num.length; i++) {
//     cem *= +num[i]
// }
// console.log(cem);

// ------------------task------------
// let UsNum = '999'
// let result = ''
// for (let i = 0; i < UsNum.length; i++) {
//     if (i !== UsNum.length - 1) {
//         result += UsNum[i] + ' '
//     } else {
//         result += UsNum[i]
//     }
// }
// console.log(result);

//-------------------- ededin kvadratlar cemi
// let usNum = '22'
// let result = 0
// for (let i = 0; i < usNum.length; i++) {
//     result += Number(usNum[i] ** 2)
// }
// console.log(result);