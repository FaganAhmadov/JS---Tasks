// 0 dan 100-ə kimi  butun cut ededler
// ve ya tek ededler + 1 yazanda  console.log(i + 1);bele tek ededleri verir
// tap task-1 elave
// let i = 0;
// while (i < 100) {
//   if (i % 2 === 0) {
//     console.log(i + 1);
//   }
//   i++;
// }
//  0dan 100-ə 2 reqemli tekededler
// let i = 0;

// while (i < 100) {
//   if (i % 2 && i >= 10) {
//     console.log(i);
//   }
//   i++;
// }

// sozu tersine cevirme for ile

// let str = "hello world";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// Palindrom olub olmadigini yoxlamaq
// let value = "salam";
// let result = "palindromdur";
// for (let i = 0; i < value.length / 2; i++) {
//   if (value[i] !== value[value.length - 1 - i]) {
//     result = "palindrom deyil";
//     break;
//   }
// }
// console.log(result);

// 2 ci usul ternary ile
// let value = "ana";
// let result =
//   value === value.split("").reverse().join("")
//     ? "palindromdur"
//     : "palindrom deyil";

// console.log(result);
// --------------------------------------------------------loop-task -----------------for------------------while-------------------

// task-1
// let num = prompt('2 reqemli eded daxil edin')
// let num = 12;
// while (num < 100) {
//   console.log(num);
//   num += 7;
// }

// task-2
// let N = 1;
// let i = 1;
// while (i <= N) {
//   console.log('Hi');
//   i++;
// }

// ---------------------------------------------------------wtask-4
// let i = 100;
// while (i < 1000) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// -----------------------------------------------------task-4 2ci usul
// let i = 100;
// while (i < 1000) {
//   console.log(i);
//   i += 10;
// }

// task-5????????????????????????????
// let sum =0
// let i = 0;
// while (i < 100) {
//   if (i % 2 && i >= 10) {
//     console.log(i);
//   }
//   i++;
// }

//------------------------------- --------------------Task-6
// sade ve murekkeeb eded
// let num = 1;
// let result = "murekkebdir";
// let i = num;
// let cnt = 0;
// while (i > 0) {
//   if (num % i === 0) {
//     cnt++;
//   }
//   i--;
// }

// if (cnt === 2) {
//   result = "sadedir";
// } else if (num === 1) {
//   console.log("eded-tam ededdir");
// } else {
//   console.log(result);
// }

// --------------------------------------------------TASK_6_TAM
// let num = 45;
// while (num > 1) {
//   let i = num;
//   let cnt = 0;
//   while (i > 0) {
//     if (num % i === 0) {
//       cnt++;
//     }
//     i--;
//   }

//   if (cnt === 2) {
//     console.log(num);
//   }
//   num--;
// }

// task-7
// let result = 1;
// for (let i = 1; i <= 3; i++) {
//   result = result * i;
// }
// console.log(result);
//============================================================================================= a *= b -----// a = a * b============================================================================
//============================================================================================= a += b -----// a = a + b============================================================================
//============================================================================================= a -= b -----// a = a - b============================================================================
//============================================================================================= a /= b -----// a = a / b============================================================================

// sozu tersine cevirme taks8
//let str = prompt('metin daxil edin');
//let i = 0;
//let lastIndex = str.length - 1;
//let result = "";
//
//while (i < str.length) {
//  result += str[lastIndex - i];
//  i++;
//}
// console.log(result);

//====================================for ile =========================================
// let str = prompt("metin daxil edin");
// let lastIndex = str.length - 1;
// let result = "";
// for (let i = 0; i < str.length; i++) {
// result += str[lastIndex - i];
// }
// console.log(result);

// 2 ci usul task - 8

// let str = prompt("metin daxil edin");
// let result = "";
// for (let i = str.length - 1; i >= 0; i--) {
// result += str[i];
// }
// console.log(result);

// task- 9???????????????????????????????????????
// let str = prompt("Metni daxil edin");
// let index = -1;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ".") {
//         index = i;
//         break;
//     }
// }
// console.log(index);

// task-10
// let str = prompt('metn daxil et')
// let result = 'reqem yoxdur'
// for (let i = 0; i < str.length; i++) {
//     if (+str[i] && str[i]) {
//         result = 'reqem-var'
//         break;
//     }
// }
// console.log(result);


// task--10 verdiyimiz strinde reqem olub olmamasi while
// let str = "holla1";
// let i = 0;
// let result = "reqem yoxdur";
// while (i < str.length) {
//   if (+str[i] && str[i] !== " ") {
//     result = "reqem var";
//     break;
//   }
//   i++;
// }
// console.log(result);


// task-11
// --------------------------------
// Palindrom olub olmadigini yoxlamaq
// let value = "salam";
// let result = "palindromdur";
// for (let i = 0; i < value.length / 2; i++) {
//     if (value[i] !== value[value.length - 1 - i]) {
//         result = "palindrom deyil";
//         break;
//     }
// }
// console.log(result);

// task-12
// for (let i = 100; i <= 550; i++) {
//     if (i % 5 === 2) {
//         console.log(i);
//     }
// }

// task-13 
// let str = prompt('en azi 2 reqmli eded daxil edin')
// let result = 0
// for (let i = 0; i < str.length; i++) {
//     result += Number(str[i]);
// }
// console.log(result);

// task-14
// let num = Number(prompt('eded daxil edin'))
// for (let i = num; i >= 1; i--) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }





// task-15
// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(i);
//     }
// }
