const display = document.querySelector('.display')
const prevBtn = document.querySelector('.prevBtn')
let last
async function getData() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    const data = await res.json()
    last = display.innerHTML
    display.innerHTML = ''
    data.forEach(element => {
        display.innerHTML += `
                    <img width='200px' height='200px' src="${element.url}" alt="">
                `
    });
}
getData()
prevBtn.addEventListener('click', () => {
    if (last) {
        display.innerHTML = last
    }
})