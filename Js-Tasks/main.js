// Task-6
// let date = prompt('dogum tarixinizi qeyd edin')
// let year = 2026
// console.log((year - date) * 365);

// task-7
// let num = 10
// let cal1 = num**5
// let cal2 = num % 3

// task-9
// let firstName = prompt('Adinizi daxil edin')
// let lastName =  prompt('soyadinizi daxil edin')
// console.log(`${firstName} ${lastName}  consola xos gelmisen)))) `);

// task-10
// let FullName = 'Fagan  Ahmadov'
// console.log(FullName.replaceAll(' ', '').length) ;

// task-11
// let fullName = 'Fagan Ahmadov'
// let part = fullName.split(' ')
// console.log(`name: ${part[0] [0]}  surname: ${part[1] [0]}`);

// task-12
// let FullName = prompt('Ad, Soyadinizi daxil edin')
// let part = FullName.split(' ')
// console.log(`${part[1]}  ${part[0]} `);

// task-13
// let name = prompt('adinizi daxil edin')
//  console.log(`"salam ['${name}']!"`);

// task-14
// let num_1 = prompt('1 ci ededi daxil edin')
// let num_2 = prompt('2 ci ededi daxil edin')
// num_1 = Number(num_1)
// num_2 = Number(num_2)
// console.log(num_1 * num_2);
// console.log(num_1 - num_2);
// console.log(num_1 + num_2);
// console.log(num_1 / num_2);

// task-15
// let num = 12345 * 98765
// console.log(num.toString()[5]);

// task-16
// console.log(`"" + 1 + 0 = ${"" + 1 + 0 }`);
// console.log(`"" - 1 + 0 = ${"" - 1 + 0 }`);
// console.log(`"true" - false = ${"true" - false }`);
// console.log(`6 / "3" = ${6 / "3" }`);
// console.log(`4 + 5 + "px" = ${4 + 5 + "px" }`);
// console.log(`"$" + 4 + 5 = ${"$" + 4 + 5 }`);
// console.log(`"4" - 2 = ${"4" - 2 }`);
// console.log(`NaN + "px" = ${NaN + "px" }`);
// console.log(`7 / 0 = ${7 / 0 }`);
// console.log(`"-9" + 5 = ${"-9" + 5 } `);
// console.log(`"-9" - 5 = ${"-9" - 5 } `);
// console.log(`null + 1 = ${null + 1 } `);
// console.log(`undefined + 1 = ${undefined + 1 } `);

// task-17
// let num = prompt('4 reqemli edev daxil edin')
// let total = Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3])
// let total = +num[0] + +num[1] + +num[2] + +num[3]
// console.log(total);

// task-18
// let fullName = prompt("ad soyad daxil edin", "Fagan Ahmadov");
// let name = fullName.split(" ");
// console.log(`Salam ${name[0]}`);

// task-19
// let num = prompt('111.11 tipli reqem daxil edin', 111.11)
// console.log(`${num.slice(0,3)} manat ${num.slice(4,6)} qepik`);

// taks-20
// let salary = prompt("emek haqqinizi daxil edin");
// salary = +salary; burda (+) isaresi promptdan gelen string reqemi  numbera cevirir
// let netSalary = salary - salary * 0.13;
// console.log(netSalary);

// task-21
// let FullName = prompt('Soyad, Ad , Ata adinizi daxil edin')
// let parts = FullName.split(' ')
// console.log(`${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`);

// task-23
// let value = 20;
// console.log(value === 10);
// console.log(value < 15);
// console.log(value <= 10);
// console.log(value !== 20);
// console.log(value == "10");

// task-24
// let age = prompt('Yasinizi daxil edin')
// if(age >= 18){
//  console.log('xos gelmisiniz');
// }else{
// console.log('giris qadagandir');
// }

// task-24 -----------ternary-------------
// let age = prompt('Yasinizi daxil edin')
// age >= 18 ? console.log('xos gelmisiniz') : console.log('giris qadagandir ');

// task 25
// let first = prompt("3 dene eded ver 2 reqemli", "11 12 13");

// let arr = first.split(" ");
// let a = Number(arr[0]);
// let b = Number(arr[1]);
// let c = Number(arr[2]);
// if (a === b || a === c || b === c) {
//   alert("Ədədlərdə təkrar var!");
// } else if (a > b && a < c) {
//   console.log(a);
// } else if (a < b && a > c) {
//   console.log(a);
// } else if ((b > a && b < c) || (b < a && b > c)) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// task-26
// let year = prompt('bir il daxil edin')
// year % 4 === 0 ? console.log('il uzun ildir-4 de qaliqsiz bolunur ') : console.log('«İl uzun il deyil»');

// task-27
// let id = prompt("enter product id:");
// switch (id) {
//   case "1":
//     alert("Available 10 pcs.");
//     break;
//   case "2":
//     alert("Available 256 pcs.");
//     break;
//   case "3":
//     alert("Available 53 pcs.");
//     break;
//   case "4":
//     alert("There are 3 available.");
//     break;
//   default:
//     alert("Out of stock");
// }

// task-28
// let gender = prompt("cinsinizi daxil edin");
// if (gender === "M") {
//   console.log("Male");
// } else if (gender === "F") {
//   console.log("Female");
// } else {
//   console.log("duzgun daxil edin");
// }

// task-29
// let month_num = prompt("ayin nomresini daxil edin ");
// let Months = [
//   "Yanvar",
//   "Fevral",
//   "Mart",
//   "Aprel",
//   "May",
//   "Iyun",
//   "Iyul",
//   "AvGust",
//   "Sentyabr",
//   "Oktyabr",
//   "Noyabr",
//   "Dekabr",
// ];
// if (month_num >= 1 && month_num <= 12) {
//   console.log(Months[month_num - 1]);
// } else {
//   console.log("duzgun deyer daxil et");
// }

// task-30
// let Alldate = prompt(" tarixi «2009.12.19» formatinda daxil et", "2009.12.19");
// let parts = Alldate.split(".");
// let [year, month, day] = Alldate.split(".");
// let Months = [
//   "Yanvar",
//   "Fevral",
//   "Mart",
//   "Aprel",
//   "May",
//   "Iyun",
//   "Iyul",
//   "AvGust",
//   "Sentyabr",
//   "Oktyabr",
//   "Noyabr",
//   "Dekabr",
// ];
// let result = `${parts[2]} ${Months[month - 1]} ${year} ci il`;
// if (month <= 12) {
//   console.log(result);
// } else {
//   console.log("duzgun deyer daxil et");
// }

// task-31------------32---------------------
// let a = 6,
//   b = 4,
//   c = 2;  7    4     2      2    8 = 11
// let x = ++a - b-- + c++ - --b + a++;
//         8       1     3    11      6
// let y = a-- + --c - ++b + x++ - --a;
// console.log(a, b, c, x, y);

// --------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------

//y = 11 x = 11
// task-33
// let a = 7,
//   b = 3,
//   c = 5;
//
//         7      4     5      5    4      5    5    5      5
// let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
//          6     6      3    6     6     8     3     4     7
// let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
//          8     5     3     6     10   5      8     3      6   10
// let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

// a-6
// b-4
// c-4
// x-8
// y-11
// z-10
// console.log(a, b, c, x, y, z);
//             6  4  4  8  11 10
//

// --------------------------------------------------------------------------------------------------------------------------------------------------PERFECT
// --------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------

// task-34
// let num = Number(prompt("reqem daxil edin"));
// if (isNaN(num)) {
//   console.log("duggun daxul ele");
// } else if (num === 0) {
//   console.log("num-0 di");
// } else if (num > 0) {
//   console.log("num musbet dir");
// } else {
//   console.log("num menfidir");
// }

// task-34 2 ci usul
// let num = Number(prompt("eded daxil edin"));
// if (!num) {
//   console.log("eded 0-dir");
// } else if (num > 0) {
//   console.log("eded musbetdir");
// } else {
//   console.log("eded menfidir");
// }

// task-35
// let num = prompt("3 eded daxil edin", "3 4 5");
// let arr = num.split(" ");
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// if (a === b || a === c || b === c) {
//   console.log("duzgun reqem daxil et");
// } else {
//   console.log(Math.max(a, b, c));
// }

// task-36
// let num = prompt("eded daxil edin");
// let result = num % 2 === 0 ? "Cüt" : "tək";
// console.log(result);

// task-37
// let a = Number(prompt("terefi dacil edin saheni ve perimetri tapin"));
// let area = a * a;
// let perimetr = 4 * a;
// console.log(`${area}-sahesi  ${perimetr}-perimetri`);

// task-38
// let result = 10;
// switch (true) {
//   case result <= 100 && result >= 90:
//     console.log("ela");
//     break;

//   case result >= 75 && result <= 80:
//     console.log("yaxsi");
//     break;
//   case result >= 60 && result <= 74:
//     console.log("orta");
//     break;
//   case result >= 0 && result <= 59:
//     console.log("zeif");
//     break;
//   default:
//     console.log("yanlis deyer");
// }
// task-38 if else
// let result = 10;
// if (result >= 90 && result <= 100) {
//   console.log("ela");
// } else if (result >= 75 && result <= 80) {
//   console.log("yaxsi");
// } else if (result >= 60 && result <= 74) {
//   console.log("orta");
// } else if (result >= 0 && result <= 59) {
//   console.log("zeif");
// } else {
//   console.log("yanlis deyer");
// }

// task-39
// let ranNum = Math.floor(Math.random() * 100);
// console.log(ranNum >= 0 && ranNum <= 50);

// task-40