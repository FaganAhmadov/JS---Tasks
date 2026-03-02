// ----------------------------------------------Task-1
// const user = {
//     name: 'Fagan',
//     gender: 'Male',
//     birthday: '04.03.2006'
// }
// console.log(user.birthday);
// ----------------------------------------------Task-2
// const user = {
//     name: 'Fagan',
//     gender: 'Male',
//     birthday: '04.03.2006'
// }
// user.age = '20'
// delete user.birthday
// console.log(user);

// ----------------------------------------------Task-3.1
// const user = {
//     name: 'Fagan',
//     gender: 'Male',
//     age: '20',
//     birthday: '04.03.2006',
// };
// user.setAge = function (newAge) {
//     this.age = newAge;
//     return this.age
// }
// user.setAge(25);
// console.log(user.age);
// ----------------------------------------------Task-3.2
// const user = {
//     name: 'Fagan',
//     gender: 'Male',
//     age: 20,
//     birthday: '04.03.2006',
//     retirementAge: 65,
//     getYearsBeforeRetirement() {
//         return this.retirementAge - this.age
//     }
// };
// console.log(user.getYearsBeforeRetirement());

// ----------------------------------------------Task-4
// const client = {
//     fullName: 'Fagan Ahmadov',
//     creditLimit: 300,
//     balans: -100,
//     precentOfMinPayment: 10,
//     getBalance() {
//         if (client.balans >= 0) {
//             return `Balans ${this.balans}`
//         } else {
//             return `Borcunuz ${Math.abs(this.balans)}`
//         }
//     },
//     getMinPaymant() {
//         if (this.balans >= 0) {
//             return 'sizin borcunuz yoxdur'
//         };
//         const msbtNum = Math.abs(this.balans);
//         const minPayment = msbtNum * this.precentOfMinPayment / 100;
//         return `Borcunuz ${Math.abs(this.balans)} Minimum ödənişiniz ${minPayment}`;
//     },
//     withdraw(amount) {
//         const availableMoney = this.balans + this.creditLimit;
//         if (amount > availableMoney) {
//             console.log('Vəsait kifayət deyil');
//             return;
//         }
//         this.balans -= amount
//         console.log(`Pul çixarildi. Yeni balans: ${Math.abs(this.balans)}`);
//         return
//     },
//     refill(amount) {
//         this.balans += amount
//         return `${amount} Man Yuklenildi  Yeni Balans ${this.balans}`
//     }
// }
// console.log(client.refill(1000));





