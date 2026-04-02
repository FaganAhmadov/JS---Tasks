
const elements = document.getElementById('elements')
const form = document.querySelector('form')
const searchInput = document.getElementById('search')
getData('Baku')


function getData(param) {
    let url = `https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${param}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            elements.innerHTML = ''
            data.hits.forEach(hit => {
                elements.innerHTML += `
            <div class="shadow-md border-2 border-red-700 rounded-md ">
                <img src="${hit.largeImageURL}" alt="" class='h-[200px] w-full object-cover ' >
            </div>
            `
            });
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getData(searchInput.value)
})