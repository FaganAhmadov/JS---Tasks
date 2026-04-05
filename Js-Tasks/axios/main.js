const elements = document.getElementById('elements')
const form = document.querySelector('form')
const searchInput = document.getElementById('search')

getData('Baku')

async function getData(param) {
    try {
        let url = `https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${param}`
        const res = await axios(url)
        elements.innerHTML = ''
        res.data.hits.forEach(({ largeImageURL }) => {
            elements.innerHTML += `
            <div class="shadow-md border-2 border-red-700 rounded-md ">
                <img src="${largeImageURL}" alt="" class='h-[200px] w-full object-cover ' >
            </div>
            `
        });
    } catch (error) {
        console.log(error);
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    getData(searchInput.value)
})