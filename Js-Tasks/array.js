// -----------------------------------------TAsK-1
// let names = ['Fagan', 'ALi', 'Firuz']
// names.splice(1, 1, 'Classified')
// console.log(names);

// -----------------------------------------TAsK-2
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// for (let i = 0; i < arr.length; i++) {
//     console.log('Episode',  i + 4 , arr[i]);
// }


// ------------------------------------------------------------------------------------------------------------TAsK-3
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 190],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [71, 74, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];
// -----------------------------------------TAsK-3.1
// let totalSalary = 0
// for (let i = 0; i < salary.length; i++) {
//     for (let a = 0; a < salary[i].length; a++) {
//         totalSalary += salary[i][a];
//     }
// }
// console.log(totalSalary);
// -----------------------------------------TAsK-3.2
// let totalSalary = []
// for (let i = 0; i < salary.length; i++) {
//     let total = 0
//     for (let a = 0; a < salary[i].length; a++) {
//         total += salary[i][a];
//     }
//     totalSalary.push(total)
// }
// console.log(totalSalary);
// -----------------------------------------TAsK-3.3
// function getAnnualSalary() {
//     let totalSalary = 0
//     for (let i = 0; i < salary.length; i++) {
//         for (let a = 0; a < salary[i].length; a++) {
//             totalSalary += salary[i][a];
//         }
//     }
//     return (totalSalary);
// }
// console.log(getAnnualSalary());

// -----------------------------------------TAsK-3.4
// function getMonthlySalary(num) {
//     let result = []
//     for (let i = 0; i < salary.length; i++) {
//         result.push(salary[i][num - 1])
//     }
//     return result
// }
// console.log(getMonthlySalary(12));

// -----------------------------------------TAsK-3.5
// function getQuarterSalary(num) {
//     let start = (num - 1) * 3;
//     let end = num * 3
//     let totalSalary = 0
//     for (let i = 0; i < salary.length; i++) {
//         for (let j = start; j < end; j++) {
//             totalSalary += salary[i][j];
//         }
//     }
//     return totalSalary
// }
// console.log(getQuarterSalary(4));
// -----------------------------------------TAsK-4
// let nums = '3,-1,5,9,2'.split(',')
// let min = nums[0]
// for (let i = 0; i < nums.length; i++) {
//     if (min > nums[i]) {
//         min = nums[i]
//     }
// }
// console.log(min);
// -----------------------------------------TAsK-5
// let srt = '11, 22, 33, 44, 55, 66'
// let arr = srt.split(", ")
// console.log(arr.join("; "))

// -----------------------------------------TAsK-6
// let names = ['Fagan', 'ALi', 'Firuz']
// names.shift()
// console.log(names);

// -----------------------------------------TAsK-7
// let nums = '3,-1,5,9,2'.split(',')
// let max = nums[0]
// for (let i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//         max = nums[i]
//     }
// }
// console.log(max);


// -----------------------------------------TAsK-8
// let nums = [5, 5, 5, 5, 5]
// let org = [...nums]
// for (let i = 0; i < nums.length; i++) {
//     nums[i] *= 2;
// }
// console.log(nums);
// console.log(org);
// -----------------------------------------TAsK-9
// let employees = [
//     ['Jaylee Macy', 'marketing'],
//     ['John Smith', 'management'],
//     ['Blossom Hartley', 'design'],
//     ['Austin Carpenter', 'marketing'],
//     ['Joan Knowles', 'development'],
//     ['Sally Nunez', 'management'],
//     ['Laurel Ward', 'development'],
//     ['Lark Simon', 'marketing'],
//     ['Jane Stone', 'management'],
//     ['Courtney Olson', 'development'],
// ];
// let development = []
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i][1] === 'development') {
//         development.push(employees[i])
//     }
// }
// console.log(development);

// -----------------------------------------TAsK-11

// let nums = [5, -2, 8, -1, 0, -7, 4];
// function negativeNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// negativeNums(nums);


// -----------------------------------------TAsK-12

// let nums = [5, 1, -2, 8, -1, 0, -7, 4];
// function PositiveNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// PositiveNums(nums)
// -----------------------------------------TAsK-12 2 ci usul
// let nums = [-4, 7, 0, 3, -1, 9]
// let musbetEdedleriCapEt = (arr) => {
//     arr.forEach((num) => {
//         if (num > 0) {
//             console.log(num);
//         }
//     });
// }
// musbetEdedleriCapEt(nums);



// -----------------------------------------TAsK-13
// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// names.forEach((name) => {
//     console.log('---');
//     console.log(name);
//     console.log('---');
// })
// -----------------------------------------TAsK-13.1
// names.forEach((name) => {
//     console.log(`<3<3<3<3 ${name} <3<3<3<3`);
// })
// -----------------------------------------TAsK-13.2
// names.forEach((name, id) => {
//     console.log(`${id + 1}-${name}`);
// })

// -----------------------------------------TAsK-14???????????????????

// -----------------------------------------TAsK-15
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// const newNums = numbers.map((num) => num > 0 ? num * 2 : -num)
// console.log(newNums);


// -----------------------------------------TAsK-16
// const words = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// let newArr = words.map((str) => {
//     return str.slice(0, 3);
// })
// console.log(newArr);

// -----------------------------------------TAsK-17
// const names = ["Michael", "Trevor", "aranklin", "alamar", "ajimmy",];
// let newArr = names.filter((name) => name.startsWith('a'))
// console.log(newArr);

// -----------------------------------------TAsK-18
// let prices = [100, 50, 200, 80];
// let addTax = prices.map((price) => price * 1.2)
// console.log(addTax);

// -----------------------------------------TAsK-19
// let nums = [3, 5, 6, 8, 9,];
// let countEvensAndOdds = (arr) => {
//     let tekNums = arr.filter((nums) => nums % 2 !== 0).length
//     let cutNums = arr.filter((nums) => nums % 2 === 0).length
//     return `massivde ${tekNums} tek ${cutNums} cut eded var`
// }
// console.log(countEvensAndOdds(nums));


// -----------------------------------------TAsK-20
// let numbers = [1, 6, 34, 5, 2, -4, 54, 76, 23, 65, 3, 50, 4, 45, 100, 2346, -52, 6545, 0, 45, 22];
// let sortArray = numbers.sort((a, b) => a - b)
// console.log(sortArray);





