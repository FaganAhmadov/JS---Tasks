// -----------------------------------------TASK_1
// let firstElem = document.querySelector('h1')
// console.log(firstElem);
// -----------------------------------------TASK_2
// let firstElem = document.querySelector('h1')
// firstElem.remove()
// -----------------------------------------TASK2.1
// let ulAdd = document.querySelector('ul')
// ulAdd.innerHTML += ' <li>«TITAN RTX» </li>'

// -----------------------------------------TASK3
// let chngColor = document.querySelectorAll('.primary')
// chngColor.forEach(item => {
//     item.style.color = 'blue'
// })
// -----------------------------------------TASK4
// let newList = document.querySelectorAll('.primary')
// newList.forEach((item) => {
//     console.log(item);
// })

let ALLLi = document.querySelectorAll('li')
ALLLi.forEach((item) => {
    item.classList.add('item')
    if (!item.classList.contains('primary')) {
        item.classList.add('secondary')
    }
    console.log(item);
})


